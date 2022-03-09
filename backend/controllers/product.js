const Products = require('../models/productModel');


const getAllProducts = async( req, res) => {
    try {
        const products = await Products.findAll();
        res.json(products);
    } catch (error) {
        res.json({ message: error.message});
    }
};

const getProductById = async( req, res) => {
    try {
        const product = await Products.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(product[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
};

const createProduct = async( req, res) => {
    try {
        await Products.create(req.body);
        res.json({ message: 'Product telah ditambahkan'})
    } catch (error) {
        res.json({ message: error.message});
    }
};

const updateProduct = async( req, res) => {
    try {
        await Products.update( req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({ message: 'Product telah diubah'})
    } catch (error) {
        res.json({ message: error.message});
    }
};

const deleteProduct = async( req, res) => {
    try {
        await Products.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({ message: 'product telah dihapus'})
    } catch (error) {
        res.json({ message: error.message});
    }
};


module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}