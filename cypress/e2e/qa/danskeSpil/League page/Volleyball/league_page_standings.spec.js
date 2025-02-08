import {standings_other_sports_po} from "../../../PageObject/danskeSpil/standings.po"
let po = new standings_other_sports_po
let url = null;

describe('Standings tests on league page - volleyball', () => {
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

  po.sportOption = '.volleyball'
  po.leagueNum = 0
  po.standingsWidget = '.wff_widget.wff_widget_FW2BF49CBB0ABF7B3D.wff_widget_wide.wff_standings_volleyball'
  po.standingsWidgetSmall = '.wff_widget.wff_widget_FW2BF49CBB0ABF7B3D.wff_widget_small.wff_standings_volleyball'
  po.playoffPlaces = '.wff_standings_position_marker.wff_qualification_to_next_stage'
  po.playoffCount = 13
  po.participantCount = 24
  po.tooltipTextsArray = ["Kampe spillet", "Vundne kampe", "Tabt", "Score", "Point"]
  po.leagueStanding = '.wff_standings_generic_content.wff_standings_volleyligaen_grundspil'
  po.sportsMenu = '.esc_menu_sports_active_element'
  po.stillingerButton = ".esm_stillinger_li"
  po.sportOption = '.volleyball'
  po.genderLeagues = '.gender-leagues.col-12.col-sm-6'
  po.standingsWidget = '.wff_widget.wff_widget_FW2BF49CBB0ABF7B3D.wff_widget_wide.wff_standings_volleyball'
  po.topLeaguesContainer = po.genderLeagues 
  po.topLeaguesNames = 'a[href="https://danskespil.enetscores.com/stillinger/8896/VM"]'
  po.formIconsArrayStart = 8
  po.formIconsArrayEnd = 12

  context('PC view tests standings on league page - volleyball', () => {

    it('C1 - Standings widget exists - volleyball', () => {
      cy.visit(url);
      po.standings_exists();
    });
 
    it('C2 - check all the texts - volleyball', () => {
      // cy.visit(url);
      po.check_all_texts();
    });

    it('C3 - check all the texts on mobile - volleyball', () => {
      // cy.visit(url);
      cy.viewport(360,1100)
      po.check_all_texts_mobile();
    });

    it('C4 - check the tooltips texts - volleyball', () => {
      // cy.visit(url);
      po.check_tooltips();
    });

    // it('C5 - event info pop-up on form icons - volleyball', () => {
    //   cy.visit("https://danskespil.enetscores.com/stillinger/8884/Danmark+1");
    //   po.check_form_popup();
    // });

    // it('C6 - check dropdowns - volleyball', () => {
    //   // cy.visit(url);
    //   po.check_dropdowns();
    // });

  });

});