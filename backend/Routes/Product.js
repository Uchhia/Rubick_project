const express=require('express');
const router=express.Router();
const bodyparser=require('body-parser')
const cors=require('cors');
router.use(bodyparser.json())
const controlers=require('../controller/Product')
router.use(cors())
router.get('/all',controlers.getAll)


router.post('/new',controlers.add);
module.exports=router;