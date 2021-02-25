const express=require('express');
const router=express.Router();
const{Post,Get}=require('../controller/post.js');
router.use('/post',Post);
router.use('/get',Get);
module.exports=router;

