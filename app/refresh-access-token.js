const Wreck = require('@hapi/wreck')
const { authHost } = require('./config')

const refreshAccessToken = async (decoded, _request, _h) => {
  const { payload } = await Wreck.get(`${authHost}/auth/refresh`, {
    payload: {
      token: decoded,
      refreshToken: decoded
    },
    json: true
  })
  return payload
}

module.exports = {
  refreshAccessToken
}
