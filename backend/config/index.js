const { Sequelize } = require('sequelize');

const db = new Sequelize('pern_crud', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        min: 0,
        max: 5,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = db