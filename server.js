const express = require('express')
const app = express()
const db=require('./db')

const bodyParser=require('body-parser');
app.use(bodyParser.json());

const Person=require('./models/persons');

const personRoutes=require('./routes/personRoutes');

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/notes', function (req, res) {
  res.send('we are running notes');
})

app.use('/person',personRoutes);



app.listen(3000,()=>{
    console.log('server is running on port 3000');
})


