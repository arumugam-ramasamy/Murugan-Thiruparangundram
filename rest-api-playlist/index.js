const express = require ('express') ;
const bodyParser = require('body-parser') ;
const mongoose = require('mongoose');

//set up express app 
const app = express() ;
app.use(bodyParser.json()) ;
app.use('/api',  require('./routes/ninjaRoutes')) ;
app.use(express.static('public')) ;
app.use(function(err, req, res, next) {
	console.log(err) ;
	res.status(422).send({error:err.message}) ;
});

//const dbURI = 'mongodb+srv://shaun:test1234@cluster0.del96.mongodb.net/node-auth';
const dbURI= 'mongodb+srv://sundarhariharane:Tharun12!@cluster0.uzjjbm5.mongodb.net/rest-api' ;
mongoose.connect(dbURI) ;
mongoose.Promise = global.Promise ;
 
app.listen(process.env.port || 8000, function () {
	console.log('now listening for requests') ;
}) ;
