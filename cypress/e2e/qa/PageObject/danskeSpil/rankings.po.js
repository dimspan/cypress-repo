export class rankings_po{
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
        this.sportOption = '.tennis'
        this.leagueNum = 0
        this.rankingsWidget = '.wff_widget.wff_widget_FW7D6CD12C59438616.wff_widget_wide'
        this.rankingsMobile = '.wff_widget.wff_widget_FW7D6CD12C59438616.wff_widget_small'
        this.firstTeam = '.wff_table_row_column.wff_standings_team:eq(0)'
        this.positionHeader = '.wff_table_header_cell.wff_participant_info.wff_text_transform_capitalize'
        this.statBoxHeaders = '.wff_table_header_cell.wff_squad_stats_box'
        this.participantClass = '.wff_participant_name.wff_responsive_text'
        this.kampeSpilletHeader = 'div[aria-label="Kampe spillet"]'
        this.alderHeader = 'div[aria-label="Alder"]'
        this.tooltip = ".wff_tooltip_root"
        this.tooltipTextClass = ".wff_tooltip_participant_text"
        this.rankingsAtpButton = '.esm_ranking_atp_li'
        this.ranglisteHeader = '[aria-label="Rangliste"]'
        this.pointHeader = '[aria-label="Point"]'
        this.participantCount = 10
        this.participantAfterShowMoreCount = 20
        this.participantAfterShowAllount = 100
        this.showMoreButton = '.wff_collapsed_arrow_wrapper'
        this.showAllButton = '.wff_show_all_label_wrapper'
        this.searchCountry = '.wff_country_search_bar_button'
        this.firstOption = '.wff_country_list_item:eq(0)'
        this.clearALlButton = '.wff_button_wrapper_root.wff_button_clear_selection'
    }

    rankings_exists(){
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
        cy.get(this.rankingsAtpButton)
            .should("exist").click();

        cy.get(this.rankingsWidget).should('exist')

        //cy.get(this.leagueHeader).should('exist')
    }

    check_all_texts(){

         //checks the design of the headers
        //Rangliste header
        cy.get(this.ranglisteHeader)
            .should("have.css","position","relative")
            .should("have.css","font-weight","700")
            .and("have.css","font-size","14px")
            .and("have.css","color","rgb(29, 90, 175)")

        //Point header
        cy.get(this.pointHeader)
        .should("have.css","position","relative")
        .should("have.css","font-weight","700")
        .and("have.css","font-size","14px")
        .and("have.css","color","rgb(29, 90, 175)")
     
        // the participants styles and count
        cy.get(this.rankingsWidget)
            .find(this.participantClass)
            .should("have.length",this.participantCount)
            .and("have.css","font-weight","700")
            .and("have.css","font-family",'"Open Sans", sans-serif')
            .and("have.css","font-size","14px")
            .and("have.css","font-style","normal")

        cy.get('.wff_button_wrapper_root.wff_show_more_button_wrapper').find(this.showMoreButton).eq(0).click()

        cy.get(this.rankingsWidget)
            .find(this.participantClass)
            .should("have.length",this.participantAfterShowMoreCount)
            .and("have.css","font-weight","700")
            .and("have.css","font-family",'"Open Sans", sans-serif')
            .and("have.css","font-size","14px")
            .and("have.css","font-style","normal")

        cy.get('.wff_button_wrapper_root.wff_show_more_button_wrapper').find(this.showAllButton).eq(0).click()

        cy.get(this.rankingsWidget)
            .find(this.participantClass)
            .should("have.length",this.participantAfterShowAllount)
            .and("have.css","font-weight","700")
            .and("have.css","font-family",'"Open Sans", sans-serif')
            .and("have.css","font-size","14px")
            .and("have.css","font-style","normal")   

        cy.get('.wff_button_wrapper_root.wff_show_more_button_wrapper').find(this.showAllButton).eq(0).click()

        cy.get(this.rankingsWidget).find(this.participantClass).should("have.length",this.participantCount)
    }

    check_all_texts_mobile(){  
         //checks the design of the headers
        //Rangliste header
        cy.get(this.ranglisteHeader)
            .should("have.css","position","relative")
            .should("have.css","font-weight","700")
            .and("have.css","font-size","14px")
            .and("have.css","color","rgb(29, 90, 175)")

        //Point header
        cy.get(this.pointHeader)
        .should("have.css","position","relative")
        .should("have.css","font-weight","700")
        .and("have.css","font-size","14px")
        .and("have.css","color","rgb(29, 90, 175)")
     
        // the participants styles and count
        cy.get(this.rankingsMobile)
            .find(this.participantClass)
            .should("have.length",this.participantCount)
            .and("have.css","font-weight","700")
            .and("have.css","font-family",'"Open Sans", sans-serif')
            .and("have.css","font-size","14px")
            .and("have.css","font-style","normal")

        cy.get('.wff_button_wrapper_root.wff_show_more_button_wrapper').find(this.showMoreButton).eq(0).click()

        cy.get(this.rankingsMobile)
            .find(this.participantClass)
            .should("have.length",this.participantAfterShowMoreCount)
            .and("have.css","font-weight","700")
            .and("have.css","font-family",'"Open Sans", sans-serif')
            .and("have.css","font-size","14px")
            .and("have.css","font-style","normal")

        cy.get('.wff_button_wrapper_root.wff_show_more_button_wrapper').find(this.showAllButton).eq(0).click()

        cy.get(this.rankingsMobile)
            .find(this.participantClass)
            .should("have.length",this.participantAfterShowAllount)
            .and("have.css","font-weight","700")
            .and("have.css","font-family",'"Open Sans", sans-serif')
            .and("have.css","font-size","14px")
            .and("have.css","font-style","normal")   

        cy.get('.wff_button_wrapper_root.wff_show_more_button_wrapper').find(this.showAllButton).eq(0).click()

        cy.get(this.rankingsMobile)
                .find(this.participantClass)
                .should("have.length",this.participantCount)  
        
    }

    check_search_country_dropdown(){
        //checks the search country dropdown
        //check if the selected item from the list in the dropdown is the right one
        cy.get(this.searchCountry).eq(0).click()
        cy.get(this.firstOption).click()
        

        let logoSrc;
        let selectedCountryLogoSrc
        cy.get(this.rankingsWidget).eq(0).within(()=>{
            cy.get('.wff_flag_and_logo_container img')
            .invoke('attr', 'src')
            .then((srcFirst) => {
                logoSrc = srcFirst;
                
                cy.get('.wff_country_flag_and_name_container img')
                .invoke('attr', 'src')
                .then((srcSelected) => {
                    selectedCountryLogoSrc = srcSelected;
                    
                    expect(selectedCountryLogoSrc).to.eql(logoSrc)
                });
            });
            
            cy.get(this.clearALlButton).click()
            cy.get('.wff_selected_countries').should('not.exist')

            let typeCountry = 'Spanien'
            cy.get('input.wff_country_search_bar').clear().type(typeCountry);
            cy.get(this.firstOption)
            .invoke('text')
            .then((text) => {
                const filteredText = text.trim()
                const $accountBox = Cypress.$('.wff_country_list_item');
                expect($accountBox.length).to.eql(1)
                expect(filteredText).to.eql(typeCountry);
            })
        })
        
        

    }
}   

