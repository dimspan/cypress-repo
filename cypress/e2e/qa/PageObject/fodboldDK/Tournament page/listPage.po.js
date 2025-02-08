export class listPage_po{
    constructor(){
        this.topLeaguesComponent = ".es_leagues.esc_template_list"
        this.leagues = ".es_league_name"
        this.flags = ".flag-item"
        this.showMoreButton = ".btn.es_league_show_more_button"
        this.showLessButton = ".btn.es_league_show_less_button"
        this.headersCountryNames = ".country-name"
        this.allLeagues =".all-leagues-item"
        this.search = ".es_ac_search_bar_text"
        this.suggestion = ".es_ac_list_item:eq(0)"
        this.header = ".template-name" 
        this.firstTeam = ".wff_participant.wff_responsive_text_no_display:eq(0)"
        this.teamInfoWidgetPCview = ".wff_widget.wff_widget_FWDEFF3C37667BDFBD.wff_widget_medium"
        this.previousMatchesSmall = ".wff_widget.wff_widget_FW25A64EE830B1F6A0.wff_widget_small:eq(0)"
        this.resultRowSmall = ".wff_event_link_small:eq(0)"
        this.clientName = "fodbolddk"
        this.eventInfoSmall = ".wff_widget.wff_widget_FW7E2EA9FC85D2CF9A.wff_widget_small"
        this.teamInfoSmall = ".wff_widget.wff_widget_FWDEFF3C37667BDFBD.wff_widget_small"
        this.nextMatches = ".wff_widget.wff_widget_FWB7D5DBCF7C497D92.wff_widget_medium:eq(0)"
        this.nextMatchesSmall = ".wff_widget.wff_widget_FWB7D5DBCF7C497D92.wff_widget_small:eq(0)"
    }
    checks_ListPage_Design_fontSize(){
        //checks the font size and attributes of leagues in the sections
        try{
            cy.get(this.allLeagues).should("have.css","font-size","14px")
                .and("have.css","font-weight",'400')
                .and("have.css","line-height","32px")
            
    
        }catch (error){
            console.error("An error occurred:", error.message);
            throw Error
        }
        
 
    }
    checksAllFlags(){
        try{

               //if show more is clicked or not, so the retries will work in both ways
               cy.get(this.showMoreButton).then(($element)=>{
                if($element.is(":visible")){
                    cy.get($element)
                    .click()
                }else if(!$element.is(":visible")){
                    cy.get(this.showLessButton).should("be.visible")
                }else{
                    throw Error
                }
               })
            //checks all flags     
            // cy.get(this.flags)
            // .each((element,index)=>{
                // cy.wrap(this.flags)
                // .then(($element)=>{
                    // if($element.is(":visible")){
                        cy.get(this.flags).invoke("outerWidth").should("eq",20)  //checks the outerWidth
                        cy.get(this.flags).invoke("outerHeight").should("eq",20) //checks the outerHeight
                    // }else{
                    //     cy.wrap($element).should("not.be.visible")
                    // }
                    // if(index <=14){ //14 because there are 15 elements in the top tournament component 
                    //     cy.wrap($element).should("have.css","border", "1px solid rgb(230, 230, 230)") 
                    // }else if(index >=30){
                        cy.get(this.headersCountryNames)
                        .should("have.css","font-size","20px")
                        .and("have.css","font-weight",'700')
                                
                // })
            // })
        } 
        catch (error){
            console.error("An error occurred:", error.message);
            throw Error
        }
    }checksAllFlagsMobile(){
        try{
            cy.get(this.flags)  
            .invoke("outerWidth").should("eq",20)  //checks the outerWidth
            cy.get(this.flags).invoke("outerHeight").should("eq",20) //checks the outerHeight
            cy.get(this.headersCountryNames)
            .should("have.css","font-size","20px")
            .and("have.css","font-weight",'700')
        }catch (error){
            console.error("An error occurred:", error.message);
            throw Error
        }
        
    }
    countTopLeaguesPCview(){
        // if(!Cypress.config("viewportWidth") === 360 ){ //PC view
        try{
            cy.get(this.showMoreButton).then(($element)=>{
                if($element.is(":visible")){
                    cy.get($element).should("exist")
                }
                else{
                    cy.get(this.showLessButton).click()
                }
            })
            cy.get(this.topLeaguesComponent)
            .should("exist")
            cy.get(this.leagues).should("have.length",15)
            cy.get(this.leagues).each((element,index)=>{
                cy.wrap(index)
                if(index<10){
                    cy.wrap(element).should("be.visible")
                }else{
                    cy.wrap(element).should("not.be.visible")
                }
            })
        }catch(error){
            console.error("An error occurred:", error.message);
            throw Error
        }       
    }
    countTopLeaguesMobile(){
        try{
            cy.get(this.topLeaguesComponent)
            .should("exist")
            cy.get(this.leagues).should("have.length",15)
            cy.get(".league-name").each((element,index)=>{
                cy.wrap(element).should("be.visible")
            })
        }catch(error){
            console.error("An error occurred:", error.message)
            throw Error
        }
       
    }
    checks_ListPage_Design_Mobile(){
        try{
            cy.get(this.allLeagues)
                .should("have.css","font-size","14px")
                .and("have.css","font-weight",'400')
                .and("have.css","line-height","30px")
                .and("have.css","padding","5px 0px")
            
            //check the flags 
            cy.get(this.flags)
                .invoke("outerWidth").should("eq",20)  //checks the outerWidth
                cy.get(this.flags).invoke("outerHeight").should("eq",20)
               
        }
        catch(error){
            console.error("An error occurred:", error.message)
            throw Error
        }
        //top tournaments component
      
    }
    searchAndOpenTournamentPage(){
        try{
            cy.get(this.search).click()
        .type("Premier League")
        .wait(2000)
        cy.get(this.suggestion)
        .click()
        cy.get(this.header).invoke("text").should("equal","Premier League")
        }catch(error){
            console.error("An error occurred:", error.message)
            throw Error
        }
        
    }
    livescoresTestPCview(){
        // if(Cypress.config("viewportWidth") === 1700){
            cy.get('.wff_widget_FW25A64EE830B1F6A0').should('exist')
            .and("be.visible")
            // cy.getElement("css",this.previousMatchesSmall,250)
        // }
        // else if(Cypress.config("viewportWidth") === 360){
            // cy.getElement("css",this.previousMatchesSmall)
        // }
        // else{
        //     throw Error
        // }
       
    }
    livescoresNextMatchesPC(){
        try{
            cy.getElement("css",this.nextMatchesSmall,250)
        }
        catch(error){
            console.error("An error occurred:", error.message)
            throw Error
        }
    }
    livescoresTestMobile(){
        try{
            cy.getElement("css",this.previousMatchesSmall,250)
        }catch(error){
            console.error("An error occurred:", error.message)
            throw Error
        }
        
    }
    livescoresNextMatchesMobile(){
        try{
            cy.getElement("css",this.nextMatchesSmall,250)
        }
        catch(error){
            console.error("An error occurred:", error.message)
            throw Error
        }
        
    }
    checkTeamLink(){
        try{
            cy.get(".wff_participant_name.wff_responsive_text").eq(0)
            .find(".wff_participant_link")
            .invoke("attr","href").then((href)=>{
                cy.request(href).its("status").should('eq',200)
            })
            // cy.get(".wff_participant.wff_responsive_text_no_display").eq(0)
            // // .find(this.firstTeam)
            // .click()
            // .wait(1000)
            // cy.get(this.teamInfoWidgetPCview).should("exist").and("be.visible")
        }
        catch(error){
            console.error("An error occurred:", error.message)
            throw Error
        }
     
    }
    scoreboxSmall(){
        try{
        cy
        .checkLinks(this.previousMatchesSmall,this.resultRowSmall,this.clientName)
        cy
        .get(this.eventInfoSmall)
        .should("exist")
        } catch(error){
            console.error("An error occurred:", error.message)
            throw Error
        }

        
    }
    checkTeamLinkSmall(){
        try{
        cy.get(this.firstTeam)
        .click()
        .wait(1000)
        cy.get(this.teamInfoSmall).should("exist").and("be.visible")
        }catch(error){
            console.error("An error occurred:", error.message)
            throw Error
        }
        
    }
}