const Call = require('../../model/CallModel')

class CreateNewCall {
  static async createCall (title, description, status = true, latitude, longitude, date, userId) {
    try {
      await Call.sync()
      const point = { type: 'Point', coordinates: [latitude, longitude] }
      const response = await Call.create({
        title,
        description,
        status,
        local: point,
        created: date,
        userId
      })
      return response
    } catch (error) {
      console.log('erro aqui: ' + error)
      return error
    }
  }
}

module.exports = CreateNewCall