export class drivers_rankings_f1_po{
    constructor(){
        
        this.seasonButton = ".esm_livescore_li"
        this.allLeaguesList = '.all-leagues-list'
        this.openedHeader = '.country-leagues-header-container.col-12:eq(0)'
        this.closedHeader = '.country-leagues-header-container.col-12.close-content:eq(0)'
        this.headerCountryName = '.country-name'
        this.headerCountryFlag = '.league-flag'
        this.sportsMenu = '.esc_menu_sports_active_element'
        this.sportOption = '.motorsports'
        this.driverRankingWidget = '.wff_widget.wff_widget_FW7CF0AFCB22BF74ED.wff_widget_wide'
        this.driversRankingMobile = '.wff_widget.wff_widget_FW7CF0AFCB22BF74ED.wff_widget_small'
        this.driverRankingWidgetFirst = '.wff_widget.wff_widget_FW7CF0AFCB22BF74ED.wff_widget_wide:eq(0)'
        this.driversRankingMobileFirst = '.wff_widget.wff_widget_FW7CF0AFCB22BF74ED.wff_widget_small:eq(0)'
        this.participantClass = '.wff_participant_name.wff_responsive_text'
        this.driversRankingButton = '.esm_ranking_drivers_li'
        this.driversHeader = '.wff_table_header_cell.wff_participant_info.wff_fixed_col'
        this.pointHeader = '.wff_table_header_cell.wff_participant_points.wff_fixed_col'
        this.tournamentLogo = '.wff_flag_and_logo_container'
        this.trackImage = '.wff_track_image_container'
        this.participantName = '.wff_participant_container'
        this.eventKODate = '.wff_event_start_time'
        this.eventKOTime = '.wff_status_value.wff_uppercase_text_transform'
        this.eventRow = '.wff_event_info.wff_event_finished'
        this.driversRankingHeader = '.wff_event_name'
        this.driverIcon = '.wff_icon_container.wff_header_icon_container'
        this.seasonDropdown = '.wff_data_selector_root'
        this.statsDropdownList = '.wff_data_selector_list'
        this.statsSelectedItem = '.wff_data_selector_text'
        this.participantCount = 10
        this.participantAfterShowMoreCount = 20
        this.participantAfterShowAllount = 21
        this.showMoreButton = '.wff_collapsed_arrow_wrapper'
        this.showAllButton = '.wff_show_all_label_wrapper'
        this.majorButtonClass = '.wff_button_wrapper_root.wff_show_more_button_wrapper'
        this.tournamentFlag = '.wff_table_header_cell.wff_participant_event_points'
        this.tooltipText = '.wff_tooltip_root_container'
        this.expectedText = ['Bahrain Grand Prix', 'Saudi Arabia Grand Prix', 'Australian Grand Prix', 
        'Chinese Grand Prix', 'Azerbaijan Grand Prix', 'Miami Grand Prix', 'Emilia Romagna Grand Prix', 'Monaco Grand Prix',
         'Spanish Grand Prix', 'Canadian Grand Prix', 'Austrian Grand Prix', 'British Grand Prix', 'Hungarian Grand Prix',
          'Belgian Grand Prix', 'Dutch Grand Prix', 'Italian Grand Prix', 'Singapore Grand Prix', 'Japanese Grand Prix',
           'Qatar Grand Prix', 'United States Grand Prix', 'Mexican Grand Prix', 'Brazilian Grand Prix', 'Las Vegas Grand Prix', 'Abu Dhabi Grand Prix']
    }

