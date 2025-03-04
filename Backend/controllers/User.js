const User=require('../models/User');
const handleSignUp=async(req,res)=>{
	const {username,email,password,photo}=req.body;
	const isUser= await User.findOne({email:email});
	if(isUser) return res.end(isUser);
}

module.exports={
	handleSignUp,
}