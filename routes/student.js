const customerModel=require('../models/student.model')
const express=require('express')
const router=express.Router()

router.get('/',async(req,res)=>{
    try{
        const student=await customerModel.find()
        //find()=select * 
        res.render('student/list',{student:student})

    }catch(e){
        console.log(e)
        res.redirect('/')
    }
})
router.get('/add',(req,res)=>{
    res.render('student/add')
})
router.put('/edit',(req,res)=>{
    res.render('student/edit')
})
router.post('/add',async(req,res)=>{
    try{
        const newCus=new studentModel({
            name:req.body.name,
            old:req.body.old
        })
        await newCus.save() // cú pháp insert 1 dòng dữ liệu
        res.redirect('/student')
    }catch(e){
        console.log(e)
        res.redirect('/') //redirect: đưa về lại trang '/' là trang chủ
    }
})
router.delete('/delete/:id', async(req,res)=>{
    try{
        await stdentModel.findByIdAndDelete(req.params.id)
        res.redirect('/student')
    }catch(err)
    {
        console.log(err.message)
        res.redirect('/')
    }
    
})
router.get('/edit/:id',async(req,res)=>{
    try{
        const student= await studentModel.findById(req.params.id)
        res.render('student/edit',{student:student})
    }catch(err)
    {
        console.log(err.message)
        res.redirect('/')
    }
})
router.post('/edit/:id',async(req,res)=>{
    try{
        const student= await studentModel.findById(req.params.id)
        student.name=req.body.name
        student.old=req.body.old
        await student.save()
        res.redirect('/student')

    }catch(e)
    {
        console.log(e)
        res.redirect("/")
    }
})
module.exports=router