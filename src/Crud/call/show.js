const Call = require('../../model/CallModel')
const Verify = require('../../util/verifyMaster')

class showCalls {
  static async checkCalls (id) {
    try {
      if (await Verify.verifyMaster(id)) {
        const response = await Call.findAll({
          where: {
            status: true
          }
        })
        return response
      }
      const response = await Call.findAll({
        where: {
          userId: id,
        }
      })
      return response
    } catch (error) {
      console.log('Error to find call association with user')
    }
  }
}

module.exports = showCalls
