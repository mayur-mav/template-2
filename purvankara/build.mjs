import { cpSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
async function loadBuilderSeo(dataFile) {
  const source = readFileSync(dataFile, "utf8");
  const moduleUrl = `data:text/javascript;base64,${Buffer.from(source).toString("base64")}`;
  const dataModule = await import(moduleUrl);
  const builder = dataModule.builderConfig || {};
  const properties = Array.isArray(builder.properties)
    ? builder.properties
    : Object.values(dataModule).find(
        (value) => Array.isArray(value) && value.some((item) => item?.id),
      ) || [];

  return { builder, properties };
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

function decodeHtml(value = "") {
  return String(value)
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function cleanDescription(value, fallback) {
  const normalized = String(value || fallback || "")
    .replace(/\s+/g, " ")
    .trim();
  if (normalized.length <= 155) return normalized;
  const shortened = normalized.slice(0, 152);
  const lastSpace = shortened.lastIndexOf(" ");
  return `${shortened.slice(0, lastSpace > 110 ? lastSpace : 152).replace(/[,. ]+$/, "")}...`;
}

function updateMeta(html, name, content) {
  const escaped = escapeHtml(content);
  const pattern = new RegExp(`(<meta\\s+name="${name}"[^>]*content=")[^"]*("[^>]*>)`, "i");
  if (pattern.test(html)) return html.replace(pattern, `$1${escaped}$2`);
  return html.replace("</head>", `    <meta name="${name}" content="${escaped}">\n</head>`);
}

function replaceElement(html, id, content) {
  const pattern = new RegExp(`(<([a-z][a-z0-9]*)\\b[^>]*\\bid="${id}"[^>]*>)[\\s\\S]*?(<\\/\\2>)`, "i");
  return html.replace(pattern, `$1${content}$3`);
}

function applyBuilderSeo(html, { builder, properties }, route, basePath, siteOrigin) {
  const builderName = builder.name || "Property Developer";
  const property = properties.find((item) => String(item.id) === String(route));
  const existingDescription = decodeHtml(html.match(/<meta\s+name="description"[^>]*content="([^"]*)"/i)?.[1] || "");
  const existingTitle = decodeHtml(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] || builderName);
  let title = existingTitle;
  let description = existingDescription;

  if (property) {
    title = `${property.title || property.name} | ${builderName} Bangalore`;
    description = cleanDescription(
      property.summary || property.description,
      `Explore ${property.title || property.name} by ${builderName} in Bangalore. View location, prices, floor plans, amenities, and book a site visit.`,
    );
    html = replaceElement(html, "detail-title", escapeHtml(property.title || property.name));
    html = replaceElement(html, "detail-location", escapeHtml(property.location || "Bengaluru"));
    html = replaceElement(html, "detail-description", escapeHtml(property.summary || property.description || description));
  }

  if (!property) {
    const builderHeading = `${builderName} Projects in Bangalore`;
    html = html.replace(/(<h1\b[^>]*>)[\s\S]*?(<\/h1>)/i, `$1${escapeHtml(builderHeading)}$2`);
    const heroDescription = escapeHtml(description);
    html = html.replace(/(<h1\b[^>]*>[\s\S]*?<\/h1>[\s\S]*?<p\b[^>]*>)[\s\S]*?(<\/p>)/i, `$1${heroDescription}$2`);
  }

  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`);
  html = updateMeta(html, "description", description);

  const ogTitle = `<meta property="og:title" content="${escapeHtml(title)}">`;
  const ogDescription = `<meta property="og:description" content="${escapeHtml(description)}">`;
  if (/property="og:title"/.test(html)) {
    html = html.replace(/<meta\s+property="og:title"[^>]*>/i, ogTitle);
  } else {
    html = html.replace("</head>", `    ${ogTitle}\n</head>`);
  }
  if (/property="og:description"/.test(html)) {
    html = html.replace(/<meta\s+property="og:description"[^>]*>/i, ogDescription);
  } else {
    html = html.replace("</head>", `    ${ogDescription}\n</head>`);
  }

  const canonicalPattern = /\s*<link\s+rel="canonical"\s+href="https:\/\/yourdomain\.com\/[^\"]+"\s*\/?>/i;
  html = html.replace(canonicalPattern, "");
  if (siteOrigin) {
    const canonicalRoute = property ? `${encodeURIComponent(route)}/` : "";
    const canonical = `${siteOrigin}${basePath}${canonicalRoute}`;
    html = html.replace(/<link\s+rel="canonical"[^>]*>/i, "");
    html = html.replace("</head>", `    <link rel="canonical" href="${escapeHtml(canonical)}">\n</head>`);
    html = html.replace(/<meta\s+property="og:url"[^>]*>/i, "");
    html = html.replace("</head>", `    <meta property="og:url" content="${escapeHtml(canonical)}">\n</head>`);
  }

  return html;
}

const projectDir = dirname(fileURLToPath(import.meta.url));
const outputDir = join(projectDir, "dist");
const requestedBasePath = process.argv[2] || "/";
const cleanBasePath = requestedBasePath.replace(/^\/+|\/+$/g, "");
const basePath = `/${cleanBasePath}${cleanBasePath ? "/" : ""}`;
const sourceHtml = readFileSync(join(projectDir, "index.html"), "utf8");
const privacyHtml = readFileSync(
  join(projectDir, "privacy-policy.html"),
  "utf8",
);
const builtPrivacy = privacyHtml.replace(
  "<head>",
  '<head>\n    <base href="' + basePath + '">',
);
const builderData = readFileSync(
  join(projectDir, "data", "purvankara.js"),
  "utf8",
);
const idLines = [
  ...builderData.matchAll(/^( *)"?id"?\s*:\s*(?:"([^"]+)"|(\d+))\s*,/gm),
];
const propertyIndent = idLines.length
  ? Math.min(...idLines.map((match) => match[1].length))
  : -1;
const propertyIds = idLines
  .filter((match) => match[1].length === propertyIndent)
  .map((match) => match[2] || match[3]);
const sectionRoutes = ["residences", "about", "faq", "contact"];
const allRoutes = [...sectionRoutes, ...propertyIds];
const siteOrigin = process.env.SITE_ORIGIN?.replace(/\/$/, "");
const seoData = await loadBuilderSeo(join(projectDir, "data", "purvankara.js"));
const apacheRules = [
  "Options -MultiViews",
  "RewriteEngine On",
  "RewriteRule ^privacy-policy/?$ privacy-policy.html [L]",
  ...allRoutes.map(
    (route) => `RewriteRule ^${route}/?$ ${route}/index.html [L]`,
  ),
].join("\n");

function createRoutedHtml(route = "") {
  let html = sourceHtml.replace(
    "<head>",
    `<head>\n    <base href="${basePath}">`,
  );
  if (propertyIds.includes(route)) {
    html = html.replace(
      /<body(?=[\s>])/,
      '<body data-property-route-loading="true"',
    );
    html = html.replace(
      "</head>",
      '<style>body[data-property-route-loading="true"] #catalog-page,body[data-property-route-loading="true"] #site-footer{display:none!important}body[data-property-route-loading="true"] #details-page{display:block!important}</style>\n</head>',
    );
  }
  html = html.replace(
    /<link rel="canonical" href="https:\/\/yourdomain\.com\/[^\"]+">\s*/i,
    "",
  );
  if (siteOrigin) {
    const canonicalUrl = `${siteOrigin}${basePath}${route ? `${route}/` : ""}`;
    html = html.replace(
      "</head>",
      `    <link rel="canonical" href="${canonicalUrl}">\n</head>`,
    );
  }
  return applyBuilderSeo(html, seoData, route, basePath, siteOrigin);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "index.html"), createRoutedHtml());
mkdirSync(join(outputDir, "css"), { recursive: true });
for (const stylesheet of ["styles.css", "tailwind.css", "privacy-policy.css"]) {
  cpSync(
    join(projectDir, "css", stylesheet),
    join(outputDir, "css", stylesheet),
  );
}
for (const directory of ["js", "data"]) {
  cpSync(join(projectDir, directory), join(outputDir, directory), {
    recursive: true,
  });
}
writeFileSync(join(outputDir, "privacy-policy.html"), builtPrivacy);
writeFileSync(join(outputDir, ".htaccess"), `${apacheRules}\n`);

for (const route of allRoutes) {
  const routeDir = join(outputDir, route);
  mkdirSync(routeDir, { recursive: true });
  writeFileSync(join(routeDir, "index.html"), createRoutedHtml(route));
}

if (siteOrigin) {
  const urls = ["", ...propertyIds].map((route) => {
    const path = route ? `${encodeURIComponent(route)}/` : "";
    return `  <url><loc>${siteOrigin}${basePath}${path}</loc></url>`;
  });
  writeFileSync(join(outputDir, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`);
}
console.log(
  `Built purvankara home page, ${sectionRoutes.length} section routes, and ${propertyIds.length} property routes in ${resolve(outputDir)} (base: ${basePath}).`,
);
