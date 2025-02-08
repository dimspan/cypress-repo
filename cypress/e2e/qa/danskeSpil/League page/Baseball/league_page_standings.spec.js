import {standings_other_sports_po} from "../../../PageObject/danskeSpil/standings.po"
let po = new standings_other_sports_po
let url = null;

describe('Standings tests on league page - Baseball', () => {
  // Set viewport configuration for all tests within this describe block
  before(() => {
    
    cy.clearCookies()
                cy.clearLocalStorage()
                cy.window().then((win) => {
                    win.location.reload(true)
                  })
                cy.wait(1000)
                
    url = 'https://danskespil.enetscores.com/';
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

  po.sportOption = '.baseball'
  po.leagueNum = 0
  po.standingsWidget = '.wff_widget.wff_widget_FW2BF49CBB0ABF7B3D.wff_widget_wide.wff_standings_baseball'
  po.standingsWidgetSmall = '.wff_widget.wff_widget_FW2BF49CBB0ABF7B3D.wff_widget_small.wff_standings_baseball'
  po.playoffPlaces = '.wff_standings_position_marker.wff_conference_championship_playoff'
  po.playoffCount = 19
  po.participantCount = 60
  po.tooltipTextsArray = ["Kampe spillet", "Vundne kampe", "Tabt", "Sejrs-%"]
  po.leagueStanding = '.wff_standings_generic_content.wff_standings_conf_american_league.wff_standings_conf_title'

  context('PC view tests standings on league page - Baseball', () => {

    it('C1 - Standings widget exists - Baseball', () => {
      cy.visit(url);
      po.standings_exists();
    });
 
    it('C2 - check all the texts - Baseball', () => {
      // cy.visit(url);
      po.check_all_texts();
    });

    it('C3 - check all the texts on mobile - Baseball', () => {
      // cy.visit(url);
      cy.viewport(360,1100)
      po.check_all_texts_mobile();
    });

    it('C4 - check the tooltips texts - Baseball', () => {
      // cy.visit(url);
      po.check_tooltips();
    });

    // it('C5 - event info pop-up on form icons - Baseball', () => {
    //   // cy.visit(url);
    //   po.check_form_popup();
    // });

    it('C6 - check dropdowns - Baseball', () => {
      // cy.visit(url);
      po.check_dropdowns();
    });

  });

});