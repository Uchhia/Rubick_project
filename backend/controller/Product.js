const Product= require('../Models/Product_model')
const bodyparser=require('body-parser');
const { Console } = require('console');

//fetching Product
exports.getAll=async(req,res)=>{
    await Product.find().then((product)=>res.send(product))
}


//
exports.filter=async(req,res)=>{
    await Product.find({ "$expr": { "$eq": [{ "$month": "$date" }, req.params.id] } }).then((product)=>res.send(product))
}
//adding Product
exports.add= async(req,res)=>{
    let product = new Product({
        code:req.body.code,
        name:req.body.name,
        qty:req.body.qty,
        price:req.body.price,
        status:req.body.status,
        date:req.body.date,
    })
     result=await product.save().then(product=>{
        res.send(product);
    })
}

