const {Schema,model}=require('mongoose');
const Post=new Schema({
    title:{
        type:String,
        require:true
    },
    desc:{
        type:String,
        require:true
    },
    photo:{
        type:String
    },

})
module.exports=model('Posts',Post);