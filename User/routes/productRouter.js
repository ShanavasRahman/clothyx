const router = require('express').Router();
const productController = require('../controller/productController');

router.get('/get-all-products', productController.getAllProducts);
router.get('/get-product-by-id', productController.getProductById);

module.exports = router;