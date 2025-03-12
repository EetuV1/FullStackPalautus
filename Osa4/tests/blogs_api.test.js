const { test, after } = require("node:test")
const mongoose = require("mongoose")
const supertest = require("supertest")
const app = require("../app")
const assert = require("assert")
const api = supertest(app)

test("blogs are returned as json", async () => {
  await api
    .get("/api/blogs")
    .expect(200)
    .expect("Content-Type", /application\/json/)
})

test("the first blog's title is *this is title*", async () => {
  const response = await api.get("/api/blogs")

  const firstBlogTitle = response.body[0].title
  assert.strictEqual(firstBlogTitle, "this is title")
})

test("all blogs have an id property", async () => {
  const response = await api.get("/api/blogs")

  response.body.forEach((blog) => {
    assert.strictEqual(blog.id !== undefined, true)
  })
})

test("blogs can be added with a post request", async () => {
  const newBlog = {
    title: "new blog",
    author: "new author",
    url: "new url",
    likes: 0,
  }

  const responseAtBefore = await api.get("/api/blogs")

  await api
    .post("/api/blogs")
    .send(newBlog)
    .expect(201)
    .expect("Content-Type", /application\/json/)

  const responseAtEnd = await api.get("/api/blogs")
  const difference = responseAtEnd.body.length - responseAtBefore.body.length

  assert.strictEqual(difference, 1)
})

after(async () => {
  await mongoose.connection.close()
})
