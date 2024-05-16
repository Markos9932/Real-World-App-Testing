import Commands from '../commands';

export default class My_account extends Commands {
  // Locator Region
  constructor() {
    super();
    this.firstNameUserSett = '#user-settings-firstName-input';
    this.lastNameUserSett = '#user-settings-lastName-input';
    this.emailUserSett = '#user-settings-email-input';
    this.phoneSett = '#user-settings-phoneNumber-input';
    this.saveButton = 'main .MuiButton-label';
    this.homeLink = '.MuiList-padding.MuiList-root > div > a:nth-of-type(1)';
    this.sidenavFirstName = '[data-test="sidenav-user-full-name"]';
    this.sidenavUsername = '[data-test="sidenav-username"]';
    this.logoutButton = 'div[role="button"]  .MuiListItemText-primary.MuiTypography-body1.MuiTypography-displayBlock.MuiTypography-root';
  
  }

  /**
   * Populates First name field
   * @param {string} value - username
   * @returns {void} void
   */
  populateFirstNameField(value) {
    this.clearAndPopulateTextElement(this.firstNameUserSett, value);
  }

  /**
   * Populates Last name field
   * @param {string} value - username
   * @returns {void} void
   */
  populateLastNameField(value) {
    this.clearAndPopulateTextElement(this.lastNameUserSett, value);
  }

  /**
   * Populates Email field
   * @param {string} value - username
   * @returns {void} void
   */
  populateEmailField(value) {
    this.clearAndPopulateTextElement(this.emailUserSett, value);
  }

  /**
   * Populates Phone number field
   * @param {string} value - username
   * @returns {void} void
   */
  populatePhoneField(value) {
    this.clearAndPopulateTextElement(this.phoneSett, value);
  }

  /**
   * Clicks on Save button
   * @returns {void} void
   */
  clickSaveButton() {
    this.clickOnElement(this.saveButton);
  }

  /**
   * Clicks on Home link
   * @returns {void} void
   */
  clickHomeLink() {
    this.clickOnElement(this.homeLink);
  }

  /**
   * Verify sidenav user's first name
   * @returns {void} void
   */
  verifySidenavFirstName(text) {
    this.verifyVisibilityOfElementWithText(this.sidenavFirstName, text);
  }

   /**
   * Verify sidenav user's username
   * @returns {void} void
   */
   verifySidenavUsername(text) {
    this.verifyVisibilityOfElementWithText(this.sidenavUsername, text);
  }

   /**
   * Verify first name is changed
   * @returns {void} void
   */
   verifyFirstNameChanged(text) {
    this.verifyVisibilityOfElementWithValue(this.firstNameUserSett, text);
  }

  /**
   * Verify last name is changed
   * @returns {void} void
   */
  verifyLastNameChanged(text) {
    this.verifyVisibilityOfElementWithValue(this.lastNameUserSett, text);
  }

  /**
   * Clicks on logout button
   * @returns {void} void
   */
  clickOnLogoutButton() {
    this.clickOnElement(this.logoutButton);
  }
}
