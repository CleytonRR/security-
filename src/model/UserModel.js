const driver = require('../config/db/index')
const Sequelize = require('sequelize')
const Call = require('./CallModel')

const User = driver.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },

  password: {
    type: Sequelize.STRING,
    allowNull: false
  },

  cpf: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },

  age: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  master: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

User.hasMany(Call, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
})

module.exports = User
