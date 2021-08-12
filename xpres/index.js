// create web server with express framework


const express = require('express'); // import express module
const http = require('http'); // import http module 
const morgan = require('morgan');
const bodyParser = require('body-parser');


const hostname = 'localhost' ;
const port = 3000;

const app = express(); // declare express as framework for app

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.all('/dishes', (req, res, next) =>  {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	next();
});

app.get('/dishes', (req, res, next) => {
	res.end('sending dishes data through +++========');
});

app.post('/dishes', (req, res, next) => {
	res.end('seeing the dishes come through ' + req.body.name + ' with details: ' + req.body.description);
});

app.put('/dishes', (req, res, next) => {
	res.statusCode = 403;
	res.end('no space for more dishes');

});

app.delete('/dishes', (req, res, next) => {
	res.end('deleting all dishes');
});


// repeat this for dishId endpoint
app.get('/dishes/:dishId', (req, res, next) => {
	res.end('sending dish ' + req.params.dishId + ' through +++========');
});

app.post('/dishes/:dishId', (req, res, next) => {
	res.statusCode = 403;
	res.end('Post operation not supported on /dishes/ ' + req.params.dishId);
});

app.put('/dishes/:dishId', (req, res, next) => {
	res.write('Update the dish: ' + req.params.dishId + '\n');
	res.end('Will update dish: ' + req.body.name + ' with details: ' + req.body.description);

});

app.delete('/dishes/:dishId', (req, res, next) => {
	res.end('deleting dish: ' + req.params.dishId);
});



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
