
export class extended_stats_team_po{
    constructor(){
        
        this.livescoreButton = ".esm_livescore_li"
        this.stillingerButton = ".esm_stillinger_li"
        this.leagueFlag = ".league-flag"
        this.sportsMenu = '.esc_menu_sports_active_element'
        this.sportOption = '.esc_active.soccer'
        this.topLeaguesContainer = ".top-leagues.row.col-12.esc_template_list.esm_comp.esm_stillinger"
        this.topLeaguesNames = ".col-12.col-sm-6"
        this.standingsWidget = '.wff_widget.wff_widget_FW900EC9110F3F943C.wff_widget_wide.wff_standings_soccer'
        this.leagueHeader = '.esc_template_title'
        this.holdHeader = '.wff_table_header_cell.wff_participant.wff_fixed_col'
        this.totalShots = '.wff_table_header_cell.wff_extended_stats_stat_box.wff_stat_total_shots'
        this.totalShotsOn = '.wff_table_header_cell.wff_extended_stats_stat_box.wff_stat_shoton'
        this.totalShotsOnPerGoal = '.wff_table_header_cell.wff_extended_stats_stat_box.wff_stat_shotson_per_goal'
        this.totalShotsOnPerGame = '.wff_table_header_cell.wff_extended_stats_stat_box.wff_stat_shoton_per_game'
        this.totalShotsOffPerGame = '.wff_table_header_cell.wff_extended_stats_stat_box.wff_stat_shotoff_per_game'
        this.totalShotsOff = '.wff_table_header_cell.wff_extended_stats_stat_box.wff_stat_shotoff'
        this.woodworks = '.wff_table_header_cell.wff_extended_stats_stat_box.wff_stat_woodwork'
        this.penaltyMissed = '.wff_table_header_cell.wff_extended_stats_stat_box.wff_stat_penalty_missed'
        this.blockedShots = '.wff_table_header_cell.wff_extended_stats_stat_box.wff_stat_blocked_shots'
        this.headerClass = '.wff_table_header_cell.wff_standings_stats_box'
        this.extStatsWidget = '.wff_widget.wff_widget_FW0429E4313AD72C98.wff_widget_wide'
        this.extStatsWidgetMobile = '.wff_widget.wff_widget_FW0429E4313AD72C98.wff_widget_small'
        this.statistikTab = '.esm_hold_statistik_li'
        this.statsDropdownSelectedItem = '.wff_data_selector_list_item.wff_selected_item'
        this.statsDropdown = '.wff_data_selector_root.wff_ext_stats_category_selector'
        this.statsDropdownList = '.wff_data_selector_list'
        this.participantClass = '.wff_participant_name.wff_responsive_text'
        this.particiapantTeam = '.wff_participant_team_name'
        this.showAllButton = '.wff_show_all_label_wrapper'
        this.showMoreButton = '.wff_exapnd_arrow_wrapper'
        this.showlessButton = '.wff_collapsed_arrow_wrapper'
        this.tooltip = ".wff_tooltip_root"
        this.statsSelectedItem = '.wff_data_selector_container:eq(0)'
        this.seasonSelectedItem = '.wff_data_selector_container:eq(1)'
        this.extStatsWidgetHeader = '.wff_extended_stats_header.wff_team_extended_stats_header_soccer'
        this.seasonDropdown = '.wff_data_selector_root.wff_ext_stats_tournament_selector'
        this.selectedItemInDropdownOverview = 'Skud'
        this.tooltipTextsArray = ["Totale skud","Totale skud på mål", "Totale skud forbi mål", "Ramte træværket", "Skud pr mål", "Totale skud på pr kamp", "Totale skud forbi pr kamp", "Missede straffespark", "Blokerede Skud"]
        this.headerTextsArray = ["Hold", "TS", "TSPM", "TSFM", "RT", "SPM", "SPPK", "SFPK", "MSS", "BS"]
        this.tournamentHeader = '.col-12.col-sm-12.col-md-12.col-lg-12.plm-cell.escc-esc_title_template.esc_title_template'
        this.tournamentHeaderText = '.template-name'
        this.tournamentHeaderFlag = '.es_flag_.esc_flag'

    }

