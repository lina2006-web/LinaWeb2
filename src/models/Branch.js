const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');

const Branch = sequelize.define('Branch', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    },
    location: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'branches',
    timestamps: false
});

module.exports = Branch;