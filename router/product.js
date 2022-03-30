const express= require('express')
const router= express.Router();

const {getAllProducts,getProduct,updateProduct,addProduct,deleteProduct} =require('../controllers/products')

router.route('/').get(getAllProducts).post(addProduct)
router.route('/:id').get(getProduct).patch(updateProduct).delete(deleteProduct)

module.exports=router;