const helper = require('protractor-helper')

const Destination = require('../page-objects/destination')

describe('Give I\'m at a random destination page', () => {
  let destination

  beforeEach(() => {
    destination = new Destination()
    destination.visit()
  })

// Teste
  it('Then I see  an image, a heading, a paragraph, and a anchor', () => {
    helper.waitForElementVisibility(destination.self.image)
    helper.waitForElementVisibility(destination.self.heading)
    helper.waitForElementVisibility(destination.self.paragraph)
    helper.waitForElementVisibility(destination.self.anchor)
  })
})
