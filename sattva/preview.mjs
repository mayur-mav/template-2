import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const projectDir = fileURLToPath(new URL(".", import.meta.url));
const distDir = resolve(projectDir, "dist");
const port = Number(process.env.PORT || 5517);
const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

if (!existsSync(join(distDir, "index.html"))) {
  console.error("Build sattva first: node build.mjs /");
  process.exit(1);
}

createServer((request, response) => {
  let pathname;
  try {
    pathname = decodeURIComponent(
      new URL(request.url, "http://localhost").pathname,
    );
  } catch {
    response.writeHead(400).end("Bad request");
    return;
  }

  const relativePath = normalize(pathname).replace(/^([/\\])+/, "");
  const cleanPath = relativePath.replace(/[/\\]+$/, "");
  let requestedFile = resolve(
    distDir,
    cleanPath === "privacy-policy"
      ? "privacy-policy.html"
      : relativePath || "index.html",
  );

  if (
    requestedFile !== distDir &&
    !requestedFile.startsWith(`${distDir}${sep}`)
  ) {
    response.writeHead(403).end("Forbidden");
    return;
  }
  if (existsSync(requestedFile) && statSync(requestedFile).isDirectory()) {
    requestedFile = join(requestedFile, "index.html");
  }
  if (!existsSync(requestedFile) || !statSync(requestedFile).isFile()) {
    response.writeHead(404).end("Not found");
    return;
  }

  response.writeHead(200, {
    "Content-Type":
      contentTypes[extname(requestedFile)] || "application/octet-stream",
  });
  createReadStream(requestedFile).pipe(response);
}).listen(port, () => {
  console.log(`sattva preview running at http://localhost:${port}/`);
});
