require('dotenv').config();
const express = require('express');
const morgan =require('morgan');
const cors=require('cors');
const port=process.env.PORT;
const app=express();
const database = require('./database');
const userController=require('./controllers/user');

app.use(morgan('dev'));
app.use(cors());
app.use('/api/user', userController);
app.all(
'/',function(req,res){
    return res.json({
        status:true,
        message:'Index page working'
    })
}

);
app.listen(
port,
function(){
    console.log('Server started at'+port );
}
);