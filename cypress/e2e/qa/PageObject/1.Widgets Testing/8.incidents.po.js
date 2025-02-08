export class fodbold_incidents_po{
    constructor(){
        this.incidents_widget = ".wff_widget.wff_widget_FWB59A0C604B92AF32.wff_widget_wide"
        this.active_button = ".esm_summary.es_active"
        this.icon_status = ".icon-event-finish"
        this.penalty_shootout = ".icon-soccer_shootout_penalty"
        this.penalty_shootout_missed = ".icon-soccer_shootout_penalty_missed"
        this.yellow_card = ".icon-soccer_yellow_card"
        this.substitutions = ".icon-soccer_subst"
        this.own_goal = ".icon-soccer_own_goal"
        this.regular_goal = ".icon-soccer_goal"
        this.incident_container = ".wff_incident_details_container"
        this.canceled_penalty_var = ".icon-soccer_cancelled_penalty_var"
        this.elapsed_time = ".wff_elapsed_root"
        this.participant_name = ".wff_participant_name.wff_responsive_text"
        this.participant_link_class= ".wff_participant_link"
        this.period_class = ".wff_period_header_root"
        this.tooltip_class = ".wff_tooltip_root"
    }
    check_active_button_properties(){
        cy.get(this.active_button)
        .should("have.css","padding","9px 10px")
        .and("have.css","background-color","rgb(0, 0, 0)")
        .and("have.css","border-radius","5px")
        // .and("have.css","font-weight","700")
        .and("have.css","font-size","14px")
        .and("be.visible")
        cy.get(".es_menu_long_text").eq(0)
        .should("have.css","font","700 14px Roboto")
    }
    check_visual_elements(){
        //check the icon for status
        cy.backgroundImage(this.icon_status,"30px","30px",'url("https://es-bimg.enetscores.com/img/incidents/event_finish.svg")')
        cy.get(this.icon_status)      
        .should("have.css","background-size","30px")
        .and("have.css","background-repeat","no-repeat")
        .and("be.visible")
        //check the icons
        //penalty shootout scored
        cy.backgroundImage(this.penalty_shootout,"16px","16px",'url("https://es-bimg.enetscores.com/img/incidents/soccer_shootout_penalty.svg")')
     
        //penalty shootout missed
        cy.backgroundImage(this.penalty_shootout_missed,"16px","16px",'url("https://es-bimg.enetscores.com/img/incidents/soccer_shootout_penalty_missed.svg")')

        //yellow cards
        cy.backgroundImage(this.yellow_card,"16px","16px",'url("https://es-bimg.enetscores.com/img/incidents/soccer_yellow_card.svg")')
    
        //substitutions
        cy.backgroundImage(this.substitutions,"16px","16px",'url("https://es-bimg.enetscores.com/img/incidents/soccer_subst.svg")')
     
        //own goal
        cy.backgroundImage(this.own_goal,"16px","16px",'url("https://es-bimg.enetscores.com/img/incidents/soccer_red_goal.svg")')

        //goal 
        cy.backgroundImage(this.regular_goal,"16px","16px",'url("https://es-bimg.enetscores.com/img/incidents/soccer_goal_black.svg")')
   
        //canceled penalty
        cy.backgroundImage(this.canceled_penalty_var,"16px","16px",'url("https://es-bimg.enetscores.com/img/incidents/soccer_cancelled_penalty_var.svg")')
     
    }
    check_containers(){
        cy.get(this.incidents_widget).within(()=>{
            cy.containersBorders(this.incident_container,"205px","40px","rgb(229, 229, 229)","4px")        

            //elapsed
            cy.elapsedTimeProperties(this.elapsed_time,"57px","22px","rgb(73, 185, 102)","14px")

            cy.get(this.period_class)
        })
    }
    check_links(){
        cy.get(this.incidents_widget).within(()=>{
            cy.get(this.participant_link_class).not('contains',"Jose Mourinho").invoke("attr","href").then((href)=>{
                cy.request(href).its("status").should('eq',200)
            })           
            // cy.get(this.participant_link_class).eq(17).should("not.have.attr","href")
            cy.get(this.participant_link_class).should("have.length","48")//this is the class that should have the "href" attribute, if they are more this means the manager contains link
        })
        

    }
    check_tooltips(){ //inn progress check the tooltip for all elements and make it as a command
        cy.tooltipVisibility(this.incidents_widget,this.penalty_shootout,this.tooltip_class)
        cy.tooltipVisibility(this.incidents_widget,this.penalty_shootout_missed,this.tooltip_class)
        cy.tooltipVisibility(this.incidents_widget,this.yellow_card,this.tooltip_class)
        cy.tooltipVisibility(this.incidents_widget,this.substitutions,this.tooltip_class)
        cy.tooltipVisibility(this.incidents_widget,this.own_goal,this.tooltip_class)
        cy.tooltipVisibility(this.incidents_widget,this.regular_goal,this.tooltip_class)
        // cy.tooltipVisibility(this.incidents_widget,this.incident_container,this.tooltip_class)
        cy.tooltipVisibility(this.incidents_widget,this.canceled_penalty_var,this.tooltip_class)
        
    }
    check_texts_in_tooltips(){
        cy.tooltipText(this.incidents_widget,this.penalty_shootout,this.tooltip_class,"Straffeforsøg, scoret")
        cy.tooltipText(this.incidents_widget,this.penalty_shootout_missed,this.tooltip_class,"Straffeforsøg, brændt")
        cy.tooltipVisibility(this.incidents_widget,this.yellow_card,this.tooltip_class,"Gult kort")
        cy.tooltipVisibility(this.incidents_widget,this.substitutions,this.tooltip_class,"Udskiftning")
        cy.tooltipVisibility(this.incidents_widget,this.own_goal,this.tooltip_class,"Selvmål")
        cy.tooltipVisibility(this.incidents_widget,this.regular_goal,this.tooltip_class,"Mål")
        // cy.tooltipVisibility(this.incidents_widget,this.incident_container,this.tooltip_class,"")
        cy.tooltipVisibility(this.incidents_widget,this.canceled_penalty_var,this.tooltip_class,"Annulleret straffespark")
        
    }
}