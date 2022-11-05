const mongoose = require('mongoose')

// Make A Schema
const spellSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: { type: String, required: true },
  instructions: { type: String, required: true },
  username: String
})

// Make A Model From The Schema

const Spell = mongoose.model('Spell', spellSchema)

// Export The Model For Use  In The App

module.exports = Spell
