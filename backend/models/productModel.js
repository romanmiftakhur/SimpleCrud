const db = require('../config');
const { DataTypes } = require('sequelize');

const Products = db.define('product', {
    title: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.DOUBLE
    },
}, {
    freezeTableName: true
});

module.exports = Products;