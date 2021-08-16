// create Router for promo endpoint

const express = require('express');
const bodyParser = require('body-parser');


const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req, res, next) =>  {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	next();
})
.get((req, res, next) => {
	res.end('sending promoes data through +++========');
})
.post((req, res, next) => {
	res.end('seeing the promoes come through ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
	res.statusCode = 403;
	res.end('no space for more promoes');
})
.delete((req, res, next) => {
	res.end('deleting all promoes');
});

// create route for promoId endpoint
promoRouter.route('/:promoId')
.all((req, res, next) =>  {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	next();
})
.get((req, res, next) => {
	res.end('sending promoes data through +++========');
})
.post((req, res, next) => {
	res.statusCode = 403;
	res.end("POST not supported Id endpoint: " + req.params+promoId);
})
.put((req, res, next) => {
	res.write('Update the promo: ' + req.params.promoId + '\n');
	res.end('Updating promo: ' + req.body.name + ' with details: ' + req.body.description);
})
.delete((req, res, next) => {
	res.end('deleting promo: ' + req.params.promoId);
});


module.exports = promoRouter;
