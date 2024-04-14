const express=require('express');
const router=express.Router();

const Person=require('../models/persons');

router.post('/',async (req,res)=>{
    try{
        const data=req.body
        const newPerson=new Person(data);
        const response=await newPerson.save();
        console.log("data saved")
        res.status(200).json(response);
    }catch(err){
      console.log(err);
      res.status(500).json({error:"internal server error"});
    }
})

router.get('/',async (req,res)=>{
    try{
      const response=await Person.find();
      console.log("data fetched");
      res.status(200).json(response);
    }catch(err){
      console.log(err);
      res.status(500).json({error:"internal server error"});
    }
})

router.get('/:workType',async (req,res)=>{
    try{
      const workType=req.params.workType;
      if(workType=='chef' || workType=='manager' || workType=='waiter'){
        const reponse=await Person.find({work:workType});
        console.log("data fetched");
        res.status(200).json(reponse);
      }
      else{
        res.status(404).json({error:'Invalid work type'});
      }
    }catch(err){
      console.log(err);
      res.status(500).json({error:"internal server error"});
    }
  })

  router.put('/:id',async (req,res)=>{
      try{
        const personId=req.params.id;
        const updatedData=req.body;
        const response=await Person.findByIdAndUpdate(personId,updatedData,{
          new:true,//return the updated document
          runValidators:true//run mongoose validation
        });
        if(!response){
          return res.status(404).json({error:"data not found"});
        }

        console.log("data updated");
        res.status(200).json(response);
        
      }catch(err){
        console.log(err);
        res.status(500).json({error:"internal server error"});
      }
  })

  router.delete('/:id',async (req,res)=>{
      try{
        const personId=req.params.id;
        const response=await Person.findByIdAndDelete(personId);
        if(!response){
          return res.status(404).json({error:"data not found"});
        }
        console.log("data deleted");
        res.status(200).json({message:"data deleted successfully"});
      }catch(err){
        console.log(err);
        res.status(500).json({error:"internal server error"});
      }
  })

  module.exports=router;