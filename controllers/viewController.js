const RESOURCE_PATH = '/spell'

const viewController = {
  index (req, res, next) {
    res.render('spell/Index', res.locals.data)
  },
  newView (req, res, next) {
    res.render('spell/New')
  },
  edit (req, res, next) {
    res.render('spell/Edit', res.locals.data)
  },
  show (req, res, next) {
    res.render('spell/Show', res.locals.data)
  },
  redirectHome (req, res, next) {
    res.redirect(RESOURCE_PATH)
  },
  redirectShow (req, res, next) {
    const spellId = req.params.id || res.locals.data.spell._id
    res.redirect(`${RESOURCE_PATH}/${spellId}`)
  }

}

module.exports = viewController
