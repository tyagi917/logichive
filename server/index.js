const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const mongoose=require('mongoose');
const Res=require('./route/route.js');
mongoose.connect('mongodb://localhost:27017/upload',{
	useNewUrlParser:true
})
mongoose.connection.on('connected',()=>{
    console.log("connection is succesfuuly");
});
mongoose.connection.on('error',()=>{
    console.log('error');

});

const app=express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{
	res.send("hello");
})
const port=5000;
app.use('/data',Res)
app.listen(port,console.log(`app runing on ${port}`));
