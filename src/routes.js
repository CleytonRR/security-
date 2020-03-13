const { Router } = require('express')
const UserController = require('./controller/UserController')
const LoginController = require('./controller/LoginController')
const Authorization = require('./controller/Authorization')
const testLogin = require('./middleware/testLogin')
const testMaster = require('./middleware/testMaster')
const CallController = require('./controller/CallController')

const routes = Router()

routes.post('/user', UserController.create)
routes.post('/login', LoginController.authenticar)
routes.get('/private', testLogin, Authorization.private)
routes.post('/newcall', testLogin, CallController.create)
routes.get('/calls', testLogin, CallController.listCalls)
routes.put('/changecall', testLogin, testMaster, CallController.updateCall)

module.exports = routes
