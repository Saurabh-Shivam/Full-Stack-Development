const { Console } = require("console");
const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.statusCode = 200;
  // SOME STATUSCODE TO REMEMBER
  // statuscode = 200 is for ok
  // statuscode = 500 is for server error
  // statuscode = 404 is for not found
  res.setHeader("Content-Type", "text/html"); // takes the thing/content which we are going to receive
  res.end("<h1> This is Saurabh</h1> <p> Hey I am learning nodejs!</p>");
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
