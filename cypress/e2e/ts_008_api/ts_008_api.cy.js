/// <reference types="cypress" />

import Login from "../../support/core/pages/login";
import Home from "../../support/core/pages/home";
import test_data_reg_user from "../../fixtures/data/users/registration_user";

const login = new Login();
const home = new Home();

it('Validate the response by checking available bank account information', function () {
    home.homePageLoadingResponse();
    login.navigateToLoginPage();

    login.populateUsernameField(test_data_reg_user.username);
    login.populatePasswordField(test_data_reg_user.password);
    login.clickOnSignInButton();
    home.waitHomePageLoadingResponse();

    home.clickOnBankAccountLink();
    // Make a GraphQL request
    cy.request({
      method: 'POST',
      url: 'http://localhost:3001/graphql',
      body: {
        query: `
          query {
            listBankAccount {
              bankName
              accountNumber
              routingNumber
            }
          }
        `
      }
    }).then((response) => {
      // Expect a successful response
      expect(response.status).to.eq(200);

      // Extract bank account data from the response
      const listBankAccount = response.body.data.listBankAccount;


      // Compare bank account data with the data from task 4
      expect(listBankAccount[1]).to.deep.equal({
        bankName: 'Test Bank',
        accountNumber: '888888888',
        routingNumber: '999999999'
      });
   
  });
});