    drivers_rankings_f1_exists(){
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
        cy.get(this.driversRankingButton)
            .should("exist").click();

        cy.get(this.driverRankingWidget).should('exist')

        //cy.get(this.leagueHeader).should('exist')
    }

    check_all_texts(){
        
            //Driver Ranking header
        cy.get(this.driverRankingWidgetFirst)
            .find(this.driversRankingHeader)
                .should("have.css","position","static")
                .and("have.css","font-weight","700")
                .and("have.css","font-size","12px")
                .and("have.css","color","rgb(0, 0, 0)")

        //drivers header
        cy.get(this.driverRankingWidgetFirst)
            .find(this.driversHeader)
                .should("have.css","position","sticky")
                .and("have.css","font-weight","600")
                .and("have.css","font-size","10px")
                .and("have.css","color","rgb(0, 0, 0)")

        //point header
        cy.get(this.driverRankingWidgetFirst)
            .find(this.pointHeader)
                .should("have.css","position","sticky")
                .and("have.css","font-weight","400")
                .and("have.css","font-size","10px")
                .and("have.css","color","rgb(0, 0, 0)")

        //tournament logo in header
        cy.get(this.driverRankingWidgetFirst)
            .find(this.tournamentLogo).should("exist")

        //drivers icon exist
        cy.get(this.driverRankingWidgetFirst)
            .find(this.driverIcon).should("exist")

        //participant names styles
        cy.get(this.driverRankingWidgetFirst)
            .find(this.participantName)
                .should("have.length",10)
                .and("have.css","position","static")
                .and("have.css","font-weight","700")
                .and("have.css","font-size","12px")
                .and("have.css","color","rgb(0, 0, 0)")

        cy.checkShowAllShowMoreHide(this.driverRankingWidgetFirst,this.majorButtonClass,this.showMoreButton,this.showAllButton,this.participantName,
            this.participantCount,this.participantAfterShowMoreCount,this.participantAfterShowAllount)
    }

