const Sequlize = require("sequelize")
const db = require("../utils/database")

const User = db.define("user", {
    id: {
        type: Sequlize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequlize.STRING,
        allowNull: false
    },
    email: {
        type: Sequlize.STRING,
        allowNull: false
    },
    password: {
        type: Sequlize.STRING,
        allowNull: false
    }
})

module.exports = User