const mongoose= require('mongoose');

const storeModal=new mongoose.Schema({
    title:{
        type:String,
        required:[true,'please enter name of the product'],
        maxlenght:[25,'character length is greater than 25'],
    },
    imageUrl:{
        type:String,
        required:[true,'please enter image link of the product'],
        maxlenght:[25,'character length is greater than 25'],
    },
    content:{
        type:String,
        required:[true,'please enter content of the product'],
        maxlenght:[25,'character length is greater than 25'],
    },
    heading:{
        type:String,
        required:[true,'please enter heading'],
        maxlenght:[25,'character length is greater than 25'],
    },
})

module.exports=mongoose.model('Product',storeModal);