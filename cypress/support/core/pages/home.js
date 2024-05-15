import Commands from '../commands';

export default class Home extends Commands {
  // Locator Region
  constructor() {
    super();
    this.homeRoute = '**/localhost:3001/login';
    this.myAccount = '[href="\/user\/settings"] .MuiTypography-displayBlock';
    this.nextButton = '[data-test="user-onboarding-next"]';
    this.createBankAccountTitle = '[data-test="user-onboarding-dialog-title"]';
    this.bankNameField = '#bankaccount-bankName-input';
    this.routingNumber = '#bankaccount-routingNumber-input';
    this.accountNumber = '#bankaccount-accountNumber-input';
    this.saveButton = '[data-test="bankaccount-submit"]';
    this.doneButton = '[data-test="user-onboarding-next"]';
    this.logoutButton = 'div[role="button"]  .MuiListItemText-primary.MuiTypography-body1.MuiTypography-displayBlock.MuiTypography-root';
    
    
  
  
  }

   /**
    * Home loading state
    * @returns {void} void
    */
   homePageLoadingResponse() {
    cy.intercept(this.homeRoute)
        .as('homePageLoading');
  }

  /**
    * Wait for Home page to load
    * @returns {void} void
    */
   waitHomePageLoadingResponse() {
    cy.wait('@homePageLoading')
        .its('response.statusCode')
        .should('eq', 200);
  }

  /**
   * Clicks on My Account link
   * @returns {void} void
   */
  clickOnMyAccountLink() {
    this.clickOnElement(this.myAccount);
  }

  /**
   * Clicks on Next button
   * @returns {void} void
   */
  clickOnNextButton() {
    this.clickOnElement(this.nextButton);
  }

  /**
   * Verify Create Bank Account title
   * @returns {void} void
   */
  verifyCreateBankAccountTitle(text) {
    this.verifyVisibilityOfElementWithText(this.createBankAccountTitle, text);
  }

  /**
   * Populates Bank name field
   * @param {string} value - username
   * @returns {void} void
   */
  populateBankNameField(value) {
    this.clearAndPopulateTextElement(this.bankNameField, value);
  }

   /**
   * Populates Routing Number field
   * @param {string} value - username
   * @returns {void} void
   */
   populateRoutingNumberField(value) {
    this.clearAndPopulateTextElement(this.routingNumber, value);
  }

   /**
   * Populates Account Number field
   * @param {string} value - username
   * @returns {void} void
   */
   populateAccountNumberField(value) {
    this.clearAndPopulateTextElement(this.accountNumber, value);
  }

  /**
   * Clicks on Save button
   * @returns {void} void
   */
   clickOnSaveButton() {
    this.clickOnElement(this.saveButton);
  }

  /**
   * Clicks on Done button
   * @returns {void} void
   */
  clickOnDoneButton() {
    this.clickOnElement(this.doneButton);
  }

  /**
   * Clicks on logout button
   * @returns {void} void
   */
  clickOnLogoutButton() {
    this.clickOnElement(this.logoutButton);
  }


  

  



  

  

  }
