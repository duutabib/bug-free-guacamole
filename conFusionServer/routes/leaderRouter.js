// create router for leader endpoint

const express = require('express');
const bodyParser = require('body-parser');


const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req, res, next) =>  {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	next();
})
.get((req, res, next) => {
	res.end('sending leaders data through +++========');
})
.post((req, res, next) => {
	res.end('seeing the leaders come through ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
	res.statusCode = 403;
	res.end('no space for more leaders');
})
.delete((req, res, next) => {
	res.end('deleting all leaders');
});

// create route for leaderId endpoint
leaderRouter.route('/:leaderId')
.all((req, res, next) =>  {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	next();
})
.get((req, res, next) => {
	res.end('sending leaders data through +++========');
})
.post((req, res, next) => {
	res.statusCode = 403;
	res.end("POST not supported Id endpoint: " + req.params+leaderId);
})
.put((req, res, next) => {
	res.write('Update the leader: ' + req.params.leaderId + '\n');
	res.end('Updating leader: ' + req.body.name + ' with details: ' + req.body.description);
})
.delete((req, res, next) => {
	res.end('deleting leader: ' + req.params.leaderId);
});


module.exports = leaderRouter;
