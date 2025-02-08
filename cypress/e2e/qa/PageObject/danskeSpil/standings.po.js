
export class standings_po{
    constructor(){
        
        this.livescoreButton = ".esm_livescore_li"
        this.stillingerButton = ".esm_stillinger_li"
        this.topLeaguesContainer = ".top-leagues.row.col-12.esc_template_list.esm_comp.esm_stillinger"
        this.topLeaguesNames = ".col-12.col-sm-6"
        this.leagueFlag = ".league-flag"
        this.stageArrowButton = ".arrow-container.es_toggle"
        this.leagueContainer = ".leagues-container.col-12.row:eq(1)"
        this.genderLeagues = '.gender-leagues.col-12.col-sm-6'
        this.womenLeagues = 'div:contains("Kvinder")'
        this.allLeaguesList = '.all-leagues-list'
        this.openedHeader = '.country-leagues-header-container.col-12:eq(0)'
        this.closedHeader = '.country-leagues-header-container.col-12.close-content:eq(0)'
        this.headerCountryName = '.country-name'
        this.headerCountryFlag = '.league-flag'
        this.sportsMenu = '.esc_menu_sports_active_element'
        this.sportOption = '.esc_active.soccer'
        this.standingsWidget = '.wff_widget.wff_widget_FW900EC9110F3F943C.wff_widget_wide.wff_standings_soccer'
        this.leagueHeader = '.esc_template_title'
        this.holdHeader = '.wff_table_header_cell.wff_standings_team'
        this.kampeSpillet = '.wff_table_header_cell.wff_standings_stats_box:eq(0)'
        this.vundeKampe = '.wff_table_header_cell.wff_standings_stats_box:eq(1)'
        this.drawUafgjort = '.wff_table_header_cell.wff_standings_stats_box:eq(2)'
        this.tabt = '.wff_table_header_cell.wff_standings_stats_box:eq(3)'
        this.mal = '.wff_table_header_cell.wff_standings_stats_box:eq(4)'
        this.diff = '.wff_table_header_cell.wff_standings_stats_box:eq(5)'
        this.points = '.wff_table_header_cell.wff_standings_stats_box:eq(6)'
        this.malMobile = '.wff_table_header_cell.wff_standings_stats_box:eq(1)'
        this.pointMobile = '.wff_table_header_cell.wff_standings_stats_box:eq(2)'
        this.headerClass = '.wff_table_header_cell.wff_standings_stats_box'
        this.standingsWidgetMedium = '.wff_widget.wff_widget_FW900EC9110F3F943C.wff_widget_medium.wff_standings_soccer'
        this.standingsWidgetSmall = '.wff_widget.wff_widget_FW900EC9110F3F943C.wff_widget_small.wff_standings_soccer'
        this.championsLeaguePlaces = '.wff_table_row_column_content_wrapper.wff_championsleague'
        this.legendElement = '.wff_standings_legend'
        this.europaLeaguePlaces = '.wff_table_row_column_content_wrapper.wff_uefacup'
        this.participantClass = '.wff_participant.wff_responsive_text_no_display'
        this.tooltip = ".wff_tooltip_root"
        this.tooltipTextClass = ".wff_tooltip_participant_text"
        this.fixturesIcon = '.wff_form_ball.wff_form_fxtr:eq(0)'
        this.formIcons = '.wff_form_ball'
        this.eventInfoPopUp = '.wff_tooltip_root.wff_form_'
        this.eventDate = '.wff_event_date_time'
        this.teamNamesPopUp = '.wff_participant_container'
        this.venuePopUp = '.wff_event_venue'
        this.tournamentInfoHeader = '.wff_event_info_header'
        this.statusEventPopUp = '.wff_status_time_tooltip_wrapper'
        this.homeAwayDropdown = '.wff_standing_type_select.wff_closed'
        this.seasonDropdown = '.wff_tournament_selector.wff_closed'
        this.selectedOption = '.wff_selected_option'
        this.homeAwayDropdownList = '.wff_standing_type_selector_list'
        this.seasonDropdownList = '.wff_tournament_selector_list'
        this.standingsHeader = '.wff_standings_table_header_row'
        this.leagueNum = 1
    }

