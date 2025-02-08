import { player_stats_po } from "../../PageObject/fodboldDK/Match page/fodbold_event_player_stats.po";
import { player_page_tabs_switch_po } from "../../PageObject/fodboldDK/page_switch_tabs.po";
let po = new player_stats_po
let poTS = new player_page_tabs_switch_po
let url = null;


describe('FodboldDK player stats', () => {
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

  context('PC player stats in FodboldDK', () => {
    it('C1 - Go to player stats section', () => {
      cy.visit(url);  
      cy.wait(1000)
      const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
      Cypress.on('uncaught:exception', (err) => {
      /* returning false here prevents Cypress from failing the test */
          if (resizeObserverLoopErrRe.test(err.message)) {
            return false
          }
      })
      poTS.get_to_player_statistics()
    });
    it("C2 - Checks the visual elements of player stats",()=>{
      po.check_visual_elements()
    })
    it("C3 - Check tabs of player stats",()=>{
      po.check_tabs()
    })
    it("C4 - Check dropdown of player stats",()=>{
      po.check_dropdown()
    })
    it("C5 - Check headers",()=>{
      cy.wait(1000)
      po.check_headers()
    })
    it("C6 - Check show all / less functionality",()=>{
      po.check_show_less_all_func()
    })
    it("C7 - Check the switch tabs functionality",()=>{
      po.switch_tabs_functionality()
    })
    it("C8 - Check the tooltips",()=>{
      po.check_tooltips()
    })
  

    

    

    
      
 

  });
});