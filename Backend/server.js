const express=require('express');
const app=express();
require("dotenv").config();
const {dbConnect}=require('./dbconnect');

app.get("/user", (req,res)=>{
	return res.end('hello');
})

//database connection
const mongoDbURL=process.env.MONGO_URI;
dbConnect(`${mongoDbURL}/note`)
.then(()=>console.log("Database connected!!"))
.catch((err)=>console.log(`Some error occurred ${err}`))

const PORT=process.env.PORT || 8080;
app.listen(PORT, ()=>console.log(`Server started at PORT ${PORT}.`));