    standings_exists(){
        //livescore 
        const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
        Cypress.on('uncaught:exception', (err) => {
            /* returning false here prevents Cypress from failing the test */
            if (resizeObserverLoopErrRe.test(err.message)) {
                return false
            }
        })

        cy.get(this.sportsMenu)
            .should('exist').click();
        cy.get('.esc_menu_sports.esc_custom_menu.esc_border_menu')
            .find(this.sportOption).click();
        cy.get(this.stillingerButton)
            .should("exist").click();
        
        cy.get(this.topLeaguesContainer)
        .find(this.topLeaguesNames).eq(this.leagueNum).click();

        cy.get(this.standingsWidget).should('exist')

        cy.get(this.leagueHeader).should('exist')
    }

    check_all_texts(){
        // cy.get(this.standingsWidgetMedium).should("exist").and("be.visible")
         //checks the design of the headers}
         //hold
         cy.get(this.holdHeader).should("have.css","position","relative")
         .and("have.css","font-weight","700")
         .and("have.css","font-size","14px")
         .and("have.css","text-transform","capitalize")
         
         cy.get(this.headerClass).each((element,index)=>{
             cy.wrap(element).should("have.css","font-weight","700")
             .and("have.css","font-size","14px")
             .and("have.css","text-transform","capitalize")
         })
         
         //checks the headers text
          
         //hold   
        //  cy.textEqualTo(this.standingsWidgetMedium,this.holdHeader,"Hold")
      
        //  //kampe spillet
        //  cy.textEqualTo(this.standingsWidgetMedium,this.kampeSpillet,"K")
        //  //mal
        //  cy.textEqualTo(this.standingsWidgetMedium,this.mal,"Mål")
        //  //point
        //  cy.textEqualTo(this.standingsWidgetMedium,this.point,"P")        
         
         
         //check the legend elements
         cy.get(this.legendElement)
            .should("have.css","font-weight","400")
            .and("have.css","font-family",'"Open Sans", sans-serif')
            .and("have.css","font-size","14px")
            .and("have.css","font-style","normal")

         //champions league
         cy.get(this.championsLeaguePlaces).should("have.length",4)
         cy.get(this.championsLeaguePlaces)
            .should("have.css","border-radius","50%")
            .and("have.css","width","24px")
            .and("have.css","height","24px")
            .and("have.css","margin","10px")
     
        //  //europa league
         cy.get(this.europaLeaguePlaces).should("have.length",1)
         cy.get(this.europaLeaguePlaces)
            .should("have.css","border-radius","50%")
            .and("have.css","width","24px")
            .and("have.css","height","24px")
            .and("have.css","margin","10px")
     
     
        //  //count the participants
         cy.get(this.standingsWidget)
            .find(this.participantClass).should("have.length",20)
            .and("have.css","font-size","14px")
            .and("have.css","font-style","normal")
           
    }

