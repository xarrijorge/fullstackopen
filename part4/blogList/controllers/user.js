const bcrypt = require('bcrypt')
const express = require('express')
const userRouter = express.Router()
const User = require('../models/users')

userRouter.get('/', async (request, response) => {
  const users = await User.find({})
  response.json(users)
})

userRouter.post('/', async (request, response, next) => {
  try {
    const body = request.body

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const user = new User({
      username: body.username,
      name: body.name,
      passwordHash
    })
    const savedUser = await user.save()
    response.json(savedUser)
  } catch (exception) {
    next(exception)
  }
})

module.exports = userRouter
