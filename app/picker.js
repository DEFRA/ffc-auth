const { gatewayHost } = require('./config')

const picker = (request, h) => {
  if (!request.query.organisationId) {
    return h.continue
  }

  return h.redirect(`${gatewayHost}/auth/picker/external?redirect=${request.url.pathname}&organisationId=${request.query.organisationId}`).takeover()
}

module.exports = {
  picker
}
