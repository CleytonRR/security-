const driver = require('../config/db/index')
const Sequelize = require('sequelize')
const User = require('./UserModel')

const Call = driver.define('call', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.STRING,
    allowNull: false
  },

  status: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  },

  local: {
    type: Sequelize.GEOMETRY('POINT'),
    allowNull: false
  },

  created: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
}, {
  timestamps: false
})

Call.belongsTo(User)

module.exports = Call
