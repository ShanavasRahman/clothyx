const productModel=require("../../models/Product");


const addProduct = async (req, res) => {
    try {
        const { name, price, description, category } = req.body;
        console
        const imageURL = req.files ? req.files.map(file => file.filename) : [];

        const newProduct = new productModel({
            name,
            price,
            description,
            category,
            imageURL
        });
        await newProduct.save();
        res.status(201).json({ message: "Product added successfully", product: newProduct });
    } catch (error) {
        res.status(500).json({ message: "Error adding product", error: error.message });
    }
};

const getAllProducts = async (req, res) => {
    try {
        const products = await productModel.find({});
        return res.status(200).json({ 
            success: true, 
            message: "Products fetched successfully", 
            data: products 
        });
    } catch (error) {
        return res.status(500).json({ 
            success: false, 
            message: "Error fetching products", 
            error: error.message 
        });
    }
};

const updateProduct = async (req, res) => {
    try {
        const { productID } = req.query;
        const updates = req.body;
        const updatedProduct = await productModel.findByIdAndUpdate(productID, updates, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        res.status(500).json({ message: "Error updating product", error: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { productID } = req.query;    
        const deletedProduct = await productModel.findByIdAndUpdate(productID, { status: 'inactive' }, { new: true });
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully", product: deletedProduct });
    } catch (error) {
        res.status(500).json({ message: "Error deleting product", error: error.message });
    }
};

module.exports = {
    addProduct,
    updateProduct,
    deleteProduct,
    getAllProducts
};