    check_all_texts_mobile(){  
        //check if the widget exists
        cy.get(this.standingsWidgetSmall).should("exist").and("be.visible")
        //checks the design of the headers}
        //hold
        cy.get(this.holdHeader).should("have.css","position","relative")
        .and("have.css","font-weight","700")
        .and("have.css","font-size","14px")
        .and("have.css","text-transform","capitalize")
        
        cy.get(this.headerClass).each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","700")
            .and("have.css","font-size","14px")
            .and("have.css","text-transform","capitalize")
        })
        
        //checks the headers text
         
        //hold   
        cy.textEqualTo(this.standingsWidgetSmall,this.holdHeader,"Hold")
     
        //kampe spillet
        cy.textEqualTo(this.standingsWidgetSmall,this.kampeSpillet,"K")
        //mal
        cy.textEqualTo(this.standingsWidgetSmall,this.malMobile,"Mål")
        //point
        cy.textEqualTo(this.standingsWidgetSmall,this.pointMobile,"P")      
        
        
        
        
        //check the legend
        //champions league
        cy.get(this.championsLeaguePlaces).should("have.length",4)
        cy.get(this.championsLeaguePlaces)
        .should("have.css","border-radius","50%")
        .and("have.css","width","24px")
        .and("have.css","height","24px")
        .and("have.css","margin","10px")
    
        //europa league
        cy.get(this.europaLeaguePlaces).should("have.length",1)
        cy.get(this.europaLeaguePlaces)
        .should("have.css","border-radius","50%")
        .and("have.css","width","24px")
        .and("have.css","height","24px")
        .and("have.css","margin","10px")
    
    
        //count the participants
        cy.get(this.standingsWidgetSmall)
        .find(this.participantClass).should("have.length",20)
        .and("have.css","font-size","14px")
        .and("have.css","font-style","normal")
            
        
    }

    check_tooltips(){
        //checks the tooltips
        //kampeSpillet
        cy.get(this.standingsWidget).find(this.kampeSpillet).trigger("mouseover")
        cy.get(this.tooltip).should("exist").and("be.visible")
        //check the text
        cy.textEqualTo(this.tooltip,this.tooltipTextClass,"Kampe spillet")

        //kampeSpillet
        cy.get(this.standingsWidget).find(this.vundeKampe).trigger("mouseover")
        cy.get(this.tooltip).should("exist").and("be.visible")
        //check the text
        cy.textEqualTo(this.tooltip,this.tooltipTextClass,"Vundne kampe")

        //kampeSpillet
        cy.get(this.standingsWidget).find(this.drawUafgjort).trigger("mouseover")
        cy.get(this.tooltip).should("exist").and("be.visible")
        //check the text
        cy.textEqualTo(this.tooltip,this.tooltipTextClass,"Uafgjort")

        //kampeSpillet
        cy.get(this.standingsWidget).find(this.tabt).trigger("mouseover")
        cy.get(this.tooltip).should("exist").and("be.visible")
        //check the text
        cy.textEqualTo(this.tooltip,this.tooltipTextClass,"Tabt")
        
        //mal 
        cy.get(this.standingsWidget).find(this.mal).trigger("mouseover")
        cy.get(this.tooltip).should("exist").and("be.visible")
        //check the text
        cy.textEqualTo(this.tooltip,this.tooltipTextClass,"Mål")

        //kampeSpillet
        cy.get(this.standingsWidget).find(this.diff).trigger("mouseover")
        cy.get(this.tooltip).should("exist").and("be.visible")
        //check the text
        cy.textEqualTo(this.tooltip,this.tooltipTextClass,"Forskel")
        
        // //point
        cy.get(this.standingsWidget).find(this.points).trigger("mouseover")
        cy.get(this.tooltip).should("exist").and("be.visible")
        //check the text
        cy.textEqualTo(this.tooltip,this.tooltipTextClass,"Point")
    }

    check_form_popup(){
        cy.wait(2000)

        cy.wrap(null).then(() => {
            const $accountBox = Cypress.$(".wff_form_ball.wff_form_fxtr");
            console.log($accountBox)
    
            if($accountBox.length < 1){
                console.log("No fixtures icon!")
            }
            else{
                //checks the pop-up
                //fixture icon
                cy.get(this.standingsWidget).find(this.fixturesIcon).trigger("mouseover")
                cy.get(this.eventInfoPopUp).should("exist").and("be.visible")

                //check next event status should not exist
                cy.get(this.statusEventPopUp).should('not.exist')

                //check the team names
                cy.get(this.teamNamesPopUp)
                    .find('.wff_par_name_flag_wrapper')
                    //.find('.wff_participant_name wff_responsive_text')
                    .should("have.css","font-family",'"Open Sans", sans-serif')
                    //.and("have.css","font-family",'"Open Sans", sans-serif')
                    .and("have.css","font-size","14px")
                    .and("have.css","font-style","normal")

                //check the venue name
                cy.get(this.venuePopUp)
                    .should("have.css","font-family",'"Open Sans", sans-serif')
                    //.and("have.css","font-family",'"Open Sans", sans-serif')
                    .and("have.css","font-size","12px")
                    .and("have.css","font-style","normal")    

                //check the tournament info
                cy.get(this.tournamentInfoHeader)
                    .should("have.css","font-family",'"Open Sans", sans-serif')
                    .and("have.css","font-size","12px")
                    .and("have.css","font-style","normal")      

                
                // const fixtureIconFirstTeam = Cypress.$('.wff_standings_table_row.wff_row_0').find('.wff_table_row_column.wff_standings_form').eq(0).find('.wff_table_row_column_content_wrapper').find('.wff_form_ball.wff_form_fxtr').eq(0)
                // console.log(fixtureIconFirstTeam)
                // if(fixtureIconFirstTeam > 0){
                //     cy.get(this.standingsWidget).find(fixtureIconFirstTeam).trigger("mouseover")
                // }

                for(let i=1; i<5; i++){
                    cy.get(this.standingsWidget).find(this.formIcons).eq(i).trigger("mouseover")
                    cy.textEqualTo('.wff_tooltip_root_container',this.statusEventPopUp,"Slut")
                }
            }
        })
        
    }

    check_dropdowns(){
        //checks the dropdowns
        //check if the selected item from the list in the dropdown is the right one
        for(let i=0; i<3; i++){
            cy.get(this.standingsWidget).find(this.homeAwayDropdown).click()
            
            cy.get(this.homeAwayDropdownList)
                .find('.wff_standing_type_selector_list_item').eq(i).invoke("text").then((text)=>{
                    let trimmedText = text.trim()
                    cy.get('.wff_standing_type_selector_list_item').eq(i).click()
                    cy.get(this.selectedOption)
                        .eq(0).invoke("text").then((text)=>{
                            let textSelected = text.trim()
                            
                            expect(trimmedText).to.eql(textSelected)
                        })
                    // expect(trimmedText).to.eql(this.selectedOption)
                })
        }

        //check when selecting different season the content of the widget is visible
        for(let i=0; i<3; i++){
            cy.get(this.standingsWidget).find(this.seasonDropdown).click()
            cy.get(this.seasonDropdownList).should('exist')
            cy.get(this.seasonDropdownList).find('.wff_tournament_selector_list_item').eq(i).click()
            cy.get('.wff_standings_generic_content.wff_standings_premier_league').should('exist')
            cy.get(this.standingsWidget).find(this.standingsHeader).click()
        }
    }
}   

