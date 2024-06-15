const http = require("http");

const host = "localhost";
const port = 8000;

// we will change the implementation of the requestListener function
const requestListener = function (request, response) {
  response.setHeader("Content-Type", "text/html");
  response.writeHead(200);
  response.end(
    "<html><body><h1>Welcome To Motasem's Server</h1></body></html>"
  );
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`server is running at http://${host}:${port}`);
});
