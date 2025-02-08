import { player_pitch_stats_po } from "../../../PageObject/fodboldDK/Player page/player_pitch_stats.po";
import { player_page_tabs_switch_po } from "../../../PageObject/fodboldDK/page_switch_tabs.po";

let po = new player_pitch_stats_po
let poST = new player_page_tabs_switch_po
let url = null;


describe('Champions league PQS ', () => {
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

  context('Champions league livescore', () => {
    it('C1 - Check PQS properties Champs league', () => {
      cy.visit(url);
      cy.wait(1000)
      
      poST.get_to_klub()
      cy.wait(1000)
      po.check_widget()
    });
    it("C2 - Check slider of PQS in player page Champions league",()=>{
              po.check_slider()
    })
    it("C3 - Check boxes of PQS in player page Champions league ",()=>{
              po.check_boxes()
    })
         
    it("C5 - Check avrg data of PQS in player page Champions league ",()=>{
      po.check_avrg_data()
    })

  });
});





