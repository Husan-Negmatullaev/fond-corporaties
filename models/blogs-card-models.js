const mongoose = require('mongoose')
const Scheme = mongoose.Schema

const blogScheme = new Scheme({
    title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
        required: true
    }
})

const Blogs = mongoose.model('Blogs', blogScheme)

module.exports = Blogs