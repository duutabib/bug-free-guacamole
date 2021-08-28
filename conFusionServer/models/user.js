// create model for user types

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose'); /* add auth */


var User = new Schema({
	admin:	{
			type: Boolean,
			default: false
		}

});


User.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', User);

