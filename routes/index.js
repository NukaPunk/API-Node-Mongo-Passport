const express = require('express')
const router = express.Router()
const auth = require('../libs/auth')


/**
 * GET: Redirect Homepage to login page.
 * */
router.get('/', auth.IsAuthenticated, function (req, res, next) {
  res.render('index.ejs',
    {
      user: req.user
    })
})

console.log('index loaded')

module.exports = router