export class standings_other_sports_po{
    constructor(){
        
        this.livescoreButton = ".esm_livescore_li"
        this.stillingerButton = ".esm_stillinger_li"
        this.topLeaguesContainer = ".top-leagues.row.col-12.esc_template_list.esm_comp.esm_stillinger"
        this.topLeaguesNames = ".col-12.col-sm-6"
        this.leagueFlag = ".league-flag"
        this.stageArrowButton = ".arrow-container.es_toggle"
        this.leagueContainer = ".leagues-container.col-12.row:eq(1)"
        this.genderLeagues = '.gender-leagues.col-12.col-sm-6'
        this.womenLeagues = 'div:contains("Kvinder")'
        this.allLeaguesList = '.all-leagues-list'
        this.openedHeader = '.country-leagues-header-container.col-12:eq(0)'
        this.closedHeader = '.country-leagues-header-container.col-12.close-content:eq(0)'
        this.headerCountryName = '.country-name'
        this.headerCountryFlag = '.league-flag'
        this.sportsMenu = '.esc_menu_sports_active_element'
        this.sportOption = '.icehockey'
        this.standingsWidget = '.wff_widget.wff_widget_FW2BF49CBB0ABF7B3D.wff_widget_wide.wff_standings_icehockey'
        this.leagueHeader = '.esc_template_title'
        this.holdHeader = '.wff_table_header_cell.wff_standings_team'
        this.kampeSpillet = '.wff_table_header_cell.wff_standings_stats_box:eq(0)'
        this.vundeKampe = '.wff_table_header_cell.wff_standings_stats_box:eq(1)'
        this.drawUafgjort = '.wff_table_header_cell.wff_standings_stats_box:eq(2)'
        this.tabt = '.wff_table_header_cell.wff_standings_stats_box:eq(3)'
        this.mal = '.wff_table_header_cell.wff_standings_stats_box:eq(4)'
        this.point = '.wff_table_header_cell.wff_standings_stats_box:eq(5)'
        this.malMobile = '.wff_table_header_cell.wff_standings_stats_box:eq(1)'
        this.pointMobile = '.wff_table_header_cell.wff_standings_stats_box:eq(2)'
        this.headerClass = '.wff_table_header_cell.wff_standings_stats_box'
        this.standingsWidgetMedium = '.wff_widget.wff_widget_FW2BF49CBB0ABF7B3D.wff_widget_medium.wff_standings_icehockey'
        this.standingsWidgetSmall = '.wff_widget.wff_widget_FW2BF49CBB0ABF7B3D.wff_widget_small.wff_standings_icehockey'
        this.playoffPlaces = '.wff_table_row_column_content_wrapper.wff_division_championship_playoff'
        this.legendElement = '.wff_standings_legend'
        this.wildcardPlaces = '.wff_table_row_column_content_wrapper.wff_wildcard_qualification'
        this.participantClass = '.wff_participant.wff_responsive_text_no_display'
        this.tooltip = ".wff_tooltip_root"
        this.tooltipTextClass = ".wff_tooltip_participant_text"
        this.fixturesIcon = '.wff_form_ball.wff_form_fxtr:eq(0)'
        this.formIcons = '.wff_form_ball'
        this.eventInfoPopUp = '.wff_tooltip_root.wff_form_'
        this.eventDate = '.wff_event_date_time'
        this.teamNamesPopUp = '.wff_participant_container'
        this.venuePopUp = '.wff_event_venue'
        this.tournamentInfoHeader = '.wff_event_info_header'
        this.statusEventPopUp = '.wff_status_time_tooltip_wrapper'
        this.homeAwayDropdown = '.wff_standing_type_select.wff_closed'
        this.seasonDropdown = '.wff_tournament_selector'
        this.selectedOption = '.wff_selected_option'
        this.homeAwayDropdownList = '.wff_standing_type_selector_list'
        this.seasonDropdownList = '.wff_tournament_selector_list'
        this.standingsHeader = '.wff_standings_table_header_row'
        this.leagueNum = 2
        this.playoffCount = 24
        this.wildcardCount = 8
        this.participantCount = 64
        this.headerScopesArray = ['Hold', 'K', 'V', 'P']
        this.tooltipTextsArray = ["Kampe spillet", "Vundne kampe", "Overarbejde tab", "Tabt", "Mål", "Point"]
        this.eventStatusArray = ['Slut', 'Slut FS', 'Slut SS', 'Ikke startet']
        this.leagueStanding = '.wff_standings_generic_content.wff_standings_conf_eastern.wff_standings_conf_title'
        this.eventPopUpStatus = '.wff_status_value.wff_capitalize_text_transform'
        this.formIconsArrayStart = 1
        this.formIconsArrayEnd = 5

    }

