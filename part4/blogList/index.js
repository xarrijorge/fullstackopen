const app = require('./app')
const config = require('./utils/config')
const http = require('http')

// const blogSchema = mongoose.Schema({
//   title: String,
//   author: String,
//   url: String,
//   likes: Number
// })

// const Blog = mongoose.model('Blog', blogSchema)

// const mongoUrl =
//   ('mongodb+srv://rxdb:Rup4DB@fullstack-qpshs.mongodb.net/blogList?retryWrites=true&w=majority',
//   { useNewUrlParser: true })

const mongoUrl = (config.MONGODB_URI, { useNewUrlParser: true })

// app.get('/api/blogs', (request, response) => {
//   Blog.find({}).then(blogs => {
//     response.json(blogs)
//   })
// })

// app.post('/api/blogs', (request, response) => {
//   const blog = new Blog(request.body)

//   blog.save().then(result => {
//     response.status(201).json(result)
//   })
// })

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})
