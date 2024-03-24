const { mapAuth } = require('./map-auth')
const { getPublicKey } = require('./get-public-key')
const { validateToken } = require('./validate-token')
const { strategy } = require('./strategy')
const { handle401 } = require('./handle-401')

module.exports = {
  mapAuth,
  getPublicKey,
  validateToken,
  strategy,
  handle401
}
