const Joi = require('joi')

const schema = Joi.object().keys({
  authHost: Joi.string().required()
})

const config = {
  authHost: process.env.FCP_AUTH_HOST || process.env.AUTH_HOST
}

const { error, value } = schema.validate(config)

if (error) {
  throw new Error(`The auth library config is invalid. ${error.message}`)
}

module.exports = value
