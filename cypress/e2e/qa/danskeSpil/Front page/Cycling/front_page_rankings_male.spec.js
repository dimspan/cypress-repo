import {rankings_po} from "../../../PageObject/danskeSpil/rankings.po"
let po = new rankings_po
let url = null;

describe('[CL]Rankings Male on front page', () => {
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
   
  po.sportOption = '.cycling'
  po.rankingsAtpButton = '.esm_ranking_male_li'

  context('[CL]Male Rankings  on front page', () => {

    it('[CL][C1] Rankings widget exists', () => {
      cy.visit(url);
      po.rankings_exists();
    });
 
    it('[CL][C2]Male Rankings all the texts', () => {
      // cy.visit(url);
      po.check_all_texts();
    });

    it('[CL][C3]Male Rankings all the texts on mobile', () => {
      // cy.visit(url);
      cy.viewport(320,1100)
      po.check_all_texts_mobile();
    });

    it('[CL][C4]Male check dropdowns', () => {
      // cy.visit(url);
      po.check_search_country_dropdown();
    });

  });

});