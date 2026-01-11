const productModel = require('../../models/Product');


const getAllProducts = async (req, res) => {
    try {
        const products = await productModel.find({ status: 'active' });
        res.status(200).json({
            success: true,
            message: "Products fetched successfully",
            data: products
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching products",
            error: error.message
        });
    }
}

const getProductById = async (req, res) => {
    try {
        const { productID } = req.query;
        const product = await productModel.findOne({ _id: productID, status: 'active' });
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Product fetched successfully",
            data: product
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching product",
            error: error.message
        });
    }
}

module.exports = {
    getAllProducts,
    getProductById
};