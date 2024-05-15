/// <reference types="cypress" />

import Login from "../../support/core/pages/login";
import Home from "../../support/core/pages/home";
import My_account from "../../support/core/pages/my_account";
import test_data_reg_user from "../../fixtures/data/users/registration_user";


const login = new Login();
const home = new Home();
const my_account = new My_account();

let x;
let firstNameChanged;
let lastNameChanged;


describe('Check modifications to account information', () => {
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

  it('Modify account information', function () {
    x = Math.floor((Math.random() * 100000000) + 1);
    firstNameChanged = test_data_reg_user.firstName + x;
    lastNameChanged= test_data_reg_user.lastName + x;

    home.homePageLoadingResponse();
    login.navigateToLoginPage();
    login.populateUsernameField(test_data_reg_user.username);
    login.populatePasswordField(test_data_reg_user.password);
    login.clickOnSignInButton();
    home.waitHomePageLoadingResponse();
    my_account.verifySidenavFirstName(test_data_reg_user.firstName);
    my_account.verifySidenavUsername(test_data_reg_user.username);
    home.clickOnMyAccountLink();

    my_account.populateFirstNameField(firstNameChanged);
    my_account.populateLastNameField(lastNameChanged);
    my_account.populateEmailField(test_data_reg_user.email);
    my_account.populatePhoneField(test_data_reg_user.phoneNumber);
    my_account.clickSaveButton();
    my_account.waitPeriod(2000);

    my_account.clickHomeLink();
    home.clickOnMyAccountLink();
    my_account.verifySidenavFirstName(firstNameChanged);
    my_account.verifySidenavUsername(test_data_reg_user.username);
    my_account.verifyFirstNameChanged(firstNameChanged);
    my_account.verifyLastNameChanged(lastNameChanged);
  });

});

});