    standings_exists(){
        //livescore 
        const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
        Cypress.on('uncaught:exception', (err) => {
            /* returning false here prevents Cypress from failing the test */
            if (resizeObserverLoopErrRe.test(err.message)) {
                return false
            }
        })

        cy.get(this.sportsMenu)
            .should('exist').click();
        cy.get('.esc_menu_sports.esc_custom_menu.esc_border_menu')
            .find(this.sportOption).click();
        cy.get(this.stillingerButton)
            .should("exist").click();
        
        cy.get(this.topLeaguesContainer)
        .find(this.topLeaguesNames).eq(this.leagueNum).click();

        cy.get(this.standingsWidget).should('exist')

        cy.get(this.leagueHeader).should('exist')
    }

    check_all_texts(){
        // cy.get(this.standingsWidgetMedium).should("exist").and("be.visible")
         //checks the design of the headers
         //hold
         cy.get(this.holdHeader).should("have.css","position","relative")
         .and("have.css","font-weight","700")
         .and("have.css","font-size","14px")
         .and("have.css","text-transform","capitalize")
         
         cy.get(this.headerClass).each((element,index)=>{
             cy.wrap(element).should("have.css","font-weight","700")
             .and("have.css","font-size","14px")
             .and("have.css","text-transform","capitalize")
         })
         
         //checks the headers text
          
         //hold   
        //  cy.textEqualTo(this.standingsWidgetMedium,this.holdHeader,"Hold")
      
        //  //kampe spillet
        //  cy.textEqualTo(this.standingsWidgetMedium,this.kampeSpillet,"K")
        //  //mal
        //  cy.textEqualTo(this.standingsWidgetMedium,this.mal,"Mål")
        //  //point
        //  cy.textEqualTo(this.standingsWidgetMedium,this.point,"P")        
         
         
         //check the legend elements
         cy.get(this.legendElement)
            .should("have.css","font-weight","400")
            .and("have.css","font-family",'"Open Sans", sans-serif')
            .and("have.css","font-size","14px")
            .and("have.css","font-style","normal")

         //playOffs
        //  cy.get(this.playoffPlaces).should("have.length",this.playoffCount)
         cy.get(this.playoffPlaces)
            .should("have.css","border-radius","50%")
            .and("have.css","width","24px")
            .and("have.css","height","24px")
            
     
        // wildcard
        //  cy.get(this.wildcardPlaces).should("have.length",this.wildcardCount)
        //  cy.get(this.wildcardPlaces)
        //     .should("have.css","border-radius","50%")
        //     .and("have.css","width","24px")
        //     .and("have.css","height","24px")
        //     .and("have.css","margin","10px")
     
     
        //  //count the participants
         cy.get(this.standingsWidget)
            .find(this.participantClass).should("have.length",this.participantCount)
            .and("have.css","font-size","14px")
            .and("have.css","font-style","normal")
           
    }

