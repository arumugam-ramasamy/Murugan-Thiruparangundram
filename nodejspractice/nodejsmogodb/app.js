const express = require('express');
const mongoose = require('mongoose');

const app = express();

// middleware
app.use(express.json());



//const dbURI = 'mongodb+srv://shaun:test1234@cluster0.del96.mongodb.net/node-auth';
const dbURI= 'mongodb+srv://sundarhariharane:Tharun12!@cluster0.uzjjbm5.mongodb.net/node-auth' ;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.json({message : "Welcome to gldevice updates"}) ;
}) ;

app.use('/api', require("./routes/deviceroutes")) ;

const PORT = process.env.PORT || 8081 ;
app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT) ;
});

