const fs = require("fs");
const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    console.log(req.url);
    if (req.url == "/") {
        res.statusCode = 200;
        //serving our html website (index.html) with nodejs
        const data = fs.readFileSync("index.html");
        res.end(data.toString());
    } else if (req.url == "/ss") {
        res.statusCode = 200;
        res.end("<h1> This is Saurabh</h1> <p> Hey I am learning nodejs!</p>");
    } else if (req.url == "/about") {
        res.statusCode = 200;
        res.end("<h1> About Saurabh</h1> <p> Hey this is about Saurabbh!</p>");
    } else {
        // res.harry(); //bcz of this code our website will crash
        res.statusCode = 404;
        res.end(
            "<h1> Not Found</h1> <p> Hey this page was not found on this server</p>"
        );
    }
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});