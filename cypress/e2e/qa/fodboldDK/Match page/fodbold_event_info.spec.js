import { event_info_po } from "../../PageObject/fodboldDK/Match page/fodbold_event_info.po";
import { player_page_tabs_switch_po } from "../../PageObject/fodboldDK/page_switch_tabs.po";
let po = new event_info_po
let poTS = new player_page_tabs_switch_po
let url = null;


describe('FodboldDK event info', () => {
  // Set viewport configuration for all tests within this describe block
  before(() => {
    cy.clearCookies()
                cy.clearLocalStorage()
                cy.window().then((win) => {
                    win.location.reload(true)
                  })
                cy.wait(1000)
    url = 'https://fodbold.dk/kampe/4140625/Brighton-Ajax/kamp/';
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

  context('PC Event info in FodboldDK', () => {
    it('C1 - Check Event info properties', () => {
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
    it("C2 - Check visual elements in Event info",()=>{
        po.check_visual_elements()
    })
    it("C3 - Check score box",()=>{
        po.check_score_box()
    })
    it("C4 - Check texts in the event info",()=>{
        po.check_texts()
    })
    it("C5 - Check tooltip in the event info",()=>{
        po.check_tooltip()
    })

  });
});