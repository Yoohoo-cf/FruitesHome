const jwt = require("jsonwebtoken")

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET, { expiresIn: "1h" })
}

module.exports = { generateToken }