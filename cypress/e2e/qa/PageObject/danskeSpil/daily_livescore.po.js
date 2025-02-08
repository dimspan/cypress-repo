export class daily_livescore_po{
    constructor(){
        this.league_name = ".league-name"
        this.leagues_item = ".leagues-item"
        this.forrigeKampHeader = ".esmx-title.es_prev_matches.es_widget_container.esm_comp.esm_overview-title"
        this.kommendeKampeHeader = ".esmx-title.es_next_matches.es_widget_container.esm_comp.esm_overview-title"
        this.stillingHeader = ".esmx-title.esm_comp.es_widget_container.esm_overview-title:eq(2)"
        this.topscorereHeader = ".esmx-title.esm_comp.es_widget_container.esm_overview-title:eq(3)"
        this.livescoreWidgetKampeTab = ".wff_widget.wff_widget_FW493001AA07CF0B12.wff_widget_small:eq(0)"
        this.nextMatchesKampeTab = ".wff_widget.wff_widget_FW493001AA07CF0B12.wff_widget_small:eq(1)"
        this.livescoreWidget = ".wff_widget.wff_widget_FWD8468AA86333CF1B.wff_widget_wide"
        this.datesHeaders = ".wff_grouping_header_value.wff_capitalize_text_transform"
        this.livescoreWidgetContainer = ".es_prev_matches.es_widget_container.esm_comp.esm_overview:eq(0)"
        this.nextMatchesContainer = ".es_next_matches.es_widget_container.esm_comp.esm_overview:eq(0)"
        this.teamNames = ".wff_participant_name.wff_responsive_text"
        this.eventStatusWrapper = ".wff_event_name_time_status_wrapper"
        this.inProgressEventsStatus = '.wff_event_row_wrapper.wff_single.wff_event_status_inprogress'
        this.finishedEventsStatus = '.wff_event_row_wrapper.wff_single.wff_event_status_finished'
        this.eventGroupingHeader =".wff_event_grouping_header_component:eq(0)"
        this.nextEventGroupingHeader = ".wff_event_grouping_header_component:eq(2)"
        this.expanded_arrow = ".wff_icon_container.icon-expanded_arrow_container"
        this.collapsed_arrow = ".icon-collapsed_arrow:eq(0)"
        this.eventWrapper = ".wff_event_row_wrapper_root:eq(0)"
        this.livescoreWidgetMobile =".wff_widget.wff_widget_FW25A64EE830B1F6A0.wff_widget_small:eq(0)"
        this.nextMatches = ".wff_widget.wff_widget_FWB7D5DBCF7C497D92.wff_widget_small:eq(0)"
        this.livescoreMobile = ".wff_widget.wff_widget_FWD8468AA86333CF1B.wff_widget_small"   
        this.headers = ".wff_event_grouping_header_component"
        this.headersTransform = ".wff_grouping_header_value.wff_capitalize_text_transform"
        this.eventRowWrapper = ".wff_event_row_wrapper.wff_single"
        this.ls_lastmatch_container_teampage = ".es_prev_matches_team_page.esm_comp.esm_overview.es_widget_container"
        this.ls_nextmatch_container_teampage = ".col-12.col-sm-6.col-md-6.col-lg-6.plm-cell.escc-overview.es_widget_container_right.overview.es_widget_container_right"
        this.lastmatch_kampe_teampage = ".wff_widget.wff_widget_FW493001AA07CF0B12.wff_widget_small"
        this.nextmatch_kampe_teampage = ".wff_widget.wff_widget_FWB7D5DBCF7C497D92.wff_widget_small"
        this.acceptButton = "#ensSaveAll"
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
        this.noDataMessage = '.wff_no_data_available_container.wff_no_data_default'
        this.statusTooltip = '.wff_multiple_content_item'
        this.teamSquadWidget = '.wff_widget.wff_widget_FW4A1CBB0DB44547A0.wff_widget_wide'
        this.liveEventsTab = '.wff_filter_button.wff_filter_live.wff_has_live'
        this.headerRow = '.wff_header_root'
        this.finishedEventsTab = '.wff_filter_button.wff_filter_finished'
        this.finishedEventsTabNotClickable = '.wff_filter_button.wff_filter_finished.wff_disable_click'
        this.navigationBar = '.wff_filter_header'
        this.liveEventsTabNotClickable = '.wff_filter_button.wff_filter_live.wff_disable_click'
        this.contentHeaderTooltip = '.wff_multiple_content_main_header'
        this.statusInTooltip = '.wff_multiple_content_container'
        this.counter = 5
    }

daily_livescore_exists(){
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
           cy.get('.esc_menu_sports.esc_custom_menu.esc_border_menu').find(this.sportOption).click();
           cy.get(this.livescoreButton)
           .should("exist").click();
           cy.get(this.livescoreWidget)
           .should("exist")
}


livescore_all_matches(){

        cy.wait(2000)
        // const $accountBox = Cypress.$('.wff_no_data_available_container.wff_no_data_default');
        // console.log($accountBox)
        
        cy.wrap(null).then(() => {

            const $accountBox = Cypress.$(".wff_no_data_available_container.wff_no_data_default");
    
            if($accountBox.length > 0){
                console.log("Ingen begivenheder på den valgte dato")
            }
            else{
                // cy.get('.wff_no_data_available_container.wff_no_data_default').should('exist').then(($el) =>{
                //console.log($el.length)
                    //     if($el.length > 0){
                    //     cy.get(this.noDataMessage)
                    //     .should('exist')
                    // }
                    // else{
                                    //livescore
                                    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
                                    Cypress.on('uncaught:exception', (err) => {
                                        /* returning false here prevents Cypress from failing the test */
                                        if (resizeObserverLoopErrRe.test(err.message)) {
                                            return false
                                        }
                                    })
                        
        
                            cy.get(this.eventStatusWrapper).eq(0).click()
                            cy.get(this.statusTooltip).should('exist')
                            cy.get(this.contentHeaderTooltip)
                                .invoke("text").then((text)=>{
                                    let trimmed_text = text.trim()
                                    cy.expect(trimmed_text).to.match(/^\d{4}-\d{2}-\d{2} - \d{2}:\d{2}$/)
                                })
        
                            cy.get(this.statusInTooltip).should('not.be.empty')
                            cy.get(this.headerRow).click()
                            
                            //console.log(eventStatusWrapper)
                            for(let i=0; i<this.counter; i++){
                                cy.get(this.livescoreWidget)
                                .find(this.eventStatusWrapper).eq(i).invoke("text").then((text)=>{
                                        const filteredText = text.trim()
                                        //    let statusAndTournament = filteredText.split("\n")
                                        //cy.scrollTo('bottom')
                                        //cy.scrollToBottomWithLazyLoading();
                                        // const lastElement = document.get(".wff_event_name_time_status_wrapper").last();
                                        // lastElement.scrollIntoView();
                                        
                                        if(filteredText === "SLUT" || filteredText === "SES" || filteredText === "SET" || filteredText === "AFL"){
                                            
                                            
                                            expect(this.filteredText).to.match(/^[a-zA-Z]+$/)
                                        }
                                        else{
                                            //expect(filteredText).to.match(/\d{2}:\d{2}/)
                                            //console.log('Filtered Text:', element);
                                            
                                            cy.get('.wff_status_value.wff_capitalize_text_transform').eq(i).then(($element) => {
                                                
                                                const elementText = $element.text().trim();
                                                //console.log(elementText)
                                                const regexPatterns = [
                                                /^\d{2}:\d{2}$/,          // 17:00 - not started event - soccer
                                                /\d+'(\s*\+\s*\d+)?/,    // 90' + 1' - soccer
                                                /\d{1,2}'/,              // 77'      - soccer
                                                /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/,
                                                /^.{3} \d$/,               // "Set 3" - tennis
                                                /[A-Za-z]+/               // HL - soccer, basketball ,etc
                                                // Add more regex patterns here if needed
                                                ];
        
                                                const matchesPattern = regexPatterns.some((pattern) => pattern.test(elementText));
                                                //console.log(matchesPattern)
                                                expect(matchesPattern).to.be.true;
                                            
                                            });
                                        }
                                            
                                    })
                            }   
                            cy.get('.wff_status_value.wff_capitalize_text_transform')
                                .should("have.css","font-family",'"Open Sans", sans-serif')
                                    .and("have.css","margin-right","0px")
                                    // .and("have.css","position","absolute")
                                    .and("have.css","position","static")
                                    // .and("have.css","left","0px") 
                                    .and("have.css","left","auto")         
                                
                                // //check team names
                            cy.get(this.livescoreWidget).find(this.teamNames)
                                    .should("have.css","font-size","14px")
                                    .and("have.css","font-style","normal")
                                    .and("have.css","color","rgb(0, 0, 0)")
                                
                                //when header is collapsed the events should not exist
                            cy.get(this.eventGroupingHeader).click()
                            cy.get(this.eventGroupingHeader)
                                .find(this.eventWrapper).should("not.exist")
                            cy.get(this.eventGroupingHeader).click()
                                //check the headers 
                            cy.get(this.livescoreWidget).find(this.headersTransform)
                                .should("have.css","font-size","14px")
        
                        
            }})

}

livescore_finished_matches(){

    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
       Cypress.on('uncaught:exception', (err) => {
           /* returning false here prevents Cypress from failing the test */
            if (resizeObserverLoopErrRe.test(err.message)) {
                return false
            }
        })

        cy.wrap(null).then(() => {

            // const $accountBox = Cypress.$(".wff_no_data_available_container.wff_no_data_default");
        
                cy.wait(2000)
                const $accountBox = Cypress.$('.wff_filter_button.wff_filter_finished.wff_disable_click');
                console.log($accountBox)
            
                if ($accountBox.length < 1) {
               
                    cy.get(this.finishedEventsTab).click();

                    cy.get(this.finishedEventsStatus)
                        .find(this.eventStatusWrapper).eq(0).click()
                    cy.get(this.statusTooltip).should('exist')
                    cy.get(this.contentHeaderTooltip)
                        .invoke("text").then((text)=>{
                            let trimmed_text = text.trim()
                            cy.expect(trimmed_text).to.match(/^\d{4}-\d{2}-\d{2} - \d{2}:\d{2}$/)
                        })
                    cy.get(this.statusInTooltip).should('not.be.empty')
                    cy.get(this.headerRow).click()

                    for(let i=0; i<this.counter; i++){
                        cy.get(this.livescoreWidget)
                        .find(this.finishedEventsStatus)
                        .find(this.eventStatusWrapper).eq(i).invoke("text").then((text)=>{
                            const filteredText = text.trim()
                            //    let statusAndTournament = filteredText.split("\n")
                            //cy.scrollTo('bottom')
                            //cy.scrollToBottomWithLazyLoading();
                            // const lastElement = document.get(".wff_event_name_time_status_wrapper").last();
                            // lastElement.scrollIntoView();
                            
                            expect(filteredText).to.match(/^[a-zA-Z]+$/)
                        })

                    }    

                        cy.get(this.finishedEventsStatus)
                            .find(this.eventStatusWrapper)
                            .should("have.css","font-family",'"Open Sans", sans-serif')
                            .and("have.css","margin-right","0px")
                            // .and("have.css","position","absolute")
                            .and("have.css","position","static")
                            // .and("have.css","left","0px") 
                            .and("have.css","left","auto")
                            .and("have.css","color","rgb(0, 0, 0)")         
                    
                        //check team names
                        cy.get(this.livescoreWidget)
                        .find(this.teamNames)
                            .should("have.css","font-size","14px")
                            .and("have.css","font-style","normal")
                            .and("have.css","color","rgb(0, 0, 0)")
                        
                        //when header is collapsed the events should not exist
                        cy.get(this.eventGroupingHeader).click()
                        cy.get(this.eventGroupingHeader)
                        .find(this.eventWrapper).should("not.exist")
                        cy.get(this.eventGroupingHeader).click()
                        //check the headers 
                        cy.get(this.livescoreWidget)
                        .find(this.headersTransform)
                            .should("have.css","font-size","14px")
                            
                        
                    
                };})

}
        
livescore_live_matches(){
                        //livescore
                    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
                    Cypress.on('uncaught:exception', (err) => {
                        /* returning false here prevents Cypress from failing the test */
                        if (resizeObserverLoopErrRe.test(err.message)) {
                            return false
                        }
                    })
                    
            cy.wrap(null).then(() => {

                const $accountBox = Cypress.$('.wff_filter_button.wff_filter_live.wff_has_live');
                console.log($accountBox)
            
                if ($accountBox.length > 0) {
                    cy.get(this.liveEventsTab)
                    .invoke('text') // Get the text within the <span> element
                    .then((text) => {
                        const locatorMatch = text.match(/\((\d+)\)/); // Use a regular expression to extract "(7)"
                        if (locatorMatch) {
                            const locatorString = locatorMatch[1];
                            const locatorNumber = parseInt(locatorString, 10); 

                            cy.get(this.liveEventsTabNotClickable).should('not.exist').then(() => {
                                if(locatorNumber > 0){
                                    cy.get(this.liveEventsTab).click();

                                    cy.get(this.eventStatusWrapper).find('.wff_status_value.wff_status_inprogress.wff_capitalize_text_transform').eq(0).click()
                                    cy.get(this.statusTooltip).should('exist')
                                    cy.get(this.contentHeaderTooltip)
                                        .invoke("text").then((text)=>{
                                            let trimmed_text = text.trim()
                                            cy.expect(trimmed_text).to.match(/^\d{4}-\d{2}-\d{2} - \d{2}:\d{2}$/)
                                        })
                                    cy.get(this.statusInTooltip).should('not.be.empty')
                                    cy.get(this.headerRow).click()
                                    
                                    for(let i=0; i<this.counter; i++){
                                        cy.get(this.livescoreWidget)
                                        .find(this.inProgressEventsStatus)
                                        .find(this.eventStatusWrapper).eq(i).invoke("text").then((text)=>{
                                                const filteredText = text.trim()
                                                //    let statusAndTournament = filteredText.split("\n")
                                                //cy.scrollTo('bottom')
                                                //cy.scrollToBottomWithLazyLoading();
                                                // const lastElement = document.get(".wff_event_name_time_status_wrapper").last();
                                                // lastElement.scrollIntoView();
                                                
                                                
                                                //expect(filteredText).to.match(/\d{2}:\d{2}/)
                                                //console.log('Filtered Text:', element);
                                                const regexPatterns = [
                                                    /^\d{2}:\d{2}$/,          // 17:00 - not started event - soccer
                                                    /\d+'(\s*\+\s*\d+)?/,    // 90' + 1' - soccer
                                                    /\d{1,2}/,               // 77'      - soccer
                                                    /\dP\s-\s[0-9]+\s'/,      // 2P - 2' - ice hockey, basketball, etc.
                                                    /^.{3} \d$/,              // "Set 3" - tennis
                                                    /[A-Za-z]+/               // HL - soccer, basketball ,etc
                                                    // Add more regex patterns here if needed
                                                ];

                                                const matchesPattern = regexPatterns.some((pattern) => pattern.test(filteredText));

                                                expect(matchesPattern).to.be.true;
                                                
                                            })
                                    }
                                            cy.get(this.inProgressEventsStatus)
                                                .find(this.eventStatusWrapper)
                                                .should("have.css","font-family",'"Open Sans", sans-serif')
                                                .and("have.css","margin-right","0px")
                                                // .and("have.css","position","absolute")
                                                .and("have.css","position","static")
                                                // .and("have.css","left","0px") 
                                                .and("have.css","left","auto")
                                                //.and("have.css","color","rgb(40, 163, 72)")         
                                        
                                        //check team names
                                        cy.get(this.livescoreWidget)
                                        .find(this.teamNames)
                                        .should("have.css","font-size","14px")
                                            .and("have.css","font-style","normal")
                                            .and("have.css","color","rgb(0, 0, 0)")
                                        
                                        //when header is collapsed the events should not exist
                                        cy.get(this.eventGroupingHeader).click()
                                        cy.get(this.eventGroupingHeader)
                                        .find(this.eventWrapper).should("not.exist")
                                        cy.get(this.eventGroupingHeader).click()
                                        //check the headers 
                                        cy.get(this.livescoreWidget)
                                        .find(this.headersTransform)
                                        .each((element,index)=>{
                                            cy.wrap(element).should("have.css","font-size","14px")
                                            
                                        }) 
                                    
                                }
                            })
                        
                            console.log(locatorNumber); // Log the locator value

                        } else {
                            cy.log('Locator not found');
                        }
                    });
                }})
}

livescore_all_matches_mobile(){
    cy.wait(2000)
    const $accountBox = Cypress.$('.wff_no_data_available_container.wff_no_data_default');
    //console.log($accountBox)
    cy.wrap(null).then(() => {

        if($accountBox.length > 0){
            cy.get(this.noDataMessage)
            .should('exist')
        }
        else{
            //livescore Kommende kamp
            const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
                    Cypress.on('uncaught:exception', (err) => {
                        /* returning false here prevents Cypress from failing the test */
                        if (resizeObserverLoopErrRe.test(err.message)) {
                            return false
                        }
                    })
            let counter = ""
            cy.get(this.livescoreMobile)
            .should("exist")

            for(let i=0; i<this.counter; i++){
                cy.get(this.livescoreMobile)
                .find(this.eventStatusWrapper).eq(i).invoke("text").then((text)=>{
                    const filteredText = text.trim()
                    //    let statusAndTournament = filteredText.split("\n")
                    //cy.scrollTo('bottom')
                    //cy.scrollToBottomWithLazyLoading();
                    // const lastElement = document.get(".wff_event_name_time_status_wrapper").last();
                    // lastElement.scrollIntoView();
                    
                    

                    if(filteredText === "SLUT" || filteredText === "SES" || filteredText === "SET"){
                        
                        expect(filteredText).to.match(/^[a-zA-Z]+$/)
                    }
                    else{
                        //expect(filteredText).to.match(/\d{2}:\d{2}/)
                        //console.log('Filtered Text:', element);
                        //cy.get(element).should('exist')
                        cy.get('.wff_status_value.wff_capitalize_text_transform')
                        .should(($element) => {
                            // const elementText = $element.text().trim();
                            // console.log('Text content:', elementText);
                            // const regexPattern = /^[\d\s]*:\s*[\d\s]*$/;
                            // const matchesPattern = regexPattern.test(elementText);
                            // console.log('Matches pattern:', matchesPattern);
                            // expect(matchesPattern).to.be.true;

                            const elementText = $element.text().trim();
                            const regexPatterns = [
                            /^\d{2}:\d{2}$/,          // First regex pattern
                            /\d+'(\s*\+\s*\d+)?/,    // Second regex pattern
                            /\d{1,2}'/               // Third regex pattern
                            // Add more regex patterns here if needed
                            ];

                            const matchesPattern = regexPatterns.some((pattern) => pattern.test(elementText));

                            // expect(matchesPattern).to.be.true;
                        
                        });
                    }
                        
                })

                cy.get(this.eventStatusWrapper).eq(i).should("have.css","font-family",'"Open Sans", sans-serif')
                .and("have.css","margin-right","0px")
                // .and("have.css","position","absolute")
                .and("have.css","position","static")
                // .and("have.css","left","0px") 
                .and("have.css","left","auto")         
            }
            //team names
            cy.get(this.livescoreMobile)
            .find(this.teamNames)
            .each((element,index)=>{
                cy.wrap(element).should("have.css","font-size","14px")
                .and("have.css","font-style","normal")
                .and("have.css","color","rgb(0, 0, 0)")
            })
            //when header is collapsed the events should not exist
            cy.get(this.eventGroupingHeader).click()
            cy.get(this.eventGroupingHeader)
            .find(this.eventWrapper).should("not.exist")
            cy.get(this.eventGroupingHeader).click()
            //check the headers 
            cy.get(this.livescoreMobile)
            .find(this.headersTransform)
            .each((element,index)=>{
                cy.wrap(element).should("have.css","font-size","14px")
                
            }) 
        }
    })    
}

visit_site_accept_cookies(){
    cy.get(this.acceptButton).click();
           
}

checkIfTeamNameHasLink(){
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
    cy.get('.esc_menu_sports.esc_custom_menu.esc_border_menu').find(this.sportOption).click();
    cy.get(this.livescoreButton)
        .should("exist").click();
    cy.get(this.livescoreWidget)
        .should("exist")

    cy.get(this.teamNames).eq(0).click();

    cy.get(this.teamSquadWidget).should('exist')
}
}

