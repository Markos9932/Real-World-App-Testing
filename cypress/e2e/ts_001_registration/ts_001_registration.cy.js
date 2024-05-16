/// <reference types="cypress" />

import Registration from "../../support/core/pages/registration";
import Login from "../../support/core/pages/login";
import test_data_reg from "../../fixtures/data/home/registration";
import test_data_reg_user from "../../fixtures/data/users/registration_user";

const registration = new Registration();
const login = new Login();


describe('Check functionalities of a registration form', () => {
    // setup executed before each test case
    beforeEach(() => {

    })

    // teardown executed after each test case
    afterEach(() => {
      
    })

    // teardown executed after test suite
    after(() => {
      
    })
  
context('Check various scenarios', () => {

  it('Validate registration form is present', function () {
    registration.navigateToRegistrationPage();

    registration.verifySignUpTitle(test_data_reg.signUpTitle);
    registration.verifySignUpButtonEnabled();
    registration.verifySigninLink(test_data_reg.signInLinkText);
    registration.verifySigninLink(test_data_reg.signInLinkText1);
  });

  it('Check registration with empty fields ', function () {
    registration.navigateToRegistrationPage();

    registration.clickOnSignUpButton();
    registration.verifyFirstNameIsRequired(test_data_reg.firstNameText);
    registration.verifySignUpButtonDisabled();
  });

  it('Check registration with invalid password - 3 characters', function () {
    registration.navigateToRegistrationPage();

    registration.populateFirstNameField(test_data_reg_user.firstName);
    registration.populateLastNameField(test_data_reg_user.lastName);
    registration.populateUsernameField(test_data_reg_user.username);
    registration.populatePasswordField(test_data_reg_user.passwordWrong);

    registration.verifyWrongPasswordText(test_data_reg.wrongPassText);
    registration.verifySignUpButtonDisabled();
  });

  it('Check registration with non matching passwords', function () {
    registration.navigateToRegistrationPage();

    registration.populateFirstNameField(test_data_reg_user.firstName);
    registration.populateLastNameField(test_data_reg_user.lastName);
    registration.populateUsernameField(test_data_reg_user.username);
    registration.populatePasswordField(test_data_reg_user.password);

    registration.populateConfirmPasswordField(test_data_reg_user.confirmPassWrong);
    registration.verifyWrongConfirmPassText(test_data_reg.wrongConfirmPassText);
    registration.verifySignUpButtonDisabled();
  });

  it('Check registration with valid credentials', function () {
    // initialization of waits
    login.loginPageLoadingResponse();

    registration.navigateToRegistrationPage();
    registration.populateAndRegisterUserData(
      test_data_reg_user.firstName,
      test_data_reg_user.lastName,
      test_data_reg_user.username,
      test_data_reg_user.password,
      test_data_reg_user.confirmPass
    );
    login.waitLoginPageLoadingResponse();
    
    login.verifySignInTitle(test_data_reg.signInTitle);
    login.verifySignUpLink(test_data_reg.signUpLinkText);
    login.verifySignInButtonPresence(test_data_reg.signInButtonTitle);
  });
  
 });

});