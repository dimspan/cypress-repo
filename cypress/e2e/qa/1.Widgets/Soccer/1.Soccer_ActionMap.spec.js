import { widgets_action_map } from "../../PageObject/1.Widgets Testing/1.action_map.po";
let url = null;
let po = new widgets_action_map


describe('1. Soccer Action Map', {
  retries: {
  runMode: 3,
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
                url = "https://qatest-es.enetsites.com/action_map"

    // cy.viewport(1700, 1100);
  });
  beforeEach(()=>{
    cy.viewport(1700,1100)
  })

  context('Soccer Action Map', () => {
    it("C1 - Check the Comment, Stats and Pitch visual elements",()=>{
        cy.visit(url);
        po.CheckTopVisualComponents();
    })
    it("C2 - Check navigation buttons, timeline and penalty box",()=>{
        po.VisualBottomComponents();
    })
    it("C3 - Check the visual elements - icons, balls, flags",()=>{
      po.CheckVisualElements();
    })
    it("C4 - Check timeline and penalty box",()=>{
      po.CheckTimelineVisual("penaltybox")      
    })
    it("C5 - Check the buttons functionality",()=>{
      po.CheckStatsButtons()
    })
    it("C6 - Check the replay buttons",()=>{
      po.CheckReplayButtons()
    })
    it("C7 - Check tooltips",()=>{
      po.CheckTooltips()
    })
    it("C8 - Check the checkpoints - ht, ft, et",()=>{
      po.CheckpointsFunctionalities()
    })
    it("C9 - Check the penalty box functionality",()=>{
      po.PenaltyFunctionalities()
    })
    
  })
});