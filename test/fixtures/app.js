'use strict'

module.exports = {
  pkg: {
    name: require('../../package').name + '-test'
  },
  api: {
    models: {},
    controllers: {},
    services: {}
  },
  config: {
    mailchimp: {
      api_key: process.env.MAILCHIMP_API_KEY
    },
    main: {
      spools: [
        require('../../dist').MailchimpSpool
      ]
    }
  }
}


