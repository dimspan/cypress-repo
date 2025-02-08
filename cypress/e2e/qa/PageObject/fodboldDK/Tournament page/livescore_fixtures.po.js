export class livescore_fixtures_po{
    constructor(){
        this.league_name = ".league-name"
        this.leagues_item = ".leagues-item"
        this.forrigeKampHeader = ".esmx-title.es_prev_matches.es_widget_container.esm_comp.esm_overview-title"
        this.kommendeKampeHeader = ".esmx-title.es_next_matches.es_widget_container.esm_comp.esm_overview-title"
        this.stillingHeader = ".esmx-title.esm_comp.es_widget_container.esm_overview-title:eq(2)"
        this.topscorereHeader = ".esmx-title.esm_comp.es_widget_container.esm_overview-title:eq(3)"
        this.lastMatchesKampeTab = ".wff_widget.wff_widget_FW493001AA07CF0B12.wff_widget_small:eq(0)"
        this.nextMatchesKampeTab = ".wff_widget.wff_widget_FW493001AA07CF0B12.wff_widget_small:eq(1)"
        this.lastMatches = ".wff_widget.wff_widget_FW25A64EE830B1F6A0.wff_widget_small:eq(0)"
        this.datesHeaders = ".wff_grouping_header_value.wff_capitalize_text_transform"
        this.lastMatchesContainer = ".es_prev_matches.es_widget_container.esm_comp.esm_overview:eq(0)"
        this.nextMatchesContainer = ".es_next_matches.es_widget_container.esm_comp.esm_overview:eq(0)"
        this.teamNames = ".wff_participant_link"
        this.eventStatusWrapper = ".wff_event_name_time_status_wrapper"
        this.eventGroupingHeader =".wff_event_grouping_header_component:eq(0)"
        this.nextEventGroupingHeader = ".wff_event_grouping_header_component:eq(2)"
        this.nextEventGroupingHeaderSmallVersion = ".wff_event_grouping_header_component"//limited to 5 - 10 matches
        this.expanded_arrow = ".wff_icon_container.icon-expanded_arrow_container"
        this.collapsed_arrow = ".icon-collapsed_arrow:eq(0)"
        this.eventWrapper = ".wff_event_row_wrapper_root:eq(0)"
        this.lastMatchesMobile =".wff_widget.wff_widget_FW25A64EE830B1F6A0.wff_widget_small:eq(0)"
        this.nextMatches = ".wff_widget.wff_widget_FWB7D5DBCF7C497D92.wff_widget_small" 
        this.nextMatchesMobile = ".wff_widget.wff_widget_FWB7D5DBCF7C497D92.wff_widget_small:eq(0)"   
        this.headers = ".wff_event_grouping_header_component"
        this.headersTransform = ".wff_grouping_header_value.wff_capitalize_text_transform"
        this.eventRowWrapper = ".wff_event_row_wrapper.wff_single"
        this.ls_lastmatch_container_teampage = ".es_prev_matches_team_page.esm_comp.esm_overview.es_widget_container"
        this.ls_nextmatch_container_teampage = ".col-12.col-sm-6.col-md-6.col-lg-6.plm-cell.escc-overview.es_widget_container_right.overview.es_widget_container_right"
        this.lastmatch_kampe_teampage = ".wff_widget.wff_widget_FW493001AA07CF0B12.wff_widget_small"
        this.nextmatch_kampe_teampage = ".wff_widget.wff_widget_FWB7D5DBCF7C497D92.wff_widget_small"
        this.acceptButton = "#ensSaveAll"
        this.nextMatchesPlayerPage = ".wff_widget.wff_widget_FW493001AA07CF0B12.wff_widget_small:eq(1)"
        this.header_sections = ".wff_tournament_header_container.wff_single.wff_group_by_date.wff_tournament_header_container_default_version"
        this.flags = ".wff_flag_logo_img"
        this.collapsed_arrow_container = ".wff_icon_container.icon-collapsed_arrow_container"
        this.match_status = ".wff_status_value.wff_capitalize_text_transform"
        this.tooltip_class = ".wff_tooltip_root.wff_start_time_and_status_tooltip"
        this.content_header_tooltip = ".wff_multiple_content_main_header"
        this.group_by_stage_header = ".wff_tournament_header_container.wff_single.wff_group_by_stage.wff_tournament_header_container_default_version"
        this.group_by_date_header = ".wff_tournament_header_container.wff_single.wff_group_by_date.wff_tournament_header_container_default_version"
        this.flag_container = ".wff_flag_and_logo_container"
    }   
   
    livescoreNextMatch(){
        const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
        Cypress.on('uncaught:exception', (err) => {
            /* returning false here prevents Cypress from failing the test */
            if (resizeObserverLoopErrRe.test(err.message)) {
                return false
            }
        })
    let counter = ""
    cy.get(this.nextMatches)
    .should("exist")
    cy.get(this.nextMatchesContainer)
    .find(this.eventStatusWrapper)
    .each((element,index )=>{
    cy.wrap(element).invoke("text").then((text)=>{
       const filteredText = text.trim()
       expect(filteredText).to.match(/\d{2}:\d{2}/)
    //    let statusAndTournament = filteredText.split("\n")
    //    let status = statusAndTournament[0]
    //    let tournament = statusAndTournament[2].trim()
    //    console.log(tournament)
    //     expect(status).to.match(/\d{2}:\d{2}/)
    //     expect(tournament).to.eq("Premier League")            
        })
    })
    cy.get(this.eventStatusWrapper).should("have.css","font-family","Roboto, sans-serif")
    .and("have.css","margin-right","0px")
    // .and("have.css","position","absolute")
    .and("have.css","position","static")
    // .and("have.css","left","0px")        
    .and("have.css","left","auto")  
   
    //team names
    cy.get(this.lastMatchesContainer)
    .find(this.teamNames)
    // .each((element,index)=>{
    .should("have.css","font-size","14px")
    .and("have.css","font-style","normal")
    .and("have.css","color","rgb(0, 0, 0)")
    // })
    cy.get(this.nextEventGroupingHeader).click()
        cy.get(this.nextEventGroupingHeader)
        .find(this.eventWrapper).should("not.exist")
        cy.get(this.collapsed_arrow_container)
        .should("have.attr","aria-label","icon-collapsed_arrow")

    }
    livescoreNextKampeTab(){
        const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
        Cypress.on('uncaught:exception', (err) => {
            /* returning false here prevents Cypress from failing the test */
            if (resizeObserverLoopErrRe.test(err.message)) {
                return false
            }
        })
    let counter = ""
    cy.get(this.nextMatchesKampeTab)
    .should("exist")
    cy.get(this.nextMatchesKampeTab)
    .find(this.eventRowWrapper).eq(0)
    // .each((element,index )=>{
    .invoke("text").then((text)=>{
       const filteredText = text.trim()
      
       let statusAndTournament = filteredText.split("\n")
       console.log(statusAndTournament)
       let status = statusAndTournament[0]
       let tournament = statusAndTournament[2].trim()
       
       console.log(tournament)
        expect(status).to.match(/\d{2}:\d{2}/)
        // expect(tournament).to.eq("Premier League")            
    })
      
    
    //team names
    // cy.get(this.lastMatchesContainer)
    // .find(this.teamNames)
    // .each((element,index)=>{
    // cy.wrap(element).should("have.css","font-size","14px")
    // .and("have.css","font-style","normal")
    // .and("have.css","color","rgb(0, 0, 0)")
    // })
    cy.get(this.nextMatchesKampeTab)
    .find(this.eventRowWrapper)
    .should("have.css","font-family","Roboto, sans-serif")
    .and("have.css","margin-right","0px")
    .and("have.css","position","relative")
    .and("have.css","left","0px")     
    cy.get(this.nextMatchesKampeTab)
    .find(this.nextEventGroupingHeader).click()
    cy.get(this.collapsed_arrow_container)
    .should("have.attr","aria-label","icon-collapsed_arrow")
    cy.get(this.nextMatchesKampeTab)
    .find(this.nextEventGroupingHeader)
    .find(this.eventWrapper).should("not.exist")
    }
    livescoreNextMatchMobile(){
        // cy.get(this.livescoreLastMatchesMobile).scrollTo("botttom")
        //livescore Kommende kamp
        const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
                Cypress.on('uncaught:exception', (err) => {
                    /* returning false here prevents Cypress from failing the test */
                    if (resizeObserverLoopErrRe.test(err.message)) {
                        return false
                    }
                })
        let counter = ""
        cy.get(this.nextMatchesMobile)
        .should("exist")
        cy.get(this.nextMatchesContainer)
        .find(".wff_status_value.wff_capitalize_text_transform")
        .each((element,index )=>{
            cy.wrap(element).invoke("text").then((text)=>{
               const filteredText = text.trim()
               let statusAndTournament = filteredText.split("\n")
               let status = statusAndTournament[0]
               let tournament = statusAndTournament[2]//.trim()           
                expect(status).to.match(/\d{2}:\d{2}/)
                // expect(tournament).to.eq("Premier League")            
            })
        })
        cy.get(this.nextMatchesContainer)
        .find(".wff_status_value.wff_capitalize_text_transform")
        .should("have.css","font-family","Roboto, sans-serif")
        .and("have.css","margin-right","0px")
        .and("have.css","position","static")
        .and("have.css","left","auto")        
        
        //team names
        cy.get(this.nextMatchesContainer)
        .find(this.teamNames)        
        .should("have.css","font-size","14px")
        .and("have.css","font-style","normal")
        .and("have.css","color","rgb(0, 0, 0)")
       
        cy.get(this.nextEventGroupingHeader).click()
        cy.get(this.nextEventGroupingHeader)
        .find(this.eventWrapper).should("not.exist")   
       
        cy.get(this.nextMatchesMobile)
        .find(this.headersTransform)        
        .should("have.css","font-weight","700")
        .and("have.css","font-size","14px")
        
    }
    livescoreNextMatchTeamPage(){
        const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
        Cypress.on('uncaught:exception', (err) => {
            /* returning false here prevents Cypress from failing the test */
            if (resizeObserverLoopErrRe.test(err.message)) {
                return false
            }
        })   
    cy.get(this.nextMatches)
    .should("exist")
    cy.get(this.nextMatches).within(()=>{
        cy.get(this.eventStatusWrapper)
        .each((element,index )=>{
        cy.wrap(element).invoke("text").then((text)=>{
        const filteredText = text.trim()
        let statusAndTournament = filteredText.split("\n")
        let status = statusAndTournament[0]
        let tournament = statusAndTournament[2].trim()
        console.log(tournament)
        expect(status).to.match(/\b\d{1,2}\.\s*[A-Za-z]{3}\b/g)
            // expect(status).to.match(/\d{2}:\d{2}/)
            cy.wrap(tournament).should((t) => {
                expect(t).to.satisfy((value) => {
                    return (
                    value ==="UDS" ||
                    /\d{2}:\d{2}/.test(value)
                    // value === "Premier League" ||
                    // value === "UEFA Super Cup" ||
                    // value === "Champions League Grp. G" ||
                    // value === "Carabao Cup"
                    );
                    });
                });    
            })
        })
        cy.get(this.eventStatusWrapper)
        .should("have.css","font-family","Roboto, sans-serif")
        .and("have.css","margin-right","0px")
        // .and("have.css","position","absolute") old view
        .and("have.css","position","static")
        // .and("have.css","left","0px")        
        .and("have.css","left","auto")
        
    })
    // cy.get(this.ls_nextmatch_container_teampage)
    
    //team names
    cy.get(this.nextMatches).within(()=>{
        cy.get(this.teamNames)
        // .each((element,index)=>{
            // cy.wrap(element).
            .should("have.css","font-size","14px")
            .and("have.css","font-style","normal")
            .and("have.css","color","rgb(0, 0, 0)")
        // })
        // cy.get(this.nextMatches).within(()=>{
        cy.get(this.nextEventGroupingHeader).click()
        cy.get(this.nextEventGroupingHeader)
        .find(this.eventWrapper).should("not.exist")

        })
    // })
    
    
    }
    next_match_livescore_team_page_kampe_tab(){
        const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
        Cypress.on('uncaught:exception', (err) => {
            /* returning false here prevents Cypress from failing the test */
            if (resizeObserverLoopErrRe.test(err.message)) {
                return false
            }
        })
    let counter = ""
    cy.get(this.nextmatch_kampe_teampage).within(()=>{
        // cy.get(".esm_comp.es_widget_container.esm_matches.es_next_matches.es_widget_container")
        cy.get(this.eventStatusWrapper)
        .each((element,index )=>{
        cy.wrap(element).invoke("text").then((text)=>{
            const filteredText = text.trim()
            let statusAndTournament = filteredText.split("\n")
            let date = statusAndTournament[0]
            let tournament = statusAndTournament[2].trim()
            console.log(tournament)
            expect(date).to.match(/\b\d{1,2}\.\s*[A-Za-z]{3}\b/g) //16. Sep

                // expect(status).to.match(/\d{2}:\d{2}/)
                cy.wrap(tournament).should((t) => {
                    expect(t).to.satisfy((value) => {
                        return (
                            
                            value =="UDS" || 
                            expect(value).to.match(/\d{2}:\d{2}/)
                            // value === "Premier League" ||
                            // value === "UEFA Super Cup" ||
                            // value === "Champions League Grp. G" ||
                            // value === "Carabao Cup"||
                            // value === "FA Cup" ||
                            // value === "Champions League Slutspil" ||
                            // value === "VM for klubhold"
                        );
                    });
        });    
        })
    })
        cy.get(this.eventStatusWrapper)
        .should("have.css","font-family","Roboto, sans-serif")
        .and("have.css","margin-right","0px")
        .and("have.css","position","static")
        // .and("have.css","position","absolute")
        // .and("have.css","left","0px")  
        .and("have.css","left","auto")      
    
    //team names
    
    cy.get(this.teamNames)    
    .should("have.css","font-size","14px")
    .and("have.css","font-style","normal")
    .and("have.css","color","rgb(0, 0, 0)")
    })
    cy.get(this.nextEventGroupingHeader).click()
        cy.get(this.nextEventGroupingHeader)
        .find(this.eventWrapper).should("not.exist") 
        cy.get(this.collapsed_arrow_container)
        .should("have.attr","aria-label","icon-collapsed_arrow")
    }
    livescore_fixtures_styles_tooltip(){
        cy.get(this.nextMatchesKampeTab).within(()=>{
            //header sections
            cy.get(this.header_sections)
            .should("be.visible")
            .and("have.css","padding","4px 8px")
            .and("have.css","border-radius","5px")
            .and("have.css","margin","0px")
            .and("have.css","border","1px solid rgba(0, 0, 0, 0.08)")
            .and("have.css","height","40px")    
            .and("have.css","color","rgb(0, 0, 0)")
            //header texts
            cy.get(this.datesHeaders)
            .should("be.visible")
            .and("have.css","font-size","14px")
            .and("have.css","font-weight","700")
            //check the flags
            cy.get(this.flags)
            .should("be.visible")
            .and("have.css","height","20px")
            .and("have.css","width","20px")
            .and("have.css","border","0px none rgb(0, 0, 0)")
            //check tooltip
            cy.get(this.match_status).eq(0)
            .click()
            cy.get(this.tooltip_class)
            .should("be.visible")
            .and("have.css","top","42px")
            .and("have.css","right","-82.4px")
            .and("have.css","min-width","140px")
            .and("have.css","max-width","200px")
            .and("have.css","width","140px")
            .and("have.css","z-index","100")
            .and("have.css","border-radius","5px")
            .and("have.css","padding","0px 4px")
            .and("have.css","transform","matrix(1, 0, 0, 1, -15.4, 0)")
            .and("have.css","justify-content","center")
            .and("have.css","color","rgb(255, 255, 255)")
            .and("have.css","background-color","rgb(0, 0, 0)")
            //check text in the tooltip
            cy.get(this.content_header_tooltip)
            .invoke("text").then((text)=>{
                let trimmed_text = text.trim()
                cy.expect(trimmed_text).to.match(/^\d{4}-\d{2}-\d{2} - \d{2}:\d{2}$/)
            })
            
        })
        
    }


    //---------------------------------------------------------------------------------------------------------------------------------
    //NEW LIVESCORE TESTS 24.10
    //OVERVIEW --!---!
    //Tournament page TOOLTIP STYLES TESTS INCLUDED
    overview_fixtures_livescore(){ // Used in Tournament Page/ tournamentPage_Overview_LTG&Standings

        const currentDate = new Date()
        const desiredDate = new Date('2024-07-20');
        if(currentDate<desiredDate){
            cy.get(".wff_no_data_message")
            .invoke("text").then((text)=>{
                let trimmed_text = text.trim()
                cy.wrap(trimmed_text).should("eq","Ingen data tilgængelig")
            })
        }else{
        
        
            cy.get(this.select).should("have.length",1)
            cy.get(this.select).should("contain","Winner of tournament")
        const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
        Cypress.on('uncaught:exception', (err) => {
            /* returning false here prevents Cypress from failing the test */
            if (resizeObserverLoopErrRe.test(err.message)) {
                return false
            }
        })
    
    cy.get(this.nextMatches)
    .should("be.visible")
    cy.get(this.nextMatches).within(()=>{
    cy.get(this.eventStatusWrapper)
    .each((element,index )=>{
    cy.wrap(element).invoke("text").then((text)=>{
       const filteredText = text.trim()
       cy.wrap(filteredText).should((t) => {
        expect(t).to.satisfy((value) => {
        return (
            value ==="UDS" ||
            expect(value).to.match(/\d{2}:\d{2}/)
            // value === "Premier League" ||
            // value === "UEFA Super Cup" ||
            // value === "Champions League Grp. G" ||
            // value === "Carabao Cup"
        );
        });
    }); 
             
    })    
    })
    cy.VerticalFloatWrapPositionPadding(this.eventStatusWrapper,"Roboto, sans-serif","0px","static","auto","0px","0px","0px none rgb(0, 0, 0)","none","normal","baseline","normal")

    //team names
    cy.FSize_FStyle_Color_Cursor_Margin_Padding_Border_BoxShadow(this.teamNames,"14px","normal","rgb(0, 0, 0)","pointer","0px","0px","0px none rgb(0, 0, 0)","none")  

    //checks styles     
    cy.Margin_Border_Padding_Height_Radius_Color(this.header_sections,"4px 8px","5px","0px","1px solid rgba(0, 0, 0, 0.08)","40px","rgb(0, 0, 0)")
 
    //header texts
    cy.WeightSize(this.datesHeaders,"14px","700")

    //flags
    cy.Height_Width_Border(this.flags,"20px","20px","0px none rgb(0, 0, 0)")

    //check tooltip
    cy.get(this.match_status).eq(0)
    .click()
    cy.tooltip_in_livescoreRounded(this.tooltip_class,"42px","-82.4px","140px","200px",140,"100","5px","0px 4px","matrix(1, 0, 0, 1, -15.4, 0)","center","rgb(255, 255, 255)","rgb(0, 0, 0)")

    //check text in the tooltip
    cy.get(this.content_header_tooltip)
    .invoke("text").then((text)=>{
        let trimmed_text = text.trim()
        cy.expect(trimmed_text).to.match(/^\d{4}-\d{2}-\d{2} - \d{2}:\d{2}$/)
    })
    //check flag container
    cy.MarginLeft_MarginRight(this.flag_container,"20px","20px","20px","0px","10px")

     //hide section    
     cy.get(this.nextEventGroupingHeaderSmallVersion).eq(0).click()
     cy.get(this.nextEventGroupingHeaderSmallVersion)
     .find(this.eventWrapper).should("not.exist")
     cy.get(this.collapsed_arrow_container)
     .should("have.attr","aria-label","icon-collapsed_arrow")
    })
    
    }
    
   
    }
    //TOOLTIP STYLES TESTS INCLUDED
    overview_fixtures_mobile_livescore(){
        // cy.get(this.livescoreLastMatchesMobile).scrollTo("botttom")
        //livescore Kommende kamp       
        
        cy.get(this.nextMatchesMobile)
        .should("exist")
        cy.get(this.nextMatchesMobile).within(()=>{
            cy.get(".wff_status_value.wff_capitalize_text_transform")
            .each((element,index )=>{
                cy.wrap(element).invoke("text").then((text)=>{
                    const filteredText = text.trim()
                    let statusAndTournament = filteredText.split("\n")
                    let status = statusAndTournament[0]
                    let tournament = statusAndTournament[2]//.trim()   
                    cy.wrap(status).should((t) => {
                        expect(t).to.satisfy((value) => {
                        return (
                            value ==="UDS" ||
                            expect(value).to.match(/\d{2}:\d{2}/)
                            // value === "Premier League" ||
                            // value === "UEFA Super Cup" ||
                            // value === "Champions League Grp. G" ||
                            // value === "Carabao Cup"
                        );
                        });
                    });         
                    // expect(status).to.match(/\d{2}:\d{2}/)
                    
                // expect(tournament).to.eq("Premier League")            
                })
                     
            })
            //event status style
            cy.FamilyMarginPositionLeft(this.match_status,"Roboto, sans-serif","0px","static","auto")
           
            //team names
            cy.FSize_FStyle_color(this.teamNames,"14px","normal","rgb(0, 0, 0)")
      
            //check the flags
            cy.Height_Width_Border(this.flags,"20px","20px","0px none rgb(0, 0, 0)")

            //check tooltip
            
            cy.get(this.match_status).eq(0)
            .click()
            cy.tooltip_in_livescore(this.tooltip_class,"42px","-82.4px","140px","200px","140px","100","5px","0px 4px","matrix(1, 0, 0, 1, -15.4, 0)","center","rgb(255, 255, 255)","rgb(0, 0, 0)")
            
            //check text in the tooltip
            cy.get(this.content_header_tooltip)
            .invoke("text").then((text)=>{
                let trimmed_text = text.trim()
                cy.expect(trimmed_text).to.match(/^\d{4}-\d{2}-\d{2} - \d{2}:\d{2}$/)
            })  
            
            //headers transform font style
            cy.WeightSize(this.headersTransform,"14px","700")
            
            
            //checks styles 
            //header styles
            cy.Margin_Border_Padding_Height_Radius_Color(this.header_sections,"4px 8px","5px","0px","1px solid rgba(0, 0, 0, 0.08)","40px","rgb(0, 0, 0)")
      
            //header texts
            cy.WeightSize(this.datesHeaders,"14px","700") 
            
            //check flag container
            cy.MarginLeft_MarginRight(this.flag_container,"20px","20px","20px","0px","10px")

            //collapsing of sections functionality
            cy.get(this.nextEventGroupingHeaderSmallVersion).eq(0).click()
            cy.get(this.nextEventGroupingHeaderSmallVersion)
            .find(this.eventWrapper).should("not.exist") 
            cy.get(this.collapsed_arrow_container).should("have.attr","aria-label","icon-collapsed_arrow")  
        })       
}
    //Team&Player page TOOLTIP STYLES TESTS INCLUDED
team_player_page_overview_fixtures_livescore(){ //Used in Team Page/ Overview ; Player page/Overview
        const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
        Cypress.on('uncaught:exception', (err) => {
            /* returning false here prevents Cypress from failing the test */
            if (resizeObserverLoopErrRe.test(err.message)) {
                return false
            }
        })
    
    cy.get(this.nextMatches)
    .should("exist")
    cy.get(this.nextMatches).within(()=>{
        cy.get(this.eventStatusWrapper)
        .each((element,index )=>{
        cy.wrap(element).invoke("text").then((text)=>{
        const filteredText = text.trim()
        let statusAndTournament = filteredText.split("\n")
        let status = statusAndTournament[0]
        let tournament = statusAndTournament[2].trim()
        console.log(tournament)
        expect(status).to.match(/\b\d{1,2}\.\s*[A-Za-z]{3}\b/g)
            // expect(status).to.match(/\d{2}:\d{2}/)
            cy.wrap(tournament).should((t) => {
                expect(t).to.satisfy((value) => {
                return (
                    value ==="UDS" ||
                    expect(value).to.match(/\d{2}:\d{2}/)
                    // value === "Premier League" ||
                    // value === "UEFA Super Cup" ||
                    // value === "Champions League Grp. G" ||
                    // value === "Carabao Cup"
                );
                });
            });    
        })
                // expect(filteredText).to.match(/\d{2}:\d{2}/)
                //    let statusAndTournament = filteredText.split("\n")
                //    let status = statusAndTournament[0]
                //    let tournament = statusAndTournament[2].trim()
                //    console.log(tournament)
                //     expect(status).to.match(/\d{2}:\d{2}/)
                //     expect(tournament).to.eq("Premier League")            
            })
         
           
           
        //check event status styles
        cy.FamilyMarginPositionLeft(this.eventStatusWrapper,"Roboto, sans-serif","0px","static","auto")
  
        //team names   
        cy.FSize_FStyle_color(this.teamNames,"14px","normal","rgb(0, 0, 0)")     
        cy.get(this.teamNames)
        
        //collapse a section functionality
        cy.get(".wff_event_grouping_header_component").eq(1).click()
        cy.get(".wff_event_grouping_header_component").eq(1)
        .find(this.eventWrapper).should("not.exist")
        cy.get(this.collapsed_arrow_container)
        .should("have.attr","aria-label","icon-collapsed_arrow") 
        //checks styles 
        //group by stage header styles
        cy.Margin_Border_Padding_Height_Radius_Color(this.group_by_stage_header,"4px 8px","5px","0px","1px solid rgba(0, 0, 0, 0.08)","40px","rgb(0, 0, 0)")

        //header texts
        cy.WeightSize(this.datesHeaders,"14px","700")

        //check the flags
        cy.Height_Width_Border(this.flags,"20px","20px","1px solid rgb(230, 230, 230)")

        //check tooltip
        cy.get(this.match_status).eq(0)
        .click()
        cy.tooltip_in_livescore(this.tooltip_class,"42px","-82.4px","140px","200px","140px","100","5px","0px 4px","matrix(1, 0, 0, 1, -15.4, 0)","center","rgb(255, 255, 255)","rgb(0, 0, 0)")

        //check text in the tooltip
        cy.get(this.content_header_tooltip)
        .invoke("text").then((text)=>{
        let trimmed_text = text.trim()
        cy.expect(trimmed_text).to.match(/^\d{4}-\d{2}-\d{2} - \d{2}:\d{2}$/)
        })      
        //check flag container
        cy.MarginLeft_MarginRight(this.flag_container,"20px","20px","20px","0px","10px")

        })
               
    }
    //KAMPE TABS --!---!
    //Tournament page TOOLTIP STYLES TESTS INCLUDED
    tournament_fixtures_livescore(){ //Used in Tournament Page/ livescore in kampe
        const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
        Cypress.on('uncaught:exception', (err) => {
            /* returning false here prevents Cypress from failing the test */
            if (resizeObserverLoopErrRe.test(err.message)) {
                return false
            }
        })
    
    cy.get(this.nextMatchesKampeTab)
    .should("exist")
    cy.get(this.nextMatchesKampeTab).within(()=>{
        cy.get(this.eventRowWrapper).eq(0)
        // .each((element,index )=>{
        .invoke("text").then((text)=>{
            const filteredText = text.trim()
      
            let statusAndTournament = filteredText.split("\n")
            console.log(statusAndTournament)
            let status = statusAndTournament[0]
            let tournament = statusAndTournament[2].trim()
            //verify date format
            console.log(tournament)  
            cy.wrap(status).should((t) => {
                expect(t).to.satisfy((value) => {
                return (
                    /\d{2}:\d{2}/.test(value) ||
                    value =="SLUT" ||
                    value =="SET" ||
                    value =="SES" ||
                    value == "UDS"
                    // value === "Premier League" ||
                    // value === "UEFA Super Cup" ||
                    // value === "Champions League" ||
                    // value === "FA Cup" ||
                    // value === "Champions League Slutspil" ||
                    // value === "VM for klubhold"
                );
                });
            });
            // expect(status).to.match(/\d{2}:\d{2}/)
        // expect(tournament).to.eq("Premier League")            
        })
      
    
        //team names      
        cy.FSize_FStyle_color(this.teamNames,"14px","normal","rgb(0, 0, 0)")
     
        //eventRow wrapper
        cy.FFamily_marginRight_position_left(this.eventRowWrapper,"Roboto, sans-serif","0px","relative","0px")
          
        //collapsing sections functionality 
        cy.get(this.nextEventGroupingHeader).click()
        cy.get(this.collapsed_arrow_container)
        .should("have.attr","aria-label","icon-collapsed_arrow")
        // cy.get(this.nextMatchesKampeTab)
        cy.get(this.nextEventGroupingHeader)
        .find(this.eventWrapper).should("not.exist")
        //checks styles 
        //check styles of group by date header
        cy.Margin_Border_Padding_Height_Radius_Color(this.group_by_date_header,"4px 8px","5px","0px","1px solid rgba(0, 0, 0, 0.08)","40px","rgb(0, 0, 0)")
      
        //header texts
        cy.WeightSize(this.datesHeaders,"14px","700")

        //check the flags
        cy.Height_Width_Border(this.flags,"20px","20px","0px none rgb(0, 0, 0)")

        //check tooltip
        cy.get(this.match_status).eq(0)
        .click()
        cy.tooltip_in_livescore(this.tooltip_class,"42px","-82.4px","140px","200px","140px","100","5px","0px 4px","matrix(1, 0, 0, 1, -15.4, 0)","center","rgb(255, 255, 255)","rgb(0, 0, 0)")

        //check text in the tooltip
        cy.get(this.content_header_tooltip)
        .invoke("text").then((text)=>{
            let trimmed_text = text.trim()
            cy.expect(trimmed_text).to.match(/^\d{4}-\d{2}-\d{2} - \d{2}:\d{2}$/)
        })
        //check flag container
        cy.MarginLeft_MarginRight(this.flag_container,"20px","20px","20px","0px","10px")

        }
    )}
    //Team page
    team_player_fixtures_livescore(){ //used in Team page/ kampe_livescore
        const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
        Cypress.on('uncaught:exception', (err) => {
            /* returning false here prevents Cypress from failing the test */
            if (resizeObserverLoopErrRe.test(err.message)) {
                return false
            }
        })
    
    cy.get(this.nextMatches)
    .should("exist")
    cy.get(this.nextMatches).within(()=>{
        cy.get(this.eventStatusWrapper)
        .each((element,index )=>{
            cy.wrap(element).invoke("text").then((text)=>{
                const filteredText = text.trim()
                let statusAndTournament = filteredText.split("\n")
                let status = statusAndTournament[0]
                let tournament = statusAndTournament[2].trim()                
                cy.wrap(tournament).should((t) => {
                    expect(t).to.satisfy((value) => {
                    return (
                        /\d{2}:\d{2}/.test(value) ||
                        value == "UDS" 
                     
                        
                        // value === "Premier League" ||
                        // value === "UEFA Super Cup" ||
                        // value === "Champions League" ||
                        // value === "FA Cup" ||
                        // value === "Champions League Slutspil" ||
                        // value === "VM for klubhold"
                    );
                    });
                });          
            })
            
        })
        //check the event status wrapper style
        cy.FFamily_marginRight_position_left(this.eventStatusWrapper,"Roboto, sans-serif","0px","static","auto")
        
        //team names        
        cy.get(this.teamNames)
        .should("have.css","font-size","14px")
        .and("have.css","font-style","normal")
        .and("have.css","color","rgb(0, 0, 0)")
        this.nextEventGroupingHeader = ".wff_event_grouping_header_component:eq(1)" //switched to second because often there's no 3rd header
        cy.get(this.nextEventGroupingHeader).click()
        cy.get(this.nextEventGroupingHeader)
        .find(this.eventWrapper).should("not.exist")
        cy.get(this.collapsed_arrow_container)
        .should("have.attr","aria-label","icon-collapsed_arrow")
            
            
        //checks styles
        //group by stage header style
        cy.Margin_Border_Padding_Height_Radius_Color(this.group_by_stage_header,"4px 8px","5px","0px","1px solid rgba(0, 0, 0, 0.08)","40px","rgb(0, 0, 0)")

        //header texts
        cy.WeightSize(this.datesHeaders,"14px","700")

        //check the flags
        cy.Height_Width_Border(this.flags,"20px","20px","1px solid rgb(230, 230, 230)")

        //check tooltip
        cy.get(this.match_status).eq(0)
        .click()
        cy.tooltip_in_livescore(this.tooltip_class,"42px","-82.4px","140px","200px","140px","100","5px","0px 4px","matrix(1, 0, 0, 1, -15.4, 0)","center","rgb(255, 255, 255)","rgb(0, 0, 0)")
        
     
        //check text in the tooltip
        cy.get(this.content_header_tooltip)
        .invoke("text").then((text)=>{
            let trimmed_text = text.trim()
            cy.expect(trimmed_text).to.match(/^\d{4}-\d{2}-\d{2} - \d{2}:\d{2}$/)
        })
        //check flag container
        cy.MarginLeft_MarginRight(this.flag_container,"20px","20px","20px","0px","10px")
      
        })
    }
}
