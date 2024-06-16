# Web-Server
Series of Node.js HTTP servers. From returning a basic textual response to various data types from my servers: JSON, CSV, and HTML. Also, file loading with HTTP responses, combined to return an HTML page from the server to the user, and an API that uses information about the user’s request can be created to determine what data should be sent in its response.

## Usage
- pick one of the .js files inside the first-servers folder
- run one of the files .js using node json.js, for example
```bash
node json.js
```
- test the server with another terminal
```bash
curl http://localhost:8000
```
- for route.js => curl http://localhost:8000/books or http://localhost:8000/authors
you could test the servers on the terminal and search engine
