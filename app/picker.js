const { AUTH_COOKIE_NAME } = require('./constants/cookies')
const { parseJwt } = require('./parse-jwt')
const { gatewayHost } = require('./config')

const picker = (request, h) => {
  // if (!request.query.organisationId) {
  //   return h.continue
  // }

  // check if session cookie is present

  // check organisationId matches query param

  // if not redirect to picker passing organisationId and current path

  return h.continue
}

module.exports = {
  picker
}
