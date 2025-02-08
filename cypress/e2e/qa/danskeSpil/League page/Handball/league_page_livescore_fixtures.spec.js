import {livescore_fixtures_other_sports_po} from "../../../PageObject/danskeSpil/livescore_fixtures.po"
let po = new livescore_fixtures_other_sports_po
let url = null;

describe('livescore fixtures tests on league page - volleyball', () => {
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
  po.genderLeagues = '.gender-leagues.col-12.col-sm-6'
  po.standingsWidget = '.wff_widget.wff_widget_FW2BF49CBB0ABF7B3D.wff_widget_wide.wff_standings_volleyball'
  po.topLeaguesContainer = po.genderLeagues 
  po.topLeaguesNames = 'a[href*="https://danskespil.enetscores.com/stillinger/8884/Danmark+1"]'
  po.scopeHeaderArray = ['S1', 'S2', 'S3', 'S4','S5', 'S']

  context('Tests livescore fixtures on league page - volleyball', () => {

    // it('C1 - livescore fixtures widget exist - volleyball', () => {
    //   cy.visit(url);
      
    //   po.livescore_fixtures_exists()
    // });

    // it('C2 - livescore fixtures all texts - volleyball', () => {
      
    //   po.livescore_fixtures_all_matches()
    // });

    // it('C3 - livescore fixtures widget exist on mobile - volleyball', () => {
    //   cy.viewport(320,1100)
    //   po.livescore_fixtures_all_matches_mobile()
      
    // });

  });

});