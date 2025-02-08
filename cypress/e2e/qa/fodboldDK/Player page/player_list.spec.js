import { player_list_po } from "../../PageObject/fodboldDK/Player page/player_list.po";
let po = new player_list_po
let url = null;

describe('Test the player list page', () => {
  // Set viewport configuration for all tests within this describe block
  before(() => {
    cy.clearCookies()
                cy.clearLocalStorage()
                cy.window().then((win) => {
                    win.location.reload(true)
                  })
                cy.wait(1000)
    url = 'https://fodbold.dk/spillere/';
    // cy.viewport(1700, 1100);
  });
  beforeEach(()=>{
    cy.viewport(1700,1100)
  })
  const retryConfig = {
    retries: {
      runMode: 2,
      openMode: 1,
    },
  };

  context('Player list page', () => {
    it('C1 - Player list page visual', () => {
        cy.visit(url)
        po.check_visual_elements()    
    });
  
  
  });
});