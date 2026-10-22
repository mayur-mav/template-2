import { cpSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

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
  return html;
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

console.log(
  `Built purvankara home page, ${sectionRoutes.length} section routes, and ${propertyIds.length} property routes in ${resolve(outputDir)} (base: ${basePath}).`,
);
