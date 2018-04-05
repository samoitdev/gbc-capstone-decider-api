let express = require('express')
let router = require('express-promise-router')()

let UsersController = require('../controllers/users')

router.route('/signup').post(UsersController.signUp)

router.route('/signin').post(UsersController.signIn)

router.route('/secret').get(UsersController.secret)

module.exports = router
