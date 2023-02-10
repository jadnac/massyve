const authController = require('../controllers/auth.controller')
const router = require('express').Router()

router.post('/login', authController.Login)

router.post('/register', authController.Register)

module.exports = router