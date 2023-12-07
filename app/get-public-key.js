const Wreck = require('@hapi/wreck')
const { authHost } = require('../config')

const getPublicKey = async () => {
  const { payload } = await Wreck.get(`${authHost}/auth/public-key`, { json: true })
  return payload
}

module.exports = {
  getPublicKey
}
