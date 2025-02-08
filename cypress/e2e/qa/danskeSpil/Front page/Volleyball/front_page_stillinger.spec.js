import {stillinger_po} from "../../../PageObject/danskeSpil/stillinger.po"
let po = new stillinger_po
let url = null;

describe('Stillinger tests on front page - Volleyball', () => {
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
  
  po.sportsMenu = '.esc_menu_sports_active_element'
  po.stillingerButton = ".esm_stillinger_li"
  po.sportOption = '.volleyball'
  po.genderLeagues = '.gender-leagues.col-12.col-sm-6'
  po.standingsWidget = '.wff_widget.wff_widget_FW2BF49CBB0ABF7B3D.wff_widget_wide.wff_standings_volleyball'
  po.topLeaguesContainer = po.genderLeagues 
  po.topLeaguesNames = '.all-leagues-item'

  context('PC view tests stillinger on front page - Volleyball', () => {

    it('C1 - Check Stillinger tab - all leagues - Volleyball', () => {
      cy.visit(url);
      cy.get(po.sportsMenu)
        .should('exist').click();

      cy.get('.esc_menu_sports.esc_custom_menu.esc_border_menu').find(po.sportOption).click();

      cy.get(po.stillingerButton)
        .should("exist").click();

      
      //po.checkStillingerTopLeagues()
      //for top leagues
      po.checkStillingerAllStages()
      
      cy.get(po.topLeaguesContainer)
        .find('a[href*="https://danskespil.enetscores.com/stillinger/8884/Danmark+1"]').eq(0).click();

      cy.get(po.standingsWidget).should('exist')
    });

    it('C2 - Check Stillinger tab - top leagues - Volleyball', () => {
      

      cy.visit(url);
      cy.get(po.sportsMenu)
        .should('exist').click();

      cy.get('.esc_menu_sports.esc_custom_menu.esc_border_menu').find(po.sportOption).click();

      cy.get(po.stillingerButton)
        .should("exist").click();

      
      //po.checkStillingerTopLeagues()
      //for top leagues
      po.checkStillingerAllStages()
      
      cy.get(".leagues-container.col-12.row:eq(0)")
        .find('a[href*="https://danskespil.enetscores.com/stillinger/8884/Danmark+1"]').eq(0).click();

      cy.get(po.standingsWidget).should('exist')
    });
 

  });

});