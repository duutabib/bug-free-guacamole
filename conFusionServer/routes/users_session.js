var express = require('express');
const bodyParser = require('body-parser');
var User = require('../models/user');
var router = express.Router();
router.use(bodyParser.json());

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// user signup
router.post('/signup', (req, res, next) => {
	User.findOne({username: req.body.username})
	.then((user) => {
		if(user != null) {
			var err = new Error('User ' + req.body.username + ' already');
			err.status = 403;
			next(err);
		} else{
			return User.create({
				username: req.body.username,
				password: req.boddy.password
			});
		}
	})
	.then((user) => {
		res.statusCode=200;
		res.setHeader('Content-Type', 'application/json');
		res.json({status: 'Registration success!', user:user});
	}, (err) => next(err))
	.catch((err) => next(err))
});

//login user
router.post('/login', (req, res, next) => {
		if (!req.session.user){
			var authHeader = req.headers.authorization;	
			if (!authHeader) {
				var err = new Error('User not authenticated!');
				res.setHeader('WWW-Authenticate', 'Basic');
				err.status = 401;
				return	next(err);
			}
			
			var auth = new Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
			var username = auth[0];
			var password = auth[1];
			console.log(username, password)	

			User.findOne({username: username})
			.then((user) => {
				if (user == null) { /* if user exist */
					var err = new Error('User ' + username +' does not exist!');
					res.setHeader('WWW-Authenticate', 'Basic');
					err.status = 403;
					return next(err);
				 } else if(user.password !== 'password') { /* if user exist check pass */
					var err = new Error('password incorrect');
					err.status = 403;
					return next(err);
					
				 } else if( user.username == username && user.password == password) { // not needed
					req.session.user = 'authenticated';	
					res.statusCode = 200;
					res.setHeader('Content-Type', 'text/plain');
					res.end('User authenticated');
				}
			})
			.catch((err) => next(err));
		} else {
			res.statusCode = 200;
			res.setHeader('Content-Type', 'text/plain');
			res.end('User already authenticated!');
		}
});

/* logging out the user. */
router.get('/logout', (req, res) => {
	if ( req.session) {
		req.session.destory();
		res.clearCookie('session-id');
		res.redirect('/');
	} else {
		var err= new Error('User not logged in!');
		err.status = 403;
		next(err);
	}
});
	
module.exports = router;
