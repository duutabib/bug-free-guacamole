var express = require('express');
const bodyParser = require('body-parser');
var User = require('../models/user');
var router = express.Router();
var passport = require('passport');
router.use(bodyParser.json());

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// user signup
router.post('/signup', (req, res, next) => {
	User.register(new User({username: req.body.username}), req.body.password, (err, user) => {
		if(err) {
			res.statusCode = 500;
			res.setHeader('Content-Type', 'application/json')
			res.json({err: err});
		} else{
			passport.authenticate('local')(req, res, () => {
				res.status = 200;
				res.setHeader('Content-Type', 'application/json');
				res.json({succes: true, status: 'Registration successful'});
			});
		}
	});
});

//login user
router.post('/login', passport.authenticate('local'),  (req, res, next) => {		
	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	res.json({success: true, status:'you are successfully logged in'});
	
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
