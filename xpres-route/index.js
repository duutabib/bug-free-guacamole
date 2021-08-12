// create web server with express framework


const express = require('express'); // import express module
const http = require('http'); // import http module 
const morgan = require('morgan');
const bodyParser = require('body-parser');


const dishRouter = require('./routes/dishRouter');
const hostname = 'localhost' ;
const port = 3000;

const app = express(); // declare express as framework for app

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.use('/dishes', dishRouter);

app.use((req, res, next) => {
	console.log(req.headers);
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	
	res.end('<html><body><h1>Express makes node blazingly fast!</h1></body></html>'); 	
});


const server = http.createServer(app);

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}`);

});
