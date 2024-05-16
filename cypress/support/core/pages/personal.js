import Commands from '../commands';

export default class Personal extends Commands {
  // Locator Region
  constructor() {
    super();
    this.personalRoute = '**/personal';
    this.transactionContainer = '.MuiListItem-root.MuiListItem-gutters.MuiListItem-alignItemsFlexStart';
 
   }

   /**
    * Personal loading state
    * @returns {void} void
    */
   personalPageLoadingResponse() {
    cy.intercept(this.personalRoute)
        .as('personalPageLoading');
  }

  /**
    * Wait for personal page to load
    * @returns {void} void
    */
   waitPersonalPageLoadingResponse() {
    cy.wait('@personalPageLoading')
        .its('response.statusCode')
        .should('eq', 200);
  }

  

  
  



 

}
