const express=require('express');
const {handleSignUp}=require('../controllers/User')
const router=express.Router();

router.post('/signup',handleSignUp);

module.exports=router;