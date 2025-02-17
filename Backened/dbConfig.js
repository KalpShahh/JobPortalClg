import mongoose from "mongoose"

import dotenv from "dotenv";
dotenv.config();  
mongoose.connect(process.env.mongourl,{useNewUrlParser:true})

.then(()=>console.log('database connected'))
.catch((err)=>console.log(err))