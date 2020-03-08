const driver = require('../config/db/index')
const Sequelize = require('sequelize')

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
    defaultValue: new Date().toLocaleString()
  }
}, {
  timestamps: false
})

module.exports = Call
