const { mapAuth } = require('./map-auth')
const { getPublicKey } = require('./get-public-key')
const { validateToken } = require('./validate-token')
const { scopes } = require('./scopes')

module.exports = {
  mapAuth,
  getPublicKey,
  validateToken,
  scopes
}
