let mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.mongourl,{useNewUrlParser:true})

.then(()=>console.log('database connected'))
.catch((err)=>console.log(err))