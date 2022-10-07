const cors=require('cors');
const express=require('express');


const app=express();
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const PORT=process.env.PORT || 9000;
const URL='mongodb://localhost/Product';

app.use(bodyparser.json());
app.use('/',require('./Routes/Product'))
app.use(cors());

mongoose.connect(URL);
const con=mongoose.connection;

con.on('open',()=>console.log('Databse Connected'))
app.listen(9000,()=>{
    console.log(`App is ruuning on ${PORT}`)
});