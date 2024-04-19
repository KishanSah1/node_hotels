const mongoose=require('mongoose');
//require('dotenv').config();


//const mongoURL='mongodb://127.0.0.1:27017';
const mongoURL='mongodb+srv://kishanSah:fJdXxFN4aQH6Oca0@cluster0.euvy29a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,

}).then(()=>{
    console.log('MongoDB server is connected');
}).catch((err)=>{
    console.log("no connection",err);
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

