const CreateNewCall = require('../Crud/call/create')
const showCalls = require('../Crud/call/show')
const AtualDate = require('../util/corretDate')
const TokenData = require('../util/tokenDatas')

module.exports = {
  async create (req, res) {
    const datas = req.body
    const status = true
    const id = await TokenData.getId(req.headers.authorization)
    try {
      CreateNewCall.createCall(
        datas.title,
        datas.description,
        status,
        datas.latitude,
        datas.longitude,
        AtualDate.dateNow(),
        id
      )
      res.status(201).json({ message: 'Created success' })
    } catch (error) {
      res.status(400).json({ message: 'Erro ao salvar' })
    }
  }
}
