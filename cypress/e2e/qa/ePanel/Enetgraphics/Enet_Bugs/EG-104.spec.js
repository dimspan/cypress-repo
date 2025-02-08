//Enetgraphics, Next event - Font size of the header is not pre-selected https://enetpulse.atlassian.net/browse/EG-104
// import { eg104_po } from "../../PageObject/ePanel/bugs_pageObject/bugs.po";
import { eg104_po } from "../../../PageObject/ePanel/bugs_pageObject/bugs.po";
import { infograph_po } from "../../../PageObject/ePanel/LS infographics/Tennis/infograph.po";
import { homePage_po } from "../../../PageObject/ePanel/homePage.po";

let hopo = new homePage_po;
let poIG = new infograph_po;
let po = new eg104_po;
let url = null;

describe("All templates - Check if the header's font size is pre-selected", 
    {
        retries: {
        runMode: 2,
        openMode: 1,
      },
    },
    ()=>{
        before(() => {
            cy.clearCookies()
                        cy.clearLocalStorage()
                        cy.window().then((win) => {
                            win.location.reload(true)
                          })
                        cy.wait(1000)                
            url = 'https://epanel.enetsites.com/login'    
            
        });
        beforeEach(()=>{
            cy.viewport(1400,1100)
        })
        context("PC view tests EG104",()=>{
            it("C1 - LS H2H results Tennis",()=>{
                cy.visit(url);             
                hopo.loginForm();
                hopo.infographics();
                poIG.openH2Htemplate();  
                po.ls_h2h();
            })
            it("C2 - LS Tennis single event stats",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/3/0")
                po.ls_h2h();
            })
            it("C3 - LS Tennis single player stats",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/4/0")
                po.ls_h2h();
            })
            it("C4 - EG H2H results Tennis ",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/5/0")
                po.ls_h2h();
            })
            it("C5 - EG Single event stats tennis",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/6/0")
                po.ls_h2h()
            })
            it("C6 - EG tennis single career stats",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/7/0")
                po.ls_h2h()
            })
            it("C7 - EG Football player ev stats",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/8/0")                
                po.header = '[id="ee_away-name"]'
                po.ls_h2h()
            })
            it("C8 - EG Football next event",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/10/0")
                po.header = '[id="template-title"]'
                po.ls_h2h()
            })
            it("C9 - LS Quote of the day",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/11/0")
                po.header = '[id="author"]'
                po.ls_h2h()
                po.header = '[id="quote_apostrophe"]'
                po.ls_h2h()                
            })
            it("C10 - LS tennis singles latest ",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/12/0") 
                po.header = '[id="participant-name"]'              
                po.ls_h2h()
                po.header = '[id="template-title"]'
                po.ls_h2h()
            })
            it("C11 - LS Ice hockey next event ",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/13/0")                 
                po.ls_h2h();
            })
            it("C12 - LS Ice hockey h2h ",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/14/0") 
                po.ls_h2h();
                po.header = '[id="home-name"]'
                po.ls_h2h();
                po.header = '[id="away-name"]'
                po.ls_h2h()
            })
            it("C13 - LS Ice hockey g0al ",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/15/0") 
                po.header = '[id="home-participant"]'
                po.ls_h2h();
                po.header = '[id="away-participant"]'
                po.ls_h2h()
            })
            it("C14 - LS Ice hockey Match sc0r3 ",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/16/0")
                po.header = '[id="template-title"]' 
                po.ls_h2h();
            })
            it("C15 - Ice hockey event stats",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/17/0") 
                po.ls_h2h();
                po.header = '[id="home-name"]'
                po.ls_h2h();
                po.header = '[id="away-name"]'
                po.ls_h2h();
            })
            it("C16 - Hockey player eve stats",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/18/0") 
                po.header = '[id="team"]'
                po.ls_h2h();
                po.header = '[id="away-name"]'
                po.ls_h2h();
                po.header = '[id="event-home-name"]'
                po.ls_h2h();
                po.header = '[id="event-away-name"]'
            })
            it("C17 - EG Ice hockey next event",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/19/0") 
                po.header = '[id="template-title"]'
                po.ls_h2h();
            })
            it("C18 - EG ice hockey head to head",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/20/0") 
                po.header = '[id="template-title"]'
                po.ls_h2h();
                po.header = '[id="home-name"]'
                po.ls_h2h();
                po.header = '[id="away-name"]'
                po.ls_h2h()
            })
            it("C19 -EG Ice hockey goal",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/21/0") 
                po.header = '[id="home-participant"]'
                po.ls_h2h();
                po.header = '[id="away-participant"]'
                po.ls_h2h()
            })
            it("C20 - EG Tennis latest ",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/22/0") 
                po.header = '[id="participant-name"]'              
                po.ls_h2h()
                po.header = '[id="template-title"]'
                po.ls_h2h()
            })
            it("C21 - EG Ice hocke match sc0re " ,()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/23/0") 
                po.header = '[id="template-title"]'
                po.ls_h2h();
            })
            it("C22 - EG Quote of the day ",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/24/0")
                po.header = '[id="author"]'
                po.ls_h2h()
                po.header = '[id="quote_apostrophe"]'
                po.ls_h2h()
            })

            it("C23 - EG Ice hockey player event stats ",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/25/0") 
                po.header = '[id="team"]'
                po.ls_h2h();
                po.header = '[id="event-home-name"]'
                po.ls_h2h();
                po.header = '[id="event-home-name"]'
                po.ls_h2h();
            })

            it("C24 - EG Ice hockey ev stats ",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/26/0")   
                po.header = '[id="template-title"]'                  
                po.ls_h2h();
                po.header = '[id="home-name"]'
                po.ls_h2h();
                po.header = '[id="away-name"]'
                po.ls_h2h();
            })
        })

        
    }
)