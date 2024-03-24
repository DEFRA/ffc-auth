const { gatewayHost } = require('../config')

const handle401 = (request, h) => {
  if (request.response.output.statusCode === 401) {
    if (request.response.message === 'Invalid session') {
      return h.redirect(`${gatewayHost}/auth/sign-in?redirect=${request.url.pathname}&invalidSession=true`)
    }
    return h.redirect(`${gatewayHost}/auth/sign-in?redirect=${request.url.pathname}`)
  }
}

module.exports = {
  handle401
}
