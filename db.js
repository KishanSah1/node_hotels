const mongoose=require('mongoose');

const mongoURL='mongodb://127.0.0.1:27017/db';

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const db=mongoose.connection;

db.on('connected',()=>{
    console.log('MongoDB server is connected');
});

db.on('error',()=>{
    console.log('MongoDB server error');
});

db.on('disconnected',()=>{
    console.log('MongoDB server is disconnected');
});

//export the database connection
module.exports=db;

