const TokenData = require('../util/tokenDatas')
const Verify = require('../util/verifyMaster')

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization
    const id = await TokenData.getId(token)
    if (await Verify.verifyMaster(id)) {
      next()
    } else {
      return res.status(401).json({ message: 'user not master' })
    }
  } catch (error) {
    return res.status(500).json({ message: 'Internal error' })
  }
}
