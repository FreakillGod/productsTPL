const Product = require("../models/storeModal");

const getAllProducts = async (req, res) => {
    try {
        const product = await Product.find({});

        if (product) {
            return res.status(200).json({ msg: "success", product });
        }
        res.status(402).json({ msg: "bad request please try again later" });

    } catch (error) {
        res.status(500).json({ error });
    }

};

const getProduct = async (req, res) => {

    try {

        const { params: { id: productId } } = req;

        const product = await Product.findOne({ _id: productId });

        if (!product) {
            return res.status(402).json({ msg: "cannot find product with specific id" });
        }

        res.status(200).json({ msg: "success", product });

    } catch (error) {
        res.status(500).json({ error });
    }

};

const addProduct = async (req, res) => {

    try {

        const newProduct = await Product.create(req.body);

        res.status(201).json({ product: newProduct });

    } catch (error) {
        res.status(500).json({ error });
    }

};

const updateProduct = async (req, res) => {
    try {
        const {
            body: { imageUrl, title, heading, content },
            params: { id: productId },
        } = req;

        if ((imageUrl === "", title === "", heading === "", content === "")) {
            return res.status(401).json({ msg: "empty value error" });
        }
        
        const product = await Product.findByIdAndUpdate(
            { _id: productId },
            req.body,
            { new: true, runValidators: true }
        );

        if (!product) {
            return res.status(401).json({ msg: "no product with given id" });
        }

        res.status(200).json({ msg: "success", product });

    } catch (error) {
        res.status(500).json({ error });
    }

};

const deleteProduct = async (req, res) => {
    try {
        const { id: productId } = req.params;

        const product = await Product.findByIdAndRemove({ _id: productId });

        if (!product) {
            return res.status(401).json({ msg: "success", product });
        }
        res.status(200).json({ product });

    } catch (error) {
        res.status(500).json({ error });
    }
    
};

module.exports = {
    getAllProducts,
    getProduct,
    updateProduct,
    addProduct,
    deleteProduct,
};
