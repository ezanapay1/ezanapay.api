const Sequlize = require("sequelize")

const sequelize = new Sequlize(
    process.env.PG_DB,
    process.env.PG_USER,
    process.env.PG_PASSWORD,
    {
        host: process.env.PG_HOST,
        dialect: "postgres",
        // port: process.env.PG_PORT,
        // logging: false,
        // define: {
        //     timestamps: false
        // }
    }
)

module.exports = sequelize