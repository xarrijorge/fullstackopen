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

app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})
