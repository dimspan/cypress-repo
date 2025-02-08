import { fodbold_incidents_po } from "../../PageObject/fodboldDK/Match page/fodbold_incidents.po";
let po = new fodbold_incidents_po
let url = null;


describe('FodboldDK incidents', () => {
  // Set viewport configuration for all tests within this describe block
  before(() => {
    cy.clearCookies()
                cy.clearLocalStorage()
                cy.window().then((win) => {
                    win.location.reload(true)
                  })
                cy.wait(1000)
    url = 'https://fodbold.dk/kampe/4140625/Manchester-City-Brighton/';
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

  context('PC Incidents in fodbolddk', () => {
    it('C1 - Check active button properties', () => {
      cy.visit(url);  
      po.check_active_button_properties()
    });
    it("C2 - Check visual elements in incidents",()=>{
      po.check_visual_elements()
    })
    it("C3 - Check containers",()=>{
      po.check_containers()
    })
    it("C4 - Check links",()=>{
      po.check_links()
    })
    it("C5 - Check the tooltips",()=>{
      po.check_tooltips()
    })
    it("C6 - Check the texts in tooltip",()=>{
      po.check_texts_in_tooltips()
    })
    it("C7 - Check all texts",()=>{
      po.check_all_texts()
    })
      
 

  });
});