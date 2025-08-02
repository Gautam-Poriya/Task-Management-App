const mongoose=require('mongoose');
require('dotenv').config();
mongoose.connect(`${process.env.MONGO_URI}`)
.then(()=>{
    console.log('Mongodb databse connection sucessful');
}).catch((err)=>{
    console.error('Mongodb database connection failed:', err);
})