const http = require("http");
//since we will read the html file using fs we need to load the fs module
const fs = require("fs").promises;

const host = "localhost";
const port = 8000;

// we will change the implementation of the requestListener function
const requestListener = function (request, response) {
  //the __direname will get the full path of the current directory
  fs.readFile(__dirname + "/index.html")
    .then((data) => {
      response.setHeader("Content-Type", "text/html");
      response.writeHead(200);
      response.end(data);
    })
    .catch((error) => {
      //internal error encountered and return the error message to the user
      response.writeHead(500);
      response.end(error.message);
      return;
    });
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`server is running at http://${host}:${port}`);
});
