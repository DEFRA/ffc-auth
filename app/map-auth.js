const { isInRole } = require('./is-in-role')
const { SFD_VIEW } = require('../scopes')

const mapAuth = (request) => {
  return {
    isAuthenticated: request.auth.isAuthenticated,
    isAnonymous: !request.auth.isAuthenticated,
    isUser: request.auth.isAuthenticated && isInRole(request.auth.credentials, SFD_VIEW),
    credentials: request.auth.credentials
  }
}

module.exports = {
  mapAuth
}
