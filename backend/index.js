const bodyParser = require("body-parser")
const express = require("express")
const dbConnect = require("./dbConnect")
const app = express()
require("dotenv").config()
const authRouter = require("./routes/authRoute")

const { errorHandler, notFound } = require("./utils/middleware")

const PORT = process.env.PORT || 7000

dbConnect()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use("/api/user", authRouter)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})