export class cycling_event_results_livescore_po{
    constructor(){
        this.livescoreWidget = ".wff_widget.wff_widget_FW0649E7F92C113B07.wff_widget_wide"
        this.livescoreWidgetMobile =".wff_widget.wff_widget_FW0649E7F92C113B07.wff_widget_small"
        this.eventResultsWidget = ".wff_widget.wff_widget_FW0649E7F92C113B07.wff_widget_wide:eq(2)"
        this.eventResultsMobile =".wff_widget.wff_widget_FW0649E7F92C113B07.wff_widget_small:eq(2)"
        this.datesHeaders = ".wff_grouping_header_value.wff_capitalize_text_transform"
        this.inProgressEventsStatus = '.wff_event_row_wrapper.wff_single.wff_event_status_inprogress'
        this.finishedEventsStatus = '.wff_event_row_wrapper.wff_single.wff_event_status_finished'
        this.expanded_arrow = ".wff_icon_container.icon-expanded_arrow_container"
        this.collapsed_arrow = ".icon-collapsed_arrow:eq(0)"
        this.headers = ".wff_event_grouping_header_component"
        this.headersTransform = ".wff_grouping_header_value.wff_capitalize_text_transform"
        this.eventRowWrapper = ".wff_event_row_wrapper.wff_single"
        this.livescoreButton = ".esm_livescore_li"
        this.sportsMenu = '.esc_menu_sports_active_element'
        this.sportOption = '.cycling'
        this.noDataMessage = '.wff_no_data_available_container.wff_no_data_default'
        this.statusTooltip = '.wff_multiple_content_item'
        this.teamSquadWidget = '.wff_widget.wff_widget_FW4A1CBB0DB44547A0.wff_widget_wide'
        this.liveEventsTab = '.wff_filter_button.wff_filter_live.wff_has_live'
        this.headerRow = '.wff_header_root'
        this.finishedEventsTab = '.wff_filter_button.wff_filter_finished'
        this.finishedEventsTabNotClickable = '.wff_filter_button.wff_filter_finished.wff_disable_click'
        this.navigationBar = '.wff_filter_header'
        this.liveEventsTabNotClickable = '.wff_filter_button.wff_filter_live.wff_disable_click'
        this.contentHeaderTooltip = '.wff_multiple_content_main_header'
        this.statusInTooltip = '.wff_multiple_content_container'
        this.counter = 5
        this.calendarButton = '.wff_calendar_wrapper'
        this.dateText = '.vc-title'
        this.prevDateCalendar = '.wff_icon_container.icon-previous_arrow_container:eq(1)'
        this.monthToGo = 'juli 2023'
        this.dateWithEvents = '.vc-day.id-2023-07-22.day-22'
        this.dateHeaderText = '.wff_grouping_header_value:eq(0)'
        this.tournamentNameText = '.wff_grouping_header_value:eq(2)'
        this.tournametCountryFlag = '.wff_flag_logo_img:eq(1)'
        this.tournamentStageName = '.wff_event_name_root'
        this.tournametStageDistance = '.wff_stage_distance:eq(1)'
        this.eventStatusText = '.wff_status_value'
        this.tooltipIcon = '.wff_icon_container.icon-live_coverage_container'
        this.tooltipText = '.wff_tooltip_participant_text'
        this.eventResultsContainer = '.wff_event_details_container'
        this.eventKoDateAndTime = '.wff_event_start_time_element.wff_responsive_text'
        this.expandingArrowEventResults = '.wff_icon_container.icon-expand_collapse_container:eq(1)'
        this.eventResultsHeaderRow = '.wff_table_header_row'
        this.participantFlag = '.wff_flag_and_logo_container.wff_national_team'
        this.participantName = '.wff_participant_name.wff_responsive_text'
        this.participantTeamName = '.wff_responsive_text.wff_participant_team_name'
        this.showAllMoreButton = '.wff_button_wrapper_root'
        this.showMoreButton = '.wff_collapsed_arrow_wrapper'
        this.showAllButton = '.wff_show_all_label_wrapper'
        this.participantCount = 10
        this.participantAfterShowMoreCount = 20
        this.participantAfterShowAllount = 116
        this.eventResultWidget = '.wff_widget.wff_widget_FWBDDF68F4225590EE.wff_widget_wide'
    }

event_result_livescore_exists(){
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
           cy.get('.esc_menu_sports.esc_custom_menu.esc_border_menu').find(this.sportOption).click();
           cy.get(this.livescoreButton).should("exist").click();
           cy.get(this.livescoreWidget).should("exist")
}

livescore_event_result(){
    //go to a date that have the needed events
    cy.calendarGoToCertainMonth(this.calendarButton,this.prevDateCalendar,this.dateText,this.monthToGo)
    cy.get(this.dateWithEvents).click()

    //check the date header and the tournament name header styles
    cy.FFamily_fSize_fWeight_marginRight_position_left(this.dateHeaderText,'"Open Sans", sans-serif',"18px","700","0px","static","auto")
    cy.FFamily_fSize_fWeight_marginRight_position_left(this.tournamentNameText,'"Open Sans", sans-serif',"14px","700","0px","static","auto")

    //tournament country flag image
    cy.get(this.tournametCountryFlag).should('exist').and('have.attr', 'src', 'https://es-img.enetscores.com/flags/1_1/14.svg')

    //tournament stage name styles
    // cy.FFamily_fSize_fWeight_marginRight_position_left('.wff_event_name_root','"Open Sans", sans-serif',"14px","700","0px","relative","0px")

    //tournament stage distance format and styles
    cy.FFamily_fSize_fWeight_marginRight_position_left(this.tournametStageDistance,'"Open Sans", sans-serif',"14px","400","0px","static","auto")

    cy.get(this.tournametStageDistance).invoke("text").then((text)=>{
        const match = text.match(/(\d+(\.\d+)?)/);
        let numberPart
        let numericValue
        // Check if a match is found
        if (match) {
            numberPart = match[0];
            numericValue = parseFloat(numberPart);
            cy.expect(numericValue).to.match(/^[0-9]*\.[0-9]+$/)

        }
    })

    //event status text
    cy.get(this.eventStatusText).invoke('text').should('include', 'Slut');

    //tooltip for "final results only"
    cy.get(this.tooltipIcon).click()
    cy.get(this.tooltipText).invoke("text").then((text)=>{
        let trimmedText = text.trim()
        cy.expect(trimmedText).to.eq('Kun slutresultat')
    })

    //check if the results are appearing without clicking the expand arrow
    cy.get(this.eventResultsContainer).should('not.exist')

    //check the KO date and time text styles after clicking the expand arrow
    cy.get(this.expandingArrowEventResults).click()
    cy.FFamily_fSize_fWeight_marginRight_position_left(this.eventKoDateAndTime,'"Open Sans", sans-serif',"14px","400","3px","static","auto")

    //event results headers row styles
    // cy.FFamily_fSize_fWeight_marginRight_position_left(this.eventResultsHeaderRow,'"Open Sans", sans-serif',"14px","400","0px","relative","0px")

    cy.get(this.eventResultsContainer).within(()=>{
        //participants country flags and names
        cy.get(this.participantFlag).should('exist').and("have.length",10)
        cy.get(this.participantName).should('exist').and("have.length",10)
        cy.get(this.participantTeamName).should('exist').and("have.length",10)

    })

    cy.checkShowAllShowMoreHide(this.eventResultsWidget,this.showAllMoreButton,this.showMoreButton, this.showAllButton,
        this.participantName,this.participantCount,this.participantAfterShowMoreCount,this.participantAfterShowAllount)

    //closing the event results container
    cy.get(this.expandingArrowEventResults).click()
}

livescore_event_result_mobile(){
    //go to a date that have the needed events
    // cy.calendarGoToCertainMonth(this.calendarButton,this.prevDateCalendar,this.dateText,this.monthToGo)
    // cy.get(this.dateWithEvents).click()

    //check the date header and the tournament name header styles
    cy.FFamily_fSize_fWeight_marginRight_position_left(this.dateHeaderText,'"Open Sans", sans-serif',"18px","700","0px","static","auto")
    cy.FFamily_fSize_fWeight_marginRight_position_left(this.tournamentNameText,'"Open Sans", sans-serif',"14px","700","0px","static","auto")

    //tournament country flag image
    cy.get(this.tournametCountryFlag).should('exist').and('have.attr', 'src', 'https://es-img.enetscores.com/flags/1_1/14.svg')

    //tournament stage name styles
    cy.FFamily_fSize_fWeight_marginRight_position_left(this.tournamentStageName,'"Open Sans", sans-serif',"14px","700","0px","relative","0px")

    //tournament stage distance format and styles
    cy.FFamily_fSize_fWeight_marginRight_position_left(this.tournametStageDistance,'"Open Sans", sans-serif',"14px","400","0px","static","auto")

    cy.get(this.tournametStageDistance).invoke("text").then((text)=>{
        const match = text.match(/(\d+(\.\d+)?)/);
        let numberPart
        let numericValue
        // Check if a match is found
        if (match) {
            numberPart = match[0];
            numericValue = parseFloat(numberPart);
            cy.expect(numericValue).to.match(/^[0-9]*\.[0-9]+$/)

        }
    })

    //event status text
    cy.get(this.eventStatusText).invoke('text').should('include', 'Slut');

    //tooltip for "final results only"
    cy.get(this.tooltipIcon).click()
    cy.get(this.tooltipText).invoke("text").then((text)=>{
        let trimmedText = text.trim()
        cy.expect(trimmedText).to.eq('Kun slutresultat')
    })

    //check if the results are appearing without clicking the expand arrow
    cy.get(this.eventResultsContainer).should('not.exist')

    //check the KO date and time text styles after clicking the expand arrow
    cy.get(this.expandingArrowEventResults).click()
    cy.FFamily_fSize_fWeight_marginRight_position_left(this.eventKoDateAndTime,'"Open Sans", sans-serif',"14px","400","3px","static","auto")

    //event results headers row styles
    // cy.FFamily_fSize_fWeight_marginRight_position_left(this.eventResultsHeaderRow,'"Open Sans", sans-serif',"14px","400","0px","relative","0px")

    cy.get(this.eventResultsContainer).within(()=>{
        //participants country flags and names
        cy.get(this.participantFlag).should('exist').and("have.length",10)
        cy.get(this.participantName).should('exist').and("have.length",10)
        cy.get(this.participantTeamName).should('exist').and("have.length",10)

    })

    cy.checkShowAllShowMoreHide(this.eventResultsMobile,this.showAllMoreButton,this.showMoreButton, this.showAllButton,
        this.participantName,this.participantCount,this.participantAfterShowMoreCount,this.participantAfterShowAllount)    
}

check_if_event_name_has_link(){
    //livescore 
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
    Cypress.on('uncaught:exception', (err) => {
        /* returning false here prevents Cypress from failing the test */
        if (resizeObserverLoopErrRe.test(err.message)) {
            return false
        }
    })
    
    // cy.get(this.sportsMenu)
    //     .should('exist').click();
    // cy.get('.esc_menu_sports.esc_custom_menu.esc_border_menu').find(this.sportOption).click();
    // cy.get(this.livescoreButton)
    //     .should("exist").click();
    // cy.get(this.livescoreWidget)
    //     .should("exist")

    cy.get('.wff_event_name_root').eq(1).click();

    cy.get(this.eventResultWidget).should('exist')
}

livescore_finished_matches(){

    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
       Cypress.on('uncaught:exception', (err) => {
           /* returning false here prevents Cypress from failing the test */
            if (resizeObserverLoopErrRe.test(err.message)) {
                return false
            }
        })

        cy.wrap(null).then(() => {

            // const $accountBox = Cypress.$(".wff_no_data_available_container.wff_no_data_default");
        
                cy.wait(2000)
                const $accountBox = Cypress.$('.wff_filter_button.wff_filter_finished.wff_disable_click');
                console.log($accountBox)
            
                if ($accountBox.length < 1) {
               
                    cy.get(this.finishedEventsTab).click();

                    cy.get(this.finishedEventsStatus)
                        .find(this.eventStatusWrapper).eq(0).click()
                    cy.get(this.statusTooltip).should('exist')
                    cy.get(this.contentHeaderTooltip)
                        .invoke("text").then((text)=>{
                            let trimmed_text = text.trim()
                            cy.expect(trimmed_text).to.match(/^\d{4}-\d{2}-\d{2} - \d{2}:\d{2}$/)
                        })
                    cy.get(this.statusInTooltip).should('not.be.empty')
                    cy.get(this.headerRow).click()

                    for(let i=0; i<this.counter; i++){
                        cy.get(this.livescoreWidget)
                        .find(this.finishedEventsStatus)
                        .find(this.eventStatusWrapper).eq(i).invoke("text").then((text)=>{
                            const filteredText = text.trim()
                            //    let statusAndTournament = filteredText.split("\n")
                            //cy.scrollTo('bottom')
                            //cy.scrollToBottomWithLazyLoading();
                            // const lastElement = document.get(".wff_event_name_time_status_wrapper").last();
                            // lastElement.scrollIntoView();
                            
                            expect(filteredText).to.match(/^[a-zA-Z]+$/)
                        })

                    }    

                        cy.get(this.finishedEventsStatus)
                            .find(this.eventStatusWrapper)
                            .should("have.css","font-family",'"Open Sans", sans-serif')
                            .and("have.css","margin-right","0px")
                            // .and("have.css","position","absolute")
                            .and("have.css","position","static")
                            // .and("have.css","left","0px") 
                            .and("have.css","left","auto")
                            .and("have.css","color","rgb(0, 0, 0)")         
                    
                        //check team names
                        cy.get(this.livescoreWidget)
                        .find(this.teamNames)
                            .should("have.css","font-size","14px")
                            .and("have.css","font-style","normal")
                            .and("have.css","color","rgb(0, 0, 0)")
                        
                        //when header is collapsed the events should not exist
                        cy.get(this.eventGroupingHeader).click()
                        cy.get(this.eventGroupingHeader)
                        .find(this.eventWrapper).should("not.exist")
                        cy.get(this.eventGroupingHeader).click()
                        //check the headers 
                        cy.get(this.livescoreWidget)
                        .find(this.headersTransform)
                            .should("have.css","font-size","14px")
                            
                        
                    
                };})

}
        
livescore_live_matches(){
                        //livescore
                    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
                    Cypress.on('uncaught:exception', (err) => {
                        /* returning false here prevents Cypress from failing the test */
                        if (resizeObserverLoopErrRe.test(err.message)) {
                            return false
                        }
                    })
                    
            cy.wrap(null).then(() => {

                const $accountBox = Cypress.$('.wff_filter_button.wff_filter_live.wff_has_live');
                console.log($accountBox)
            
                if ($accountBox.length > 0) {
                    cy.get(this.liveEventsTab)
                    .invoke('text') // Get the text within the <span> element
                    .then((text) => {
                        const locatorMatch = text.match(/\((\d+)\)/); // Use a regular expression to extract "(7)"
                        if (locatorMatch) {
                            const locatorString = locatorMatch[1];
                            const locatorNumber = parseInt(locatorString, 10); 

                            cy.get(this.liveEventsTabNotClickable).should('not.exist').then(() => {
                                if(locatorNumber > 0){
                                    cy.get(this.liveEventsTab).click();

                                    cy.get(this.eventStatusWrapper).find('.wff_status_value.wff_status_inprogress.wff_capitalize_text_transform').eq(0).click()
                                    cy.get(this.statusTooltip).should('exist')
                                    cy.get(this.contentHeaderTooltip)
                                        .invoke("text").then((text)=>{
                                            let trimmed_text = text.trim()
                                            cy.expect(trimmed_text).to.match(/^\d{4}-\d{2}-\d{2} - \d{2}:\d{2}$/)
                                        })
                                    cy.get(this.statusInTooltip).should('not.be.empty')
                                    cy.get(this.headerRow).click()
                                    
                                    for(let i=0; i<this.counter; i++){
                                        cy.get(this.livescoreWidget)
                                        .find(this.inProgressEventsStatus)
                                        .find(this.eventStatusWrapper).eq(i).invoke("text").then((text)=>{
                                                const filteredText = text.trim()
                                                //    let statusAndTournament = filteredText.split("\n")
                                                //cy.scrollTo('bottom')
                                                //cy.scrollToBottomWithLazyLoading();
                                                // const lastElement = document.get(".wff_event_name_time_status_wrapper").last();
                                                // lastElement.scrollIntoView();
                                                
                                                
                                                //expect(filteredText).to.match(/\d{2}:\d{2}/)
                                                //console.log('Filtered Text:', element);
                                                const regexPatterns = [
                                                    /^\d{2}:\d{2}$/,          // 17:00 - not started event - soccer
                                                    /\d+'(\s*\+\s*\d+)?/,    // 90' + 1' - soccer
                                                    /\d{1,2}/,               // 77'      - soccer
                                                    /\dP\s-\s[0-9]+\s'/,      // 2P - 2' - ice hockey, basketball, etc.
                                                    /^.{3} \d$/,              // "Set 3" - tennis
                                                    /[A-Za-z]+/               // HL - soccer, basketball ,etc
                                                    // Add more regex patterns here if needed
                                                ];

                                                const matchesPattern = regexPatterns.some((pattern) => pattern.test(filteredText));

                                                expect(matchesPattern).to.be.true;
                                                
                                            })
                                    }
                                            cy.get(this.inProgressEventsStatus)
                                                .find(this.eventStatusWrapper)
                                                .should("have.css","font-family",'"Open Sans", sans-serif')
                                                .and("have.css","margin-right","0px")
                                                // .and("have.css","position","absolute")
                                                .and("have.css","position","static")
                                                // .and("have.css","left","0px") 
                                                .and("have.css","left","auto")
                                                //.and("have.css","color","rgb(40, 163, 72)")         
                                        
                                        //check team names
                                        cy.get(this.livescoreWidget)
                                        .find(this.teamNames)
                                        .should("have.css","font-size","14px")
                                            .and("have.css","font-style","normal")
                                            .and("have.css","color","rgb(0, 0, 0)")
                                        
                                        //when header is collapsed the events should not exist
                                        cy.get(this.eventGroupingHeader).click()
                                        cy.get(this.eventGroupingHeader)
                                        .find(this.eventWrapper).should("not.exist")
                                        cy.get(this.eventGroupingHeader).click()
                                        //check the headers 
                                        cy.get(this.livescoreWidget)
                                        .find(this.headersTransform)
                                        .each((element,index)=>{
                                            cy.wrap(element).should("have.css","font-size","14px")
                                            
                                        }) 
                                    
                                }
                            })
                        
                            console.log(locatorNumber); // Log the locator value

                        } else {
                            cy.log('Locator not found');
                        }
                    });
                }})
}


}