    check_all_texts_mobile(){  

        //Driver Ranking header
        cy.get(this.driverRankingWidgetFirst)
            .find(this.driversRankingHeader)
                .should("have.css","position","static")
                .and("have.css","font-weight","700")
                .and("have.css","font-size","12px")
                .and("have.css","color","rgb(0, 0, 0)")

        //drivers header
        cy.get(this.driverRankingWidgetFirst)
            .find(this.driversHeader)
                .should("have.css","position","sticky")
                .and("have.css","font-weight","600")
                .and("have.css","font-size","10px")
                .and("have.css","color","rgb(0, 0, 0)")

        //point header
        cy.get(this.driverRankingWidgetFirst)
            .find(this.pointHeader)
                .should("have.css","position","sticky")
                .and("have.css","font-weight","400")
                .and("have.css","font-size","10px")
                .and("have.css","color","rgb(0, 0, 0)")

        //tournament logo in header
        cy.get(this.driverRankingWidgetFirst)
            .find(this.tournamentLogo).should("exist")

        //drivers icon exist
        cy.get(this.driverRankingWidgetFirst)
            .find(this.driverIcon).should("exist")

        //participant names styles
        cy.get(this.driverRankingWidgetFirst)
            .find(this.participantName)
                .should("have.length",10)
                .and("have.css","position","static")
                .and("have.css","font-weight","700")
                .and("have.css","font-size","12px")
                .and("have.css","color","rgb(0, 0, 0)") 

        cy.checkShowAllShowMoreHide(this.driversRankingMobileFirst,this.majorButtonClass,this.showMoreButton,this.showAllButton,this.participantName,
            this.participantCount,this.participantAfterShowMoreCount,this.participantAfterShowAllount)
    }

    check_dropdowns(){
        //checks the dropdowns
        //check if the selected item from the list in the dropdown is the right one
        for(let i=0; i<2; i++){
            cy.get(this.seasonDropdown).eq(0).click()
            
            cy.get(this.statsDropdownList)
                .find('.wff_data_selector_list_item').eq(i).invoke("text").then((dropdownText)=>{
                    let trimmedText = dropdownText.trim()
                    cy.get('.wff_data_selector_list_item').eq(i).click()
                    cy.get(this.statsSelectedItem)
                        .invoke("text").then((selectedText)=>{
                            let textSelected = selectedText.trim()
                            
                            expect(textSelected).to.contain(trimmedText)
                            cy.get(this.driverRankingWidget).should('exist')
                        })
                    // expect(trimmedText).to.eql(this.selectedOption)
                })
        }

    }

    check_tooltips(){
        //checks the tooltips
        //kampeSpillet
        // cy.get(this.teamSquadWidget).find(this.kampeSpilletHeader).eq(0).trigger("mouseover")
        // cy.get(this.tooltip).should("exist").and("be.visible")
        // //check the text
        // cy.textEqualTo(this.tooltip,this.tooltipTextClass,"Kampe spillet")

        cy.get(this.driverRankingWidget)
            .find(this.tournamentFlag)
            .each((element,index)=>{
                cy.wrap(element).trigger("mouseover");
                cy.get('.wff_tooltip_root').should('exist')
            })

        // cy.get('.wff_points:eq(0)').click()
    }
}  

