const router = require('express').Router();
const productController = require('../controller/productController');
const { upload } = require('../helpers/utils');

/**
 * @openapi
 * /admin/product/add-product:
 *   post:
 *     tags:
 *       - Admin Products
 *     summary: Add a new product (admin)
 *     security:
 *       - tokenAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               description:
 *                 type: string
 *               category:
 *                 type: string
 *               files:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *     responses:
 *       201:
 *         description: Product added successfully
 */
router.post('/add-product', upload.array('files'), productController.addProduct);

/**
 * @openapi
 * /admin/product/update-product:
 *   put:
 *     tags:
 *       - Admin Products
 *     summary: Update an existing product (admin)
 *     security:
 *       - tokenAuth: []
 *     parameters:
 *       - in: query
 *         name: productID
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the product to update
 *     requestBody:
 *       required: false
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               description:
 *                 type: string
 *               category:
 *                 type: string
 *               files:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *     responses:
 *       200:
 *         description: Product updated successfully
 */
router.put('/update-product', upload.array('files'), productController.updateProduct);

/**
 * @openapi
 * /admin/product/delete-product:
 *   delete:
 *     tags:
 *       - Admin Products
 *     summary: Soft-delete a product (admin)
 *     security:
 *       - tokenAuth: []
 *     parameters:
 *       - in: query
 *         name: productID
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the product to delete
 *     responses:
 *       200:
 *         description: Product deleted successfully
 */
router.delete('/delete-product', productController.deleteProduct);

module.exports = router;