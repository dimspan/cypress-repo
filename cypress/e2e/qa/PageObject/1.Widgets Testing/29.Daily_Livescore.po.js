export class ice_hockey_daily_livescore_po{
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
        this.counter = 3
        this.hockey_daily_livescore = ".wff_widget.wff_widget_FWF61B67305622A7D1.wff_widget_medium"

    }
// group by stage , range type livescore
livescore_all_matches(){

    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
       Cypress.on('uncaught:exception', (err) => {
           /* returning false here prevents Cypress from failing the test */
            if (resizeObserverLoopErrRe.test(err.message)) {
                return false
            }
        })
        // //
        const $accountBox = Cypress.$('.wff_no_data_available_container.wff_no_data_default');
        console.log($accountBox)
        if($accountBox.length < 1){
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
                
                cy.get(this.hockey_daily_livescore).eq(0).within(()=>{
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
                        
                        cy.get(this.eventStatusWrapper).eq(i).invoke("text").then((text)=>{
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
                        .should("have.css","font-family",'Roboto, sans-serif')
                            .and("have.css","margin-right","0px")
                            // .and("have.css","position","absolute")
                            .and("have.css","position","static")
                            // .and("have.css","left","0px") 
                            .and("have.css","left","auto")         
                        
                        // //check team names
                            cy.get(this.teamNames)
                            .should("have.css","font-size","14px")
                            .and("have.css","font-style","normal")
                            .and("have.css","color","rgb(0, 0, 0)")
                        
                        //when header is collapsed the events should not exist
                    cy.get(this.eventGroupingHeader).click()
                    cy.get(this.eventGroupingHeader)
                        .find(this.eventWrapper).should("not.exist")
                    cy.get(this.eventGroupingHeader).click()
                        //check the headers 
                    cy.get(this.headersTransform)
                        .should("have.css","font-size","14px")

                })
            
                
        }

        // //
        // const $accountBox = Cypress.$('.wff_no_data_available_container.wff_no_data_default');
        // console.log($accountBox)

        
}

livescore_finished_matches(){

    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
       Cypress.on('uncaught:exception', (err) => {
           /* returning false here prevents Cypress from failing the test */
            if (resizeObserverLoopErrRe.test(err.message)) {
                return false
            }
        })
        
        cy.get(this.hockey_daily_livescore).eq(0).within(()=>{
                const $accountBox = Cypress.$('.wff_filter_button.wff_filter_finished');
                console.log($accountBox)
            
                if ($accountBox.length > 1) {
                  
                        cy.get(this.finishedEventsTab).click({force:true});
                    
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
             
                        cy.get(this.finishedEventsStatus)
                        .find(".wff_event_status.wff_has_start_time").eq(i).invoke("text").then((text)=>{
                            const filteredText = text.trim()
                            cy.wrap(filteredText).should((t)=>{
                                expect(t).to.satisfy((value)=>{
                                    return(
                                        expect(value).to.match(/^[a-zA-Z]+$/)
                                    )
                                })
                            })
                           
                        })

                    }    

                        cy.get(this.finishedEventsStatus)
                            .find(this.eventStatusWrapper)
                            .should("have.css","font-family",'Roboto, sans-serif')
                            .and("have.css","margin-right","0px")
                            // .and("have.css","position","absolute")
                            .and("have.css","position","static")
                            // .and("have.css","left","0px") 
                            .and("have.css","left","0px")
                            .and("have.css","color","rgb(0, 0, 0)")         
                    
                        //check team names
                        cy.get(this.teamNames)
                            .should("have.css","font-size","14px")
                            .and("have.css","font-style","normal")
                            .and("have.css","color","rgb(0, 0, 0)")
                        
                        //when header is collapsed the events should not exist
                        cy.get(this.eventGroupingHeader)
                        .click()
                        cy.get(this.eventGroupingHeader)
                        .find(this.eventWrapper)
                        .should("not.exist")
                        cy.get(this.eventGroupingHeader).click()
                        //check the headers 
                        cy.get(this.headersTransform)
                            .should("have.css","font-size","14px")
                            
                        
                   
                    
                    
                };
            })
}
        
livescore_live_matches(){
    cy.get(this.hockey_daily_livescore).eq(0).within(()=>{

    
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
}})})
}

