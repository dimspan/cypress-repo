import { player_pitch_stats_po } from "../../../PageObject/fodboldDK/Player page/player_pitch_stats.po";
import { player_page_tabs_switch_po } from "../../../PageObject/fodboldDK/page_switch_tabs.po";

let po = new player_pitch_stats_po
let poST = new player_page_tabs_switch_po
let url = null;


describe('Pitch quick stats in Premier league ',
{
retries: {
  runMode: 2,
  openMode: 1,
}
},

() => {
  // Set viewport configuration for all tests within this describe block
  before(() => {
    cy.clearCookies()
                cy.clearLocalStorage()
                cy.window().then((win) => {
                    win.location.reload(true)
                  })
                cy.wait(1000)
    url = 'http://fodbolddkc-es.enetsites.com/spiller/737066/Erling-Haaland/overblik';
    // cy.viewport(1700, 1100);
  });
  beforeEach(()=>{
    cy.viewport(1700,1100)
  })


  context('PC view tests results pqs Premier league', () => {
    it("C1 - Visits and checks properties of pQs ",()=>{
      cy.visit(url);
      cy.wait(1000)
      const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
                Cypress.on('uncaught:exception', (err) => {
                /* returning false here prevents Cypress from failing the test */
                  if (resizeObserverLoopErrRe.test(err.message)) {
                    return false
                  }
                })
      poST.get_to_klub()
      poST.get_to_premier_league()
      cy.wait(1000)
      po.check_widget()
    })
    it("C2 - Check slider of PQS Premier league",()=>{
              po.check_slider()
    })
    it("C3 - Check boxes of PQS Premier league",()=>{
              po.check_boxes()
    })
         
    it("C5 - Check avrg data of PQS Premier league",()=>{
      po.check_avrg_data()
    })

  });
});





