# spool-mailchimp

[![Gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
[![Build Status][ci-image]][ci-url]
[![Test Coverage][coverage-image]][coverage-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Follow @FabrixApp on Twitter][twitter-image]][twitter-url]

:package: Mailchimp Spool

For Documentation see
[Mailchimp API V3](htigtps://www.npmjs.com/package/mailchimp-api-v3)


## Install
```sh
$ npm install --save @fabrix/spool-mailchimp
```

## Configure

```js
// config/main.ts
import { MailchimpSpool } from '@fabrix/spool-mailchimp'
export const main = {
  spools: [
    // ... other spools
    MailchimpSpool
  ]
}
```

## Configuration

```
// config/mailchimp.ts
export const mailchimp = {
  api_key: '<your_api_key>'
}
```

For more information about store (type and configuration) please see the mailchimp documentation.

## Usage

```js
  this.app.mailchimp.get(<api_action>)
  .then(mailchimp => {
    // Do something with your MAILCHIMP
  })
```

[npm-image]: https://img.shields.io/npm/v/@fabrix/spool-mailchimp.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@fabrix/spool-mailchimp
[ci-image]: https://img.shields.io/circleci/project/github/fabrix-app/spool-mailchimp/master.svg
[ci-url]: https://circleci.com/gh/fabrix-app/spool-mailchimp/tree/master
[daviddm-image]: http://img.shields.io/david/fabrix-app/spool-mailchimp.svg?style=flat-square
[daviddm-url]: https://david-dm.org/fabrix-app/spool-mailchimp
[gitter-image]: http://img.shields.io/badge/+%20GITTER-JOIN%20CHAT%20%E2%86%92-1DCE73.svg?style=flat-square
[gitter-url]: https://gitter.im/fabrix-app/fabrix
[twitter-image]: https://img.shields.io/twitter/follow/FabrixApp.svg?style=social
[twitter-url]: https://twitter.com/FabrixApp
[coverage-image]: https://img.shields.io/codeclimate/coverage/github/fabrix-app/spool-mailchimp.svg?style=flat-square
[coverage-url]: https://codeclimate.com/github/fabrix-app/spool-mailchimp/coverage

