export class tournamentPage_po{
    constructor(){
        this.topTournament = ".es_leagues.esc_template_list"
        this.showAllButton = ".btn.es_league_show_more_button"
        this.all_leagues = ".es_leagues_link.es_male"
        this.all_Countries = ".es_league_country_name"
        this.league_name = ".league-name"
        this.leagues_item = ".leagues-item"
        this.forrigeKampHeader = ".esmx-title.es_prev_matches.es_widget_container.esm_comp.esm_overview-title"
        this.kommendeKampeHeader = ".esmx-title.es_next_matches.es_widget_container.esm_comp.esm_overview-title"
        this.stillingHeader = ".esmx-title.esm_comp.es_widget_container.esm_overview-title:eq(2)"
        this.topscorereHeader = ".esmx-title.esm_comp.es_widget_container.esm_overview-title:eq(3)"
        this.lastMatches = ".wff_widget.wff_widget_FW493001AA07CF0B12.wff_widget_medium:eq(0)"
        this.datesHeaders = ".wff_grouping_header_value.wff_capitalize_text_transform"
        this.lastMatchesContainer = ".es_prev_matches.es_widget_container.esm_comp.esm_overview:eq(0)"
        this.nextMatchesContainer = ".es_next_matches.es_widget_container.esm_comp.esm_overview:eq(0)"
        this.teamNames = ".wff_participant_link"
        this.eventStatusWrapper = ".wff_event_name_time_status_wrapper"
        this.eventGroupingHeader =".wff_event_grouping_header_component:eq(0)"
        this.nextEventGroupingHeader = ".wff_event_grouping_header_component:eq(3)"
        this.expanded_arrow = ".wff_icon_container.icon-expanded_arrow_container"
        this.collapsed_arrow = ".icon-collapsed_arrow:eq(0)"
        this.eventWrapper = ".wff_event_row_wrapper_root:eq(0)"
        this.lastMatchesMobile =".wff_widget.wff_widget_FW493001AA07CF0B12.wff_widget_small:eq(0)"
        this.nextMatches = ".wff_widget.wff_widget_FW493001AA07CF0B12.wff_widget_medium:eq(1)"
        this.nextMatchesMobile = ".wff_widget.wff_widget_FW493001AA07CF0B12.wff_widget_small:eq(1)"   
        this.headers = ".wff_event_grouping_header_component"
        this.headersTransform = ".wff_grouping_header_value.wff_capitalize_text_transform"
        this.kampe_tab = ".esm_matches"
        this.stilling_tab =  ".esm_standings:eq(0)"
        this.statistikTab = ".esm_statistics_li"
        
    }

openTournament(){
    cy.get(this.showAllButton).then(($element)=>{
        if($element.is(":visible")){
            cy.get($element)
            .click()
        }else if(!$element.is(":visible")){
            cy.get(this.showLessButton).should("be.visible")
        }else{
            throw Error
        }
    })
    cy.get(this.topTournament)
    .should("exist")
    cy.get(this.all_Countries)
    .each((element,index)=>{
        cy.wrap(element).invoke("text").then((text)=>{
            let cleanText = text.trim() 
            // console.log(cleanText)
        if(cleanText === "England"){
            cy.wrap(element).click()
        }    
    })


    })
}
openTournamentMobile(){
    cy.get(this.topTournament)
    .should("exist")
    cy.get(this.all_leagues)
    .each((element,index)=>{
        cy.wrap(element).invoke("text").then((text)=>{
            let cleanText = text.trim() 
            // console.log(cleanText)
            const lines = cleanText.split("\n")
            const filteredText = lines[0].trim()
            // console.log(filteredText)
        if(filteredText === "Premier League"){
            cy.get(".leagues-item").eq(index).click()
        }    
    })


    })
}
checkHeaders(){
    //checks the text
    cy.checkHeaders(this.forrigeKampHeader,"Resultater")
    cy.checkHeaders(this.kommendeKampeHeader,"Kommende kampe")
    cy.checkHeaders(this.stillingHeader,"Stilling")
    cy.checkHeaders(this.topscorereHeader,"Topscorere")
    //checks css properties Forrige kamp
    cy.get(this.forrigeKampHeader)
    .should("have.css","font-size","20px")
    .and("have.css","margin","0px 0px 10px")
    .and("have.css","font-weight","700")
    .and("have.css","color","rgb(0, 0, 0)")
    //checks css properties Kommende kampe
    cy.get(this.kommendeKampeHeader)
    .should("have.css","font-size","20px")
    .and("have.css","margin","0px 0px 10px")
    .and("have.css","font-weight","700")
    .and("have.css","color","rgb(0, 0, 0)")
    //checks css properties Stilling
    cy.get(this.stillingHeader)
    .should("have.css","font-size","20px")
    .and("have.css","margin","0px 0px 10px")
    .and("have.css","font-weight","700")
    .and("have.css","color","rgb(0, 0, 0)")
    //chekcs css properties Topscorere
    .should("have.css","font-size","20px")
    .and("have.css","margin","0px 0px 10px")
    .and("have.css","font-weight","700")
    .and("have.css","color","rgb(0, 0, 0)")
}
openKampeTab(){
    cy.get(this.kampe_tab).eq(0).click()
}
openStillingTab(){
    cy.get(this.stilling_tab).click()
}
openStatistikTab(){
    cy.get(this.statistikTab).click()
}
}