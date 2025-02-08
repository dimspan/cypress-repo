import { event_stats_fodbold } from "../../PageObject/fodboldDK/Match page/event_stats.po";
import { player_page_tabs_switch_po } from "../../PageObject/fodboldDK/page_switch_tabs.po";
let po = new event_stats_fodbold
let poTS = new player_page_tabs_switch_po
let url = null;


describe('FodboldDK event statistics', () => {
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

  context('PC event statistics in FodboldDK', () => {
    it('C1 - Go to Event stats section', () => {
      cy.visit(url);  
      cy.wait(1000)
      const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
      Cypress.on('uncaught:exception', (err) => {
      /* returning false here prevents Cypress from failing the test */
          if (resizeObserverLoopErrRe.test(err.message)) {
            return false
          }
      })
      poTS.get_to_event_stats()
    });
    it("C2 - Check visual elements in event stats",()=>{
        po.check_visual_elements()
    })
    it("C3 - Check text elements",()=>{
        po.check_text_elements()
    })
    it("C4 - Check the half tabs",()=>{
        po.check_tabs_in_ev_stats()
    })

    

    

    
      
 

  });
});