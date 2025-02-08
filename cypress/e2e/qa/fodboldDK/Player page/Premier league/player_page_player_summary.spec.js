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
	url = 'http://fodbolddkc-es.enetsites.com/spiller/737066/Erling-Haaland/overblik';
})

describe('Test Fodbolds Player sum Premier league',

    // If the test fails, it runs again
    {
        retries: {
            runMode: 2,
            openMode: 1,
        }
    },

    
() =>{
    
        context('PC Fodbold Player summary Premier league',

        {
            viewportWidth: 1400, //Set context config 
            viewportHeight: 1100,
        },

         () =>{
    

            it('C1 - Visit the Player page Premier league', () => {

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
                poST.get_to_premier_league()

            })

            it('C2 - Check if the widget exist fodbold Premier league', () => {
                po.existElement();
                // cy
                // .get('[PLSum].wff_widget_FWA214985AB473BF52')
                // .should('[PLSum]exist')
            })

            it('C3 - Check if the header is bold fodbold Premier league', () => {
                po.checkHeader();
                // cy
                // .get('[PLSum].wff_label_text.wff_section_header_label')
                // .should('[PLSum]have.css', 'font-weight')
                // .and('[PLSum]match', /700/)
            })

            it('C4 - Check spelling of stats categories Premier league' , () => {
                po.checkStatName();
            //     cy
            //     .get('[PLSum].wff_summary_stat_name')
            //     .should('[PLSum]have.css', 'font-weight')
            //     .and('[PLSum]match', /400/)
            })
            it("C5 - Check stat names' weight fodbold Premier league", () =>{
                po.checkStatsNameWeight();
            })

        })

        context('Small view tests Player summary Premier league', 

        {
            viewportWidth: 360, //Set context config 
            viewportHeight: 800,
        },

        () =>{


            it('C1 - Visit the url fodbold dk Premier league', () => {
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
                poST.get_to_premier_league()

            })

            it('C2 - Check if the widget exist in fodbold epl', () => {
                po.existSmallElement();
                // cy
                // .get('[PLSum].wff_widget_FWA214985AB473BF52')
                // .should('[PLSum]exist')
            })
            
            
            it('C3 - Check if the header is bold fodbolddd EPL', () => {
                po.checkSmallHeader();
                // cy
                // .get('[PLSum].wff_label_text.wff_section_header_label')
                // .should('[PLSum]have.css', 'font-weight')
                // .and('[PLSum]match', /700/)
            })

            it('C4 - Check if the stat name isn`t bold in fodbold dk player page EPL', () => {
                po.checkStatsSmallNameWeight();
                // cy
                // .get('[PLSum].wff_summary_stat_name')
                // .should('[PLSum]have.css', 'font-weight')
                // .and('[PLSum]match', /400/)
            })
            it('C5 - Check spelling of stats categories in Premier league' , () => {
                po.checkSmallStatName();
            
            })

        })
    
})  
    
