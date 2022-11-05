const apiController = {
  index (req, res, next) {
    res.json(res.locals.data.spells)
  },
  show (req, res, next) {
    res.json(res.locals.data.spell)
  }
}

module.exports = apiController
