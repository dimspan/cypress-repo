import { formations_po } from "../../PageObject/fodboldDK/Match page/formations.po";
import { player_page_tabs_switch_po } from "../../PageObject/fodboldDK/page_switch_tabs.po";
let po = new formations_po
let poTS = new player_page_tabs_switch_po
let url = null;


describe('FodboldDK formations', () => {
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

  context('PC formations in FodboldDK', () => {
    it('C1 - Go to Formationer section', () => {
      cy.visit(url);  
      cy.wait(1000)
      const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
      Cypress.on('uncaught:exception', (err) => {
      /* returning false here prevents Cypress from failing the test */
          if (resizeObserverLoopErrRe.test(err.message)) {
            return false
          }
      })
      poTS.get_to_formationer()
    });
    it("C2 - Check formations visual elements",()=>{
        po.check_visual_elements()
    })
    it("C3 - Check formations tooltips",()=>{
      po.check_tooltips()
    })
    it("C4 - Check the links in the tooltip",()=>{
      po.check_links()
    })
    it("C5 - Check texts in formation widget",()=>{
      po.check_formations_texts()
    })

    
      
 

  });
});