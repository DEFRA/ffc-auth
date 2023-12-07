const Wreck = require('@hapi/wreck')
const { authHost } = require('./config')

const validateToken = async (decoded, _request, _h) => {
  const { payload } = await Wreck.post(`${authHost}/auth/validate`, {
    payload: {
      token: decoded
    },
    json: true
  })
  return payload
}

module.exports = {
  validateToken
}
