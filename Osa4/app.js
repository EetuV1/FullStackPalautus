const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const config = require("./utils/config")
const blogsRouter = require("./controllers/blogs")

const app = express()

mongoose
    .connect(config.MONGO_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB:", err))

app.use(cors())
app.use(express.json())

app.use("/api/blogs", blogsRouter)

module.exports = app
