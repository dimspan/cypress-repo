import { fodbold_comments_po } from "../../PageObject/fodboldDK/Match page/fodbold_comments.po";
import { player_page_tabs_switch_po } from "../../PageObject/fodboldDK/page_switch_tabs.po"
let po = new fodbold_comments_po
let poTS = new player_page_tabs_switch_po
let url = null;


describe('FodboldDK comments widget', () => {
  // Set viewport configuration for all tests within this describe block
  before(() => {
    cy.clearCookies()
                cy.clearLocalStorage()
                cy.window().then((win) => {
                    win.location.reload(true)
                  })
                cy.wait(1000)
    url = 'https://fodbold.dk/kampe/4140625/Manchester-City-Brighton/';
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

  context('PC Comments in FodboldDK', () => {
    it('C1 - Go to Kamp section comments', () => { // Potential name to be duplicated in testrail
      cy.visit(url);  
      cy.wait(1000)
      const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
                Cypress.on('uncaught:exception', (err) => {
                /* returning false here prevents Cypress from failing the test */
                  if (resizeObserverLoopErrRe.test(err.message)) {
                    return false
                  }
                })
      poTS.get_to_kamp_matchpage()
    });
   it("C2 - Check visual elements in comment widget",()=>{
    po.check_visual_elements()
   })
   it("C3 - Check the proper work of the toggle",()=>{
    po.check_toggle_proper_work()
   })
    

 
      
 

  });
});