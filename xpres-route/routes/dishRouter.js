// create Router for dish endpoint

const express = require('express');
const bodyParser = require('body-parser');


const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req, res, next) =>  {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	next();
})
.get((req, res, next) => {
	res.end('sending dishes data through +++========');
})
.post((req, res, next) => {
	res.end('seeing the dishes come through ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
	res.statusCode = 403;
	res.end('no space for more dishes');
})
.delete((req, res, next) => {
	res.end('deleting all dishes');
});

// create route for dishId endpoint
dishRouter.route('/:dishId')
.all((req, res, next) =>  {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	next();
})
.get((req, res, next) => {
	res.end('sending dishes data through +++========');
})
.post((req, res, next) => {
	res.statusCode = 403;
	res.end("POST not supported Id endpoint: " + req.params+dishId);
})
.put((req, res, next) => {
	res.write('Update the dish: ' + req.params.dishId + '\n');
	res.end('Updating dish: ' + req.body.name + ' with details: ' + req.body.description);
})
.delete((req, res, next) => {
	res.end('deleting dish: ' + req.params.dishId);
});


module.exports = dishRouter;
