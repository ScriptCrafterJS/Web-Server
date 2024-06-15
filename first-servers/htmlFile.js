//* now we will improve the server to load the html page once the server start and save its content
const http = require("http");
//since we will read the html file using fs we need to load the fs module
const fs = require("fs").promises;

const host = "localhost";
const port = 8000;

//store the content of the file in a variable
let indexFile;

// we will change the implementation of the requestListener function
const requestListener = function (request, response) {
  response.setHeader("Content-Type", "text/html");
  response.writeHead(200);
  response.end(indexFile);
};

const server = http.createServer(requestListener);
//we shifted the work of reading the files content for the first time at the startup of the server so after that the server could handle the requests without reading the html file again

//the __direname will get the full path of the current directory
fs.readFile(__dirname + "/index.html")
  .then((data) => {
    indexFile = data;
    server.listen(port, host, () => {
      console.log(`server is running at http://${host}:${port}`);
    });
  })
  .catch((error) => {
    console.error(`Could not read index.html file: ${error}`);
    process.exit(1);
  });
