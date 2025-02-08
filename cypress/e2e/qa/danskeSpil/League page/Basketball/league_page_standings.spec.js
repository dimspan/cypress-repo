import {standings_other_sports_po} from "../../../PageObject/danskeSpil/standings.po"
let po = new standings_other_sports_po
let url = null;

describe('Standings tests on league page - Basketball', () => {
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

  po.sportOption = '.basketball'
  po.leagueNum = 3
  po.participantCount = 60
  po.standingsWidget = '.wff_widget.wff_widget_FW2BF49CBB0ABF7B3D.wff_widget_wide.wff_standings_basketball'
  po.standingsWidgetSmall = '.wff_widget.wff_widget_FW2BF49CBB0ABF7B3D.wff_widget_small.wff_standings_basketball'
  po.playoffPlaces = '.wff_table_row_column_content_wrapper.wff_conference_championship_playoff'
  po.tooltipTextsArray = ["Kampe spillet", "Vundne kampe", "Tabt"]

  context('Tests standings on league page - Basketball', () => {

    it('C1 - Standings widget exists - Basketball', () => {
      cy.visit(url);
      po.standings_exists();
    });
 
    it('C2 - check all the texts - Basketball', () => {
      // cy.visit(url);
      po.check_all_texts();
    });

    it('C3 - check all the texts on mobile - Basketball', () => {
      // cy.visit(url);
      cy.viewport(360,1100)
      po.check_all_texts_mobile();
    });

    it('C4 - check the tooltips texts - Basketball', () => {
      // cy.visit(url);
      po.check_tooltips();
    });

    // it('C5 - event info pop-up on form icons - Basketball', () => {
    //   // cy.visit(url);
    //   po.check_form_popup();
    // });

    // it('C6 - check dropdowns - Basketball', () => {
    //   // cy.visit(url);
    //   po.check_dropdowns();
    // });

  });

});