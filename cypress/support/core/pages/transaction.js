import Commands from '../commands';

export default class Transaction extends Commands {
  // Locator Region
  constructor() {
    super();
    this.searchField = '#user-list-search-input';
    this.userList = '.MuiListItemText-root.MuiListItemText-multiline';
    this.amount = '#amount';
    this.note = '#transaction-create-description-input';
    this.payButton = '[data-test="transaction-create-submit-payment"]';
    this.transactionHeader = '.MuiGrid-justify-content-xs-center .MuiTypography-gutterBottom';
    this.returnToTransButton = '[data-test="new-transaction-return-to-transactions"]';
    this.createAnotherTrans = '[data-test="new-transaction-create-another-transaction"]';
    this.newTransactionContainer = '.MuiListItemText-root.MuiListItemText-multiline'
 
   }

   /**
   * Populates search field
   * @param {string} value - username
   * @returns {void} void
   */
  populateSearchField(value) {
    this.clearAndPopulateTextElement(this.searchField, value);
  }

   /**
   * Clicks User list
   * @returns {void} void
   */
  clickOnUserListButton() {
    this.clickOnFirstElement(this.userList);
  }

  /**
   * Populates amount field
   * @param {string} value - username
   * @returns {void} void
   */
  populateAmountField(value) {
    this.clearAndPopulateTextElement(this.amount, value);
  }

  /**
   * Verify Amount field
   * @returns {void} void
   */
  verifyAmountField(value) {
    this.verifyVisibilityOfElementWithValue(this.amount, value);
  }

  /**
   * Populates add a note field
   * @param {string} value - username
   * @returns {void} void
   */
  populateNoteField(value) {
    this.clearAndPopulateTextElement(this.note, value);
  }

  /**
   * Clicks on Pay Button
   * @returns {void} void
   */
  clickOnPayButton() {
    this.clickOnElement(this.payButton);
  }

   /**
   * Verify Payment Header title
   * @returns {void} void
   */
   verifyPaymentHeader(text) {
    this.verifyVisibilityOfElementWithText(this.transactionHeader, text);
  }

   /**
   * Clicks on Return to transactions button
   * @returns {void} void
   */
   clickReturnToTransButton() {
    this.clickOnElement(this.returnToTransButton);
  }

   /**
   * Clicks Create another transaction button
   * @returns {void} void
   */
   clickCreateAnotherTransButton() {
    this.clickOnElement(this.createAnotherTrans);
  }

  /**
   * Clicks on Payment Container
   * @returns {void} void
   */
  clickOnPaymentElement(text) {
    this.clickOnPaymentContainer(this.newTransactionContainer, text);
  }

 }
