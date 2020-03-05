const User = require('../model/UserModel')

class CreatNewUser {
  static async createUser (name, email, hashPass, cpf, age) {
    try {
      const response = await User.create({
        name,
        email,
        password: hashPass,
        cpf,
        age
      })
      return response
    } catch (error) {
      return false
    }
  }
}

module.exports = CreatNewUser
