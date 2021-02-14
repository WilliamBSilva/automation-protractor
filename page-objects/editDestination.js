const DestinationComponet = require('./components/destination')
const HeaderComponent = require('./components/header')
const FormComponet = require('./components/form')

const randomNumberBetweenOneAnd = require('../utils/randomNumberBetweenOneAndOther')
const { browser } = require('protractor')

class editDestination {
  constructor () {
    this.header = new HeaderComponent()
    this.self = new DestinationComponet()
    this.form = new FormComponet()
  }

  visit () {
    browser.get(`/destinations/${randomNumberBetweenOneAnd(15)}/edit`)
  }
}

module.exports = editDestination
