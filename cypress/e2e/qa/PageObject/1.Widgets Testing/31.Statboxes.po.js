export class icehockey_statboxes{
    constructor(){
        this.widget_code = ".wff_widget.wff_widget_FW66F8E91D498B5BB4.wff_widget_small.wff_event_stats_generic_icehockey"
        this.header_container = ".wff_event_stats_header"
        this.separated_containers = ".wff_event_details_stats_group"
        this.goals_icon = ".icon-goals"
        this.assists_icon = ".icon-assists"
        this.points_icon = ".icon-points"
        this.shots_icon = ".icon-shots"
        this.plusMinus_icon = ".icon-plus_minus"
        this.time_on_ice_icon = ".icon-time_on_ice_secs"
        this.hits_icon = ".icon-hits"
        this.penalty_minutes = ".icon-penalty_minutes"
        this.separators = ".wff_event_details_stats_value_separator"
        this.flag_logo = ".wff_flag_and_logo_container"
        this.label_text = ".wff_label_text"
        this.array = ["Game leaders","Goals","Assists","Points","Shots","Plus/minus","Time on ice","Hits","Penalty minutes"]
        this.event_details_value = ".wff_event_details_stats_value"
        this.array_with_data_values = ["1","2","3","6","+4","60","6","2"]
        this.array_with_player_names = ["S. Jarvis","M. Necas","M. Necas","B. Burns","B. Pesce","F. Andersen","E. Robinson","B. Pesce"]
        this.player_names_container = ".wff_participant.wff_responsive_text"
        this.player_names = ".wff_participant_name.wff_responsive_text"

    }
    check_visual_elements(){
        cy.get(this.widget_code).should("be.visible")
        cy.get(this.widget_code).within(()=>{
            //check the containers
            cy.get(this.separated_containers).should("be.visible")
            cy.scoreBoxProperties(this.separated_containers,"grid","normal","normal","rgb(0, 0, 0)","rgba(255, 255, 255, 0.8)","1px solid rgb(242, 242, 242)","none","10px","border-box","320px","92px")
            //check icons
            //goal
            cy.backgroundImage(this.goals_icon,"20px","20px",'url("https://es-bimg.enetscores.com/img/event_stats/ice_hockey_goals.svg")')
            //assists
            cy.backgroundImage(this.assists_icon,"20px","20px",'url("https://es-bimg.enetscores.com/img/event_stats/ice_hockey_assits.svg")')
            //points
            cy.backgroundImage(this.points_icon,"20px","20px",'url("https://es-bimg.enetscores.com/img/event_stats/ice_hockey_points.svg")')
            //shots
            cy.backgroundImage(this.shots_icon,"20px","20px",'url("https://es-bimg.enetscores.com/img/event_stats/ice_hockey_shots_on.svg")')
            //plus/minus
            cy.backgroundImage(this.plusMinus_icon,"20px","20px",'url("https://es-bimg.enetscores.com/img/event_stats/ice_hockey_plus_minus.svg")')
            //time On Ice Icon
            cy.backgroundImage(this.time_on_ice_icon,"20px","20px",'url("https://es-bimg.enetscores.com/img/event_stats/ice_hockey_time_ice.svg")')
            //hits
            cy.backgroundImage(this.hits_icon,"20px","20px",'url("https://es-bimg.enetscores.com/img/event_stats/ice_hockey_hits.svg")')
            //penalty minutes
            cy.backgroundImage(this.penalty_minutes,"20px","20px",'url("https://es-bimg.enetscores.com/img/event_stats/ice_hockey_penalties_whistle.svg")')

            //separators
            cy.get(this.separators)
            .should("be.visible")
            .and("have.css","border","1px solid rgb(229, 229, 229)")

            //team logos
            cy.widthHeight(this.flag_logo,"20px","20px")
        }) 
    }
    check_texts(){
        cy.get(this.widget_code).within(()=>{
            //check the header Game leaders properties
            cy.get(this.header_container)
            .should("be.visible")
            .and("have.css","color","rgb(0, 0, 0)")
            .and("have.css","background-color","rgb(255, 255, 255)")
            .and("have.css","font-family","Roboto, sans-serif")
            .and("have.css","grid-template-columns","270px 20px 20px")
            cy.WeightSize(this.header_container,"16px","600")
           //check stats texts
           for(var i = 1; i < 9; i++){
                cy.get(this.label_text).eq(i)
                .should("be.visible")
                .and("have.css","font-weight","700")
                .and("have.css","font-size","14px")
                .and("have.css","font-family","Roboto, sans-serif")                
           }
            //check all stats text values
            cy.get(this.label_text).each((element,index)=>{
                cy.wrap(element).invoke("text").then((text)=>{
                    let trimmed_text = text.trim()
                    cy.wrap(trimmed_text).should("eq",this.array[index])

                })
            })
            
        })
    }
    check_values_and_circles(){
        cy.get(this.widget_code).within(()=>{
            //circles and text visual properties
            cy.WeightSize(this.event_details_value,"12px","700")
            cy.widthHeight(this.event_details_value,"20px","20px")  
            cy.get(this.event_details_value)
            .should("have.css","border-radius","50%")
            .and("have.css","border","1px solid rgb(241, 241, 241)")
            .and("have.css","background-color","rgb(0, 0, 0)")
            .and("have.css","color","rgb(255, 255, 255)")
            .and("have.css","font-family","Roboto, sans-serif")
            .and("have.css","letter-spacing","-0.32px")
            //get texts and assert the values
            cy.get(this.event_details_value).each((element,index)=>{
                cy.wrap(element).invoke("text").then((text)=>{
                    let trimmed_text = text.trim()
                    cy.wrap(trimmed_text).should("eq",this.array_with_data_values[index])
                })
            })
        })
    }
    check_player_names(){
        cy.get(this.widget_code).within(()=>{
            //player names properties
            cy.WeightSize(this.player_names,"14px","700")
            cy.get(this.player_names)
            .should("have.css","font-family","Roboto, sans-serif")
            //assert the player names are the same - we have data 
            cy.get(this.player_names).each((element,index)=>{
                cy.wrap(element).invoke("text").then((text)=>{
                    let trimmed_text = text.trim()
                    cy.wrap(trimmed_text).should("eq",this.array_with_player_names[index])
                })
            })
        })
    }
}