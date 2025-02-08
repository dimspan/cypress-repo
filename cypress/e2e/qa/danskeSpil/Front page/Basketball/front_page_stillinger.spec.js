import {stillinger_po} from "../../../PageObject/danskeSpil/stillinger.po"
let po = new stillinger_po
let url = null;

describe('Stillinger tests on front page - Basketball', () => {
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
  po.genderLeagues = '.gender-leagues.col-12.col-sm-6'
  po.standingsWidget = '.wff_widget.wff_widget_FW2BF49CBB0ABF7B3D.wff_widget_wide.wff_standings_basketball'

  context('PC view tests stillinger on front page - Basketball', () => {

    it('C1 - Check Stillinger tab - Basketball', () => {
      cy.visit(url);
      po.checkStillingerTopLeagues()
      po.checkStillingerAllStages()
      po.checkIfStageNameHasLinks()
    });
 

  });

});