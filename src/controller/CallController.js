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
  },

  async listCalls (req, res) {
    const id = await TokenData.getId(req.headers.authorization)
    try {
      const response = await showCalls.checkCalls(id)
      return res.status(200).json(response)
    } catch (error) {
      res.status(500).json({ message: 'Erro to find calls' })
    }
  }
}
