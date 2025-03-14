const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
})

blogSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString() // _id -> id
    delete returnedObject._id
    delete returnedObject.__v

    if (document.likes === undefined) {
      document.likes = 0
    }
    if (returnedObject.likes === undefined) {
      returnedObject.likes = 0
    }
  },
})

const Blog = mongoose.model("Blog", blogSchema)

module.exports = Blog
