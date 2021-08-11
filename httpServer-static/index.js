// creating  an http server to serve static html content	

const http = require('http');  //  import http module 
const fs = require('fs');	// import filesys  module
const path = require('path');  // import path, to serve static content.

const hostname = 'localhost';


const port = 3000;

// setup server
const server = http.Server((req, res) => {
	console.log("Reguest " + req.url + " by method " + req.method);
	
	if ( req.method == 'GET' ) {
	
	var fileUrl;
	if ( req.url == '/' ) 
		fileUrl = '/index.html';
	else fileUrl = req.url;
	
	var filePath = path.resolve('./public' + fileUrl);
	const fileExt = path.extname(filePath);
	if ( fileExt == '.html') {  // check file ext 
		fs.exists(filePath, (exists) => {
			if (!exists) {
				res.statusCode = 404;
				res.setHeader('Content-Type', 'text/html');
				res.end('<html><body><h1>Error 404: ' +  fileUrl + ' not found</h1></body></html>');
				
				return;		
			}
			res.statusCode = 200;
			res.setHeader('Content-Type', 'text/html');
			fs.createReadStream(filePath).pipe(res);
		});
	}
	else {
		res.statusCode = 404;
	        res.setHeader('Content-Type', 'text/html');
		res.end('<html><body><h1>Error 404: ' +  fileUrl + ' not found</h1></body></html>');
		
		return;
	}
	}

});

// start server
server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}`) // backquotes for variables 
});


