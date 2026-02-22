const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 3000;
const BASE = '/my-profile';
const ROOT = path.join(process.cwd(), 'out');

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ico': 'image/x-icon',
};

function sendFile(res, filePath) {
  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.statusCode = 404;
      res.end('Not found');
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.setHeader('Content-Type', mime[ext] || 'application/octet-stream');
    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
}

const server = http.createServer((req, res) => {
  const parsed = url.parse(req.url);
  let reqPath = decodeURIComponent(parsed.pathname || '/');

  if (!reqPath.startsWith(BASE)) {
    res.statusCode = 404;
    res.end('Not found');
    return;
  }

  // Map /my-profile/ -> out/
  let rel = reqPath.slice(BASE.length);
  if (!rel || rel === '/') rel = '/index.html';

  const filePath = path.join(ROOT, rel);

  // If path is a directory, serve index.html inside it
  fs.stat(filePath, (err, stats) => {
    if (!err && stats.isDirectory()) {
      sendFile(res, path.join(filePath, 'index.html'));
      return;
    }

    // If file exists, serve it
    sendFile(res, filePath);
  });
});

server.listen(PORT, () => {
  console.log(`Serving out/ at http://localhost:${PORT}${BASE}`);
});
