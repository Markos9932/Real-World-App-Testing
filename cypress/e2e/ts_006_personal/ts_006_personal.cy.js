/// <reference types="cypress" />

import Login from "../../support/core/pages/login";
import Home from "../../support/core/pages/home";
import Personal from "../../support/core/pages/personal";
import test_data_transaction from "../../fixtures/data/home/transaction";
import test_data_personal from "../../fixtures/data/home/personal";
import { USERS } from "../../support/credentials";


const login = new Login();
const home = new Home();
const personal = new Personal();


describe('Validation of transaction present', () => {
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

  it('Check if the transaction is present', function () {
    home.homePageLoadingResponse();
    personal.personalPageLoadingResponse();
    login.navigateToLoginPage();

    login.userLogin(USERS.test_user);
    home.waitHomePageLoadingResponse();

    home.navigateToPersonalPage();
    personal.waitPersonalPageLoadingResponse();

    personal.verifyTransactionIsPresent(test_data_personal.numberOfTransaction, test_data_transaction.amount);
    personal.verifyTransactionIsPresent(test_data_personal.numberOfTransaction, test_data_personal.userFirstAndLastName);
    personal.verifyTransactionIsPresent(test_data_personal.numberOfTransaction, test_data_transaction.negativeAmount);


    




    

    
  });

});

});