import {event_page_extended_stats_player_po} from "../../../PageObject/danskeSpil/extended_stats_player.po"
let po = new event_page_extended_stats_player_po
let url = null;

describe('Extended stats - player tests on event page - Soccer', () => {
  // Set viewport configuration for all tests within this describe block
  before(() => {
    
    cy.clearCookies()
                cy.clearLocalStorage()
                cy.window().then((win) => {
                    win.location.reload(true)
                  })
                cy.wait(1000)
                
    url = 'https://danskespil-dk.enetscores.com/';
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
  
  po.extStatsWidget = '.wff_widget.wff_widget_FWB5940EC9AEB3D794.wff_widget_wide'
  po.extStatsWidgetMobile = '.wff_widget.wff_widget_FWB5940EC9AEB3D794.wff_widget_small'
  po.headerTextsArray = ["Spiller", "K", "KS", "TM", "TA", "TUD", "TIND", "MS", "LDV", "LDT", "Spiller", "K", "KS", "TM", "TA", "TUD", "TIND", "MS", "LDV", "LDT"]
  po.participantAfterClickCount = 30
  po.participantCount = 20
  po.particiapantTeam = '.wff_player_position_name.wff_responsive_text'

  context('Tests extended stats for player on event page - Soccer', () => {

    it('C1 - Extended stats player widget exists - Soccer', () => {
      // cy.visit(url);
      cy.visit('https://danskespil.enetscores.com/spiller-statistik/4193529');

      // po.extended_stats_exists();
    });
 
    it('C2 - check all the texts - player - Soccer', () => {
      //cy.visit(url);
      po.check_all_texts();
    });

    it('C3 - check all the texts on mobile - player - Soccer', () => {
      // cy.visit(url);
      cy.viewport(360,1100)
      po.check_all_texts_mobile();
    });

    it('C4 - check the tooltips - player - Soccer', () => {
      // cy.visit(url);
      po.check_tooltips();
    });

    it('C5 - check dropdowns - player - Soccer', () => {
      // cy.visit(url);
      po.check_dropdowns();
    });

    it('C6 - check search country dropdown - player - Soccer', () => {
      // cy.visit(url);
      po.check_search_country_dropdown();
    });

  });

});