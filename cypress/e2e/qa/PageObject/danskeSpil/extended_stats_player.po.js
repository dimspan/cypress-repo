
export class league_page_extended_stats_player_po{
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
        this.headerClass = '.wff_table_header_cell.wff_standings_stats_box'
        this.spillerHeader = '.wff_table_header_cell_wrapper'
        this.extStatsWidget = '.wff_widget.wff_widget_FWA768111A644951B0.wff_widget_wide'
        this.extStatsWidgetMobile = '.wff_widget.wff_widget_FWA768111A644951B0.wff_widget_small'
        this.statistikTab = '.esm_spiller_statistik_li'
        this.statsDropdownSelectedItem = '.wff_data_selector_list_item.wff_selected_item'
        this.statsDropdown = '.wff_data_selector_root.wff_ext_stats_category_selector'
        this.statsDropdownList = '.wff_data_selector_list'
        this.participantClass = '.wff_participant_name.wff_responsive_text'
        this.particiapantTeam = '.wff_participant_team_name'
        this.showAllButton = '.wff_show_all_label_wrapper'
        this.showMoreButton = '.wff_exapnd_arrow_wrapper'
        this.tooltip = ".wff_tooltip_root"
        this.statsSelectedItem = '.wff_data_selector_container:eq(0)'
        this.seasonSelectedItem = '.wff_data_selector_container:eq(1)'
        this.extStatsWidgetHeader = '.wff_extended_stats_header.wff_team_extended_stats_header_soccer'
        this.seasonDropdown = '.wff_data_selector_root.wff_ext_stats_tournament_selector'
        this.searchCountry = '.wff_country_search_bar_button'
        this.firstOption = '.wff_country_list_item:eq(0)'
        this.clearALlButton = '.wff_clear_button_wrapper'
        this.selectedItemInDropdownOverview = 'Generelt'
        this.holdHeaderText = 'Spiller'
        this.totalShotsText = 'K'
        this.totalShotsOnText = 'KS'
        this.totalShotsOffText = 'TM'
        this.woodworksText = 'TA'
        this.totalShotsOnPerGoalText = 'TUD'
        this.totalShotsOnPerGameText = 'TIND'
        this.totalShotsOffPerGameText = 'MS'
        this.penaltyMissedText = 'LDV'
        this.blockedShotsText = 'LDT'
        this.extStatsWidgetHeader = '.wff_extended_stats_generic_root.wff_extended_stats_generic_soccer.wff_table_scrollable_container'
        this.tooltipTextsArray = ["Kampe spillet", "Kampe startet", "Totale mål", "Totale assist", "Totale udskiftninger", "Totale indskiftninger", "Minutter spillet", "Luftdueller vundet", "Luftdueller tabt"]
        this.headerTextsArray = ["Spiller", "K", "KS", "TM", "TA", "TUD", "TIND", "MS", "LDV", "LDT"]
        this.participantCount = 10
        this.participantAfterClickCount = 20

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
                //checks the design of the headers}
                //hold
                cy.get('.wff_table_header_cell').eq(1).find(this.spillerHeader)
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
                    .find(this.participantClass).should("have.length",this.participantCount)
                    .and("have.css","font-size","14px")
                    .and("have.css","font-style","normal")

                cy.get(this.extStatsWidget)
                    .find(this.particiapantTeam).should("have.length",this.participantCount)
                    // .and("have.css","font-size","12px")
                    .and("have.css","font-style","normal")

                cy.get('.wff_show_all_button_container').find(this.showMoreButton).eq(0).click()

                cy.get(this.extStatsWidget)
                    .find(this.participantClass).should("have.length",this.participantAfterClickCount)
                    .and("have.css","font-size","14px")
                    .and("have.css","font-style","normal")

                cy.get(this.extStatsWidget)
                    .find(this.particiapantTeam).should("have.length",this.participantAfterClickCount)
                    //.and("have.css","font-size","12px")
                    .and("have.css","font-style","normal")
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
                cy.get(this.extStatsWidgetMobile).should("exist").and("be.visible")
            
                //checks the design of the headers
                //hold
                cy.get('.wff_table_header_cell').eq(1).find(this.spillerHeader)
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
                cy.get(this.statsDropdown).eq(0).click();

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
                    .find(this.participantClass).should("have.length",this.participantAfterClickCount)
                    .and("have.css","font-size","14px")
                    .and("have.css","font-style","normal")

