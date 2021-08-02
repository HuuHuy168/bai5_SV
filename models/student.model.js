const mongoose=require('mongoose')
const studentSchema=new mongoose.Schema({
    name:{type:String, required:true},
    old: {type:Number}
})
module.exports=mongoose.model('student',studentSchema)