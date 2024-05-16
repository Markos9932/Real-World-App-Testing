/// <reference types="cypress" />

import Login from "../../support/core/pages/login";
import Home from "../../support/core/pages/home";
import My_account from "../../support/core/pages/my_account";
import Bank_account from "../../support/core/pages/bank_account";
import Transaction from "../../support/core/pages/transaction";
import Personal from "../../support/core/pages/personal";
import test_data_reg_user from "../../fixtures/data/users/registration_user";
import test_data_bank_account from "../../fixtures/data/home/bank_account";
import test_data_transaction from "../../fixtures/data/home/transaction";
import { USERS } from "../../support/credentials";


const login = new Login();
const home = new Home();
const my_account = new My_account();
const bank_account = new Bank_account();
const transaction = new Transaction();
const personal = new Personal();


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
    personal.personalPageLoadingResponse();
    login.navigateToLoginPage();
    login.userLogin(USERS.test_user);
    home.waitHomePageLoadingResponse();

    home.navigateToPersonalPage();
    personal.waitPersonalPageLoadingResponse();
    




    

    
  });

});

});