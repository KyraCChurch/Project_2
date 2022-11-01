const RESOURCE_PATH = '/products'

const viewController = {
    index (req, res, next) {
      res.render('products/Index', res.locals.data)
    },
    newView (req, res, next) {
      res.render('products/New')
    },
    edit (req, res, next) {
      res.render('products/Edit', res.locals.data)
    },
    show (req, res, next) {
      res.render('products/Show', res.locals.data)
    },
    redirectHome (req, res, next) {
      res.redirect(RESOURCE_PATH)
    },
    redirectShow (req, res, next) {
      const productId = req.params.id || res.locals.data.product._id
      res.redirect(`${RESOURCE_PATH}/${productId}`)
    }
  
  }
  
  module.exports = viewController