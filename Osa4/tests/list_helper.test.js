const { test, describe } = require("node:test")
const assert = require("node:assert")
const listHelper = require("../utils/list_helper")
const dummyBlogs = require("./dummyBlogs")

test("dummy returns one", () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  assert.strictEqual(result, 1)
})

describe("total likes", () => {
  const listWithOneBlog = [dummyBlogs[0]]

  test("when list has only one blog equals the likes of that", () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    assert.strictEqual(result, 7)
  })

  test("when list has multiple blogs equals the sum of all likes", () => {
    const result = listHelper.totalLikes(dummyBlogs)
    assert.strictEqual(result, 36)
  })
})
