const http = require("http");

const host = "localhost";
const port = 8000;

//we will store the data in two different JSONs
const books = JSON.stringify([
  { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
]);

const authors = JSON.stringify([
  { name: "Paulo Coelho", countryOfBirth: "Brazil", yearOfBirth: 1947 },
  { name: "J.D. Salinger", countryOfBirth: "United States", yearOfBirth: 1919 },
  {
    name: "F. Scott Fitzgerald",
    countryOfBirth: "United Kingdom",
    yearOfBirth: 1896,
  },
]);

// we will change the implementation of the requestListener function
//we will edit the requestListener function to return the data to its appropriate route
const requestListener = function (request, response) {
  response.setHeader("Content-Type", "application/json");
  switch (request.url) {
    case "/books":
      response.writeHead(200);
      response.end(books);
      break;
    case "/authors":
      response.writeHead(200);
      response.end(authors);
      break;
    default:
      response.writeHead(404);
      response.end(JSON.stringify({ error: "Resource not found" }));
  }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`server is running at http://${host}:${port}`);
});
