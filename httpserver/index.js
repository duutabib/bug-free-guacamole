 // creating an http server using node
	
const http = require('http');  //  import http module 

const hostname = 'localhost';


const port = 3000;

// setup server
const server = http.Server((req, res) => {
	console.log(req.headers);
	
	res.statusCode = 200;  // all is OK!
	res.setHeader('Content-Type', 'text/xml');
	res.end('<html><body><h1>Hello, World!</h1></body></html>');
})

// start server
server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}`) // backquotes for variables 
});
