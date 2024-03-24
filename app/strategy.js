const { RS256 } = require('./constants/algorithms')
const { AUTH_COOKIE_NAME } = require('./constants/cookies')
const { getPublicKey } = require('./get-public-key')
const { validateToken } = require('./validate-token')

const strategy = {
  key: getPublicKey,
  cookieKey: AUTH_COOKIE_NAME,
  validate: validateToken,
  verifyOptions: {
    algorithms: [RS256]
  }
}

module.exports = {
  strategy
}
