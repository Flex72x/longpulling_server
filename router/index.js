const Router = require('express').Router
const MessageController = require('../controllers/message-controller')

const router = new Router()

router.get('/getMessage', MessageController.getMessage)

router.post('/sendMessage', MessageController.sendMessage)

module.exports = router