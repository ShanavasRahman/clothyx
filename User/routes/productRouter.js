const router = require('express').Router();
const productController = require('../controller/productController');

/**
 * @openapi
 * /user/product/get-all-products:
 *   get:
 *     tags:
 *       - User Products
 *     summary: Get all active products (user)
 *     responses:
 *       200:
 *         description: Products fetched successfully
 */
router.get('/get-all-products', productController.getAllProducts);

/**
 * @openapi
 * /user/product/get-product-by-id:
 *   get:
 *     tags:
 *       - User Products
 *     summary: Get a single active product by ID (user)
 *     parameters:
 *       - in: query
 *         name: productID
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the product to fetch
 *     responses:
 *       200:
 *         description: Product fetched successfully
 *       404:
 *         description: Product not found
 */
router.get('/get-product-by-id', productController.getProductById);

module.exports = router;