import { player_sum_po } from "../../../PageObject/worldCup/player_sum.po";
import { player_page_tabs_switch_po } from "../../../PageObject/fodboldDK/page_switch_tabs.po";
let po = new player_sum_po;
let poST = new player_page_tabs_switch_po
po.widgetComponent = "[id=wff_summary_generic_soccer_FW10148E735BD08EB0]";
po.headerDefending = po.headerAttacking
po.widgetSmallComponent = ".wff_widget.wff_widget_FW10148E735BD08EB0.wff_widget_small"
// po.widgetSmallComponent =  ".wff_widget_FW07ADBF8CF10FB04E";
po.array = ["Mål for", "Straffesparksmål", "Direkte frisparksmål","Assists", "Skud på mål","Skud forbi mål","Succesfulde indlæg",
"Nøgleafleveringer"]
let url = null;

before(() => {
	// runs once before all tests
	url = 'https://fodbold.dk/spiller/737066/Gonzalo-Montiel/overblik/';
})

describe('Test Fodbolds Player sum for Champions league',

    // If the test fails, it runs again
    {
        retries: {
            runMode: 2,
            openMode: 1,
        }
    },

    
() =>{
    
        context('PC Fodbold Player summary Champions league',

        {
            viewportWidth: 1400, //Set context config 
            viewportHeight: 1100,
        },

         () =>{
    

            it('C1 - Visit the Player page ChAmpions league', () => {

                cy.visit(url)
                cy.wait(1000)
                const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
                Cypress.on('uncaught:exception', (err) => {
                /* returning false here prevents Cypress from failing the test */
                  if (resizeObserverLoopErrRe.test(err.message)) {
                    return false
                  }
                })
                poST.get_to_klub()

            })

            it('C2 - Check if the widget exist for champions league', () => {
                po.existElement();
                // cy
                // .get('[PLSum].wff_widget_FWA214985AB473BF52')
                // .should('[PLSum]exist')
            })

            it('C3 - Check if the header is bold for champions league', () => {
                po.checkHeader();
                // cy
                // .get('[PLSum].wff_label_text.wff_section_header_label')
                // .should('[PLSum]have.css', 'font-weight')
                // .and('[PLSum]match', /700/)
            })

            it('C4 - Check if the stat categories are spelled properly for champions league' , () => {
                po.checkStatName();
            //     cy
            //     .get('[PLSum].wff_summary_stat_name')
            //     .should('[PLSum]have.css', 'font-weight')
            //     .and('[PLSum]match', /400/)
            })
            it("C5 - Check stat names' weight for champions league", () =>{
                po.checkStatsNameWeight();
            })

        })

        context('Small view tests Player summary champions league', 

        {
            viewportWidth: 360, //Set context config 
            viewportHeight: 800,
        },

        () =>{


            it('C1 - Visit the url for champions league in fodboldDK', () => {
                cy.visit(url)
                cy.wait(1000)
                const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
                Cypress.on('uncaught:exception', (err) => {
                /* returning false here prevents Cypress from failing the test */
                  if (resizeObserverLoopErrRe.test(err.message)) {
                    return false
                  }
                })
                poST.get_to_klub()

            })

            it('C2 - Check if the widget exist in champions league', () => {
                po.existSmallElement();
                // cy
                // .get('[PLSum].wff_widget_FWA214985AB473BF52')
                // .should('[PLSum]exist')
            })
            
            
            it('C3 - Check if the header is bold champions league', () => {
                po.checkSmallHeader();
                // cy
                // .get('[PLSum].wff_label_text.wff_section_header_label')
                // .should('[PLSum]have.css', 'font-weight')
                // .and('[PLSum]match', /700/)
            })

            it('C4 - Check if the stat name isn`t bold champions league', () => {
                po.checkStatsSmallNameWeight();
                // cy
                // .get('[PLSum].wff_summary_stat_name')
                // .should('[PLSum]have.css', 'font-weight')
                // .and('[PLSum]match', /400/)
            })
            it('C5 - Check spelling of stats categories champions league' , () => {
                po.checkSmallStatName();
            
            })

        })
    
})  
    
