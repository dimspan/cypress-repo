import {rankings_po} from "../../../PageObject/danskeSpil/rankings.po"
let po = new rankings_po
let url = null;

describe('Rankings WTA tests on front page - Tennis', () => {
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
   
  po.rankingsAtpButton = '.esm_ranking_wta_li'

  context('Tests Rankings WTA on front page - Tennis', () => {

    it('C1 - Rankings WTA  widget exists - Tennis', () => {
      cy.visit(url);
      po.rankings_exists();
    });
 
    it('C2 - Rankings WTA all the texts - Tennis', () => {
      // cy.visit(url);
      po.check_all_texts();
    });

    it('C3 - Rankings WTA all the texts on mobile - Tennis', () => {
      // cy.visit(url);
      cy.viewport(320,1100)
      po.check_all_texts_mobile();
    });

    it('C4 - check WTA dropdowns - Tennis', () => {
      // cy.visit(url);
      po.check_search_country_dropdown();
    });

  });

});