//range by date , group by date
date_livescore_all_matches(){

    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
       Cypress.on('uncaught:exception', (err) => {
           /* returning false here prevents Cypress from failing the test */
            if (resizeObserverLoopErrRe.test(err.message)) {
                return false
            }
        })
        // //
        const $accountBox = Cypress.$('.wff_no_data_available_container.wff_no_data_default');
        console.log($accountBox)
        if($accountBox.length > 1){
            cy.get('.wff_no_data_available_container.wff_no_data_default').should('exist').then(($el) =>{
                console.log($el.length)
                    if($el.length > 0){
                        cy.get(this.noDataMessage)
                        .should('exist')
                    }

            })
        }else{
            // livescore
            const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
            Cypress.on('uncaught:exception', (err) => {
             /* returning false here prevents Cypress from failing the test */
                if (resizeObserverLoopErrRe.test(err.message)) {
                    return false
                }
            })
        }
                
            cy.get(this.hockey_daily_livescore).eq(1).within(()=>{
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
                        
                        cy.get(this.eventStatusWrapper).eq(i).invoke("text").then((text)=>{
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
                        .should("have.css","font-family",'Roboto, sans-serif')
                            .and("have.css","margin-right","0px")
                            // .and("have.css","position","absolute")
                            .and("have.css","position","static")
                            // .and("have.css","left","0px") 
                            .and("have.css","left","auto")         
                        
                        // //check team names
                            cy.get(this.teamNames)
                            .should("have.css","font-size","14px")
                            .and("have.css","font-style","normal")
                            .and("have.css","color","rgb(0, 0, 0)")
                        
                        //when header is collapsed the events should not exist
                    cy.get(this.eventGroupingHeader).click()
                    cy.get(this.eventGroupingHeader)
                        .find(this.eventWrapper).should("not.exist")
                    cy.get(this.eventGroupingHeader).click()
                        //check the headers 
                    cy.get(this.headersTransform)
                        .should("have.css","font-size","14px")

                })
            
                
        

        // //
        // const $accountBox = Cypress.$('.wff_no_data_available_container.wff_no_data_default');
        // console.log($accountBox)

        
}

date_livescore_finished_matches(){

    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
       Cypress.on('uncaught:exception', (err) => {
           /* returning false here prevents Cypress from failing the test */
            if (resizeObserverLoopErrRe.test(err.message)) {
                return false
            }
        })
        
        cy.get(this.hockey_daily_livescore).eq(1).within(()=>{
                const $accountBox = Cypress.$('.wff_filter_button.wff_filter_finished.wff_disable_click');
                console.log($accountBox)
            
                if ($accountBox.length < 1) {
                  
                        cy.get(".wff_filter_button.wff_filter_finished").click({force:true});
                    
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
             
                        cy.get(this.finishedEventsStatus)
                        .find(".wff_status_value.wff_capitalize_text_transform").eq(i).invoke("text").then((text)=>{
                            const filteredText = text.trim()
                            cy.wrap(filteredText).should((t)=>{
                                expect(t).to.satisfy((value)=>{
                                    return(
                                        expect(value).to.match(/^[a-zA-Z]+$/)
                                    )
                                })
                            })
                           
                        })

                    }    

                        cy.get(this.finishedEventsStatus)
                            .find(this.eventStatusWrapper)
                            .should("have.css","font-family",'Roboto, sans-serif')
                            .and("have.css","margin-right","0px")
                            // .and("have.css","position","absolute")
                            .and("have.css","position","static")
                            // .and("have.css","left","0px") 
                            .and("have.css","left","0px")
                            .and("have.css","color","rgb(0, 0, 0)")         
                    
                        //check team names
                        cy.get(this.teamNames)
                            .should("have.css","font-size","14px")
                            .and("have.css","font-style","normal")
                            .and("have.css","color","rgb(0, 0, 0)")
                        
                        //when header is collapsed the events should not exist
                        cy.get(this.eventGroupingHeader)
                        .click()
                        cy.get(this.eventGroupingHeader)
                        .find(this.eventWrapper)
                        .should("not.exist")
                        cy.get(this.eventGroupingHeader).click()
                        //check the headers 
                        cy.get(this.headersTransform)
                            .should("have.css","font-size","14px")
                            
                        
                   
                    
                    
                };
            })
}
        
date_livescore_live_matches(){
                        //livescore
                    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
                    Cypress.on('uncaught:exception', (err) => {
                        /* returning false here prevents Cypress from failing the test */
                        if (resizeObserverLoopErrRe.test(err.message)) {
                            return false
                        }
                    })

                const $accountBox = Cypress.$('.wff_filter_button.wff_filter_live.wff_has_live');
                console.log($accountBox)
                cy.get(this.hockey_daily_livescore).eq(1).within(()=>{
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
                                        
                                        // for(let i=0; i<this.counter; i++){
                                            cy.log(this.counter)
                                            cy.get(this.inProgressEventsStatus)
                                            .find(this.eventStatusWrapper).invoke("text").then((text)=>{
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
                                        // }
                                                cy.get(this.inProgressEventsStatus)
                                                    .find(this.eventStatusWrapper)
                                                    .should("have.css","font-family",'Roboto, sans-serif')
                                                    .and("have.css","margin-right","0px")
                                                    // .and("have.css","position","absolute")
                                                    .and("have.css","position","static")
                                                    // .and("have.css","left","0px") 
                                                    .and("have.css","left","0px")
                                                    //.and("have.css","color","rgb(40, 163, 72)")         
                                            
                                            //check team names
                                            cy.get(this.teamNames)
                                                .should("have.css","font-size","14px")
                                                .and("have.css","font-style","normal")
                                                .and("have.css","color","rgb(0, 0, 0)")
                                            
                                            //when header is collapsed the events should not exist
                                            cy.get(this.eventGroupingHeader).click()
                                            cy.get(this.eventGroupingHeader)
                                            .find(this.eventWrapper).should("not.exist")
                                            cy.get(this.eventGroupingHeader).click()
                                            //check the headers 
                                   
                                            cy.get(this.headersTransform)                                            
                                            .should("have.css","font-size","14px")
                                                
                                          
                                        
                                    }
                                })
                            
                                // console.log(locatorNumber); // Log the locator value
    
                            } else {
                                cy.log('Locator not found');
                            }
                        });
                    }

                })
               
}
//range by date , group by Event 0/all
range_all_livescore_all_matches(){

    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
       Cypress.on('uncaught:exception', (err) => {
           /* returning false here prevents Cypress from failing the test */
            if (resizeObserverLoopErrRe.test(err.message)) {
                return false
            }
        })
        
        const $accountBox = Cypress.$('.wff_no_data_available_container.wff_no_data_default');
        console.log($accountBox)
        if($accountBox.length > 0){
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
                
                cy.get(this.hockey_daily_livescore).eq(2).within(()=>{
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
                        
                        cy.get(this.eventStatusWrapper).eq(i).invoke("text").then((text)=>{
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
                        .should("have.css","font-family",'Roboto, sans-serif')
                            .and("have.css","margin-right","0px")
                            // .and("have.css","position","absolute")
                            .and("have.css","position","static")
                            // .and("have.css","left","0px") 
                            .and("have.css","left","auto")         
                        
                        // //check team names
                            cy.get(this.teamNames)
                            .should("have.css","font-size","14px")
                            .and("have.css","font-style","normal")
                            .and("have.css","color","rgb(0, 0, 0)")
                        
                        //when header is collapsed the events should not exist
                    cy.get(this.eventGroupingHeader).click()
                    cy.get(this.eventGroupingHeader)
                        .find(this.eventWrapper).should("not.exist")
                    cy.get(this.eventGroupingHeader).click()
                        //check the headers 
                    cy.get(this.headersTransform)
                        .should("have.css","font-size","14px")

                })
            
                
        }

        // //
        // const $accountBox = Cypress.$('.wff_no_data_available_container.wff_no_data_default');
        // console.log($accountBox)

        
}

range_all_livescore_finished_matches(){

    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
       Cypress.on('uncaught:exception', (err) => {
           /* returning false here prevents Cypress from failing the test */
            if (resizeObserverLoopErrRe.test(err.message)) {
                return false
            }
        })
        
        cy.get(this.hockey_daily_livescore).eq(2).within(()=>{
                const $accountBox = Cypress.$('.wff_filter_button.wff_filter_finished.wff_disable_click');
                console.log($accountBox)
            
                if ($accountBox.length < 1) {
                  
                    cy.get(".wff_filter_button.wff_filter_finished").click();
                    
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
             
                        cy.get(this.finishedEventsStatus)
                        .find(".wff_status_value.wff_capitalize_text_transform").eq(i).invoke("text").then((text)=>{
                            const filteredText = text.trim()
                            cy.wrap(filteredText).should((t)=>{
                                expect(t).to.satisfy((value)=>{
                                    return(
                                        expect(value).to.match(/^[a-zA-Z]+$/)
                                    )
                                })
                            })
                           
                        })

                    }    

                        cy.get(this.finishedEventsStatus)
                            .find(this.eventStatusWrapper)
                            .should("have.css","font-family",'Roboto, sans-serif')
                            .and("have.css","margin-right","0px")
                            // .and("have.css","position","absolute")
                            .and("have.css","position","static")
                            // .and("have.css","left","0px") 
                            .and("have.css","left","0px")
                            .and("have.css","color","rgb(0, 0, 0)")         
                    
                        //check team names
                        cy.get(this.teamNames)
                            .should("have.css","font-size","14px")
                            .and("have.css","font-style","normal")
                            .and("have.css","color","rgb(0, 0, 0)")
                        
                        //when header is collapsed the events should not exist
                        cy.get(this.eventGroupingHeader)
                        .click()
                        cy.get(this.eventGroupingHeader)
                        .find(this.eventWrapper)
                        .should("not.exist")
                        cy.get(this.eventGroupingHeader).click()
                        //check the headers 
                        cy.get(this.headersTransform)
                            .should("have.css","font-size","14px")
                            
                        
                   
                    
                    
                };
            })
}
        
range_all_livescore_live_matches(){
                        //livescore
                    const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
                    Cypress.on('uncaught:exception', (err) => {
                        /* returning false here prevents Cypress from failing the test */
                        if (resizeObserverLoopErrRe.test(err.message)) {
                            return false
                        }
                    })

                const $accountBox = Cypress.$('.wff_filter_button.wff_filter_live.wff_disable_click');
                console.log($accountBox)
                cy.get(this.hockey_daily_livescore).eq(2).within(()=>{
                    if ($accountBox.length < 1) {
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
                                        
                                        // for(let i=0; i<this.counter; i++){
                                            cy.log(this.counter)
                                            cy.get(this.inProgressEventsStatus)
                                            .find(this.eventStatusWrapper).invoke("text").then((text)=>{
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
                                        // }
                                                cy.get(this.inProgressEventsStatus)
                                                    .find(this.eventStatusWrapper)
                                                    .should("have.css","font-family",'Roboto, sans-serif')
                                                    .and("have.css","margin-right","0px")
                                                    // .and("have.css","position","absolute")
                                                    .and("have.css","position","static")
                                                    // .and("have.css","left","0px") 
                                                    .and("have.css","left","0px")
                                                    //.and("have.css","color","rgb(40, 163, 72)")         
                                            
                                            //check team names
                                            cy.get(this.teamNames)
                                                .should("have.css","font-size","14px")
                                                .and("have.css","font-style","normal")
                                                .and("have.css","color","rgb(0, 0, 0)")
                                            
                                            //when header is collapsed the events should not exist
                                            cy.get(this.eventGroupingHeader).click()
                                            cy.get(this.eventGroupingHeader)
                                            .find(this.eventWrapper).should("not.exist")
                                            cy.get(this.eventGroupingHeader).click()
                                            //check the headers 
                                   
                                            cy.get(this.headersTransform)                                            
                                            .should("have.css","font-size","14px")
                                                
                                          
                                        
                                    }
                                })
                            
                                // console.log(locatorNumber); // Log the locator value
    
                            } else {
                                cy.log('Locator not found');
                            }
                        });
                    }

                })
               
}
}
