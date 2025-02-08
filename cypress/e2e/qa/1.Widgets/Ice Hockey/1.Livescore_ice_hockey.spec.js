import { ice_hockey_daily_livescore_po } from "../../PageObject/1.Widgets Testing/29.Daily_Livescore.po"
let url = null;
let po = new ice_hockey_daily_livescore_po
po.nextMatches = ".wff_widget.wff_widget_FWF61B67305622A7D1.wff_widget_medium:eq(0)"
po.teamNames =".wff_participant_name.wff_responsive_text"

describe('Ice hockey livescore', {
  retries: {
  runMode: 2,
  openMode: 1,
},
},




() => {
  // Set viewport configuration for all tests within this describe block
  before(() => {
    cy.clearCookies()
                cy.clearLocalStorage()
                cy.window().then((win) => {
                    win.location.reload(true)
                  })
                cy.wait(1000)

    // cy.viewport(1700, 1100);
  });
  beforeEach(()=>{
    cy.viewport(1700,1100)
  })

  context('GB: Stage RT: Livescore', () => {
    it(" [IH] Stage Livescore all matches appearance ",()=>{
        cy.visit("https://qatest-es.enetsites.com/")
        po.livescore_all_matches() 
    })
    it(" [IH] Stage Livescore finished matches ",()=>{
      po.livescore_finished_matches()
    })
    it(" [IH] Stage Livescore live matches",()=>{
      po.livescore_live_matches()
    })
   
 
      
 

  });
  context('GB: Date, RT: Date', () => {
    it("[IH] Date Date All matches ",()=>{
        cy.visit("https://qatest-es.enetsites.com/")
        po.date_livescore_all_matches() 
    })
    it("[IH] Date Date Checks visual elements and functionalities for finished events",()=>{
      po.date_livescore_finished_matches()
    })
    it("[IH] Date Date Check for live matches visual element and functionalities",()=>{
      po.date_livescore_live_matches()
    })
  })

 
  context('GB: Date, RT: Event 0/all', () => {
    it("[IH] Date Event Check visual elements all matches",()=>{
        cy.visit("https://qatest-es.enetsites.com/")
        po.range_all_livescore_all_matches()
    })
    it("[IH] Date Event Checks visual elements and functionalities for finished events",()=>{
      po.range_all_livescore_finished_matches()
    })
    it("[IH] Date Event Check for live matches visual element and functionalities",()=>{
      po.range_all_livescore_live_matches()
    })
  })
});