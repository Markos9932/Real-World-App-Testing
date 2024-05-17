/// <reference types="cypress" />

import Login from "../../support/core/pages/login";
import Home from "../../support/core/pages/home";
import Transaction from "../../support/core/pages/transaction";
import Personal from "../../support/core/pages/personal";
import test_data_transaction from "../../fixtures/data/home/transaction";
import { USERS } from "../../support/credentials";


const login = new Login();
const home = new Home();
const transaction = new Transaction();
const personal = new Personal();


describe('Check multiple transactions and amount filter validation', () => {
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

  it('Validate the amount of filter after multiple transactions', function () {
    home.homePageLoadingResponse();
    personal.personalPageLoadingResponse();
    login.navigateToLoginPage();
    login.userLogin(USERS.test_user);
    home.waitHomePageLoadingResponse();
    

    // transaction 1
    home.clickOnNewButton();
    transaction.populateSearchField(test_data_transaction.transactionPartner);
    transaction.clickOnUserListButton();
    transaction.verifyVisibilityOfText(test_data_transaction.transactionPartnerHeader);
    transaction.populateAmountField(test_data_transaction.amount);
    transaction.verifyAmountField(test_data_transaction.value);
    transaction.populateNoteField(test_data_transaction.note);
    transaction.clickOnPayButton();
    // transaction 2
    transaction.clickReturnToTransButton();
    home.clickOnNewButton();
    transaction.clickOnPaymentElement(test_data_transaction.transactionPartnerHeader1);
    transaction.verifyVisibilityOfText(test_data_transaction.transactionPartnerHeader1);
    transaction.populateAmountField(test_data_transaction.amount1);
    transaction.verifyAmountField(test_data_transaction.value1);
    transaction.populateNoteField(test_data_transaction.note);
    transaction.clickOnPayButton();

    home.navigateToPersonalPage();
    personal.waitPersonalPageLoadingResponse();
    personal.clickOnAmmountSlider();
    personal.settingSliderValueCenter();

    personal.verifyVisibilityOfText(test_data_transaction.noTransText);
 






   


    




    

    
  });

});

});