export class team_rankings_f1_po{
    constructor(){
        
        this.seasonButton = ".esm_livescore_li"
        this.allLeaguesList = '.all-leagues-list'
        this.openedHeader = '.country-leagues-header-container.col-12:eq(0)'
        this.closedHeader = '.country-leagues-header-container.col-12.close-content:eq(0)'
        this.headerCountryName = '.country-name'
        this.headerCountryFlag = '.league-flag'
        this.sportsMenu = '.esc_menu_sports_active_element'
        this.sportOption = '.motorsports'
        this.teamRankingWidget = '.wff_widget.wff_widget_FW7CF0AFCB22BF74ED.wff_widget_wide'
        this.teamRankingMobile = '.wff_widget.wff_widget_FW7CF0AFCB22BF74ED.wff_widget_small'
        this.participantClass = '.wff_participant_name.wff_responsive_text'
        this.teamRankingButton = '.esm_ranking_teams_li'
        this.driversHeader = '.wff_table_header_cell.wff_participant_info.wff_fixed_col'
        this.pointHeader = '.wff_table_header_cell.wff_participant_points.wff_fixed_col'
        this.tournamentLogo = '.wff_flag_and_logo_container'
        this.trackImage = '.wff_track_image_container'
        this.participantName = '.wff_participant_container'
        this.eventKODate = '.wff_event_start_time'
        this.eventKOTime = '.wff_status_value.wff_uppercase_text_transform'
        this.eventRow = '.wff_event_info.wff_event_finished'
        this.driversRankingHeader = '.wff_event_name'
        this.driverIcon = '.wff_icon_container.wff_header_icon_container'
        this.seasonDropdown = '.wff_data_selector_root'
        this.statsDropdownList = '.wff_data_selector_list'
        this.statsSelectedItem = '.wff_data_selector_text'
        this.participantCount = 10
        this.participantAfterShowMoreCount = 20
        this.participantAfterShowAllount = 22
        this.showMoreButton = '.wff_collapsed_arrow_wrapper'
        this.showAllButton = '.wff_show_all_label_wrapper'
        this.majorButtonClass = '.wff_button_wrapper_root.wff_show_more_button_wrapper'
        this.tournamentFlag = '.wff_table_header_cell.wff_participant_event_points'
        this.tooltipText = '.wff_tooltip_root_container'
        this.expectedText = ['Bahrain Grand Prix', 'Saudi Arabia Grand Prix', 'Australian Grand Prix', 
        'Chinese Grand Prix', 'Azerbaijan Grand Prix', 'Miami Grand Prix', 'Emilia Romagna Grand Prix', 'Monaco Grand Prix',
         'Spanish Grand Prix', 'Canadian Grand Prix', 'Austrian Grand Prix', 'British Grand Prix', 'Hungarian Grand Prix',
          'Belgian Grand Prix', 'Dutch Grand Prix', 'Italian Grand Prix', 'Singapore Grand Prix', 'Japanese Grand Prix',
           'Qatar Grand Prix', 'United States Grand Prix', 'Mexican Grand Prix', 'Brazilian Grand Prix', 'Las Vegas Grand Prix', 'Abu Dhabi Grand Prix']
    }

    team_rankings_f1_exists(){
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
        cy.get(this.teamRankingButton)
            .should("exist").click();

        cy.get(this.teamRankingWidget).should('exist')

        //cy.get(this.leagueHeader).should('exist')
    }

