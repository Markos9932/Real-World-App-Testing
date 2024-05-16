/// <reference types="cypress" />

import Login from "../../support/core/pages/login";
import Home from "../../support/core/pages/home";
import Transaction from "../../support/core/pages/transaction";
import test_data_transaction from "../../fixtures/data/home/transaction";
import { USERS } from "../../support/credentials";


const login = new Login();
const home = new Home();
const transaction = new Transaction();


describe('Check Transactions and payments', () => {
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

  it('Create a new transaction and validate the form', function () {
    home.homePageLoadingResponse();
    login.navigateToLoginPage();
    
    login.userLogin(USERS.test_user);
    home.waitHomePageLoadingResponse();

    home.clickOnNewButton();
    transaction.populateSearchField(test_data_transaction.transactionPartner);
    transaction.clickOnUserListButton();
    transaction.verifyVisibilityOfText(test_data_transaction.transactionPartnerHeader);

    transaction.populateAmountField(test_data_transaction.amount);
    transaction.verifyAmountField(test_data_transaction.value);
    transaction.populateNoteField(test_data_transaction.note);
    transaction.clickOnPayButton();
    
    transaction.verifyPaymentHeader(test_data_transaction.paidText);
    transaction.verifyPaymentHeader(test_data_transaction.amount);
    transaction.verifyPaymentHeader(test_data_transaction.forText);
    transaction.verifyPaymentHeader(test_data_transaction.note);

    transaction.clickReturnToTransButton();
    home.clickOnLogoutButton();
  });

});

});