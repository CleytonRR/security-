/* eslint-env mocha */
require('dotenv').config()
const assert = require('assert')
const request = require('supertest')
const app = require('../index')
const PassHash = require('../util/passwordHash')
const CreateNewUser = require('../Crud/user/create')
const User = require('../model/UserModel')
const Call = require('../model/CallModel')
const CreateNewCall = require('../Crud/call/create')
const showCalls = require('../Crud/call/show')
const AtualDate = require('../util/corretDate')
const GeneratorToken = require('../util/generatorToken')

const mockUser = {
  name: 'any name',
  email: 'any_email@gmail.com',
  password: 'asdqweAA_11',
  cpf: '405.661.313-31',
  age: 11,
  master: false
}

const mockUserMaster = {
  name: 'other name',
  email: 'other_email@gmail.com',
  password: 'asdqweQQ12@@',
  cpf: '549.838.060-75',
  age: 30,
  master: true
}

const mockCall = {
  title: 'Police Emergy',
  description: 'Im being attacked by wolves',
  status: true,
  latitude: -3.4628048,
  longitude: -41.5550305
}

var idUser = ''
var idUserMaster = ''
var tokenUser = ''
var tokenUserMaster = ''
var idCall = ''

describe.only('Suite tests for ensure correct Calls', function () {
  this.beforeAll(async function () {
    await User.sync({ force: true })
  })

  this.beforeAll(async function () {
    await Call.sync()
  })

  this.beforeAll(async function () {
    var passwordHash = await PassHash.generatorHash(mockUser.password)
    var passHashMaster = await PassHash.generatorHash(mockUserMaster.password)
    const responseMaster = await CreateNewUser.createUser(mockUserMaster.name, mockUserMaster.email, passHashMaster, mockUserMaster.cpf, mockUserMaster.age, mockUserMaster.master)
    const response = await CreateNewUser.createUser(mockUser.name, mockUser.email, passwordHash, mockUser.cpf, mockUser.age, mockUser.master)
    idUserMaster = responseMaster.id
    idUser = response.id
    tokenUser = GeneratorToken.token(idUser, mockUser.email)
    tokenUserMaster = GeneratorToken.token(idUserMaster, mockUserMaster.email)
  })

  this.afterAll(async function () {
    await Call.drop()
  })

  this.afterAll(async function () {
    await User.drop()
  })

  it('ensure correct create', async () => {
    const date = AtualDate.dateNow()
    const response = await CreateNewCall.createCall(mockCall.title, mockCall.description, mockCall.status, mockCall.latitude, mockCall.longitude, date, idUser)
    await CreateNewCall.createCall('Teste for this', mockCall.description, mockCall.status, mockCall.latitude, mockCall.longitude, date, idUser)
    idCall = response.id
    assert.deepStrictEqual(mockCall.title, response.title)
  })

  it('Ensure correct list of calls with status true for user', async () => {
    const response = await showCalls.checkCalls(idUser)
    assert.strictEqual(2, response.length)
  })

  it('Ensure correct list of calls with all status true for user master', async () => {
    const response = await showCalls.checkCalls(idUserMaster)
    assert.strictEqual(2, response.length)
  })

  it('Ensure correct created in route', async () => {
    const response = await request(app).post('/newcall').send(mockCall).set({ authorization: 'beer ' + tokenUser, Accept: 'application/json' })
    assert.deepStrictEqual('Created success', response.body.message)
  })

  it('Ensure correct return of list calls basead in user id', async () => {
    const response = await request(app).get('/calls').set({ authorization: 'beer ' + tokenUser, Accept: 'application/json' })
    assert.deepStrictEqual(3, response.body.length)
  })

  it('Ensure correct update status for true', async () => {
    const response = await request(app).put('/changecall').send({ id: idCall }).set({ authorization: 'beer ' + tokenUserMaster, Accept: 'application/json' })
    assert.deepStrictEqual(200, response.status)
    assert.deepStrictEqual(1, response.body[0])
  })
})
