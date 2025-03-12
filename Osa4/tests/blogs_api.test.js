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

test("there is one blog", async () => {
  const response = await api.get("/api/blogs")

  assert.strictEqual(response.body.length, 1)
})

test("the first blog's title is *this is title*", async () => {
  const response = await api.get("/api/blogs")

  const firstBlogTitle = response.body[0].title
  assert.strictEqual(firstBlogTitle, "this is title")
})

after(async () => {
  await mongoose.connection.close()
})
