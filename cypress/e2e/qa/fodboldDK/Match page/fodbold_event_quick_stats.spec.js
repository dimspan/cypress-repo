import { event_quick_stats_po } from "../../PageObject/fodboldDK/Match page/event_quick_stats.po";
import { player_page_tabs_switch_po } from "../../PageObject/fodboldDK/page_switch_tabs.po"
let po = new event_quick_stats_po
let poTS = new player_page_tabs_switch_po
let url = null;


describe('FodboldDK event quick stats match page', () => {
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

  context('PC Event quick stats in FodboldDK match page', () => {
    it('C1 - Go to Kamp section ev quick stats', () => { // Potential name to be duplicated in testrail
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
    it("C2 - Checks visual elements in event quick stats",()=>{
        po.check_visual_elements()
    })
    it("C3 - Check font styles in event quick stats",()=>{
        po.check_font_styles()
    })
    

 
      
 

  });
});