export class cycling_grand_tours_livescore_po{
    constructor(){
        this.livescoreWidget = '.wff_widget.wff_widget_FW0649E7F92C113B07.wff_widget_wide'
        this.livescoreWidgetMobile = '.wff_widget.wff_widget_FW0649E7F92C113B07.wff_widget_wide'
        this.grandToursWidget = ".wff_widget.wff_widget_FW0649E7F92C113B07.wff_widget_wide:eq(1)"
        this.grandToursWidgetMobile =".wff_widget.wff_widget_FW0649E7F92C113B07.wff_widget_small:eq(1)"
        this.datesHeaders = ".wff_grouping_header_value.wff_capitalize_text_transform"
        this.inProgressEventsStatus = '.wff_event_row_wrapper.wff_single.wff_event_status_inprogress'
        this.finishedEventsStatus = '.wff_event_row_wrapper.wff_single.wff_event_status_finished'
        this.expanded_arrow = ".wff_icon_container.icon-expanded_arrow_container"
        this.collapsed_arrow = ".icon-collapsed_arrow:eq(0)"
        this.headers = ".wff_event_grouping_header_component"
        this.headersTransform = ".wff_grouping_header_value.wff_capitalize_text_transform"
        this.eventRowWrapper = ".wff_event_row_wrapper.wff_single"
        this.livescoreButton = ".esm_livescore_li"
        this.sportsMenu = '.esc_menu_sports_active_element'
        this.sportOption = '.cycling'
        this.noDataMessage = '.wff_no_data_available_container.wff_no_data_default'
        this.statusTooltip = '.wff_multiple_content_item'
        this.teamSquadWidget = '.wff_widget.wff_widget_FW4A1CBB0DB44547A0.wff_widget_wide'
        this.liveEventsTab = '.wff_filter_button.wff_filter_live.wff_has_live'
        this.headerRow = '.wff_header_root'
        this.finishedEventsTab = '.wff_filter_button.wff_filter_finished'
        this.finishedEventsTabNotClickable = '.wff_filter_button.wff_filter_finished.wff_disable_click'
        this.navigationBar = '.wff_filter_header'
        this.liveEventsTabNotClickable = '.wff_filter_button.wff_filter_live.wff_disable_click'
        this.contentHeaderTooltip = '.wff_multiple_content_main_header'
        this.statusInTooltip = '.wff_multiple_content_container'
        this.counter = 5
        this.calendarButton = '.wff_calendar_wrapper'
        this.dateText = '.vc-title'
        this.prevDateCalendar = '.wff_icon_container.icon-previous_arrow_container:eq(1)'
        this.monthToGo = 'juli 2023'
        this.dateWithEvents = '.vc-day.id-2023-07-22.day-22'
        this.dateHeaderText = '.wff_grouping_header_value:eq(0)'
        this.tournamentNameText = '.wff_grouping_header_value:eq(1)'
        this.tournametCountryFlag = '.wff_flag_logo_img:eq(0)'
        this.tournamentStageName = '.wff_event_name_root:eq(0)'
        this.tournametStageDistance = '.wff_stage_distance:eq(0)'
        this.eventStatusText = '.wff_status_value'
        this.tooltipIcon = '.wff_icon_container.icon-live_coverage_container'
        this.tooltipText = '.wff_tooltip_participant_text'
        this.grandToursImage = '.wff_grand_tours_image_container'
        this.eventKoDateAndTime = '.wff_event_start_time_element.wff_responsive_text'
        this.expandingArrowEventResults = '.wff_icon_container.icon-expand_collapse_container:eq(0)'
        this.eventResultsHeaderRow = '.wff_table_header_row'
        this.participantFlag = '.wff_flag_and_logo_container.wff_national_team'
        this.participantName = '.wff_participant_name.wff_responsive_text'
        this.participantTeamName = '.wff_responsive_text.wff_participant_team_name'
        this.showAllMoreButton = '.wff_button_wrapper_root'
        this.showMoreButton = '.wff_collapsed_arrow_wrapper'
        this.showAllButton = '.wff_show_all_label_wrapper'
        this.participantCount = 11
        this.participantAfterShowMoreCount = 21
        this.participantAfterShowAllount = 151
        this.eventResultWidget = '.wff_widget.wff_widget_FWBDDF68F4225590EE.wff_widget_wide'
        this.etapeStillingerTab = '.wff_selector_element'
        this.stageSquares = '.wff_grand_tours_stage_rankings_odds_container'
        this.participantsContainer = '.wff_table_body_root'
    }

grand_tours_livescore_exists(){
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
           cy.get('.esc_menu_sports.esc_custom_menu.esc_border_menu').find(this.sportOption).click();
           cy.get(this.livescoreButton).should("exist").click();
           cy.get(this.livescoreWidget).should("exist")
}

livescore_grand_tours(){
    //go to a date that have the needed events
    cy.calendarGoToCertainMonth(this.calendarButton,this.prevDateCalendar,this.dateText,this.monthToGo)
    cy.get(this.dateWithEvents).click()

    //check the date header and the tournament name header styles
    cy.FFamily_fSize_fWeight_marginRight_position_left(this.dateHeaderText,'"Open Sans", sans-serif',"18px","700","0px","static","auto")
    cy.FFamily_fSize_fWeight_marginRight_position_left(this.tournamentNameText,'"Open Sans", sans-serif',"14px","700","0px","static","auto")

    //tournament country flag image
    cy.get(this.tournametCountryFlag).should('exist').and('have.attr', 'src', 'https://es-img.enetscores.com/flags/1_1/5.svg')

    //tournament stage name styles
    cy.FFamily_fSize_fWeight_marginRight_position_left(this.tournamentStageName,'"Open Sans", sans-serif',"14px","700","0px","relative","0px")

    //tournament stage distance format and styles
    cy.FFamily_fSize_fWeight_marginRight_position_left(this.tournametStageDistance,'"Open Sans", sans-serif',"14px","400","0px","static","auto")

    cy.get(this.tournametStageDistance).invoke("text").then((text)=>{
        const match = text.match(/(\d+(\.\d+)?)/);
        let numberPart
        let numericValue
        // Check if a match is found
        if (match) {
            numberPart = match[0];
            numericValue = parseFloat(numberPart);
            cy.expect(numericValue).to.match(/^[0-9]*\.[0-9]+$/)

        }
    })

    //event status text
    cy.get(this.eventStatusText).invoke('text').should('include', 'Slut');

    //check if the results are appearing without clicking the expand arrow
    cy.get(this.grandToursImage).should('not.exist')

    //check the KO date and time text styles after clicking the expand arrow
    cy.get(this.expandingArrowEventResults).click()
    cy.FFamily_fSize_fWeight_marginRight_position_left(this.eventKoDateAndTime,'"Open Sans", sans-serif',"14px","400","0px","static","auto")

    //tournament stage big image
    //cy.get(this.grandToursImage).should('exist')
    cy.get('img[src="https://es-bimg.enetscores.com/img/grand_tours/stage_profile/4055692.png"]').should('exist')

    //Etape & Stillinger tabs text
    cy.get(this.etapeStillingerTab).each((element,index) => {
        cy.wrap(element).click()
        cy.FFamily_fSize_fWeight_marginRight_position_left(element,'"Open Sans", sans-serif',"14px","700","2.5px","static","auto")
    })

    //get back to the Etape tab
    cy.get(this.etapeStillingerTab).eq(0).click()

    //check the horizontal scroll of the stages squares
    cy.checkHorizontalScroll(this.stageSquares)

    //participants country flags and names
    cy.FFamily_fSize_fWeight_marginRight_position_left(this.participantName,'"Open Sans", sans-serif',"14px","700","0px","static","auto")
    cy.FFamily_fSize_fWeight_marginRight_position_left(this.participantTeamName,'"Open Sans", sans-serif',"12px","400","0px","static","auto")

    //check the show all/hide and show more options
    // cy.checkShowAllShowMoreHide(this.grandToursWidget,this.showAllMoreButton,this.showMoreButton, this.showAllButton,
    //     this.participantName,this.participantCount,this.participantAfterShowMoreCount,this.participantAfterShowAllount)

    // //closing the grand tours container
    cy.get(this.expandingArrowEventResults).click()
}

livescore_grand_tours_mobile(){
    //go to a date that have the needed events
    // cy.calendarGoToCertainMonth(this.calendarButton,this.prevDateCalendar,this.dateText,this.monthToGo)
    // cy.get(this.dateWithEvents).click()

    //check the date header and the tournament name header styles
    cy.FFamily_fSize_fWeight_marginRight_position_left(this.dateHeaderText,'"Open Sans", sans-serif',"18px","700","0px","static","auto")
    cy.FFamily_fSize_fWeight_marginRight_position_left(this.tournamentNameText,'"Open Sans", sans-serif',"14px","700","0px","static","auto")

    //tournament country flag image
    cy.get(this.tournametCountryFlag).should('exist').and('have.attr', 'src', 'https://es-img.enetscores.com/flags/1_1/5.svg')

    //tournament stage name styles
    cy.FFamily_fSize_fWeight_marginRight_position_left(this.tournamentStageName,'"Open Sans", sans-serif',"14px","700","0px","relative","0px")

    //tournament stage distance format and styles
    cy.FFamily_fSize_fWeight_marginRight_position_left(this.tournametStageDistance,'"Open Sans", sans-serif',"14px","400","0px","static","auto")

    cy.get(this.tournametStageDistance).invoke("text").then((text)=>{
        const match = text.match(/(\d+(\.\d+)?)/);
        let numberPart
        let numericValue
        // Check if a match is found
        if (match) {
            numberPart = match[0];
            numericValue = parseFloat(numberPart);
            cy.expect(numericValue).to.match(/^[0-9]*\.[0-9]+$/)

        }
    })

    //event status text
    cy.get(this.eventStatusText).invoke('text').should('include', 'Slut');

    //check if the results are appearing without clicking the expand arrow
    // cy.get(this.grandToursImage).should('not.exist')

    //check the KO date and time text styles after clicking the expand arrow
    cy.get(this.expandingArrowEventResults).click()
    cy.FFamily_fSize_fWeight_marginRight_position_left(this.eventKoDateAndTime,'"Open Sans", sans-serif',"14px","400","0px","static","auto")

    //tournament stage big image
    //cy.get(this.grandToursImage).should('exist')
    cy.get('img[src="https://es-bimg.enetscores.com/img/grand_tours/stage_profile/4055692.png"]').should('exist')

    //Etape & Stillinger tabs text
    cy.get(this.etapeStillingerTab).each((element,index) => {
        cy.wrap(element).click()
        cy.FFamily_fSize_fWeight_marginRight_position_left(element,'"Open Sans", sans-serif',"14px","700","2.5px","static","auto")
    })

    //get back to the Etape tab
    cy.get(this.etapeStillingerTab).eq(0).click()

    //check the horizontal scroll of the stages squares
    cy.checkHorizontalScroll(this.stageSquares)

    //participants country flags and names
    cy.FFamily_fSize_fWeight_marginRight_position_left(this.participantName,'"Open Sans", sans-serif',"14px","700","0px","static","auto")
    cy.FFamily_fSize_fWeight_marginRight_position_left(this.participantTeamName,'"Open Sans", sans-serif',"12px","400","0px","static","auto")

    //check the show all/hide and show more options
    // cy.checkShowAllShowMoreHide(this.grandToursWidgetMobile,this.showAllMoreButton,this.showMoreButton, this.showAllButton,
    //     this.participantName,this.participantCount,this.participantAfterShowMoreCount,this.participantAfterShowAllount)
  
}

check_if_event_name_has_link(){
    //livescore 
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
    Cypress.on('uncaught:exception', (err) => {
        /* returning false here prevents Cypress from failing the test */
        if (resizeObserverLoopErrRe.test(err.message)) {
            return false
        }
    })
    
    // cy.get(this.sportsMenu)
    //     .should('exist').click();
    // cy.get('.esc_menu_sports.esc_custom_menu.esc_border_menu').find(this.sportOption).click();
    // cy.get(this.livescoreButton)
    //     .should("exist").click();
    // cy.get(this.livescoreWidget)
    //     .should("exist")

    cy.get('.wff_event_name_root').eq(0).click();

    cy.get(this.eventResultWidget).should('exist')
}

livescore_finished_matches(){

    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
       Cypress.on('uncaught:exception', (err) => {
           /* returning false here prevents Cypress from failing the test */
            if (resizeObserverLoopErrRe.test(err.message)) {
                return false
            }
        })

        cy.wrap(null).then(() => {

            // const $accountBox = Cypress.$(".wff_no_data_available_container.wff_no_data_default");
        
                cy.wait(2000)
                const $accountBox = Cypress.$('.wff_filter_button.wff_filter_finished.wff_disable_click');
                console.log($accountBox)
            
                if ($accountBox.length < 1) {
               
                    cy.get(this.finishedEventsTab).click();

                    cy.get(this.finishedEventsStatus)
                        .find(this.eventStatusWrapper).eq(0).click()
                    cy.get(this.statusTooltip).should('exist')
                    cy.get(this.contentHeaderTooltip)
                        .invoke("text").then((text)=>{
                            let trimmed_text = text.trim()
                            cy.expect(trimmed_text).to.match(/^\d{4}-\d{2}-\d{2} - \d{2}:\d{2}$/)
                        })
                    cy.get(this.statusInTooltip).should('not.be.empty')
                    cy.get(this.headerRow).click()

                    for(let i=0; i<this.counter; i++){
                        cy.get(this.livescoreWidget)
                        .find(this.finishedEventsStatus)
                        .find(this.eventStatusWrapper).eq(i).invoke("text").then((text)=>{
                            const filteredText = text.trim()
                            //    let statusAndTournament = filteredText.split("\n")
                            //cy.scrollTo('bottom')
                            //cy.scrollToBottomWithLazyLoading();
                            // const lastElement = document.get(".wff_event_name_time_status_wrapper").last();
                            // lastElement.scrollIntoView();
                            
                            expect(filteredText).to.match(/^[a-zA-Z]+$/)
                        })

                    }    

                        cy.get(this.finishedEventsStatus)
                            .find(this.eventStatusWrapper)
                            .should("have.css","font-family",'"Open Sans", sans-serif')
                            .and("have.css","margin-right","0px")
                            // .and("have.css","position","absolute")
                            .and("have.css","position","static")
                            // .and("have.css","left","0px") 
                            .and("have.css","left","auto")
                            .and("have.css","color","rgb(0, 0, 0)")         
                    
                        //check team names
                        cy.get(this.livescoreWidget)
                        .find(this.teamNames)
                            .should("have.css","font-size","14px")
                            .and("have.css","font-style","normal")
                            .and("have.css","color","rgb(0, 0, 0)")
                        
                        //when header is collapsed the events should not exist
                        cy.get(this.eventGroupingHeader).click()
                        cy.get(this.eventGroupingHeader)
                        .find(this.eventWrapper).should("not.exist")
                        cy.get(this.eventGroupingHeader).click()
                        //check the headers 
                        cy.get(this.livescoreWidget)
                        .find(this.headersTransform)
                            .should("have.css","font-size","14px")
                            
                        
                    
                };})

}
        
livescore_live_matches(){
                        //livescore
                    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
                    Cypress.on('uncaught:exception', (err) => {
                        /* returning false here prevents Cypress from failing the test */
                        if (resizeObserverLoopErrRe.test(err.message)) {
                            return false
                        }
                    })
                    
            cy.wrap(null).then(() => {

                const $accountBox = Cypress.$('.wff_filter_button.wff_filter_live.wff_has_live');
                console.log($accountBox)
            
                if ($accountBox.length > 0) {
                    cy.get(this.liveEventsTab)
                    .invoke('text') // Get the text within the <span> element
                    .then((text) => {
                        const locatorMatch = text.match(/\((\d+)\)/); // Use a regular expression to extract "(7)"
                        if (locatorMatch) {
                            const locatorString = locatorMatch[1];
                            const locatorNumber = parseInt(locatorString, 10); 

                            cy.get(this.liveEventsTabNotClickable).should('not.exist').then(() => {
                                if(locatorNumber > 0){
                                    cy.get(this.liveEventsTab).click();

                                    cy.get(this.eventStatusWrapper).find('.wff_status_value.wff_status_inprogress.wff_capitalize_text_transform').eq(0).click()
                                    cy.get(this.statusTooltip).should('exist')
                                    cy.get(this.contentHeaderTooltip)
                                        .invoke("text").then((text)=>{
                                            let trimmed_text = text.trim()
                                            cy.expect(trimmed_text).to.match(/^\d{4}-\d{2}-\d{2} - \d{2}:\d{2}$/)
                                        })
                                    cy.get(this.statusInTooltip).should('not.be.empty')
                                    cy.get(this.headerRow).click()
                                    
                                    for(let i=0; i<this.counter; i++){
                                        cy.get(this.livescoreWidget)
                                        .find(this.inProgressEventsStatus)
                                        .find(this.eventStatusWrapper).eq(i).invoke("text").then((text)=>{
                                                const filteredText = text.trim()
                                                //    let statusAndTournament = filteredText.split("\n")
                                                //cy.scrollTo('bottom')
                                                //cy.scrollToBottomWithLazyLoading();
                                                // const lastElement = document.get(".wff_event_name_time_status_wrapper").last();
                                                // lastElement.scrollIntoView();
                                                
                                                
                                                //expect(filteredText).to.match(/\d{2}:\d{2}/)
                                                //console.log('Filtered Text:', element);
                                                const regexPatterns = [
                                                    /^\d{2}:\d{2}$/,          // 17:00 - not started event - soccer
                                                    /\d+'(\s*\+\s*\d+)?/,    // 90' + 1' - soccer
                                                    /\d{1,2}/,               // 77'      - soccer
                                                    /\dP\s-\s[0-9]+\s'/,      // 2P - 2' - ice hockey, basketball, etc.
                                                    /^.{3} \d$/,              // "Set 3" - tennis
                                                    /[A-Za-z]+/               // HL - soccer, basketball ,etc
                                                    // Add more regex patterns here if needed
                                                ];

                                                const matchesPattern = regexPatterns.some((pattern) => pattern.test(filteredText));

                                                expect(matchesPattern).to.be.true;
                                                
                                            })
                                    }
                                            cy.get(this.inProgressEventsStatus)
                                                .find(this.eventStatusWrapper)
                                                .should("have.css","font-family",'"Open Sans", sans-serif')
                                                .and("have.css","margin-right","0px")
                                                // .and("have.css","position","absolute")
                                                .and("have.css","position","static")
                                                // .and("have.css","left","0px") 
                                                .and("have.css","left","auto")
                                                //.and("have.css","color","rgb(40, 163, 72)")         
                                        
                                        //check team names
                                        cy.get(this.livescoreWidget)
                                        .find(this.teamNames)
                                        .should("have.css","font-size","14px")
                                            .and("have.css","font-style","normal")
                                            .and("have.css","color","rgb(0, 0, 0)")
                                        
                                        //when header is collapsed the events should not exist
                                        cy.get(this.eventGroupingHeader).click()
                                        cy.get(this.eventGroupingHeader)
                                        .find(this.eventWrapper).should("not.exist")
                                        cy.get(this.eventGroupingHeader).click()
                                        //check the headers 
                                        cy.get(this.livescoreWidget)
                                        .find(this.headersTransform)
                                        .each((element,index)=>{
                                            cy.wrap(element).should("have.css","font-size","14px")
                                            
                                        }) 
                                    
                                }
                            })
                        
                            console.log(locatorNumber); // Log the locator value

                        } else {
                            cy.log('Locator not found');
                        }
                    });
                }})
}


}

