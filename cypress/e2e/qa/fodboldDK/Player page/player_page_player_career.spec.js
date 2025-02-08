import { player_career_po } from "../../PageObject/fodboldDK/Player page/player_career.po";
import { player_page_tabs_switch_po } from "../../PageObject/fodboldDK/page_switch_tabs.po";
let po = new player_career_po
let poTS = new player_page_tabs_switch_po
let url = null;


describe('FodboldDK Player career', () => {
  // Set viewport configuration for all tests within this describe block
  before(() => {
    cy.clearCookies()
                cy.clearLocalStorage()
                cy.window().then((win) => {
                    win.location.reload(true)
                  })
                cy.wait(1000)
    url = 'https://fodbold.dk/spiller/737066/Gonzalo-Montiel/overblik/';
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

  context('PC Player career widget', () => {
    it('C1 - Check the sites header', () => {
        cy.visit(url);
        const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
                Cypress.on('uncaught:exception', (err) => {
                /* returning false here prevents Cypress from failing the test */
                  if (resizeObserverLoopErrRe.test(err.message)) {
                    return false
                  }
                })
        poTS.get_to_karriere()
        
        po.check_site_component_header()
       
    });
    it("C2 - Check widget's headers",()=>{
        cy.wait(1500)
        po.check_widget_headers()
    })
    it("C3 - Check the headers values",()=>{
      po.check_headers_values()
    })
    it("C4 - Check the tooltip of player career",()=>{
      po.check_tooltips()
    })
    it("C5 - Check headers",()=>{
      po.open_headers()
    })
    it("C6 - Check club flag",()=>{
      po.check_visual_elements()
    })
    it("C7  - Check font-styles",()=>{
      po.check_font_styles()
    })
    it("C8 - Check if the values are number or a dash",()=>{
      po.check_if_all_values_are_displayed()
    })
 

  });
});