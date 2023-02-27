const http = require("http");
const { readFileSync } = require("fs");

const kMain = readFileSync("./kairow/index.html");
const kCSS = readFileSync("./kairow/assets/index.3fce1f81.css");
const kJS = readFileSync("./kairow/assets/index.01332571.js");
const kJPG = readFileSync("./kairow/assets/kairow.8eeb5446.jpg");
const kMP3 = readFileSync("./kairow/assets/myUniverse.1362bf1f.mp3");

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    res.write("Ya rodilsya! ");
  } else if (req.url === "/about") {
    res.write("About page");
  } else if (req.url === "/kairow") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(kMain);
  } else if (req.url === "/assets/index.3fce1f81.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(kCSS);
  } else if (req.url === "/assets/index.01332571.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(kJS);
  } else if (req.url === "/assets/kairow.8eeb5446.jpg") {
    res.writeHead(200, { "content-type": "image/jpg" });
    res.write(kJPG);
  } else if (req.url === "/assets/myUniverse.1362bf1f.mp3") {
    res.writeHead(200, { "content-type": "audio/mp3" });
    res.write(kMP3);
  }

  res.end();
});

server.listen(5000);
