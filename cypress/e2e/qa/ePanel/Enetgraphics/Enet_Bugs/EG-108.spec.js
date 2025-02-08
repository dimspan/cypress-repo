//Enetgraphics, All templates - Scale should be reset when you upload a new image https://enetpulse.atlassian.net/browse/EG-108
import { eg108_po } from "../../../PageObject/ePanel/bugs_pageObject/bugs.po";
import { infograph_po } from "../../../PageObject/ePanel/LS infographics/Tennis/infograph.po";
import { homePage_po } from "../../../PageObject/ePanel/homePage.po";

let hopo = new homePage_po;
let poIG = new infograph_po;
let po = new eg108_po;
let url = null;
describe("All templates - Scale should be reset when you upload a new image", 
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
        context("PC view tests EG-108",()=>{
            it("C0 - Reach the infographics",()=>{
                cy.visit(url);             
                hopo.loginForm();
                hopo.infographics();
                poIG.openH2Htemplate();  
            })
            it("C1 - LS h2h result tennis",()=>{                
                po.resetScale()
            })
            it("C2 - Tennis single event stats ls",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/3/0")
                po.resetScale()
            })
            it("C3 - LS Single pl stats Tennis",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/4/0")
                po.resetScale()
            })
            it("C4 - EG tennis results H2H",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/5/0")
                po.resetScale()
            })
            it("C5 - EG single event stats tennis",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/6/0")
                po.resetScale()
            })
            it("C6 - EG Tennis single career stts",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/7/0")                
                po.resetScale()
            })
            it("C7 - EG soccer playerr event stats",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/8/0")
                po.resetScale()
            })
            it("C8 - Next event EG soccer",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/9/0")
                po.resetScale()
            })
            it("C9 - Qu0t3 0f the day ",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/11/0")
                po.resetScale()
            })
            it("C10 - Singles latest LS ",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/12/0")
                po.resetScale()
            })  
            it("C11 - LS Ice hockey next event ",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/13/0")
                po.resetScale()
            })
            it("C12 - LS Ice hockey h2h ",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/14/0")
                po.resetScale()
            })
            it("C13 - Hockey G0al LS ",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/15/0")
                po.resetScale()
            })
            // it("C14 - Hockey Match Score LS ",()=>{
            //     //not working. Check it
            //     cy.visit("https://epanel.enetsites.com/infographic/infographic/16/0")
            //     po.resetScale()
            // })
            it("C15 - Ice hockey event stats ",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/17/0")
                po.resetScale()
            })
            // working til here
            it("C16 - Hockey player eve stats",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/18/0") 
                po.resetScale()
            })
            it("C17 - EG Ice hockey next event",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/19/0") 
                po.resetScale();
            })
            it("C18 - EG ice hockey head to head",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/20/0") 
                po.resetScale()    
            })
            it("C19 -EG Ice hockey goal",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/21/0") 
                po.resetScale()
            })
            it("C20 - EG Tennis latest ",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/22/0") 
                po.resetScale()
            })
            it("C21 - EG Ice hocke match sc0re " ,()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/23/0") 
                po.resetScale()
            })
            it("C22 - EG Quote of the day ",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/24/0")
                po.resetScale()
            })
            it("C23 - EG Ice hockey player event stats ",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/25/0") 
                po.resetScale()
            })
            it("C24 - EG Ice hockey ev stats ",()=>{
                cy.visit("https://epanel.enetsites.com/infographic/infographic/26/0")   
                po.resetScale()
            })
            
            

        })
    }
)