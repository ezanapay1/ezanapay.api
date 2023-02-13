const User = require("../models/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const res = require("express/lib/response")


// CRUD Controller

// get all users
exports.getUsers = (req, res, next) => {
    User.findAll()
        .then(users => {
            res.status(200).json({
                users: users
            })
        })
        .catch(e => console.log(e))
}

// get single user
exports.getUser = (req, res, next) => {
    const userId = req.params.userId;

    User.findByPk(userId) 
        .then(user => {
            if (!user) {
                res.status(404).json({
                    message: "User not found"
                })
            }
            res.status(200).json({
                user: user
            })
        })
        .catch(e => console.log(e))
}

// create user
exports.createUser = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    bcrypt.hash(password, 12)
        .then(hashedPassword => {
            return User.create({
                name: name,
                email: email,
                password: hashedPassword
            })
        })
        .then(user => {
            res.status(201).json({
                message: "User created successfully!",
                user: user
            })
        })
        .catch(e => console.log(e))
}

// update user
exports.updateUser = (req, res, next) => {
    const userId = req.params.userId;

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    User.findByPk(userId)
        .then(user => {
            if (!user) {
                res.status(404).json({
                    message: "User not found"
                })
            }
            user.name = name;
            user.email = email;
            user.password = password;
            return user.save()
        })
        .then(user => {
            res.status(200).json({
                message: "User updated successfully!",
                user: user
            })
        })
        .catch(e => console.log(e))
}

// delete user
exports.deleteUser = (req, res, next) => {
    const userId = req.params.userId;

    User.findByPk(userId)
           .then(user => {
            if (!user) {
                res.status(404).json({
                    message: "User not found"
                })
            }
            return user.destroy()
        })
        .then(user => {
            res.status(200).json({
                message: "User deleted successfully!",
                user: user
            })
        })
        .catch(e => console.log(e))
}


// exports.postLogin = (req, res, next) => {

// }