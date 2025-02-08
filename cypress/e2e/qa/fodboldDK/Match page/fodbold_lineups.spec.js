import { lineups_po } from "../../PageObject/fodboldDK/Match page/lineups_po";
import { player_page_tabs_switch_po } from "../../PageObject/fodboldDK/page_switch_tabs.po";
let po = new lineups_po
let poTS = new player_page_tabs_switch_po
let url = null;


describe('FodboldDK lineups', () => {
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

  context('PC lineups in FodboldDK', () => {
    it('C1 - Go to Opstillinger section', () => {
      cy.visit(url);  
      cy.wait(1000)
      const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
      Cypress.on('uncaught:exception', (err) => {
      /* returning false here prevents Cypress from failing the test */
          if (resizeObserverLoopErrRe.test(err.message)) {
            return false
          }
      })
      poTS.get_to_opstillinger()
    });
    it("C2 - Check links in lineups widget",()=>{
        po.check_links()
    })
    it("C3 - Check visual elements",()=>{
        po.check_visual_elements()
    })
    it("C4 - Check ratings",()=>{
      po.check_ratings()
    })
    it("C5 - Expand / Collapse arrow functionality", ()=>{
      po.expand_collapse_sections()
    })
    it('C6 - Check the headers in the lineups',()=>{
      po.check_headers()
    })
    it("C7 - Check text data ",()=>{
      po.check_texts()
    })
    it("C8 - Check the tooltips", ()=>{
      po.check_tooltips()
    })

    
      
 

  });
});