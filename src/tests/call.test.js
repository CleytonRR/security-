/* eslint-env mocha */
require('dotenv').config()
const assert = require('assert')
const app = require('../index')
const PassHash = require('../util/passwordHash')
const CreateNewUser = require('../Crud/user/create')
const User = require('../model/UserModel')
const Call = require('../model/CallModel')
const CreateNewCall = require('../Crud/call/create')
const AtualDate = require('../util/corretDate')

const mockUser = {
  name: 'any name',
  email: 'any_email@gmail.com',
  password: 'asdqweAA_11',
  cpf: '405.661.313-31',
  age: 11
}

const mockCall = {
  title: 'Police Emergy',
  description: 'Im being attacked by wolves',
  latitude: -3.4628048,
  longitude: -41.5550305

}

var datas = ''

describe.only('Suite tests for ensure correct Calls', function () {
  this.beforeAll(async function () {
    await User.sync({ force: true })
  })

  this.beforeAll(async function () {
    await Call.sync()
  })

  this.beforeAll(async function () {
    var passwordHash = await PassHash.generatorHash(mockUser.password)
    const response = await CreateNewUser.createUser(mockUser.name, mockUser.email, passwordHash, mockUser.cpf, mockUser.age)
    datas = response.id
  })

  this.afterAll(async function () {
    await Call.drop()
  })

  this.afterAll(async function () {
    await User.drop()
  })

  it('ensure correct create', async () => {
    const date = AtualDate.dateNow()
    const response = await CreateNewCall.createCall(mockCall.title, mockCall.description, mockCall.latitude, mockCall.longitude, date, datas)
    assert.deepStrictEqual(mockCall.title, response.title)
  })
})
