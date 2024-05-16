import Commands from '../commands';

export default class Login extends Commands {
  // Locator Region
  constructor() {
    super();
    this.loginPageUrl = '/signin';
    this.loginRoute = '**/users';
    this.signInTitle = '.MuiTypography-h5.MuiTypography-root';
    this.linkSignUp = '[href="\/signup"]';
    this.signInButton = "[data-test='signin-submit']";
    this.usernameHelperText = '#username-helper-text';
    this.passwordHelperText = '#password-helper-text';
    this.usernameField = '#username';
    this.passwordField = '#password';
    this.invalidUsernameOrPassText = 'div[role="alert"] > .MuiAlert-message'
  
  }

   /**
    * Login loading state
    * @returns {void} void
    */
   loginPageLoadingResponse() {
    cy.intercept(this.loginRoute)
        .as('loginPageLoading');
  }

  /**
    * Wait for login page to load
    * @returns {void} void
    */
   waitLoginPageLoadingResponse() {
    cy.wait('@loginPageLoading')
        .its('response.statusCode')
        .should('eq', 201);
  }

  /**
   * Navigates to login page
   * @returns {void} void
   */
  navigateToLoginPage() {
    cy.visit(this.loginPageUrl);
  }

  /**
   * Verify SignIn title
   * @returns {void} void
   */
  verifySignInTitle(text) {
    this.verifyVisibilityOfElementWithText(this.signInTitle, text);
  }

  /**
   * Verify SignUp link
   * @returns {void} void
   */
  verifySignUpLink(text) {
    this.verifyVisibilityOfElementWithText(this.linkSignUp, text);
  }

  /**
   * Verify SignIn button presence
   * @returns {void} void
   */
  verifySignInButtonPresence(text) {
    this.verifyVisibilityOfElementWithText(this.signInButton, text);
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
   * Verify Password  helper text
   * @returns {void} void
   */
  verifyWrongPasswordText(text) {
    this.verifyVisibilityOfElementWithText(this.passwordHelperText, text);
  }

  /**
   * Verify Invalid username or pass text
   * @returns {void} void
   */
  verifyInvalidUsernameOrPasswordText(text) {
    this.verifyVisibilityOfElementWithText(this.invalidUsernameOrPassText, text);
  }


  /**
   * Clicks on SignIn button
   * @returns {void} void
   */
  clickOnSignInButton() {
    this.clickOnElement(this.signInButton);
  }

  /**
   * Clicks on username field
   * @returns {void} void
   */
  clickOnUsernameField() {
    this.clickOnElement(this.usernameField);
  }

  /**
   * Verify Username  helper text
   * @returns {void} void
   */
  verifyUsernameRequiredText(text) {
    this.verifyVisibilityOfElementWithText(this.usernameHelperText, text);
  }

  /**
   * Verify SignIn Button is disabled
   * @returns {void} void
   */
  verifySignInButtonDisabled() {
    this.verifyDisabledElement(this.signInButton);
  }

  /**
   * Login as user via UI
   * @param {string} userType - User type to login as
   */
  userLogin(userType) {
    cy
      .fixture(`credentials/${userType}.json`)
      .as('user');

    cy
      .get('@user')
      .then((user) => {
        this.populateUsernameField(user.username);
        this.populatePasswordField(user.password);
        this.clickOnSignInButton();
      });

  

  



  

  

  }
}