# Emp-Branch API

## Description
This project is a backend application built using Node.js, Express, and Sequelize.
It manages branches and employees with a one-to-many relationship.

## Technologies
- Node.js
- Express
- Sequelize
- MySQL

## Setup

1. Install dependencies:
npm install

2. Run migrations:
npx sequelize-cli db:migrate

3. Start server:
npm start

## API Endpoints

### Branches
GET /branches  
GET /branches/:id  
POST /branches  
PUT /branches/:id  
DELETE /branches/:id  

### Employees
GET /employees  
GET /employees/:id  
GET /employees/branch/:branch_id  
POST /employees  
PUT /employees/:id  
DELETE /employees/:id  

## Example Request

POST /branches

{
  "name": "Main Branch",
  "location": "Nablus",
  "phone": "059720999"
}

POST /employees

{
  "name": "Lina",
  "position": "cashier",
  "salary": 2500,
  "branch_id": 1
}