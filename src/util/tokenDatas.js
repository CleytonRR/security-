const jwt = require('jsonwebtoken')

class TokenData {
  static async getId (tokenBeer) {
    const token = tokenBeer.split(' ')[1]
    try {
      const datasToken = await jwt.verify(token, process.env.JWT_KEY)
      return datasToken.id
    } catch (error) {
      return false
    }
  }
}

module.exports = TokenData
