const { isInRole } = require('./is-in-role')
const {
  SFD_VIEW,
  ORGANISATION_AMEND,
  ORGANISATION_VIEW,
  AHWP_SUBMIT,
  AHWP_AMEND,
  AHWP_VIEW
} = require('../scopes')

const mapAuth = (request) => {
  return {
    isAuthenticated: request.auth.isAuthenticated,
    isAnonymous: !request.auth.isAuthenticated,
    isUser: request.auth.isAuthenticated && isInRole(request.auth.credentials, SFD_VIEW),
    isOrganisationAmendUser: request.auth.isAuthenticated && isInRole(request.auth.credentials, ORGANISATION_AMEND),
    isOrganisationViewUser: request.auth.isAuthenticated && isInRole(request.auth.credentials, ORGANISATION_VIEW),
    isAhwpSubmitUser: request.auth.isAuthenticated && isInRole(request.auth.credentials, AHWP_SUBMIT),
    isAhwpAmendUser: request.auth.isAuthenticated && isInRole(request.auth.credentials, AHWP_AMEND),
    isAhwpViewUser: request.auth.isAuthenticated && isInRole(request.auth.credentials, AHWP_VIEW),
    credentials: request.auth.credentials
  }
}

module.exports = {
  mapAuth
}
