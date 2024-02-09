const Wreck = require('@hapi/wreck')

const refreshAccessToken = async (refreshToken, config, wellKnownUrl) => {
  const { payload: wellKnownUrlPayload } = await Wreck.get(config.wellKnownUrl, {
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

  const { payload: refreshTokenPayload } = await Wreck.post(`${wellKnownUrlPayload}?${query}`, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    json: true
  })

  return refreshTokenPayload
}

module.exports = {
  refreshAccessToken
}
