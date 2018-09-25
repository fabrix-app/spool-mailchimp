import { ExtensionSpool } from '@fabrix/fabrix/dist/common/spools/extension'
import { Validator } from './validator'
const Mailchimp = require('mailchimp-api-v3')

import * as config from './config/index'
import * as pkg from '../package.json'
import * as api  from './api/index'

export class MailchimpSpool extends ExtensionSpool {
  public mailchimp: {[key: string]: any} = {}
  constructor(app) {
    super(app, {
      config: config,
      pkg: pkg,
      api: api
    })

    this.extensions = {
      mailchimp: {
        get: () => {
          return this.mailchimp
        },
        set: (newInstances) => {
          this.mailchimp = newInstances
          // throw new Error('mailchimp can not be set through FabrixApp, check spool-mailchimp instead')
        },
        enumerable: true,
        configurable: true
      }
    }
  }

  /**
   * Validate Configuration
   */
  async validate () {
    // const requiredSpools = [ 'router' ]
    // const spools = Object.keys(this.app.spools)
    //
    // if (!spools.some(v => requiredSpools.indexOf(v) >= 0)) {
    //   return Promise.reject(new Error(`spool-mailchimp requires spools: ${ requiredSpools.join(', ') }!`))
    // }

    if (!this.app.config.get('mailchimp')) {
      return Promise.reject(new Error('No configuration found at config.mailchimp!'))
    }

    return Promise.all([
      Validator.validateMailchimpConfig(this.app.config.get('mailchimp'))
    ])
      .catch(err => {
        return Promise.reject(err)
      })
  }

  /**
   * Check if there some stores, if not set a default one
   */
  configure() {
    this.mailchimp = new Mailchimp(this.app.config.get('mailchimp.api_key'))
  }

  /**
   * create caching stores
   */
  async initialize() {
    // return Mailchimp.init(this.app)
  }

  /**
   * unload caching stores
   */
  async unload() {
    // return Mailchimp.unload(this.app)
  }
}