    extended_stats_exists(){
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
        .find(this.topLeaguesNames).eq(1).click();

        cy.get(this.statistikTab).should('exist').click()

        cy.get(this.extStatsWidget).should('exist')
    }

    check_all_texts(){
        cy.wait(2000)

        cy.wrap(null).then(() => {
            const $accountBox = Cypress.$(".wff_no_data_available_container.wff_no_data_alt");
            console.log($accountBox)
    
            if($accountBox.length > 0){
                console.log("Ingen data tilgængelig")
            }
            else{
                // cy.get(this.statistikTab).should('exist').click()

                // cy.get(this.extStatsWidget).should('exist')
                
                //checks the design of the headers}
                //hold
                cy.get('.wff_table_header_root.wff_soccer').find(this.holdHeader)
                .should("have.css","font-family",'"Open Sans", sans-serif')
                .and("have.css","font-weight","700")
                .and("have.css","font-size","14px")
                .and("have.css","color","rgb(29, 90, 175)") 

                cy.get('.wff_label_text_wrapper').each((element,index)=>{
                    cy.wrap(element).should("have.css","font-weight","700")
                    .and("have.css","font-size","14px")
                    //.and("have.css","text-transform","capitalize")
                })
                
                //checks the headers text
                cy.get(this.statsDropdown).click();

                cy.get('.wff_data_selector_list')
                .find(this.statsDropdownSelectedItem).invoke("text").then((text)=>{
                        let trimmedText = text.trim()

                        if(trimmedText === this.selectedItemInDropdownOverview){
                            //checking all the headers texts   
                            cy.get(this.extStatsWidget).find('.wff_table_header_cell_wrapper')
                                .each((element,index )=>{
                                    cy.textEqualTo(this.extStatsWidget,element,this.headerTextsArray[index])
                                })
                        }
                        
                })
            
                //count the participants

                cy.get(this.extStatsWidget)
                    .find(this.participantClass).should("have.length",10)
                    .and("have.css","font-size","14px")
                    .and("have.css","font-style","normal")

                cy.get('.wff_show_all_button_container').find(this.showMoreButton).click()

                cy.get(this.extStatsWidget)
                    .find(this.participantClass).should("have.length",20)
                    .and("have.css","font-size","14px")
                    .and("have.css","font-style","normal")
                
                cy.get('.wff_show_all_button_container').find(this.showlessButton).click()
            }
        })
        
    }

    check_all_texts_mobile(){  
        cy.wait(2000)

        cy.wrap(null).then(() => {
            const $accountBox = Cypress.$(".wff_no_data_available_container.wff_no_data_alt");
            console.log($accountBox)
    
            if($accountBox.length > 0){
                console.log("Ingen data tilgængelig")
            }
            else{
                //check if the widget exists
                //cy.get(this.extStatsWidgetMobile).should("exist").and("be.visible")
            
                //checks the design of the headers
                //hold
                cy.get('.wff_table_header_root.wff_soccer').find(this.holdHeader)
                .should("have.css","font-family",'"Open Sans", sans-serif')
                .and("have.css","font-weight","700")
                .and("have.css","font-size","14px")
                .and("have.css","color","rgb(29, 90, 175)") 

                cy.get('.wff_label_text_wrapper').each((element,index)=>{
                        cy.wrap(element).should("have.css","font-weight","700")
                        .and("have.css","font-size","14px")
                        //.and("have.css","text-transform","capitalize")
                    })
                    
                //checks the headers text
                cy.get(this.statsDropdown).click();

                cy.get('.wff_data_selector_list')
                    .find(this.statsDropdownSelectedItem).invoke("text").then((text)=>{
                            let trimmedText = text.trim()

                            if(trimmedText === this.selectedItemInDropdownOverview){
                                //checking all the headers texts   
                                cy.get(this.extStatsWidgetMobile).find('.wff_table_header_cell_wrapper')
                                    .each((element,index )=>{
                                        cy.textEqualTo(this.extStatsWidgetMobile,element,this.headerTextsArray[index])
                                    })
                            }
                            
                    })
                
                //count the participants
                cy.get(this.extStatsWidgetMobile)
                        .find(this.participantClass).should("have.length",10)
                        .and("have.css","font-size","14px")
                        .and("have.css","font-style","normal")

                cy.get('.wff_show_all_button_container').find(this.showMoreButton).click()

                cy.get(this.extStatsWidgetMobile)
                    .find(this.participantClass).should("have.length",20)
                    .and("have.css","font-size","14px")
                    .and("have.css","font-style","normal")        
                        
                cy.get('.wff_show_all_button_container').find(this.showlessButton).click() 
            }
        })
        
    }

