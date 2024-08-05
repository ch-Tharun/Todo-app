const express=require('express')
const cors=require('cors')
const app=express()
const mongoose=require('mongoose')
//app.use(CORS)
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://0.0.0.0:27017/MongoReact').then(()=>{
    console.log('connected successfullly');
})
const MonSchema= mongoose.Schema({name:String,age:Number})
const MonModel= new mongoose.model('Detail',MonSchema);
app.get('/api',async(req,res)=>{
    //const data= MonModel({name:"Tharun",age:23});
    //const result = await data.save();
    const all= await MonModel.find();
    res.send(all);
})
app.post('/data',async(req,res)=>{
    const data= MonModel(req.body);
    const result = await data.save();
    res.send(req.body);
})

app.get('/data/:id',async(req,res)=>{
    const ret= await MonModel.find({_id:req.params.id});
    console.log(ret);
    res.send(ret);
})

app.post('/update/:id',async(req,res)=>{
    console.log("body");
    console.log(req.body);
    const data= await MonModel.updateMany({_id:req.params.id},{$set:{name:req.body.formname,age:req.body.formage}})
    //const result =data.save();
    res.send(data);
})

app.get('/delete/:id',async(req,res)=>{
    const data= await MonModel.deleteMany({_id:req.params.id});
    res.send(data);
})

app.listen(5000);