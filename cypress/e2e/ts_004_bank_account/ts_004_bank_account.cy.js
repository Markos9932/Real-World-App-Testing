/// <reference types="cypress" />

import Login from "../../support/core/pages/login";
import Home from "../../support/core/pages/home";
import My_account from "../../support/core/pages/my_account";
import Bank_account from "../../support/core/pages/bank_account";
import test_data_reg_user from "../../fixtures/data/users/registration_user";
import test_data_bank_account from "../../fixtures/data/home/bank_account";


const login = new Login();
const home = new Home();
const my_account = new My_account();
const bank_account = new Bank_account();


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
    home.homePageLoadingResponse();
    login.navigateToLoginPage();
    login.populateUsernameField(test_data_reg_user.username);
    login.populatePasswordField(test_data_reg_user.password);
    login.clickOnSignInButton();
    home.waitHomePageLoadingResponse();

    home.clickOnBankAccountLink();
    bank_account.verifyBankAccountHeader(test_data_bank_account.bankAccountHeaderText);
    bank_account.clickOnCreateButton();
    bank_account.verifyCreateAccountHeader(test_data_bank_account.createAccountText);
    bank_account.populateBankNameField(test_data_bank_account.bankNameField1);
    bank_account.populateAccountNumberField(test_data_bank_account.accountNumber1);
    bank_account.populateRoutingNumberField(test_data_bank_account.routingNumber1);
    bank_account.clickOnSaveButton();
    bank_account.verifyBankAccountHeader(test_data_bank_account.bankAccountHeaderText);
    bank_account.verifyBankAccountTitle(test_data_bank_account.bankNameField1);


    //bank_account.clickOnDeleteButton();
  });

});

});