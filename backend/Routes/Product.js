const express=require('express');
const router=express.Router();
const bodyparser=require('body-parser')
const cors=require('cors');
router.use(bodyparser.json())
const controlers=require('../controller/Product')
router.use(cors())

//Routes for fetching products
router.get('/all',controlers.getAll)

//Routes for Adding product
router.post('/new',controlers.add);

router.get('/fil/:id',controlers.filter)

module.exports=router;