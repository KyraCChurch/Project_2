const mongoose = require('mongoose')

// Make A Schema
const spellSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  readyToEat: Boolean,
  username: String
})

// Make A Model From The Schema

const Spell = mongoose.model('Spell', spellSchema)

// Export The Model For Use  In The App

module.exports = Spell
