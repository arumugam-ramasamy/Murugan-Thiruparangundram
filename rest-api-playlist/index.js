const express = require ('express') ;
const routes = require ('./routes/ninjaRoutes') ;

//set up express app 
const app = express() ;
app.use('/api', routes) ;


app.listen(process.env.port || 8000, function () {
	console.log('now listening for requests') ;
}) ;
