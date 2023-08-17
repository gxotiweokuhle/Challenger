//here i will have my functions to return responses to the routes

const express = require('express');
const bodyParser = require('body-parser')
const routes = express.Router()

//import model's objects

const {users} = require('../model');

//users router

routes.get('/user', (req, res) => { //displays all users
    users.fetchUsers(req, res)
})

routes.get('/user/:id', (req, res) => {//displays a single view of user/products
    users.fetchUser(req, res)
})

routes.post('/register', bodyParser.json(), (req, res) => {
    users.register(req, res)
})
 
routes.put('/user/:id', bodyParser.json(), (req, res) => {
    users.updateUser(req, res)
})

routes.patch('/user/:id', bodyParser.json(), (req, res) => {
    users.updateUser(req, res)
})

routes.delete('/user/:id', bodyParser.json(), (req, res) => {//allow user to delete
    users.deleteUser(req, res)
})

module.exports = {
    express, routes
}