const http = require("http");

const host = "localhost";
const port = 8000;

//this function to handel http requests and return http response
const requestListener = function (request, response) {
  //setting the status code of the HTTP response to be 200 (OK)
  response.writeHead(200);
  //write the HTTP response back to the client who requested it
  //this end function return any data should be returned to the client
  response.end("Welcome To Motasem Server!");
};

//create our server using http module
// we used the createServer function to create our server object
//this server object will listen to the http requests and pass them to the requestListener function we provided it.
const server = http.createServer(requestListener);
//now we bind our server to its address (host and port)
server.listen(port, host, () => {
  console.log(`server is running at http://${host}:${port}`);
});
//the call back function will fire once the server starts to listen
