import Commands from '../commands';

export default class Login extends Commands {
  // Locator Region
  constructor() {
    super();
    this.loginRoute = '**/users';
    this.signInTitle = '.MuiTypography-h5.MuiTypography-root';
    this.linkSignUp = '[href="\/signup"]';
    this.signInButton = ".MuiButton-label";
  
   

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

  

  



  

  

  }