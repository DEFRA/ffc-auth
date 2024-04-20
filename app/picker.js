const { gatewayHost } = require('./config')

const picker = (request, h) => {
  if (!request.headers.organisationId) {
    return h.continue
  }

  return h.redirect(`${gatewayHost}/auth/picker/external?redirect=${request.url.pathname}&organisationId=${request.headers.organisationId}`).takeover()
}

module.exports = {
  picker
}
