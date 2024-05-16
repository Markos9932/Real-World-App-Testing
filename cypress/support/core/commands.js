export default class Commands {
  constructor() {
    this.waitInterval = 30000;
  }

  /**
   * Verify visibility of element with locator and text
   * @param {string} locator - Element locator
   * @param {string} text - Element text
   * @returns {void} void
   */
verifyVisibilityOfElementWithText(locator, text) {
  cy.get(locator, { timeout: this.waitInterval })
    .contains(text)
    .should('be.visible');
  }

   /**
   * Verify enabled element with locator
   * @param {string} locator - Element locator
   * @returns {void} void
   */
verifyEnabledElement(locator) {
  cy.get(locator, { timeout: this.waitInterval })
    .should('be.enabled');
}

  /**
   * Verify disabled element with locator
   * @param {string} locator - Element locator
   * @returns {void} void
   */
verifyDisabledElement(locator) {
    cy.get(locator, { timeout: this.waitInterval })
      .should('be.disabled');
  }

  /**
 * Clear and Populate text element by provided locator
 * @param {string} locator - Element locator
 * @param {string} value - Text Value
 * @returns {void} void
 */
clearAndPopulateTextElement(locator, value) {
  cy.get(locator, { timeout: this.waitInterval })
    .clear()
    .type(value);
}

/**
   * Verify visibility of element with locator
   * @param {string} locator - Element locator
   * @returns {void} void
   */
verifyVisibilityOfElement(locator) {
  cy.get(locator, { timeout: this.waitInterval })
    .should('be.visible')
    .and('not.be.disabled');
}

/**
 * Click on element by provided locator
 * @param {string} locator - Element locator
 * @returns {void} void
 */
clickOnElement(locator) {
  this.verifyVisibilityOfElement(locator);

  cy.get(locator, { timeout: this.waitInterval })
    .click();
}

 /**
   * Verify visibility of value in element with locator and text
   * @param {string} locator - Element locator
   * @param {string} text - Element text
   * @returns {void} void
   */
 verifyVisibilityOfElementWithValue(locator, text) {
  cy.get(locator, { timeout: this.waitInterval })
    .should('have.value', text);
}

/**
   * Waiting method for usage in uper layers
   * @param {string} value - Time in ms
   * @returns {void} void
   */
waitPeriod(value) {
  cy.wait(value);
}

 /**
   * Verify visibility of text with provided text
   * @param {string} text - Element text
   * @returns {void} void
   */
 verifyVisibilityOfText(text) {
  cy.contains(text, { timeout: this.waitInterval })
    .should('be.visible');
}







 


 
 




}