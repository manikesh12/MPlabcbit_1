const exp=require('express')
const { read } = require('fs')
const router=exp.Router()
const a=require('../model/model')

router.get('/', async(req,res)=>
{
try{
      const x= await a.find()
      res.json(x)
}catch(err){
res.send("Error"+err)
}
})

router.get('/:id', async(req,res)=>
{
try{
      const x2= await a.findById(req.params.id)
      res.json(x2)
}catch(err){
res.send("Error"+err)
}
})


router.post('/',async(req,res)=>
{
const a1=new a(
    {
     name : req.body.name,
     tech:req.body.tech,
     section:req.body.section
    })
    try{
        const x1=await a1.save()
          res.json(x1)
    }catch(err){
        res.send("Error"+err)
    }
})

router.patch('/:id', async(req,res)=>
{
try{
      const x2= await a.findById(req.params.id)
      a.section=req.body.section
      const s=await x2.save()
      res.json(s)
}catch(err){
res.send("Error"+err)
}
})




module .exports=router