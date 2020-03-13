const Call = require('../../model/CallModel')

class updateCalls {
  static async updateCalls (idCall) {
    try {
      const response = await Call.update({ status: false }, {
        where: {
          id: idCall
        }
      })
      return response
    } catch (error) {
      console.log('Erro to update call')
    }
  }
}

module.exports = updateCalls
