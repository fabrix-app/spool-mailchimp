import * as joi from 'joi'

export const mailchimpConfig = joi.object().keys({
  api_key: joi.string().allow('', null)
}).unknown()