                cy.get(this.extStatsWidgetMobile)
                    .find(this.particiapantTeam).should("have.length",this.participantAfterClickCount)
                    //.and("have.css","font-size","12px")
                    .and("have.css","font-style","normal")
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
                for(let i=0; i<2; i++){
                    cy.get(this.extStatsWidget).find(this.statsDropdown).eq(0).click()
                    
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
                cy.get(this.extStatsWidget).find(this.extStatsWidgetHeader).eq(0).click()
                
                for(let i=0; i<3; i++){
                    cy.get(this.extStatsWidget).find(this.seasonDropdown).eq(0).click()
                    
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

    check_search_country_dropdown(){
        cy.wait(2000)

        cy.wrap(null).then(() => {
            const $accountBox = Cypress.$(".wff_no_data_available_container.wff_no_data_alt");
            console.log($accountBox)
    
            if($accountBox.length > 0){
                console.log("Ingen data tilgængelig")
            }
            else{
                //checks the search country dropdown
                //check if the selected item from the list in the dropdown is the right one
                cy.get(this.searchCountry).eq(0).click()
                cy.get(this.firstOption).click()
                

                let logoSrc;
                let selectedCountryLogoSrc
                cy.get(this.extStatsWidget).eq(0).within(()=>{
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

                    let typeCountry = 'England'
                    cy.get('input.wff_country_search_bar').clear().type(typeCountry);
                    cy.get(this.firstOption)
                    .invoke('text')
                    .then((text) => {
                        const $accountBox = Cypress.$('.wff_country_list_item');
                        expect($accountBox.length).to.eql(1)
                        expect(text).to.eql(typeCountry);
                    })
                })
            }
        })
        
    }
} 

export class event_page_extended_stats_player_po{
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
        this.headerClass = '.wff_table_header_cell.wff_standings_stats_box'
        this.spillerHeader = '.wff_table_header_cell_wrapper'
        this.extStatsWidget = '.wff_widget.wff_widget_FWA768111A644951B0.wff_widget_wide'
        this.extStatsWidgetMobile = '.wff_widget.wff_widget_FWA768111A644951B0.wff_widget_small'
        this.statistikTab = '.esm_spiller_statistik_li'
        this.statsDropdownSelectedItem = '.wff_data_selector_list_item.wff_selected_item'
        this.statsDropdown = '.wff_data_selector_root.wff_ext_stats_category_selector'
        this.statsDropdownList = '.wff_data_selector_list'
        this.participantClass = '.wff_participant_name.wff_responsive_text'
        this.particiapantTeam = '.wff_participant_team_name'
        this.showAllButton = '.wff_show_all_label_wrapper'
        this.showMoreButton = '.wff_exapnd_arrow_wrapper'
        this.tooltip = ".wff_tooltip_root"
        this.statsSelectedItem = '.wff_data_selector_container:eq(0)'
        this.seasonSelectedItem = '.wff_data_selector_container:eq(1)'
        this.extStatsWidgetHeader = '.wff_extended_stats_header.wff_team_extended_stats_header_soccer'
        this.seasonDropdown = '.wff_data_selector_root.wff_ext_stats_tournament_selector'
        this.searchCountry = '.wff_country_search_bar_button'
        this.firstOption = '.wff_country_list_item:eq(0)'
        this.clearALlButton = '.wff_clear_button_wrapper'
        this.selectedItemInDropdownOverview = 'Generelt'
        this.holdHeaderText = 'Spiller'
        this.totalShotsText = 'K'
        this.totalShotsOnText = 'KS'
        this.totalShotsOffText = 'TM'
        this.woodworksText = 'TA'
        this.totalShotsOnPerGoalText = 'TUD'
        this.totalShotsOnPerGameText = 'TIND'
        this.totalShotsOffPerGameText = 'MS'
        this.penaltyMissedText = 'LDV'
        this.blockedShotsText = 'LDT'
        this.extStatsWidgetHeader = '.wff_extended_stats_generic_root.wff_extended_stats_generic_soccer.wff_table_scrollable_container'
        this.tooltipTextsArray = ["Kampe spillet", "Kampe startet", "Totale mål", "Totale assist", "Totale udskiftninger", "Totale indskiftninger", "Minutter spillet", "Luftdueller vundet", "Luftdueller tabt"]
        this.headerTextsArray = ["Spiller", "K", "KS", "TM", "TA", "TUD", "TIND", "MS", "LDV", "LDT"]
        this.participantCount = 10
        this.participantAfterClickCount = 20

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
        
         //checks the design of the headers}
         //hold
         cy.get('.wff_table_header_cell').eq(1).find(this.spillerHeader)
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
            .find(this.participantClass).should("have.length",this.participantCount)
            .and("have.css","font-size","14px")
            .and("have.css","font-style","normal")

        cy.get(this.extStatsWidget)
            .find(this.particiapantTeam).should("have.length",this.participantCount)
            // .and("have.css","font-size","12px")
            .and("have.css","font-style","normal")

        cy.get('.wff_show_all_button_container').find(this.showMoreButton).eq(0).click()

        cy.get(this.extStatsWidget)
            .find(this.participantClass).should("have.length",this.participantAfterClickCount)
            .and("have.css","font-size","14px")
            .and("have.css","font-style","normal")

        cy.get(this.extStatsWidget)
            .find(this.particiapantTeam).should("have.length",this.participantAfterClickCount)
            //.and("have.css","font-size","12px")
            .and("have.css","font-style","normal")
           
    }

    check_all_texts_mobile(){  
        //check if the widget exists
        cy.get(this.extStatsWidgetMobile).should("exist").and("be.visible")
       
        //checks the design of the headers
        //hold
        cy.get('.wff_table_header_cell').eq(1).find(this.spillerHeader)
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
        cy.get(this.statsDropdown).eq(0).click();

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
            .find(this.participantClass).should("have.length",this.participantAfterClickCount)
            .and("have.css","font-size","14px")
            .and("have.css","font-style","normal")

        cy.get(this.extStatsWidgetMobile)
            .find(this.particiapantTeam).should("have.length",this.participantAfterClickCount)
            //.and("have.css","font-size","12px")
            .and("have.css","font-style","normal")
                
        
    }

    check_tooltips(){
        //checks the tooltips
        
        cy.tooltipTextWithArray(this.extStatsWidget,'.wff_label_text.wff_has_tooltip',this.tooltip,this.tooltipTextsArray)

    }

    check_dropdowns(){
        //checks the dropdowns
        //check if the selected item from the list in the dropdown is the right one
        for(let i=0; i<2; i++){
            cy.get(this.extStatsWidget).find(this.statsDropdown).eq(0).click()
            
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
        cy.get(this.extStatsWidget).find(this.extStatsWidgetHeader).eq(0).click()
        
        // for(let i=0; i<3; i++){
        //     cy.get(this.extStatsWidget).find(this.seasonDropdown).eq(0).click()
            
        //     cy.get(this.statsDropdownList)
        //         .find('.wff_data_selector_list_item').eq(i).invoke("text").then((text)=>{
        //             let trimmedText = text.trim()
        //             cy.get('.wff_data_selector_list_item').eq(i).click()
        //             cy.wait(2000)
        //             cy.get(this.seasonSelectedItem)
        //                 .invoke("text").then((text)=>{
        //                     let textSelected = text.trim()
                            
        //                     expect(trimmedText).to.eql(textSelected)
        //                     cy.get('.wff_extended_stats_generic_root.wff_extended_stats_generic_soccer.wff_table_scrollable_container').should('exist')
        //                 })
        //         })
        // }
    }

    check_search_country_dropdown(){
        //checks the search country dropdown
        //check if the selected item from the list in the dropdown is the right one
        cy.get(this.searchCountry).eq(0).click()
        cy.get(this.firstOption).click()
        

        let logoSrc;
        let selectedCountryLogoSrc
        cy.get(this.extStatsWidget).eq(0).within(()=>{
            cy.get('.wff_flag_and_logo_container img')
            .invoke('attr', 'src')
            .then((srcFirst) => {
                logoSrc = srcFirst;
                
                cy.get('.wff_selected_countries_list_item_container img')
                .invoke('attr', 'src')
                .then((srcSelected) => {
                    selectedCountryLogoSrc = srcSelected;
                    
                    expect(selectedCountryLogoSrc).to.eql(logoSrc)
                });
            });
            
            cy.get(this.clearALlButton).click()
            cy.get('.wff_selected_countries').should('not.exist')

            let typeCountry = 'Portugal'
            cy.get('input.wff_country_search_bar').clear().type(typeCountry);
            cy.get(this.firstOption)
            .invoke('text')
            .then((text) => {
                const $accountBox = Cypress.$('.wff_country_list_item');
                expect($accountBox.length).to.eql(1)
                expect(text).to.eql(typeCountry);
            })
        })
        
        

    }
}