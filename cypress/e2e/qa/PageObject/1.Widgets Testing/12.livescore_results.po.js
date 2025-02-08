export class livescore_results_po{
    constructor(){
        this.league_name = ".league-name"
        this.leagues_item = ".leagues-item"
        this.forrigeKampHeader = ".esmx-title.es_prev_matches.es_widget_container.esm_comp.esm_overview-title"
        this.kommendeKampeHeader = ".esmx-title.es_next_matches.es_widget_container.esm_comp.esm_overview-title"
        this.stillingHeader = ".esmx-title.esm_comp.es_widget_container.esm_overview-title:eq(2)"
        this.topscorereHeader = ".esmx-title.esm_comp.es_widget_container.esm_overview-title:eq(3)"
        this.lastMatchesKampeTab = ".wff_widget.wff_widget_FW493001AA07CF0B12.wff_widget_small:eq(0)" // Used in Kampe tabs        
        this.lastMatches = ".wff_widget.wff_widget_FW25A64EE830B1F6A0.wff_widget_small:eq(0)" //USED IN: all Overview tabs
        this.datesHeaders = ".wff_grouping_header_value.wff_capitalize_text_transform"
        this.lastMatchesContainer = ".es_prev_matches.es_widget_container.esm_comp.esm_overview:eq(0)"        
        this.teamNames = ".wff_participant_link"
        this.eventStatusWrapper = ".wff_event_name_time_status_wrapper"
        this.eventGroupingHeader =".wff_event_grouping_header_component:eq(0)"        
        this.expanded_arrow = ".wff_icon_container.icon-expanded_arrow_container"
        this.collapsed_arrow = ".icon-collapsed_arrow:eq(0)"
        this.eventWrapper = ".wff_event_row_wrapper_root:eq(0)"     
        this.headers = ".wff_event_grouping_header_component"
        this.headersTransform = ".wff_grouping_header_value.wff_capitalize_text_transform"
        this.eventRowWrapper = ".wff_event_row_wrapper.wff_single"
        this.ls_lastmatch_container_teampage = ".es_prev_matches_team_page.esm_comp.esm_overview.es_widget_container"        
        this.lastmatch_kampe_teampage = ".wff_widget.wff_widget_FW493001AA07CF0B12.wff_widget_small"
        this.acceptButton = "#ensSaveAll"        
        this.header_sections = ".wff_tournament_group_by_stage_header.wff_single.wff_group_by_date.wff_tournament_group_by_stage_header_default_version"
        this.flags = ".wff_flag_logo_img"
        this.collapsed_arrow_container = ".wff_icon_container.icon-collapsed_arrow_container"
        this.match_status = ".wff_status_value.wff_capitalize_text_transform"
        this.tooltip_class = ".wff_tooltip_root.wff_start_time_and_status_tooltip"
        this.content_header_tooltip = ".wff_multiple_content_main_header"
        this.group_by_stage_header = ".wff_tournament_header_container.wff_single.wff_group_by_stage.wff_tournament_header_container_default_version"
        this.group_by_date_header = ".wff_tournament_header_container.wff_single.wff_group_by_date.wff_tournament_header_container_default_version"
    }
    livescoreLastMatches(){
        //livescore Forrige kamp       
        
        cy.get(this.lastMatches)
        .should("exist")
        cy.get(this.lastMatchesContainer).within(()=>{
            for(var i = 0; i < 5; i++){
                cy.get(this.eventStatusWrapper).eq(i)
                .invoke("text").then((text)=>{
                    const trimmedText = text.trim()
                    expect(trimmedText).to.eql("SLUT")
                })
                cy.get(this.eventStatusWrapper).eq(i)
                .should("have.css","font-family","Roboto, sans-serif")
                .and("have.css","margin-right","0px")
                .and("have.css","position","static")
                .and("have.css","left","auto")   
            }           
        })    
        //team names
        // cy.get(this.lastMatchesContainer)
        cy.get(this.lastMatchesKampeTab).within(()=>{
            cy.get(this.teamNames)
            .should("have.css","font-size","14px")
            .and("have.css","font-style","normal")
            .and("have.css","color","rgb(0, 0, 0)")
            cy.get(this.eventGroupingHeader).click()
            cy.get(this.eventGroupingHeader)
            .find(this.eventWrapper).should("not.exist")
            // cy.get(this.lastMatches)
            cy.get(this.headersTransform)
            .should("have.css","font-weight","700")
                .and("have.css","font-size","14px")
            })  
    }
    livescore_team_page_lastmatches(){
        try{
            //livescore Forrige kamp     
                    
                    cy.get(this.lastMatches)
                    .should("exist")
                    cy.get(this.lastMatches).eq(0).within(()=>{                    
                        cy.get(".wff_event_row_wrapper.wff_single.wff_event_status_finished").eq(0)
                        .find(this.eventStatusWrapper)
                        .each((element,index )=>{
                            cy.wrap(element).invoke("text").then((text)=>{
                            const filteredText = text.trim()
                            let statusAndTournament = filteredText.split("\n")
                            let status = statusAndTournament[0]
                            let tournament = statusAndTournament[2].trim()
                            //    console.log(tournament)
                                // expect(status).to.contain("Slut")
                                expect(status).to.match(/\b\d{1,2}\.\s*[A-Za-z]{3}\b/g)
                                // expect(tournament).to.equal("Premier League") || expect(tournament).to.equal("UEFA Super Cup") || expect(tournament).to.equal("Champions league")          
                                cy.wrap(tournament).should((t) => {
                                    expect(t).to.satisfy((value) => {
                                    return (
                                        value === "SLUT" ||
                                        value === "SES" ||
                                        value === "SET"
                                        
                                        // value === "Premier League" ||
                                        // value === "UEFA Super Cup" ||
                                        // value === "Champions League" ||
                                        // value === "Fa Cup"
                                    );
                                    });
                                });
                            })
                            cy.wrap(element).should("have.css","font-family","Roboto, sans-serif")
                            .and("have.css","margin-right","0px")
                                // .and("have.css","position","absolute")
                            .and("have.css","position","static")
                        // .and("have.css","left","0px")      
                            .and("have.css","left","auto")  
                        })
                    })
                    
                    //team names
                    cy.get(this.lastMatches).eq(0).within(()=>{
                        for (var i = 0; i <= 4; i++){
                            cy.get(this.teamNames + ":eq("+ i +")")
                        // .find(this.teamNames)
                            .should("have.css","font-size","14px")
                            .and("have.css","font-style","normal")
                            .and("have.css","color","rgb(0, 0, 0)")
                        }
                        
                        })
                    
                   

                    cy.get(this.eventGroupingHeader).click()
                    cy.get(this.eventGroupingHeader)
                    .find(this.eventWrapper).should("not.exist")
                    cy.get(this.lastMatches)
                    .find(this.headersTransform)
                    .each((element,index)=>{
                        cy.wrap(element).should("have.css","font-weight","700")
                        .and("have.css","font-size","14px")
                    }) 
                            }
                            catch(error){
                                console.error("An error occured:",error.message)
                                throw Error
                            }
                            
                        
    }
    livescoreLastKampeTab(){
         //livescore Forrige kamp       
    
    cy.get(this.lastMatchesKampeTab)
    .should("exist")
    for(var i = 0; i < 10; i++){
        cy.get(this.lastMatchesKampeTab).within(()=>{
            cy.get(this.eventRowWrapper).eq(i).invoke("text").then((text)=>{
                const filteredText = text.trim()
                let statusAndTournament = filteredText.split("\n")
                let status = statusAndTournament[0]
                let tournament = statusAndTournament[2].trim()
                console.log(tournament)
                expect(status).to.eq("SLUT")
            })
        })
        
    }
    cy.get(this.lastMatchesKampeTab)
    .find(this.eventRowWrapper)

    
    cy.get(this.eventGroupingHeader).click()
    cy.get(this.collapsed_arrow_container)
    .should("have.attr","aria-label","icon-collapsed_arrow")
    cy.get(this.eventGroupingHeader)
    .find(this.eventWrapper).should("not.exist")
    cy.get(this.lastMatchesKampeTab)
    .find(this.headersTransform)
    .each((element,index)=>{
     cy.wrap(element).should("have.css","font-weight","700")
     .and("have.css","font-size","14px")
    }) 
    }
          
    tournament_overview_livescore_results_styles_tooltip(){
    cy.get(this.lastMatchesKampeTab).within(()=>{
        //header sections
        cy.get(headers)
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
        .and("have.css","border","1px solid rgb(230, 230, 230)")
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
   
    //NEW LIVESCORE TESTS
    //OVERVIEW pages 24.10
    //tournament page
    overview_results_livescore(){  //  TOOLTIP STYLES INCLUDED used in Tournament page/tournamentPage 
        cy.get(this.lastMatches).should("exist").and("be.visible")
        cy.get(this.lastMatches).within(()=>{
            cy.TextIsOneOf4(this.eventStatusWrapper,"SLUT","SET","SES","UDS")
        
            // check styles
            cy.FamilyMarginPositionLeft(this.eventStatusWrapper,"Roboto, sans-serif","0px","static","auto")
                       
            //team names
            cy.FSize_FStyle_color(this.teamNames,"14px","normal","rgb(0, 0, 0)")  
            //headers
            cy.WeightSize(this.headersTransform,"14px","700")        
            
            //checks styles    
            //group by date header   
            cy.Margin_Border_Padding_Height_Radius_Color(this.group_by_date_header,"4px 8px","5px","0px","1px solid rgba(0, 0, 0, 0.08)","40px","rgb(0, 0, 0)")     
           
            //header texts
            cy.WeightSize(this.datesHeaders,"14px","700")    

            //check the flags
            cy.Height_Width_Border(this.flags,"20px","20px","0px none rgb(0, 0, 0)")
            
            //check tooltip
            cy.get(this.match_status).eq(0)
            .click({force:true})
            cy.tooltip_in_livescore(this.tooltip_class,"42px","-82.4px","140px","200px","140px","100","5px","0px 4px","matrix(1, 0, 0, 1, -15.4, 0)","center","rgb(255, 255, 255)","rgb(0, 0, 0)")
            
            //check text in the tooltip
            cy.get(this.content_header_tooltip)
            .invoke("text").then((text)=>{
                let trimmed_text = text.trim()
                cy.expect(trimmed_text).to.match(/^\d{4}-\d{2}-\d{2} - \d{2}:\d{2}$/)

            // section collapsing functionality
            cy.get(this.eventGroupingHeader).click({force:true})
            cy.get(this.eventGroupingHeader)
            .find(this.eventWrapper).should("not.exist")
            cy.get(this.collapsed_arrow_container)
            .should("have.attr","aria-label","icon-collapsed_arrow")
            })
        
        })
        
    }
    overview_mobile_results_livescore(){// TOOLTIP STYLES INCLUDED used in Tournament page/ TournamentPageMobile
        //livescore Forrige kamp     
        
        cy.get(this.lastMatches)
        .should("exist")
        cy.get(this.lastMatches).within(()=>{
            //check if the status is one of the following
            cy.TextIsOneOf4(this.eventStatusWrapper,"SLUT","SET","SES","UDS")                    
             
            //check event row wrapper styles
            cy.FamilyMarginPositionLeft(this.eventRowWrapper,"Roboto, sans-serif","0px","relative","0px")
          
            //team names
            cy.FSize_FStyle_color(this.teamNames,"14px","normal","rgb(0, 0, 0)")            
           
            cy.get(this.eventGroupingHeader).click()
            cy.get(this.eventGroupingHeader)
            .find(this.eventWrapper).should("not.exist")
            cy.get(this.collapsed_arrow_container).should("have.attr","aria-label","icon-collapsed_arrow")  
            
            //headers transform 
            cy.WeightSize(this.headersTransform,"14px","700")
 
            //checks styles 
           cy.Margin_Border_Padding_Height_Radius_Color(this.group_by_date_header,"4px 8px","5px","0px","1px solid rgba(0, 0, 0, 0.08)","40px","rgb(0, 0, 0)")
            cy.get(this.group_by_date_header)
        
            //header texts
            cy.WeightSize(this.datesHeaders,"14px","700")
            
            //check the flags
            cy.Height_Width_Border(this.flags,"20px","20px","0px none rgb(0, 0, 0)")
            
            //check tooltip
            cy.get(this.match_status).eq(0)
            .click()
            cy.tooltip_in_livescore(this.tooltip_class,"8.5px","-82.4px","140px","200px","140px","100","5px","0px 4px","matrix(1, 0, 0, 1, -15.4, 0)","center","rgb(255, 255, 255)","rgb(0, 0, 0)")
    
            //check text in the tooltip
            cy.get(this.content_header_tooltip)
            .invoke("text").then((text)=>{
                let trimmed_text = text.trim()
                cy.expect(trimmed_text).to.match(/^\d{4}-\d{2}-\d{2} - \d{2}:\d{2}$/)
            })
        })   
    }

    //team & player page TOOLTIP STYLES INCLUDED
    team_player_page_overview_results_livescore(){// used in Team page/team_page_livescore ;Player page/player_page_overview_results 
        cy.get(this.lastMatches).should("exist").and("be.visible")
        cy.get(this.lastMatches).within(()=>{
            //status wrapper
            cy.TextIsOneOf4_date_status(this.eventStatusWrapper,"SLUT","SET","SES","UDS")
            cy.FamilyMarginPositionLeft(this.eventStatusWrapper,"Roboto, sans-serif","0px","static","auto")                 
            
            //team names
            cy.FSize_FStyle_color(this.teamNames,"14px","normal","rgb(0, 0, 0)")   

            //grouping header collapse functionality    
            cy.get(this.eventGroupingHeader).click()
            cy.get(this.eventGroupingHeader)
            .find(this.eventWrapper).should("not.exist")
            cy.get(this.collapsed_arrow_container)
            .should("have.attr","aria-label","icon-collapsed_arrow")
            //headers section styles
            cy.WeightSize(this.headersTransform,"14px","700")
               
            //checks styles
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
        })
    }

    //Kampe tabs
    //Tournament page TOOLTIP STYLES INCLUDED
    tournament_results_livescore(){ //used in tournament page/Livescore in kampe
        //livescore Forrige kamp       
   
    cy.get(this.lastMatchesKampeTab)
    .should("exist")
    for(var i = 0; i < 10; i++){
        cy.get(this.lastMatchesKampeTab).within(()=>{
            cy.get(this.eventRowWrapper).eq(i).invoke("text").then((text)=>{
                const filteredText = text.trim()
                let statusAndTournament = filteredText.split("\n")
                let status = statusAndTournament[0]
                let tournament = statusAndTournament[2].trim()
                console.log(tournament)
                //    expect(status).to.eq("SLUT")
                cy.wrap(status).should((t) => {
                    expect(t).to.satisfy((value) => {
                    return (
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
            })
        })
        
    }
    cy.get(this.lastMatchesKampeTab).within(()=>{
        //collapse sections functionality
        cy.get(this.eventRowWrapper)   
        cy.get(this.eventGroupingHeader).click()
        cy.get(this.collapsed_arrow_container)
        .should("have.attr","aria-label","icon-collapsed_arrow")
        cy.get(this.eventGroupingHeader)
        .find(this.eventWrapper).should("not.exist")
        //headers transform
        cy.WeightSize(this.headersTransform,"14px","700") 
    
        //checks styles            
        cy.Margin_Border_Padding_Height_Radius_Color(this.group_by_date_header,"4px 8px","5px","0px","1px solid rgba(0, 0, 0, 0.08)","40px","rgb(0, 0, 0)")
    
        //header texts
        cy.WeightSize(this.datesHeaders,"14px","700")

        //check the flags
        cy.Height_Width_Border(this.flags,"20px","20px","0px none rgb(0, 0, 0)")
    
        //check tooltip
        cy.get(this.match_status).eq(0)
        .click()
        .wait(500)
        cy.tooltip_in_livescore(this.tooltip_class,"42px","-82.4px","140px","200px","140px","100","5px","0px 4px","matrix(1, 0, 0, 1, -15.4, 0)","center","rgb(255, 255, 255)","rgb(0, 0, 0)")

        //check text in the tooltip
        cy.get(this.content_header_tooltip)
        .invoke("text").then((text)=>{
            let trimmed_text = text.trim()
            cy.expect(trimmed_text).to.match(/^\d{4}-\d{2}-\d{2} - \d{2}:\d{2}$/)
        })
    })
}
   //Player page TOOLTIP STYLES INCLUDED
   player_results_livescore(){ // Used in player page/Champions league/ player_page_club_livescore; player page/Premier league/player_page_clubLivescore_matches;
    cy.get(this.lastMatches).should("exist").and("be.visible")
    cy.get(this.lastMatches).eq(0).within(()=>{
        cy.TextIsOneOf4_date_status(this.eventStatusWrapper,"SLUT","SET","SES","UDS")
       
        //event status wrapper styles
        cy.FamilyMarginPositionLeft(this.eventStatusWrapper,"Roboto, sans-serif","0px","static","auto")     
        
        //team names
        cy.FSize_FStyle_color(this.teamNames,"14px","normal","rgb(0, 0, 0)")               
         
        //check collapsing of section functionality
        cy.get(this.eventGroupingHeader).click()
        cy.get(this.eventGroupingHeader)
        .find(this.eventWrapper).should("not.exist")
        cy.get(this.collapsed_arrow_container)
        .should("have.attr","aria-label","icon-collapsed_arrow")
        
        //headers transform styles
        cy.WeightSize(this.headersTransform,"14px","700")
          
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
        .wait(500)
        cy.tooltip_in_livescore(this.tooltip_class,"42px","-82.4px","140px","200px","140px","100","5px","0px 4px","matrix(1, 0, 0, 1, -15.4, 0)","center","rgb(255, 255, 255)","rgb(0, 0, 0)")

        cy.get(this.content_header_tooltip)
        .invoke("text").then((text)=>{
            let trimmed_text = text.trim()
            cy.expect(trimmed_text).to.match(/^\d{4}-\d{2}-\d{2} - \d{2}:\d{2}$/)
        })        
    
    })
   }
   //Team page  TOOLTIP STYLES INCLUDED
   team_results_livescore(){ // Used in team_page_kampe_livescore; 
    cy.get(this.lastMatchesKampeTab).should("exist").and("be.visible")
    cy.get(this.lastMatchesKampeTab).eq(0).within(()=>{
        //status value
        cy.TextIsOneOf4_date_status(this.eventStatusWrapper,"SLUT","SET","SES","UDS")
   
        cy.FamilyMarginPositionLeft(this.eventStatusWrapper,"Roboto, sans-serif","0px","static","auto")           
        
        //team names
        cy.FSize_FStyle_color(this.teamNames,"14px","normal","rgb(0, 0, 0)")    

        //event grouping section    
        cy.get(this.eventGroupingHeader).click()
        cy.get(this.eventGroupingHeader)
        .find(this.eventWrapper).should("not.exist")
        cy.get(this.collapsed_arrow_container)
        .should("have.attr","aria-label","icon-collapsed_arrow")
        
        //headers transform style
        cy.WeightSize(this.headersTransform,"14px","700")          
         
        //checks styles 
        //group by stage header
        cy.Margin_Border_Padding_Height_Radius_Color(this.group_by_stage_header,"4px 8px","5px","0px","1px solid rgba(0, 0, 0, 0.08)","40px","rgb(0, 0, 0)")          

        //header texts
        cy.WeightSize(this.datesHeaders,"14px","700")
    
        //check the flags
        cy.Height_Width_Border(this.flags,"20px","20px","1px solid rgb(230, 230, 230)")
     
        //check tooltip
        cy.get(this.match_status).eq(0)
        .click()
        .wait(500)
        cy.tooltip_in_livescore(this.tooltip_class,"42px","-82.4px","140px","200px","140px","100","5px","0px 4px","matrix(1, 0, 0, 1, -15.4, 0)","center","rgb(255, 255, 255)","rgb(0, 0, 0)")
       
        //check text in the tooltip
        cy.get(this.content_header_tooltip)
        .invoke("text").then((text)=>{
            let trimmed_text = text.trim()
            cy.expect(trimmed_text).to.match(/^\d{4}-\d{2}-\d{2} - \d{2}:\d{2}$/)
        })        
    
    })
   }





}