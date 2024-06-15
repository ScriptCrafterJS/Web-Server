const http = require("http");

const host = "localhost";
const port = 8000;

// we will change the implementation of the requestListener function
const requestListener = function (request, response) {
  response.setHeader("Content-Type", "text/csv");
  //this tells the browser HOW to display the data
  response.setHeader("Content-Disposition", "attachment; filename=users.csv");

  response.writeHead(200);

  //three users to be returned
  response.end(`id,name,age\n1,motasem,21\n2,ahmed,22\n3,ali,23\n`);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`server is running at http://${host}:${port}`);
});
