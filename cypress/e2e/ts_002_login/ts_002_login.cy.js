/// <reference types="cypress" />

import Login from "../../support/core/pages/login";
import Home from "../../support/core/pages/home";
import test_data_reg from "../../fixtures/data/home/registration";
import test_data_login from "../../fixtures/data/home/login";
import test_data_reg_user from "../../fixtures/data/users/registration_user";
import test_data_home from "../../fixtures/data/home/home";
import { USERS } from '../../support/credentials/index';


const login = new Login();
const home = new Home();


describe('Check functionalities of a login form', () => {
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

  it('Validate login form is present', function () {
    login.navigateToLoginPage();
    login.verifySignInTitle(test_data_reg.signInTitle);
    login.verifySignUpLink(test_data_reg.signUpLinkText);
    login.verifySignInButtonPresence(test_data_reg.signInButtonTitle);
  });

  it('Check login with empty input fields', function () {
    login.navigateToLoginPage();
    login.clickOnSignInButton();
    login.verifyUsernameRequiredText(test_data_login.usernameRequiredText);
    login.verifySignInButtonDisabled();
  });

  it('Check login with wrong password - 3 characters', function () {
    login.navigateToLoginPage();
    login.populateUsernameField(test_data_reg_user.username);
    login.populatePasswordField(test_data_login.passwordWrong);
    login.verifyWrongPasswordText(test_data_reg.wrongPassText);
    login.verifySignInButtonDisabled();
  });

  it('Check login with invalid password', function () {
    login.navigateToLoginPage();
    login.populateUsernameField(test_data_reg_user.username);
    login.verifyWrongPasswordText(test_data_login.invalidPassword);
    login.verifyInvalidUsernameOrPasswordText(test_data_login.invalidUsernameOrPasswordText);
  });

  it('Check login with valid credentials', function () {
    home.homePageLoadingResponse();
    login.navigateToLoginPage();
    login.populateUsernameField(test_data_reg_user.username);
    login.populatePasswordField(test_data_reg_user.password);
    login.clickOnSignInButton();
    home.waitHomePageLoadingResponse();
    home.clickOnNextButton();
    home.verifyCreateBankAccountTitle(test_data_home.createBankAccountText);
    home.populateBankNameField(test_data_home.bankNameField);
    home.populateAccountNumberField(test_data_home.accountNumber);
    home.populateRoutingNumberField(test_data_home.routingNumber);
    home.clickOnSaveButton();
    home.clickOnDoneButton();
    home.clickOnLogoutButton();



    

    
  });

  
  
 });

});