    check_all_texts(){
        
       //Driver Ranking header
       cy.get(this.teamRankingWidget)
            .find(this.driversRankingHeader)
                .should("have.css","position","static")
                .and("have.css","font-weight","700")
                .and("have.css","font-size","12px")
                .and("have.css","color","rgb(0, 0, 0)")

        //drivers header
        cy.get(this.teamRankingWidget)
            .find(this.driversHeader)
                .should("have.css","position","sticky")
                .and("have.css","font-weight","600")
                .and("have.css","font-size","10px")
                .and("have.css","color","rgb(0, 0, 0)")

        //point header
        cy.get(this.teamRankingWidget)
            .find(this.pointHeader)
                .should("have.css","position","sticky")
                .and("have.css","font-weight","400")
                .and("have.css","font-size","10px")
                .and("have.css","color","rgb(0, 0, 0)")

        //tournament logo in header
        cy.get(this.teamRankingWidget)
            .find(this.tournamentLogo).should("exist")

        //drivers icon exist
        cy.get(this.teamRankingWidget)
            .find(this.driverIcon).should("exist")

        //participant names styles
        cy.get(this.teamRankingWidget)
            .find(this.participantName)
                .should("have.length",10)
                .and("have.css","position","static")
                .and("have.css","font-weight","700")
                .and("have.css","font-size","12px")
                .and("have.css","color","rgb(0, 0, 0)") 

    }

    check_all_texts_mobile(){  

       //Driver Ranking header
       cy.get(this.teamRankingMobile)
            .find(this.driversRankingHeader)
                .should("have.css","position","static")
                .and("have.css","font-weight","700")
                .and("have.css","font-size","12px")
                .and("have.css","color","rgb(0, 0, 0)")

        //drivers header
        cy.get(this.teamRankingMobile)
            .find(this.driversHeader)
                .should("have.css","position","sticky")
                .and("have.css","font-weight","600")
                .and("have.css","font-size","10px")
                .and("have.css","color","rgb(0, 0, 0)")

        //point header
        cy.get(this.teamRankingMobile)
            .find(this.pointHeader)
                .should("have.css","position","sticky")
                .and("have.css","font-weight","400")
                .and("have.css","font-size","10px")
                .and("have.css","color","rgb(0, 0, 0)")

        //tournament logo in header
        cy.get(this.teamRankingMobile)
            .find(this.tournamentLogo).should("exist")

        //drivers icon exist
        cy.get(this.teamRankingMobile)
            .find(this.driverIcon).should("exist")

        //participant names styles
        cy.get(this.teamRankingMobile)
            .find(this.participantName)
                .should("have.length",10)
                .and("have.css","position","static")
                .and("have.css","font-weight","700")
                .and("have.css","font-size","12px")
                .and("have.css","color","rgb(0, 0, 0)") 
    }

    check_dropdowns(){
        //checks the dropdowns
        //check if the selected item from the list in the dropdown is the right one
        for(let i=0; i<2; i++){
            cy.get(this.seasonDropdown).eq(0).click()
            
            cy.get(this.statsDropdownList)
                .find('.wff_data_selector_list_item').eq(i).invoke("text").then((text)=>{
                    let trimmedText = text.trim()
                    cy.get('.wff_data_selector_list_item').eq(i).click()
                    cy.get(this.statsSelectedItem)
                        .invoke("text").then((text)=>{
                            let textSelected = text.trim()
                            
                            expect(textSelected).to.contain(trimmedText)
                            cy.get(this.teamRankingWidget).should('exist')
                        })
                    // expect(trimmedText).to.eql(this.selectedOption)
                })
        }

    }

    check_tooltips(){
        //checks the tooltips
        //kampeSpillet
        // cy.get(this.teamSquadWidget).find(this.kampeSpilletHeader).eq(0).trigger("mouseover")
        // cy.get(this.tooltip).should("exist").and("be.visible")
        // //check the text
        // cy.textEqualTo(this.tooltip,this.tooltipTextClass,"Kampe spillet")

        cy.get(this.teamRankingWidget)
            .find(this.tournamentFlag)
            .each((element,index)=>{
                cy.wrap(element).trigger("mouseover");
                cy.get('.wff_tooltip_root').should('exist')
            })

    }
} 

