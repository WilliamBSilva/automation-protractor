const { browser } = require('protractor')
const HeaderComponent = require('./components/header')
const DestinationComponent = require('./components/destinations')

const randomNumberBetweenOneAnd = require('../utils/randomNumberBetweenOneAndOther')
class Tag {
  constructor () {
    this.header = new HeaderComponent()
    this.destinations = new DestinationComponent()
  }

  visit () {
    browser.get(`/tags/${randomNumberBetweenOneAnd(5)}`)
  }
}

module.exports = Tag
