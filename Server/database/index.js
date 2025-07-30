const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://gautamporiya1234:DRtURrlA5a9jX9N9@cluster0.sycfiww.mongodb.net/")
.then(()=>{
    console.log('Mongodb databse connection sucessful');
}).catch((err)=>{
    console.error('Mongodb database connection failed:', err);
})