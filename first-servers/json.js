const http = require("http");

const host = "localhost";
const port = 8000;

// we will change the implementation of the requestListener function
const requestListener = function (request, response) {
  //this method adds an http header to the response
  //here we set the type of data that will be returned (media type)
  response.setHeader("Content-Type", "application/json");
  response.writeHead(200);
  response.end(`{"message": "Welcome To Motasem Server!"}`);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`server is running at http://${host}:${port}`);
});
