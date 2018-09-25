/* eslint no-console: [0] */
'use strict'

const joi = require('joi')
import { mailchimpConfig } from './schemas'

export const Validator = {

  // Validate Mailchimp Config
  validateMailchimpConfig (config) {
    return new Promise((resolve, reject) => {
      joi.validate(config, mailchimpConfig, (err, value) => {
        if (err) {
          return reject(new TypeError('config.mailchimp: ' + err))
        }
        return resolve(value)
      })
    })
  }
}
