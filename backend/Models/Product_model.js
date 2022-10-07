const mongoose=require('mongoose');

//Schema for Product colllection
const Product=mongoose.Schema({
    code:{
        type:Number,
        required:true

    },
    name:{
        type:String,
        required:true
    },
    qty:{
        type:Number,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    }
})
module.exports=mongoose.model('product',Product);