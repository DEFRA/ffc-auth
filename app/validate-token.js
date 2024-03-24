const Wreck = require('@hapi/wreck')
const { authHost } = require('./config')
const { SESSION_COOKIE_NAME } = require('./constants/cookies')

const validateToken = async (decoded, request, h) => {
  if (decoded.exp * 1000 - Date.now() <= 600 * 1000) {
    return h.redirect(`${authHost}/auth/refresh?redirect=${request.url.pathname}`)
  }

  const { payload } = await Wreck.post(`${authHost}/auth/validate`, {
    payload: {
      session: request.state[SESSION_COOKIE_NAME],
      token: decoded
    },
    json: true
  })
  return payload
}

module.exports = {
  validateToken
}
