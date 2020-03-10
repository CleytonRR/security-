const User = require('../model/UserModel')

class Verify {
  static async verifyMaster (id) {
    try {
      const response = await User.findOne({
        where: {
          id
        }
      })
      if (response.master === true) {
        return true
      }

      return false
    } catch (error) {
      return 'Erro to check if user is master'
    }
  }
}

module.exports = Verify
