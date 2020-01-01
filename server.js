const next = require("next");
const express = require("express");

const dev = process.env.NODE_ENV
  ? process.env.NODE_ENV.trim() !== "production"
  : true;
const PORT = process.env.PORT || 8000;

const server = express();
const app = next({ dev });
const handler = app.getRequestHandler();

app.prepare().then(_ => {
  server.get("*", (req, res) => handler(req, res));
  server.listen(PORT, err => console.log(`> http://localhost:${PORT}`));
});