export class cycling_rankings_event_po{
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
        this.sportOption = '.tennis'
        this.leagueNum = 0
        this.rankingsWidget = '.wff_widget.wff_widget_FW7D6CD12C59438616.wff_widget_wide'
        this.rankingsMobile = '.wff_widget.wff_widget_FW7D6CD12C59438616.wff_widget_small'
        this.firstTeam = '.wff_table_row_column.wff_standings_team:eq(0)'
        this.positionHeader = '.wff_table_header_cell.wff_participant_info.wff_text_transform_capitalize'
        this.statBoxHeaders = '.wff_table_header_cell.wff_squad_stats_box'
        this.participantClass = '.wff_participant_name.wff_responsive_text'
        this.kampeSpilletHeader = 'div[aria-label="Kampe spillet"]'
        this.alderHeader = 'div[aria-label="Alder"]'
        this.tooltip = ".wff_tooltip_root"
        this.tooltipTextClass = ".wff_tooltip_participant_text"
        this.rankingsButton = '.esm_ranking_li'
        this.ranglisteHeader = '[aria-label="Rangliste"]'
        this.tidHeader = '.wff_table_header_cell.wff_participant_duration'
        this.participantCount = 10
        this.participantAfterShowMoreCount = 20
        this.participantAfterShowAllount = 72
        this.showMoreButton = '.wff_collapsed_arrow_wrapper'
        this.showAllButton = '.wff_show_all_label_wrapper'
        this.searchCountry = '.wff_country_search_bar_button'
        this.firstOption = '.wff_country_list_item:eq(0)'
        this.clearALlButton = '.wff_button_wrapper_root.wff_button_clear_selection'
        this.calendarButton = '.wff_calendar_wrapper'
        this.dateText = '.vc-title'
        this.prevDateCalendar = '.wff_icon_container.icon-previous_arrow_container:eq(1)'
        this.monthToGo = 'juli 2023'
        this.dateWithEvents = '.vc-day.id-2023-07-22.day-22'
        this.dateHeaderText = '.wff_tournament_date'
        this.tournamentStageName = '.wff_event_name_root:eq(1)'

    }

    rankings_exists(){
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
        //go to a date that have the needed events
        cy.calendarGoToCertainMonth(this.calendarButton,this.prevDateCalendar,this.dateText,this.monthToGo)
        cy.get(this.dateWithEvents).click()

        //enter the event
        cy.get(this.tournamentStageName).should("exist").click();

        //go to the rankings tab
        cy.get(this.rankingsButton).should("exist").click();
        //check if the event exists
        cy.get(this.rankingsWidget).should('exist')

        //cy.get(this.leagueHeader).should('exist')
    }

    check_all_texts(){

         //checks the design of the headers
        //Rangliste header
        cy.get(this.ranglisteHeader)
            .should("have.css","position","relative")
            .should("have.css","font-weight","700")
            .and("have.css","font-size","14px")
            .and("have.css","color","rgb(29, 90, 175)")

        //Point header
        cy.get(this.tidHeader)
        .should("have.css","position","relative")
        .should("have.css","font-weight","400")
        .and("have.css","font-size","12px")
        .and("have.css","color","rgb(29, 90, 175)")
     
        // the participants styles and count
        cy.get(this.rankingsWidget)
            .find(this.participantClass)
            .should("have.length",this.participantCount)
            .and("have.css","font-weight","700")
            .and("have.css","font-family",'"Open Sans", sans-serif')
            .and("have.css","font-size","14px")
            .and("have.css","font-style","normal")

        cy.get('.wff_button_wrapper_root.wff_show_more_button_wrapper').find(this.showMoreButton).eq(0).click()

        cy.get(this.rankingsWidget)
            .find(this.participantClass)
            .should("have.length",this.participantAfterShowMoreCount)
            .and("have.css","font-weight","700")
            .and("have.css","font-family",'"Open Sans", sans-serif')
            .and("have.css","font-size","14px")
            .and("have.css","font-style","normal")

        cy.get('.wff_button_wrapper_root.wff_show_more_button_wrapper').find(this.showAllButton).eq(0).click()

        cy.get(this.rankingsWidget)
            .find(this.participantClass)
            .should("have.length",this.participantAfterShowAllount)
            .and("have.css","font-weight","700")
            .and("have.css","font-family",'"Open Sans", sans-serif')
            .and("have.css","font-size","14px")
            .and("have.css","font-style","normal")   

        cy.get('.wff_button_wrapper_root.wff_show_more_button_wrapper').find(this.showAllButton).eq(0).click()

        cy.get(this.rankingsWidget).find(this.participantClass).should("have.length",this.participantCount)
    }

    check_all_texts_mobile(){  
         //checks the design of the headers
        //Rangliste header
        cy.get(this.ranglisteHeader)
            .should("have.css","position","relative")
            .should("have.css","font-weight","700")
            .and("have.css","font-size","14px")
            .and("have.css","color","rgb(29, 90, 175)")

        //Point header
        cy.get(this.tidHeader)
        .should("have.css","position","relative")
        .should("have.css","font-weight","400")
        .and("have.css","font-size","12px")
        .and("have.css","color","rgb(29, 90, 175)")
     
        // the participants styles and count
        cy.get(this.rankingsMobile)
            .find(this.participantClass)
            .should("have.length",this.participantCount)
            .and("have.css","font-weight","700")
            .and("have.css","font-family",'"Open Sans", sans-serif')
            .and("have.css","font-size","14px")
            .and("have.css","font-style","normal")

        cy.get('.wff_button_wrapper_root.wff_show_more_button_wrapper').find(this.showMoreButton).eq(0).click()

        cy.get(this.rankingsMobile)
            .find(this.participantClass)
            .should("have.length",this.participantAfterShowMoreCount)
            .and("have.css","font-weight","700")
            .and("have.css","font-family",'"Open Sans", sans-serif')
            .and("have.css","font-size","14px")
            .and("have.css","font-style","normal")

        cy.get('.wff_button_wrapper_root.wff_show_more_button_wrapper').find(this.showAllButton).eq(0).click()

        cy.get(this.rankingsMobile)
            .find(this.participantClass)
            .should("have.length",this.participantAfterShowAllount)
            .and("have.css","font-weight","700")
            .and("have.css","font-family",'"Open Sans", sans-serif')
            .and("have.css","font-size","14px")
            .and("have.css","font-style","normal")   

        cy.get('.wff_button_wrapper_root.wff_show_more_button_wrapper').find(this.showAllButton).eq(0).click()

        cy.get(this.rankingsMobile)
                .find(this.participantClass)
                .should("have.length",this.participantCount)  
        
    }

    check_search_country_dropdown(){
        //checks the search country dropdown
        //check if the selected item from the list in the dropdown is the right one
        cy.get(this.searchCountry).eq(0).click()
        cy.get(this.firstOption).click()
        

        let logoSrc;
        let selectedCountryLogoSrc
        cy.get(this.rankingsWidget).eq(0).within(()=>{
            cy.get('.wff_flag_and_logo_container img')
            .invoke('attr', 'src')
            .then((srcFirst) => {
                logoSrc = srcFirst;
                
                cy.get('.wff_country_flag_and_name_container img')
                .invoke('attr', 'src')
                .then((srcSelected) => {
                    selectedCountryLogoSrc = srcSelected;
                    
                    expect(selectedCountryLogoSrc).to.eql(logoSrc)
                });
            });
            
            cy.get(this.clearALlButton).click()
            cy.get('.wff_selected_countries').should('not.exist')

            let typeCountry = 'Italien'
            cy.get('input.wff_country_search_bar').clear().type(typeCountry);
            cy.get(this.firstOption)
            .invoke('text')
            .then((text) => {
                const filteredText = text.trim()
                const $accountBox = Cypress.$('.wff_country_list_item');
                expect($accountBox.length).to.eql(1)
                expect(filteredText).to.eql(typeCountry);
            })
        })
        
        

    }
}  