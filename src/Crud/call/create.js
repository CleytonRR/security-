const Call = require('../../model/CallModel')

class CreateNewCall {
  static async createCall (title, description, latitude, longitude, date, userId) {
    try {
      const point = { type: 'Point', coordinates: [latitude, longitude] }
      const response = await Call.create({
        title,
        description,
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
