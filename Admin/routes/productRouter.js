const router = require('express').Router();
const productController = require('../controller/productController');
const { upload } = require('../helpers/utils');

router.post('/add-product', upload.array('files'), productController.addProduct);

router.put('/update-product', upload.array('files'), productController.updateProduct);

router.delete('/delete-product', productController.deleteProduct);

module.exports = router;