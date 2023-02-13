const Sequlize = require("sequalize")

const sequlize = new Sequlize(
    process.env.PG_NAME,
    process.env.PG_USER,
    process.env.PG_PASS,
    {
        host: process.env.PG_HOST,
        dialect: "postgres",
        port: process.env.PG_PORT,
        logging: false,
        define: {
            timestamps: false
        }
    }
)

module.exports = sequlize