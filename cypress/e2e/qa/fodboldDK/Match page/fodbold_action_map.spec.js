import { widgets_action_map } from "../../PageObject/1.Widgets Testing/1.action_map.po";
import { player_page_tabs_switch_po } from "../../PageObject/fodboldDK/page_switch_tabs.po";
let po = new widgets_action_map
let poTS = new player_page_tabs_switch_po
//expected values for actionmap
po.widget_code = ".wff_widget.wff_widget_FWD8B2062625E4FCD8.wff_widget_medium"
po.roundedHeight = 111
po.expectedMaxWidth = "400px"
po.timelineMaxWidth = "none"
po.homeBarStatsColor = "rgb(18, 19, 25)"
po.expectedCardsStatsHeader = "Kort"
po.expectedShotsHeader = "Skud"
po.expectedPossessionHeader = "Boldbesiddelse"
// po.nationalFlagHeight = "28px"
po.nationalFlagWidth = "28px"
po.expectedWelcomeMessage = "Velkommen"
po.expectedFirstHalfLabel = "1. halvleg"
po.expectedFontSizeInTooltip = "14px"
po.expectedHTlabel = "Pause"
po.expected1stHalfET = "Forlænget spilletid - 1. halvleg"
po.expectedWaitingPenalty = "Venter på straffesparkskonkurrence"
po.expectedLabelPSscored = "Scoring i straffespakskonkurrence"
po.expectedLabelPSmissed = "Straffe brændt i straffesparkskonkurrencen, reddet af keeperen"
po.textClassPSComments = ".wff_label_text:eq(1)"


let url = null;


describe('FodboldDK action map', {
    retries: {
    runMode: 4,
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
    url = 'https://fodbold.dk/kampe/3370572/Manchester-City-Brighton/';
    // cy.viewport(1700, 1100);
  });
  beforeEach(()=>{
    cy.viewport(1700,1100)
  })

  context('PC Action map in FodboldDK', () => {
    it('C1 - Go to Kamp section', () => {
      cy.visit(url);  
      cy.wait(1000)
      const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
                Cypress.on('uncaught:exception', (err) => {
                /* returning false here prevents Cypress from failing the test */
                  if (resizeObserverLoopErrRe.test(err.message)) {
                    return false
                  }
                })
      poTS.get_to_kamp_matchpage()
    });
    it("C2 - Check comment, stats , pitch",()=>{
      po.CheckTopVisualComponents()
    })
    it("C3 - Check navigation, timeline, penalty box",()=>{
      po.VisualBottomComponents()
    })
    it("C4 - Check the visual elements - icons, balls, flags",()=>{
      po.CheckVisualElements()
    })
    it("C5 - Check timeline and penalty box",()=>{
      po.CheckTimelineVisual("penaltybox")
    })
    it("C6 - Check the buttons functionality",()=>{
      po.CheckStatsButtons()
    })
    it("C7 - Check the replay buttons",()=>{
      po.CheckReplayButtons()
    })
    it("C8 - Check the tooltips",()=>{
      po.CheckTooltips()
    })
    it("C9 - Check the checkpoints - HT, FT, ET",()=>{
      po.CheckpointsFunctionalities()
    })
    it("C10 - Check the Penalty box functionality",()=>{
      po.PenaltyFunctionalities()
    })

 
      
 

  });
});