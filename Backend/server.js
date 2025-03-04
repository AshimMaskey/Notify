const express=require('express');
const app=express();
require("dotenv").config();
const {dbConnect}=require('./dbconnect');
const userRouter= require('./routes/User');

//database connection
const mongoDbURL=process.env.MONGO_URI;
dbConnect(`${mongoDbURL}/note`)
.then(()=>console.log("Database connected!!"))
.catch((err)=>console.log(`Some error occurred ${err}`))

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/api/user',userRouter);

const PORT=process.env.PORT || 8080;
app.listen(PORT, ()=>console.log(`Server started at PORT ${PORT}.`));