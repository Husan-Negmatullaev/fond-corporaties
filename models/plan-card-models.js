const mongoose = require('mongoose')
const Scheme = mongoose.Schema

const planScheme = new Scheme({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

const Plan = mongoose.model('Plan', planScheme)

module.exports = Plan