    check_all_texts_mobile(){  
        //check if the widget exists
        cy.get(this.standingsWidgetSmall).should("exist").and("be.visible")
        //checks the design of the headers}
        //hold
        cy.get(this.holdHeader).should("have.css","position","relative")
        .and("have.css","font-weight","700")
        .and("have.css","font-size","14px")
        .and("have.css","text-transform","capitalize")
        
        cy.get(this.headerClass).each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","700")
            .and("have.css","font-size","14px")
            .and("have.css","text-transform","capitalize")
        })
        
        //checks the headers text
         
        //hold   
        // cy.get(this.standingsWidgetSmall).within(()=>{
        //     for(let i=1; i<this.headerScopesArray.length; i++){
              
        //         cy.get('.wff_standings_table_header_row')
        //         .find('.wff_table_header_cell').eq(i).invoke("text").then((text)=>{
        //             let trimmed_text = text.trim()
        //             cy.expect(trimmed_text).to.eq(this.headerScopesArray[i-1])
        //         })
        //     }
        //   })
     
        // //kampe spillet
        // cy.textEqualTo(this.standingsWidgetSmall,this.kampeSpillet,"K")
        // //mal
        // cy.textEqualTo(this.standingsWidgetSmall,this.malMobile,"Mål")
        // //point
        // cy.textEqualTo(this.standingsWidgetSmall,this.pointMobile,"P")      
        
        
        //check the legend elements
        cy.get(this.legendElement)
        .should("have.css","font-weight","400")
        .and("have.css","font-family",'"Open Sans", sans-serif')
        .and("have.css","font-size","14px")
        .and("have.css","font-style","normal")


         //playOffs
        //  cy.get(this.playoffPlaces).should("have.length",this.playoffCount)
         cy.get(this.playoffPlaces)
            .should("have.css","border-radius","50%")
            .and("have.css","width","24px")
            .and("have.css","height","24px")
            
     
        // wildcard
        //  cy.get(this.wildcardPlaces).should("have.length",this.wildcardCount)
        //  cy.get(this.wildcardPlaces)
        //     .should("have.css","border-radius","50%")
        //     .and("have.css","width","24px")
        //     .and("have.css","height","24px")
        //     .and("have.css","margin","10px")
     
     
        //  //count the participants
         cy.get(this.standingsWidgetSmall)
            .find(this.participantClass).should("have.length",this.participantCount)
            .and("have.css","font-size","14px")
            .and("have.css","font-style","normal")
            
        
    }

    check_tooltips(){
        //checks the tooltips
        cy.get(this.standingsWidget).within(()=>{
            for(let i=0; i<this.tooltipTextsArray.length; i++){
              cy.get('.wff_table_header_cell.wff_standings_stats_box').eq(i).trigger('mouseover')
              cy.get(this.tooltip).should("be.visible")
              cy.get(this.tooltip).invoke("text").then((text)=>{
                let trimmed_text = text.trim()
                cy.expect(trimmed_text).to.eq(this.tooltipTextsArray[i])
              })
            }
          })
        

    }

    check_form_popup(){
        cy.wait(2000)

        cy.wrap(null).then(() => {
            const $accountBox = Cypress.$(".wff_form_ball.wff_form_fxtr");
            console.log($accountBox)
    
            if($accountBox.length < 1){
                console.log("No fixtures icon!")
            }
            else{
                //checks the pop-up
                //fixture icon
                cy.get(this.standingsWidget).find(this.fixturesIcon).click()
                cy.get(this.eventInfoPopUp).should("exist").and("be.visible")

                //check next event status should not exist
                //cy.get(this.statusEventPopUp).should('not.be.visible')
                //cy.FFamily_fSize_fWeight_marginRight_position_left(this.statusEventPopUp,'"Open Sans", sans-serif',"14px","400","0px","static","auto")


                //check the team names
                cy.get(this.teamNamesPopUp)
                    .find('.wff_par_name_flag_wrapper')
                    //.find('.wff_participant_name wff_responsive_text')
                    .should("have.css","font-family",'"Open Sans", sans-serif')
                    //.and("have.css","font-family",'"Open Sans", sans-serif')
                    .and("have.css","font-size","14px")
                    .and("have.css","font-style","normal")

                //check the venue name
                cy.get(this.venuePopUp)
                    .should("have.css","font-family",'"Open Sans", sans-serif')
                    //.and("have.css","font-family",'"Open Sans", sans-serif')
                    .and("have.css","font-size","12px")
                    .and("have.css","font-style","normal")    

                //check the tournament info
                cy.get(this.tournamentInfoHeader)
                    .should("have.css","font-family",'"Open Sans", sans-serif')
                    .and("have.css","font-size","12px")
                    .and("have.css","font-style","normal")      

                cy.get(this.holdHeader).eq(0).click()

                // const fixtureIconFirstTeam = Cypress.$('.wff_standings_table_row.wff_row_0').find('.wff_table_row_column.wff_standings_form').eq(0).find('.wff_table_row_column_content_wrapper').find('.wff_form_ball.wff_form_fxtr').eq(0)
                // console.log(fixtureIconFirstTeam)
                // if(fixtureIconFirstTeam > 0){
                //     cy.get(this.standingsWidget).find(fixtureIconFirstTeam).trigger("mouseover")
                // }

                //check the status of finished events
                for(let i=this.formIconsArrayStart; i<this.formIconsArrayEnd; i++){
                    cy.get(this.standingsWidget).find(this.formIcons).eq(i).trigger("mouseover")
                    cy.get('.wff_status_value.wff_capitalize_text_transform').invoke("text").then((text)=>{
                        let trimmed_text = text.trim()
                        cy.expect(this.eventStatusArray).to.include(trimmed_text)
                    })
                }

                cy.FFamily_fSize_fWeight_marginRight_position_left(this.eventPopUpStatus,'"Open Sans", sans-serif',"12px","700","0px","static","auto")
                    }
                })
        
    }

    check_dropdowns(){
        //checks the dropdowns
        //check if the selected item from the list in the dropdown is the right one
        for(let i=0; i<3; i++){
            cy.get(this.standingsWidget).find(this.homeAwayDropdown).click()
            
            cy.get(this.homeAwayDropdownList)
                .find('.wff_standing_type_selector_list_item').eq(i).invoke("text").then((text)=>{
                    let trimmedText = text.trim()
                    cy.get('.wff_standing_type_selector_list_item').eq(i).click()
                    cy.get(this.selectedOption)
                        .eq(0).invoke("text").then((text)=>{
                            let textSelected = text.trim()
                            
                            expect(trimmedText).to.eql(textSelected)
                        })
                    // expect(trimmedText).to.eql(this.selectedOption)
                })
        }

        //check when selecting different season the content of the widget is visible
        for(let i=0; i<2; i++){
            cy.get(this.standingsWidget).find(this.seasonDropdown).click()
            cy.get(this.seasonDropdownList).should('exist')
            cy.get(this.seasonDropdownList).find('.wff_tournament_selector_list_item').eq(i).click()
            cy.get(this.leagueStanding).should('exist')
            cy.get(this.standingsWidget).find(this.standingsHeader).eq(0).click()
        }
    }
}  