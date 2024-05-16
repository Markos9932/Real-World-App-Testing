import Commands from '../commands';

export default class Personal extends Commands {
  // Locator Region
  constructor() {
    super();
    this.personalRoute = '**/personal';
    this.transactionContainer = '.MuiListItem-root.MuiListItem-gutters.MuiListItem-alignItemsFlexStart';
    this.amountSlider = '[data-test="transaction-list-filter-amount-range-button"]';
    this.rangeSlider = 'data-test="transaction-list-filter-amount-range-slider"'
    
 
   }

   /**
    * Personal loading state
    * @returns {void} void
    */
   personalPageLoadingResponse() {
    cy.intercept(this.personalRoute)
        .as('personalPageLoading');
  }

  /**
    * Wait for personal page to load
    * @returns {void} void
    */
   waitPersonalPageLoadingResponse() {
    cy.wait('@personalPageLoading')
        .its('response.statusCode')
        .should('eq', 200);
  }

  /**
   * Verify data in container
   * @returns {void} void
   */
  verifyTransactionIsPresent(number, text) {
    this.verifyVisibilityAndUserDataInContainer(this.transactionContainer, number, text);
  }

  /**
   * Clicks on amount slider
   * @returns {void} void
   */
  clickOnAmmountSlider() {
    this.forceClickOnElement(this.amountSlider);
  }

  /**
   * Setting range of slider
   * @returns {void} void
   */
  settingSliderValue() {
    this.setSliderValue(this.rangeSlider);
  }



  

  
  



 

}
