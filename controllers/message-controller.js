const events = require('events')

const emitter = new events.EventEmitter()

class MessageController {
    sendMessage(req, res) {
        try {
            const message = req.body
            emitter.emit('newMessage', message)
            res.status(200).end()
        } catch (e) {
            console.log(e)
        }
    }

    getMessage(req, res) {
        try {
            emitter.once('newMessage', (message) => {
                res.json(message).end()
            })
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new MessageController()