export class cycling_event_results_po{
    constructor(){
        this.livescoreWidget = ".wff_widget.wff_widget_FW0649E7F92C113B07.wff_widget_wide"
        this.livescoreWidgetMobile =".wff_widget.wff_widget_FW0649E7F92C113B07.wff_widget_small"
        this.datesHeaders = ".wff_grouping_header_value.wff_capitalize_text_transform"
        this.inProgressEventsStatus = '.wff_event_row_wrapper.wff_single.wff_event_status_inprogress'
        this.finishedEventsStatus = '.wff_event_row_wrapper.wff_single.wff_event_status_finished'
        this.expanded_arrow = ".wff_icon_container.icon-expanded_arrow_container"
        this.collapsed_arrow = ".icon-collapsed_arrow:eq(0)"
        this.headers = ".wff_event_grouping_header_component"
        this.headersTransform = ".wff_grouping_header_value.wff_capitalize_text_transform"
        this.eventRowWrapper = ".wff_event_row_wrapper.wff_single"
        this.livescoreButton = ".esm_livescore_li"
        this.sportsMenu = '.esc_menu_sports_active_element'
        this.sportOption = '.cycling'
        this.noDataMessage = '.wff_no_data_available_container.wff_no_data_default'
        this.statusTooltip = '.wff_multiple_content_item'
        this.teamSquadWidget = '.wff_widget.wff_widget_FW4A1CBB0DB44547A0.wff_widget_wide'
        this.liveEventsTab = '.wff_filter_button.wff_filter_live.wff_has_live'
        this.headerRow = '.wff_header_root'
        this.finishedEventsTab = '.wff_filter_button.wff_filter_finished'
        this.finishedEventsTabNotClickable = '.wff_filter_button.wff_filter_finished.wff_disable_click'
        this.navigationBar = '.wff_filter_header'
        this.liveEventsTabNotClickable = '.wff_filter_button.wff_filter_live.wff_disable_click'
        this.contentHeaderTooltip = '.wff_multiple_content_main_header'
        this.statusInTooltip = '.wff_multiple_content_container'
        this.counter = 5
        this.calendarButton = '.wff_calendar_wrapper'
        this.dateText = '.vc-title'
        this.prevDateCalendar = '.wff_icon_container.icon-previous_arrow_container:eq(1)'
        this.monthToGo = 'juli 2023'
        this.dateWithEvents = '.vc-day.id-2023-07-22.day-22'
        this.dateHeaderText = '.wff_tournament_date'
        this.tournamentNameText = '.wff_tournament_name'
        this.tournametCountryFlag = '.wff_flag_logo_img:eq(0)'
        this.tournamentStageName = '.wff_event_name_root:eq(1)'
        this.tournametStageDistance = '.wff_stage_distance:eq(0)'
        this.eventStatusText = '.wff_status_value'
        this.tooltipIcon = '.wff_icon_container.icon-live_coverage_container'
        this.tooltipText = '.wff_tooltip_participant_text'
        this.eventResultsContainer = '.wff_event_details_container'
        this.eventKoDateAndTime = '.wff_event_start_time_element.wff_responsive_text'
        this.expandingArrowEventResults = '.wff_icon_container.icon-expand_collapse_container:eq(0)'
        this.eventResultsHeaderRow = '.wff_table_header_row'
        this.participantFlag = '.wff_flag_and_logo_container.wff_national_team'
        this.participantName = '.wff_participant_name.wff_responsive_text'
        this.participantTeamName = '.wff_responsive_text.wff_participant_team_name'
        this.showAllMoreButton = '.wff_button_wrapper_root'
        this.showMoreButton = '.wff_collapsed_arrow_wrapper'
        this.showAllButton = '.wff_show_all_label_wrapper'
        this.participantCount = 10
        this.participantAfterShowMoreCount = 20
        this.participantAfterShowAllount = 116
        this.eventResultWidget = '.wff_widget.wff_widget_FWBDDF68F4225590EE.wff_widget_wide'
        this.eventResultMobile = '.wff_widget.wff_widget_FWBDDF68F4225590EE.wff_widget_small'
        this.stageName = '.wff_event_name_root'
        this.stageDropdown = '.wff_data_selector_wrapper'
        this.stageDropdownList = '.wff_data_selector_list'
        this.statsSelectedItem = '.wff_data_selector_list_item.wff_selected_item'
    }

event_result_livescore_exists(){
        //livescore
       const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
       Cypress.on('uncaught:exception', (err) => {
           /* returning false here prevents Cypress from failing the test */
            if (resizeObserverLoopErrRe.test(err.message)) {
                return false
            }
        })
           
            cy.get(this.sportsMenu).should('exist').click();
            cy.get('.esc_menu_sports.esc_custom_menu.esc_border_menu').find(this.sportOption).click();
            cy.get(this.livescoreButton).should("exist").click();
            //go to a date that have the needed events
            cy.calendarGoToCertainMonth(this.calendarButton,this.prevDateCalendar,this.dateText,this.monthToGo)
            cy.get(this.dateWithEvents).click()
            cy.get(this.tournamentStageName).should("exist").click();
            cy.get(this.eventResultWidget).should("exist")
}

livescore_event_result(){
    //check the date header and the tournament name header styles
    cy.FFamily_fSize_fWeight_marginRight_position_left(this.dateHeaderText,'"Open Sans", sans-serif',"18px","700","0px","static","auto")
    cy.FFamily_fSize_fWeight_marginRight_position_left(this.tournamentNameText,'"Open Sans", sans-serif',"14px","700","0px","static","auto")

    //tournament country flag image
    cy.get(this.tournametCountryFlag).should('exist').and('have.attr', 'src', 'https://es-img.enetscores.com/flags/1_1/14.svg')

    //tournament stage name styles
    // cy.FFamily_fSize_fWeight_marginRight_position_left(this.stageName,'"Open Sans", sans-serif',"14px","700","0px","relative","0px")

    //tournament stage distance format and styles
    cy.FFamily_fSize_fWeight_marginRight_position_left(this.tournametStageDistance,'"Open Sans", sans-serif',"14px","400","0px","static","auto")

    cy.get(this.tournametStageDistance).invoke("text").then((text)=>{
        const match = text.match(/(\d+(\.\d+)?)/);
        let numberPart
        let numericValue
        // Check if a match is found
        if (match) {
            numberPart = match[0];
            numericValue = parseFloat(numberPart);
            cy.expect(numericValue).to.match(/^[0-9]*\.[0-9]+$/)

        }
    })

    //event status text
    cy.get(this.eventStatusText).invoke('text').should('include', 'Slut');

    //tooltip for "final results only"
    cy.get(this.tooltipIcon).click()
    cy.get(this.tooltipText).invoke("text").then((text)=>{
        let trimmedText = text.trim()
        cy.expect(trimmedText).to.eq('Kun slutresultat')
    })

    //check if the results are appearing without clicking the expand arrow
    cy.get(this.expandingArrowEventResults).click()
    cy.get(this.eventResultsContainer).should('not.exist')

    //check the KO date and time text styles after clicking the expand arrow
    cy.get(this.expandingArrowEventResults).click()
    cy.FFamily_fSize_fWeight_marginRight_position_left(this.eventKoDateAndTime,'"Open Sans", sans-serif',"14px","400","3px","static","auto")

    //event results headers row styles
    // cy.FFamily_fSize_fWeight_marginRight_position_left(this.eventResultsHeaderRow,'"Open Sans", sans-serif',"14px","400","0px","relative","0px")

    cy.get(this.eventResultsContainer).within(()=>{
        //participants country flags and names
        cy.get(this.participantFlag).should('exist').and("have.length",10)
        cy.get(this.participantName).should('exist').and("have.length",10)
        cy.get(this.participantTeamName).should('exist').and("have.length",10)

    })

    cy.checkShowAllShowMoreHide(this.eventResultWidget,this.showAllMoreButton,this.showMoreButton, this.showAllButton,
        this.participantName,this.participantCount,this.participantAfterShowMoreCount,this.participantAfterShowAllount)

    //closing the event results container
    //cy.get(this.expandingArrowEventResults).click()
}

livescore_event_result_mobile(){

    //check the date header and the tournament name header styles
    cy.FFamily_fSize_fWeight_marginRight_position_left(this.dateHeaderText,'"Open Sans", sans-serif',"18px","700","0px","static","auto")
    cy.FFamily_fSize_fWeight_marginRight_position_left(this.tournamentNameText,'"Open Sans", sans-serif',"14px","700","0px","static","auto")

    //tournament country flag image
    cy.get(this.tournametCountryFlag).should('exist').and('have.attr', 'src', 'https://es-img.enetscores.com/flags/1_1/14.svg')

    //tournament stage name styles
    // cy.FFamily_fSize_fWeight_marginRight_position_left(this.stageName,'"Open Sans", sans-serif',"14px","700","0px","relative","0px")

    //tournament stage distance format and styles
    cy.FFamily_fSize_fWeight_marginRight_position_left(this.tournametStageDistance,'"Open Sans", sans-serif',"14px","400","0px","static","auto")

    cy.get(this.tournametStageDistance).invoke("text").then((text)=>{
        const match = text.match(/(\d+(\.\d+)?)/);
        let numberPart
        let numericValue
        // Check if a match is found
        if (match) {
            numberPart = match[0];
            numericValue = parseFloat(numberPart);
            cy.expect(numericValue).to.match(/^[0-9]*\.[0-9]+$/)

        }
    })

    //event status text
    cy.get(this.eventStatusText).invoke('text').should('include', 'Slut');

    //tooltip for "final results only"
    cy.get(this.tooltipIcon).click()
    cy.get(this.tooltipText).invoke("text").then((text)=>{
        let trimmedText = text.trim()
        cy.expect(trimmedText).to.eq('Kun slutresultat')
    })

    //check if the results are appearing without clicking the expand arrow
    cy.get(this.expandingArrowEventResults).click()
    cy.get(this.eventResultsContainer).should('not.exist')

    //check the KO date and time text styles after clicking the expand arrow
    cy.get(this.expandingArrowEventResults).click()
    cy.FFamily_fSize_fWeight_marginRight_position_left(this.eventKoDateAndTime,'"Open Sans", sans-serif',"14px","400","3px","static","auto")

    //event results headers row styles
    // cy.FFamily_fSize_fWeight_marginRight_position_left(this.eventResultsHeaderRow,'"Open Sans", sans-serif',"14px","400","0px","relative","0px")

    cy.get(this.eventResultsContainer).within(()=>{
        //participants country flags and names
        cy.get(this.participantFlag).should('exist').and("have.length",10)
        cy.get(this.participantName).should('exist').and("have.length",10)
        cy.get(this.participantTeamName).should('exist').and("have.length",10)

    })

    cy.checkShowAllShowMoreHide(this.eventResultMobile,this.showAllMoreButton,this.showMoreButton, this.showAllButton,
        this.participantName,this.participantCount,this.participantAfterShowMoreCount,this.participantAfterShowAllount)    
}

check_dropdowns(){
    //checks the dropdowns
    //check if the selected item from the list in the dropdown is the right one
    for(let i=0; i<2; i++){
        cy.get(this.stageDropdown).eq(0).click()
        
        cy.get(this.stageDropdownList)
            .find('.wff_data_selector_list_item').eq(i).invoke("text").then((text)=>{
                let trimmedText = text.trim()
                cy.get('.wff_data_selector_list_item').eq(i).click()
                cy.get(this.stageDropdown).eq(0).click()
                cy.get(this.statsSelectedItem)
                    .invoke("text").then((text)=>{
                        let textSelected = text.trim()
                        
                        expect(trimmedText).to.eql(textSelected)
                        cy.get(this.eventResultWidget).should('exist')
                    })
                // expect(trimmedText).to.eql(this.selectedOption)
            })
    }

}

check_if_event_name_has_link(){
    //livescore 
    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
    Cypress.on('uncaught:exception', (err) => {
        /* returning false here prevents Cypress from failing the test */
        if (resizeObserverLoopErrRe.test(err.message)) {
            return false
        }
    })
    
    // cy.get(this.sportsMenu)
    //     .should('exist').click();
    // cy.get('.esc_menu_sports.esc_custom_menu.esc_border_menu').find(this.sportOption).click();
    // cy.get(this.livescoreButton)
    //     .should("exist").click();
    // cy.get(this.livescoreWidget)
    //     .should("exist")

    cy.get(this.tournamentStageName).eq(1).click();

    cy.get(this.eventResultWidget).should('exist')
}

livescore_finished_matches(){

    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
       Cypress.on('uncaught:exception', (err) => {
           /* returning false here prevents Cypress from failing the test */
            if (resizeObserverLoopErrRe.test(err.message)) {
                return false
            }
        })

        cy.wrap(null).then(() => {

            // const $accountBox = Cypress.$(".wff_no_data_available_container.wff_no_data_default");
        
                cy.wait(2000)
                const $accountBox = Cypress.$('.wff_filter_button.wff_filter_finished.wff_disable_click');
                console.log($accountBox)
            
                if ($accountBox.length < 1) {
               
                    cy.get(this.finishedEventsTab).click();

                    cy.get(this.finishedEventsStatus)
                        .find(this.eventStatusWrapper).eq(0).click()
                    cy.get(this.statusTooltip).should('exist')
                    cy.get(this.contentHeaderTooltip)
                        .invoke("text").then((text)=>{
                            let trimmed_text = text.trim()
                            cy.expect(trimmed_text).to.match(/^\d{4}-\d{2}-\d{2} - \d{2}:\d{2}$/)
                        })
                    cy.get(this.statusInTooltip).should('not.be.empty')
                    cy.get(this.headerRow).click()

                    for(let i=0; i<this.counter; i++){
                        cy.get(this.livescoreWidget)
                        .find(this.finishedEventsStatus)
                        .find(this.eventStatusWrapper).eq(i).invoke("text").then((text)=>{
                            const filteredText = text.trim()
                            //    let statusAndTournament = filteredText.split("\n")
                            //cy.scrollTo('bottom')
                            //cy.scrollToBottomWithLazyLoading();
                            // const lastElement = document.get(".wff_event_name_time_status_wrapper").last();
                            // lastElement.scrollIntoView();
                            
                            expect(filteredText).to.match(/^[a-zA-Z]+$/)
                        })

                    }    

                        cy.get(this.finishedEventsStatus)
                            .find(this.eventStatusWrapper)
                            .should("have.css","font-family",'"Open Sans", sans-serif')
                            .and("have.css","margin-right","0px")
                            // .and("have.css","position","absolute")
                            .and("have.css","position","static")
                            // .and("have.css","left","0px") 
                            .and("have.css","left","auto")
                            .and("have.css","color","rgb(0, 0, 0)")         
                    
                        //check team names
                        cy.get(this.livescoreWidget)
                        .find(this.teamNames)
                            .should("have.css","font-size","14px")
                            .and("have.css","font-style","normal")
                            .and("have.css","color","rgb(0, 0, 0)")
                        
                        //when header is collapsed the events should not exist
                        cy.get(this.eventGroupingHeader).click()
                        cy.get(this.eventGroupingHeader)
                        .find(this.eventWrapper).should("not.exist")
                        cy.get(this.eventGroupingHeader).click()
                        //check the headers 
                        cy.get(this.livescoreWidget)
                        .find(this.headersTransform)
                            .should("have.css","font-size","14px")
                            
                        
                    
                };})

}
        
livescore_live_matches(){
                        //livescore
                    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
                    Cypress.on('uncaught:exception', (err) => {
                        /* returning false here prevents Cypress from failing the test */
                        if (resizeObserverLoopErrRe.test(err.message)) {
                            return false
                        }
                    })
                    
            cy.wrap(null).then(() => {

                const $accountBox = Cypress.$('.wff_filter_button.wff_filter_live.wff_has_live');
                console.log($accountBox)
            
                if ($accountBox.length > 0) {
                    cy.get(this.liveEventsTab)
                    .invoke('text') // Get the text within the <span> element
                    .then((text) => {
                        const locatorMatch = text.match(/\((\d+)\)/); // Use a regular expression to extract "(7)"
                        if (locatorMatch) {
                            const locatorString = locatorMatch[1];
                            const locatorNumber = parseInt(locatorString, 10); 

                            cy.get(this.liveEventsTabNotClickable).should('not.exist').then(() => {
                                if(locatorNumber > 0){
                                    cy.get(this.liveEventsTab).click();

                                    cy.get(this.eventStatusWrapper).find('.wff_status_value.wff_status_inprogress.wff_capitalize_text_transform').eq(0).click()
                                    cy.get(this.statusTooltip).should('exist')
                                    cy.get(this.contentHeaderTooltip)
                                        .invoke("text").then((text)=>{
                                            let trimmed_text = text.trim()
                                            cy.expect(trimmed_text).to.match(/^\d{4}-\d{2}-\d{2} - \d{2}:\d{2}$/)
                                        })
                                    cy.get(this.statusInTooltip).should('not.be.empty')
                                    cy.get(this.headerRow).click()
                                    
                                    for(let i=0; i<this.counter; i++){
                                        cy.get(this.livescoreWidget)
                                        .find(this.inProgressEventsStatus)
                                        .find(this.eventStatusWrapper).eq(i).invoke("text").then((text)=>{
                                                const filteredText = text.trim()
                                                //    let statusAndTournament = filteredText.split("\n")
                                                //cy.scrollTo('bottom')
                                                //cy.scrollToBottomWithLazyLoading();
                                                // const lastElement = document.get(".wff_event_name_time_status_wrapper").last();
                                                // lastElement.scrollIntoView();
                                                
                                                
                                                //expect(filteredText).to.match(/\d{2}:\d{2}/)
                                                //console.log('Filtered Text:', element);
                                                const regexPatterns = [
                                                    /^\d{2}:\d{2}$/,          // 17:00 - not started event - soccer
                                                    /\d+'(\s*\+\s*\d+)?/,    // 90' + 1' - soccer
                                                    /\d{1,2}/,               // 77'      - soccer
                                                    /\dP\s-\s[0-9]+\s'/,      // 2P - 2' - ice hockey, basketball, etc.
                                                    /^.{3} \d$/,              // "Set 3" - tennis
                                                    /[A-Za-z]+/               // HL - soccer, basketball ,etc
                                                    // Add more regex patterns here if needed
                                                ];

                                                const matchesPattern = regexPatterns.some((pattern) => pattern.test(filteredText));

                                                expect(matchesPattern).to.be.true;
                                                
                                            })
                                    }
                                            cy.get(this.inProgressEventsStatus)
                                                .find(this.eventStatusWrapper)
                                                .should("have.css","font-family",'"Open Sans", sans-serif')
                                                .and("have.css","margin-right","0px")
                                                // .and("have.css","position","absolute")
                                                .and("have.css","position","static")
                                                // .and("have.css","left","0px") 
                                                .and("have.css","left","auto")
                                                //.and("have.css","color","rgb(40, 163, 72)")         
                                        
                                        //check team names
                                        cy.get(this.livescoreWidget)
                                        .find(this.teamNames)
                                        .should("have.css","font-size","14px")
                                            .and("have.css","font-style","normal")
                                            .and("have.css","color","rgb(0, 0, 0)")
                                        
                                        //when header is collapsed the events should not exist
                                        cy.get(this.eventGroupingHeader).click()
                                        cy.get(this.eventGroupingHeader)
                                        .find(this.eventWrapper).should("not.exist")
                                        cy.get(this.eventGroupingHeader).click()
                                        //check the headers 
                                        cy.get(this.livescoreWidget)
                                        .find(this.headersTransform)
                                        .each((element,index)=>{
                                            cy.wrap(element).should("have.css","font-size","14px")
                                            
                                        }) 
                                    
                                }
                            })
                        
                            console.log(locatorNumber); // Log the locator value

                        } else {
                            cy.log('Locator not found');
                        }
                    });
                }})
}


}
