import Commands from '../commands';

export default class Registration extends Commands {
  // Locator Region
  constructor() {
    super();
    this.registrationRoute = ''
    this.registrationPageUrl = '/signup';
    this.signUpTitle = "[data-test='signup-title']";
    this.signUpButton = '[data-test="signup-submit"]';
    this.linkSignIn = '[href="\/signin"]';
    this.firstNameText = '#firstName-helper-text';
    this.firstNameField = '#firstName';
    this.lastNameField = '#lastName';
    this.usernameField = '#username';
    this.passwordField = '#password';
    this.confirmPassField = '#confirmPassword';
    this.passwordHelperText = '#password-helper-text';
    this.confirmPassHelperText = '#confirmPassword-helper-text';

  }

  /**
   * Navigates to registration page
   * @returns {void} void
   */
  navigateToRegistrationPage() {
    cy.visit(this.registrationPageUrl);
  }

  /**
   * Verify SignUp title
   * @returns {void} void
   */
  verifySignUpTitle(text) {
    this.verifyVisibilityOfElementWithText(this.signUpTitle, text);
  }

  /**
   * Verify SignUp Button is disabled
   * @returns {void} void
   */
  verifySignUpButtonDisabled() {
    this.verifyDisabledElement(this.signUpButton);
  }

  /**
   * Verify SignUp Button is enabled
   * @returns {void} void
   */
  verifySignUpButtonEnabled() {
    this.verifyEnabledElement(this.signUpButton);
  }

  /**
   * Verify SignIn link
   * @returns {void} void
   */
  verifySigninLink(text) {
    this.verifyVisibilityOfElementWithText(this.linkSignIn, text);
  }

  /**
   * Clicks on SignUp button
   * @returns {void} void
   */
  clickOnSignUpButton() {
    this.clickOnElement(this.signUpButton);
  }

  /**
   * Verify First name helper text
   * @returns {void} void
   */
  verifyFirstNameIsRequired(text) {
    this.verifyVisibilityOfElementWithText(this.firstNameText, text);
  }

  /**
   * Populates first name field
   * @param {string} value - username
   * @returns {void} void
   */
  populateFirstNameField(value) {
    this.clearAndPopulateTextElement(this.firstNameField, value);
  }

  /**
   * Populates last name field
   * @param {string} value - username
   * @returns {void} void
   */
  populateLastNameField(value) {
    this.clearAndPopulateTextElement(this.lastNameField, value);
  }

  /**
   * Populates Username field
   * @param {string} value - username
   * @returns {void} void
   */
  populateUsernameField(value) {
    this.clearAndPopulateTextElement(this.usernameField, value);
  }

  /**
   * Populates Password field
   * @param {string} value - username
   * @returns {void} void
   */
  populatePasswordField(value) {
    this.clearAndPopulateTextElement(this.passwordField, value);
  }

  /**
   * Populates Confirm password field
   * @param {string} value - username
   * @returns {void} void
   */
  populateConfirmPasswordField(value) {
    this.clearAndPopulateTextElement(this.confirmPassField, value);
  }

  /**
   * Verify Password  helper text
   * @returns {void} void
   */
  verifyWrongPasswordText(text) {
    this.verifyVisibilityOfElementWithText(this.passwordHelperText, text);
  }

  /**
   * Verify Confirm pass helper text
   * @returns {void} void
   */
  verifyWrongConfirmPassText(text) {
    this.verifyVisibilityOfElementWithText(this.confirmPassHelperText, text);
  }

  /**
   * Populate and register user data
   * @param {string} first_name - First name
   * @param {string} last_name - Last name
   * @param {string} username - Username
   * @param {string} password - User password
   * @param {string} confirm_password - User confirmed password
   * @returns {void} void
   */
 populateAndRegisterUserData(first_name, last_name, username, password, confirm_password) {
  // populate name, last name, username and password fields
  this.populateFirstNameField(first_name);
  this.populateLastNameField(last_name);
  this.populateUsernameField(username);
  this.populatePasswordField(password);
  this.populateConfirmPasswordField(confirm_password);

  // click Sing Up or Start trial button
  this.clickOnSignUpButton();
}

  



  

  

  }