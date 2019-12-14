const dummy = blogs => 1

const totalLikes = blogs => {
  let total = 0

  blogs.forEach(element => {
    total += element.likes
  })

  return blogs.length === 0 ? 0 : total
}

const favoriteBlog = blogs => {
  max = 0
  let fav = {}
  blogs.forEach(blog => {
    if (blog.likes > max) {
      max = blog.likes
      fav = blog
    }
  })

  delete fav.__v
  delete fav._id
  delete fav.url
  return blogs.length === 0 ? 0 : fav
}
module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}
