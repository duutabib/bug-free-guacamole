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

module.exports = dishRouter;
