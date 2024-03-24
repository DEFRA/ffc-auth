const { AUTH_COOKIE_NAME } = require('./constants/cookies')
const { parseJwt } = require('./parse-jwt')
const { gatewayHost } = require('./config')

const refreshToken = (request, h) => {
  if (request.path.includes('/assets/')) {
    return h.continue
  }

  const token = request.state[AUTH_COOKIE_NAME]

  if (!token) {
    return h.continue
  }

  const decoded = parseJwt(token)

  if (decoded.exp * 1000 - Date.now() <= 600 * 1000) {
    return h.redirect(`${gatewayHost}/auth/refresh?redirect=${request.url.pathname}`).takeover()
  }

  return h.continue
}

module.exports = {
  refreshToken
}
