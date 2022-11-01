const mongoose = require('mongoose')

// Make A Schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  readyToEat: Boolean
})

// Make A Model From The Schema

const Product = mongoose.model('Product', productSchema)

// Export The Model For Use  In The App

module.exports = Product
