//Enetgraphics, Searching of an event during highlighting breaks the logic of highlighting https://enetpulse.atlassian.net/browse/EG-187
import { eg187_po } from "../../../PageObject/ePanel/bugs_pageObject/bugs.po";
import { infograph_po } from "../../../PageObject/ePanel/LS infographics/Tennis/infograph.po";
import { homePage_po } from "../../../PageObject/ePanel/homePage.po";

let hopo = new homePage_po;
let poIG = new infograph_po;
let po = new eg187_po;
let url = null;
describe("All templates - Searching of an event during highlight breaks EG187", 
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
            cy.visit(url);
        })

        context("PC view tests EG-187",()=>{
            it("C0 - Get to infographics",()=>{
                cy.visit(url);             
                hopo.loginForm();
                hopo.infographics();
                poIG.openH2Htemplate();
            })
            // it("C1 - LS H2H results Tennis",()=>{ 
            //     cy.visit("https://epanel.enetsites.com/infographic/infographic/1/0")
            //     cy.wait(1000)
            //     hopo.onlyLogin();                
            //     cy.wait(1000)
            //     po.checkHighlightedBackground()
            //     po.searchEvent("tennisPlayer")
            //     po.checkHighlightedBackground()
            //     po.switchDimensions()
            //     // po.switchDimensions()
                
            // })
            // it("C2 - LS Tennis single event stats",()=>{
            //     cy.visit("https://epanel.enetsites.com/infographic/infographic/3/0")
            //     po.checkHighlightedBackground()
            //     po.searchEvent("tennisPlayer")
            //     po.checkHighlightedBackground()
            //     po.switchDimensions()
            //     // po.switchDimensions()
 
            // })
            // it("C3 - LS Tennis single player stats",()=>{
            //     cy.visit("https://epanel.enetsites.com/infographic/infographic/4/0")
            //     po.checkHighlightedBackground();
            //     po.searchEvent("tennisPlayer")
            //     po.checkHighlightedBackground()
            //     po.switchDimensions()            })
            // it("C4 - EG H2H results Tennis ",()=>{
            //     cy.visit("https://epanel.enetsites.com/infographic/infographic/5/0")
            //     po.checkHighlightedBackground()
            //     po.searchEvent("tennisPlayer")
            //     po.checkHighlightedBackground()
            //     po.switchDimensions()
            // })
            // it("C5 - EG Single event stats tennis",()=>{
            //     cy.visit("https://epanel.enetsites.com/infographic/infographic/6/0")
            //     po.checkHighlightedBackground()
            //     po.searchEvent("tennisPlayer")
            //     po.checkHighlightedBackground()
            //     po.switchDimensions()     
            // })
            // it("C6 - EG tennis single career stats",()=>{
            //     cy.visit("https://epanel.enetsites.com/infographic/infographic/7/0")
            //     po.checkHighlightedBackground()
            //     po.searchEvent("tennisPlayer")
            //     po.checkHighlightedBackground()
            //     po.switchDimensions()     
            // })
            // it("C7 - EG Football player ev stats",()=>{
            //     cy.visit("https://epanel.enetsites.com/infographic/infographic/8/0")                  
            //     po.checkHighlightedBackground()
            //     po.searchEvent("footballEvent")
            //     po.checkHighlightedBackground()
            //     po.switchDimensions()     
            // })
            // it("C8 - EG Football next event",()=>{
            //     cy.visit("https://epanel.enetsites.com/infographic/infographic/10/0")
            //     po.checkHighlightedBackground()
            //     po.searchEvent("footballTeam")
            //     po.checkHighlightedBackground()
            //     po.switchDimensions()     
            // })
            // it("C9 - LS Quote of the day",()=>{
            //     cy.visit("https://epanel.enetsites.com/infographic/infographic/11/0")
            //     po.checkHighlightedBackground();  
            //     po.switchDimensions()     
            //     po.checkHighlightedBackground()           
            // })
            // it("C10 - LS tennis singles latest ",()=>{
            //     cy.visit("https://epanel.enetsites.com/infographic/infographic/12/0") 
            //     po.checkHighlightedBackground()
            //     po.searchEvent("tennisPlayer")
            //     po.checkHighlightedBackground()
            //     po.switchDimensions()     
            // })
            it("C11 - LS Ice hockey next event ",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/13/0")                 
                po.checkHighlightedBackground()
                po.searchEvent("hockeyTeam")
                po.checkHighlightedBackground()
                po.switchDimensions()     
            })
            it("C12 - LS Ice hockey h2h ",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/14/0")
                po.checkHighlightedBackground()
                po.searchEvent("hockeyTeam")
                po.checkHighlightedBackground()
                po.switchDimensions()     
            })
            it("C13 - LS Ice hockey g0al ",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/15/0") 
                po.checkHighlightedBackground()
                po.searchEvent("hockeyTeam")
                po.checkHighlightedBackground()
                po.switchDimensions()     
            })
            it("C14 - LS Ice hockey Match sc0r3 ",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/16/0")
                po.checkHighlightedBackground()
                po.searchEvent("hockeyTeam")
                po.checkHighlightedBackground()
                po.switchDimensions()     
            })
            it("C15 - Ice hockey event stats",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/17/0") 
                po.checkHighlightedBackground()
                po.searchEvent("hockeyTeam")
                po.checkHighlightedBackground()
                po.switchDimensions()     
            })
            it("C16 - Hockey player eve stats",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/18/0") 
                po.checkHighlightedBackground()
                po.searchEvent("hockeyTeam")
                po.checkHighlightedBackground()
                po.switchDimensions()     
            })
            it("C17 - EG Ice hockey next event",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/19/0") 
                po.checkHighlightedBackground()
                po.searchEvent("hockeyTeam")
                po.checkHighlightedBackground()
                po.switchDimensions()     
            })
            it("C18 - EG ice hockey head to head",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/20/0") 
                po.checkHighlightedBackground()
                po.searchEvent("hockeyTeam")
                po.checkHighlightedBackground()
                po.switchDimensions()     
            })
            it("C19 -EG Ice hockey goal",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/21/0") 
                po.checkHighlightedBackground()
                po.searchEvent("hockeyTeam")
                po.checkHighlightedBackground()
                po.switchDimensions()     
            })
            it("C20 - EG Tennis latest ",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/22/0") 
                po.checkHighlightedBackground()
                po.searchEvent("tennisPlayer")
                po.checkHighlightedBackground()
                po.switchDimensions()     
            })
            it("C21 - EG Ice hocke match sc0re " ,()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/23/0") 
                po.checkHighlightedBackground()
                po.searchEvent("hockeyTeam")
                po.checkHighlightedBackground()
                po.switchDimensions()     
            })
            it("C22 - EG Quote of the day ",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/24/0")
                po.checkHighlightedBackground();
                po.switchDimensions()     
            })

            it("C23 - EG Ice hockey player event stats ",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/25/0") 
                po.checkHighlightedBackground()
                po.searchEvent("hockeyTeam")
                po.checkHighlightedBackground()
            })

            it("C24 - EG Ice hockey ev stats ",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/26/0")   
                po.checkHighlightedBackground()
                po.searchEvent("hockeyTeam")
                po.checkHighlightedBackground()
                po.switchDimensions()     
            })
        })

        
    }
)