    check_tooltips(){
        cy.wait(2000)

        cy.wrap(null).then(() => {
            const $accountBox = Cypress.$(".wff_no_data_available_container.wff_no_data_alt");
            console.log($accountBox)
    
            if($accountBox.length > 0){
                console.log("Ingen data tilgængelig")
            }
            else{
                //checks the tooltips
        
                cy.tooltipTextWithArray(this.extStatsWidget,'.wff_label_text.wff_has_tooltip',this.tooltip,this.tooltipTextsArray)
            }
        })
        

    }

    check_dropdowns(){

        cy.wait(2000)

        cy.wrap(null).then(() => {
            const $accountBox = Cypress.$(".wff_no_data_available_container.wff_no_data_alt");
            console.log($accountBox)
    
            if($accountBox.length > 0){
                console.log("Ingen data tilgængelig")
            }
            else{
                //checks the dropdowns
                //check if the selected item from the list in the dropdown is the right one
                for(let i=0; i<3; i++){
                    cy.get(this.extStatsWidget).find(this.statsDropdown).click()
                    
                    cy.get(this.statsDropdownList)
                        .find('.wff_data_selector_list_item').eq(i).invoke("text").then((text)=>{
                            let trimmedText = text.trim()
                            cy.get('.wff_data_selector_list_item').eq(i).click()
                            cy.get(this.statsSelectedItem)
                                .invoke("text").then((text)=>{
                                    let textSelected = text.trim()
                                    
                                    expect(trimmedText).to.eql(textSelected)
                                })
                            // expect(trimmedText).to.eql(this.selectedOption)
                        })
                }

                //check when selecting different season the content of the widget is visible
                cy.get(this.extStatsWidget).find(this.extStatsWidgetHeader).click()
                
                for(let i=0; i<3; i++){
                    cy.get(this.extStatsWidget).find(this.seasonDropdown).click()
                    
                    cy.get(this.statsDropdownList)
                        .find('.wff_data_selector_list_item').eq(i).invoke("text").then((text)=>{
                            let trimmedText = text.trim()
                            cy.get('.wff_data_selector_list_item').eq(i).click()
                            cy.wait(2000)
                            cy.get(this.seasonSelectedItem)
                                .invoke("text").then((text)=>{
                                    let textSelected = text.trim()
                                    
                                    expect(trimmedText).to.eql(textSelected)
                                    cy.get('.wff_extended_stats_generic_root.wff_extended_stats_generic_soccer.wff_table_scrollable_container').should('exist')
                                })
                        })
                }
            }
        })
        
    }

    check_tournament_headers(){
        cy.wait(2000)

        cy.wrap(null).then(() => {
            const $accountBox = Cypress.$(".wff_no_data_available_container.wff_no_data_alt");
            console.log($accountBox)
    
            if($accountBox.length > 0){
                console.log("Ingen data tilgængelig")
            }
            else{
                cy.get(this.tournamentHeader).should('exist').and('be.visible')

                cy.get(this.tournamentHeader).find(this.tournamentHeaderText)
                .should("have.css","font-family",'"Open Sans"')
                .and("have.css","font-weight","700")
                .and("have.css","font-size","20px")
                .and("have.css","color","rgb(255, 255, 255)") 

                cy.get(this.tournamentHeader).find(this.tournamentHeaderFlag)
                .should("have.css","font-family",'"Open Sans"')
                .and("have.css","height","24px")
                .and("have.css","box-sizing","border-box")
            }
        })
        
         
    }
}   