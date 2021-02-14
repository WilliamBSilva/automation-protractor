const DestinationsComponent = require('./components/destination')
const HeaderComponent = require('./components/header')

const randomNumberBetweenOneAnd = require('../utils/randomNumberBetweenOneAndOther')
class Destination {
  constructor () {
    this.header = new HeaderComponent()
    this.self = new DestinationsComponent()
  }

  visit () {
    browser.get(`/destinations/${randomNumberBetweenOneAnd(15)}`)
  }
}

module.exports = Destination
