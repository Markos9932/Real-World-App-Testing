import Commands from '../commands';

export default class Bank_account extends Commands {
  // Locator Region
  constructor() {
    super();
    this.bankAccountHeader = '.MuiTypography-h6.MuiTypography-gutterBottom';
    this.bankAccountDelete = '[data-test="bankaccount-delete"]';
    this.bankAccountCreate = '[data-test="bankaccount-new"]';
    this.createAccountHeader = '.MuiTypography-colorPrimary.MuiTypography-gutterBottom';
    this.bankNameField = '#bankaccount-bankName-input';
    this.routingNumber = '#bankaccount-routingNumber-input';
    this.accountNumber = '#bankaccount-accountNumber-input';
    this.saveButton = '[data-test="bankaccount-submit"]';
    this.bankAccountText = '[data-test="bankaccount-list"]';
   
  }

    /**
   * Verify  Bank Account Header
   * @returns {void} void
   */
  verifyBankAccountHeader(text) {
    this.verifyVisibilityOfElementWithText(this.bankAccountHeader, text);
  }

  /**
   * Clicks on Delete button
   * @returns {void} void
   */
  clickOnDeleteButton() {
    this.clickOnElement(this.bankAccountDelete);
  }

  /**
   * Clicks on Create button
   * @returns {void} void
   */
  clickOnCreateButton() {
    this.clickOnElement(this.bankAccountCreate);
  }

   /**
   * Verify  Create Account Header
   * @returns {void} void
   */
   verifyCreateAccountHeader(text) {
    this.verifyVisibilityOfElementWithText(this.createAccountHeader, text);
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
   * Verify  Bank Account title
   * @returns {void} void
   */
  verifyBankAccountTitle(text) {
    this.verifyVisibilityOfElementWithText(this.bankAccountText, text);
  }

}
