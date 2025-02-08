import { h2h_po } from "../../PageObject/fodboldDK/Match page/fodbold_h2h.po";
import { player_page_tabs_switch_po } from "../../PageObject/fodboldDK/page_switch_tabs.po";
let po = new h2h_po
let poTS = new player_page_tabs_switch_po
let url = null;


describe('FodboldDK h2h', () => {
  // Set viewport configuration for all tests within this describe block
  before(() => {
    cy.clearCookies()
                cy.clearLocalStorage()
                cy.window().then((win) => {
                    win.location.reload(true)
                  })
                cy.wait(1000)
    // url = 'https://fodbold.dk/kampe/4140625/Manchester-City-Brighton/';
    url = "https://fodbold.dk/kampe/3370572/Real-Betis-Girona/" // - match with draws
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

  context('PC h2h in FodboldDK', () => {
    it('C1 - Go to h2h section', () => {
      cy.visit(url);  
      cy.wait(1000)
      const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
      Cypress.on('uncaught:exception', (err) => {
      /* returning false here prevents Cypress from failing the test */
          if (resizeObserverLoopErrRe.test(err.message)) {
            return false
          }
      })
      poTS.get_to_h2h()
    });
    it("C2 - Check headers h2h fodbold",()=>{
        po.check_headers()
    })
    it("C3 - Check visual elements h2h fodbold",()=>{
        po.check_visual_elements()
    })
    it("C4 - Check the scoreboxes h2h fodbold",()=>{
        po.check_score_boxes()
    })
    it("C5 - Check time and status for h2h fodbold",()=>{
        po.check_status_and_date()
    })
    it("C6 - Check collapsing functionality",()=>{
      po.check_collapsing_functionality()
    })
  
  

    

    

    
      
 

  });
});