
const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');

const Employee = sequelize.define('Employee', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    },
    position: {
        type: DataTypes.STRING
    },
    salary: {
        type: DataTypes.DECIMAL(10, 2)
    },
    branch_id: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'employees',
    timestamps: false
});

module.exports = Employee;