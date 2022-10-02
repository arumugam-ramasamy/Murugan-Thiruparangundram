const mongoose = require('mongoose') ;
const { isEmail } = require('validator');
const bcrypt = require ('bcrypt') ;

const userSchema = new mongoose.Schema({
	email: {
		type : String,
		required : [true, "Please enter an email"],
		unique : true, 
		lowercase : true,
		validate :[isEmail, 'Please enter a valid email address']
	}, 
	password :{
		type : String, 
		required : [true, "Please enter a password"], 
		minlength : [6, "Password length must be six"]
	},
});

userSchema.post('save', function(doc, next) {
	console.log(doc) ;
	next() ;
}) ;

userSchema.pre('save', async function (next) {
	const salt = await bcrypt.genSalt() ;
	this.password = await bcrypt.hash(this.password, salt) ;
	console.log ("User about to be saved ", this) ;
	next() ;
}) ;

const User = mongoose.model('user', userSchema) ;
module.exports = User ;
