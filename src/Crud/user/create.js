const User = require('../../model/UserModel')

class CreatNewUser {
  static async createUser (name, email, hashPass, cpf, age, master = false) {
    try {
      const response = await User.create({
        name,
        email,
        password: hashPass,
        cpf,
        age,
        master
      })
      return response
    } catch (error) {
      return false
    }
  }
}

module.exports = CreatNewUser
