const mongoose = require('mongoose');

const connectDB=(url)=>{
    return mongoose.connect(url,{
        usenewUrlParser:true,
       
    });
};

module.exports=connectDB;