const express = require('express')
const blogsRouter = express.Router()
const Blog = require('../models/blog')
const User = require('../models/users')

blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({})
  response.json(blogs)
})

blogsRouter.post('/', async (request, response, next) => {
  const body = request.body

  const user = await User.findById(body.userID)

  const blog = new Blog({
    article: body.article,
    date: new Date(),
    user: user._id
  })

  try {
    savedBlog = await blog.save()
    user.blogs = user.blogs.concat(savedBlog._id)
    await user.save()
    response.json(savedBlog.toJSON())
  } catch (exception) {
    next(exception)
  }
})

blogsRouter.delete('/:id', async (request, response) => {
  const id = request.params.id

  Blog.findByIdAndDelete(id)
})

module.exports = blogsRouter
