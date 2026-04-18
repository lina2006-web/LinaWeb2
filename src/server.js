const path = require('path');
require('dotenv').config({
    path: path.join(__dirname, '..', '.env'),
    override: true,
});

const express = require('express');
const app = express();
const { sequelize } = require('./db');
const Branch = require('./models/Branch');
const Employee = require('./models/Employee');
const branchRoutes = require('./routers/branchRoutes');
const employeeRoutes = require('./routers/employeeRoutes');

app.use(express.json());

Branch.hasMany(Employee, { foreignKey: 'branch_id' });
Employee.belongsTo(Branch, { foreignKey: 'branch_id' });

app.use('/branches', branchRoutes);
app.use('/employees', employeeRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'Branch and Employee API is running' });
});

const PORT = process.env.PORT || 3000;

sequelize.authenticate()
    .then(() => {
        console.log('Database connected successfully');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });