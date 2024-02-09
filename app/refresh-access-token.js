const Wreck = require('@hapi/wreck')

const refreshAccessToken = async (refreshToken, config) => {
  const { payload: wellKnown } = await Wreck.get(config.wellKnownUrl, {
    json: true
  })

  const query = [
    `client_id=${config.clientId}`,
    `client_secret=${config.clientSecret}`,
    'grant_type=refresh_token',
    `scope=openid offline_access ${config.clientId}`,
    `refresh_token=${refreshToken}`,
    `redirect_uri=${config.redirectUrl}`
  ].join('&')

  const { payload } = await Wreck.post(`${wellKnown.url}?${query}`, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    json: true
  })

  return payload
}

module.exports = {
  refreshAccessToken
}
