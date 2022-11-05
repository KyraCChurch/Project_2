const RESOURCE_PATH = '/spells'

const viewController = {
  index (req, res, next) {
    res.render('spells/Index', res.locals.data)
  },
  newView (req, res, next) {
    res.render('spells/New')
  },
  edit (req, res, next) {
    res.render('spells/Edit', res.locals.data)
  },
  show (req, res, next) {
    res.render('spells/Show', res.locals.data)
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
