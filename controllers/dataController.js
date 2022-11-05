const Spell = require('../models/spell')

const dataController = {
  // Index,
  index (req, res, next) {
    Spell.find({ username: req.session.username }, (err, foundSpells) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.spells = foundSpells
        next()
      }
    })
  },
  // destroy
  destroy (req, res, next) {
    Spell.findByIdAndDelete(req.params.id, (err, deletedSpell) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.spell = deletedSpell
        next()
      }
    })
  },
  // Update
  update (req, res, next) {
    Spell.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedSpell) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.spell = updatedSpell
        next()
      }
    })
  },
  // Create
  create (req, res, next) {
    req.body.username = req.session.username
    Spell.create(req.body, (err, createdSpell) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.spell = createdSpell
        next()
      }
    })
  },
  // Edit
  // Show
  show (req, res, next) {
    Spell.findById(req.params.id, (err, foundSpell) => {
      if (err) {
        res.status(404).send({
          msg: err.message,
          output: 'Could not find a spell with that ID'
        })
      } else {
        res.locals.data.spell = foundSpell
        next()
      }
    })
  }
}

module.exports = dataController
