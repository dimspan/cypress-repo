export class lineups_po{
    constructor(){
        this.lineups_code = ".wff_widget.wff_widget_FWE74EDB97D3232CD0.wff_widget_wide"
        this.home_team_container = ".wff_lineups_participant_wrapper.wff_team_8302" // ID of Sevilla
        this.away_team_container = ".wff_lineups_participant_wrapper.wff_team_8686" // ID of Rome
        this.participant_link = ".wff_participant_link"
        this.coach_row = ".wff_participant.wff_responsive_text_no_display.wff_lineup_pt_coach.wff_participant_row_0"
        this.flag_logo = ".wff_flag_logo_img"
        this.substitution_out_icon = ".icon-soccer_substitution_out"
        this.yellow_card_icon = ".icon-soccer_yellow_card"
        this.own_goal_icon = ".icon-soccer_own_goal"
        this.penalty_shootout_scored = ".icon-soccer_shootout_penalty"
        this.penalty_shootout_missed = ".icon-soccer_shootout_penalty_missed"
        this.substitution_in_icon = ".icon-soccer_substitution_in"
        this.suspended_icon = ".icon-suspended"
        this.injured_icon = ".icon-injured"
        this.team_rating_6_7 = ".wff_team_rating.wff_rating_6_7"
        this.player_rating_5_6 = ".wff_participant_rating.wff_rating_5_6"
        this.player_rating_6_7 = ".wff_participant_rating.wff_rating_6_7"
        this.player_rating_7_8 = ".wff_participant_rating.wff_rating_7_8"
        this.player_rating_8_9 = ".wff_participant_rating.wff_rating_8_9"   
        this.expandedArrow = ".wff_icon_container.icon-expanded_arrow_container"
        this.collapsedArrow = ".wff_icon_container.icon-collapsed_arrow_container"
        this.header_class = ".wff_grouping_header_value.wff_capitalize_text_transform"
        this.player_class = ".wff_participant_link"
        this.player_shirt_number = '.wff_participant_rank_root.wff_small'
        this.mom_icon = ".icon-mom" //man of the match
        this.tooltip = ".wff_tooltip_root"
        this.elapsed_in_tooltip = ".wff_tooltip_elapsed"
        this.man_of_the_match_text = ".wff_tooltip_participant_text"
    }
    check_links(){
        cy.checkRequestOfLinks(this.lineups_code,this.participant_link,200) //check links of players

        //coaches shouldn't have a link
        cy.get(this.lineups_code).within(()=>{
            cy.get(this.coach_row).should((element)=>{
                const hasSubClass = element.find(this.participant_link).length > 0;
                if(hasSubClass == false){
                    expect(hasSubClass).to.be.false
                }
                else{
                    throw Error
                }
                
            })
        })
    }
    check_visual_elements(){ // add collapse expand arrows
        cy.get(this.lineups_code).within(()=>{
            //check flags
            cy.flag_logo_style(this.flag_logo,"20px","20px","1px solid rgb(204, 204, 204)")
            
            //check substitutions
            cy.circle_icons(this.substitution_out_icon,"20px","20px","cover","pointer")
          
            //check yellow card
            cy.rectangle_icons(this.yellow_card_icon,"14px","20px","pointer")
            
            //check own goal icon           
            cy.circle_icons(this.own_goal_icon,"20px","20px","cover","pointer")
        
            //penalty shootout scored                    
            cy.circle_icons(this.penalty_shootout_scored,"20px","20px","cover","pointer")
            
            //penalty shootout missed            
            cy.circle_icons(this.penalty_shootout_missed,"20px","20px","cover","pointer")
       
            //substitution in
            cy.circle_icons(this.substitution_in_icon,"20px","20px","cover","pointer")
          
            //suspended icon
            cy.rectangle_icons(this.suspended_icon,"14px","20px","pointer")          

            //injured icon            
            cy.circle_icons(this.injured_icon,"20px","20px","cover","pointer")

            //man of the match
            cy.circle_icons(this.mom_icon,"20px","20px","cover","pointer")
        })
    }
    check_ratings(){
        
        cy.get(this.lineups_code).within(()=>{
            //team
            cy.lineups_ratings(this.team_rating_6_7,"rgb(251, 207, 33)")
          
            //players with rating above 
            cy.lineups_ratings(this.player_rating_5_6,"rgb(251, 149, 33)")
          
            //player with rating above 6
            cy.lineups_ratings(this.player_rating_6_7,"rgb(251, 207, 33)")
        
            //players with rating above 7
            cy.lineups_ratings(this.player_rating_7_8,"rgb(154, 230, 0)")
       
            //players with rating above 8 
            cy.lineups_ratings(this.player_rating_8_9,"rgb(0, 194, 92)")           

        })
    }
    expand_collapse_sections(){
        cy.get(this.lineups_code).within(()=>{            
            cy.get(this.expandedArrow).each((element,index)=>{
                cy.wrap(element).click()                
            })
            cy.get(this.collapsedArrow).should("have.length",8)
            .and("have.attr","aria-label","icon-collapsed_arrow")
            .and("be.visible")        
        })
        cy.get(this.lineups_code).within(()=>{
            cy.get(this.collapsedArrow).each((element,index)=>{
                cy.wrap(element).click()
            })
            cy.get(this.expandedArrow).should("have.length",8)
            .and("have.attr","aria-label","icon-expanded_arrow")
            .and("be.visible")
        })
        
    }
    check_headers(){
        cy.get(this.header_class)
        .should("be.visible")
        .and("have.css","font-weight","700")
        .and("have.css","font-size","14px")
    }
    check_texts(){        
        cy.get(this.lineups_code).within(()=>{
            //player names
            // let lg = cy.get(this.participant_link).length
            for (var i = 1 ; i<50;i++){
                if(i == 25){
                    continue
                }else{
                    cy.get(this.participant_link).eq(i).should("be.visible")
                    .and("have.css","font-weight","400")
                    .and("have.css","font-size","14px") 
                }
            }     
            cy.get(this.player_shirt_number).should("be.visible")
            .and("have.css","font-weight","400")
            .and('have.css',"font-size","14px")

        })
        
    }
    check_tooltips(){
        cy.get(this.lineups_code).within(()=>{
            //substitution_out
            cy.get(this.substitution_out_icon).eq(0).trigger("mouseover")
            cy.checkTooltipProperties(this.tooltip,"200px","none","10px","10px","1px solid rgb(229, 229, 229)","rgba(0, 0, 0, 0.05) 0px 5px 10px 0px","blur(10px)")
            cy.get(this.tooltip).within(()=>{
                cy.circle_icons(this.substitution_out_icon,"20px","20px","cover","pointer")
                cy.fontSizeColorMargin(this.elapsed_in_tooltip,"12px","rgb(73, 185, 102)","0px 10px 0px 0px")                
            })
            //substitution in
            cy.get(this.substitution_in_icon).eq(0).trigger("mouseover")
            cy.checkTooltipProperties(this.tooltip,"200px","none","10px","10px","1px solid rgb(229, 229, 229)","rgba(0, 0, 0, 0.05) 0px 5px 10px 0px","blur(10px)")
            cy.get(this.tooltip).within(()=>{
                cy.circle_icons(this.substitution_in_icon,"20px","20px","cover","pointer")
                cy.fontSizeColorMargin(this.elapsed_in_tooltip,"12px","rgb(73, 185, 102)","0px 10px 0px 0px")       
            })
            //penalty shootout scored
            cy.get(this.penalty_shootout_scored).eq(0).trigger("mouseover")
            cy.checkTooltipProperties(this.tooltip,"200px","none","10px","10px","1px solid rgb(229, 229, 229)","rgba(0, 0, 0, 0.05) 0px 5px 10px 0px","blur(10px)")
            cy.get(this.tooltip).within(()=>{
                cy.circle_icons(this.penalty_shootout_scored,"20px","20px","cover","pointer")
                cy.fontSizeColorMargin(this.elapsed_in_tooltip,"12px","rgb(73, 185, 102)","0px 10px 0px 0px")  
            })
            //penalty shootout missed
            cy.get(this.penalty_shootout_missed).eq(0).trigger("mouseover")
            cy.checkTooltipProperties(this.tooltip,"200px","none","10px","10px","1px solid rgb(229, 229, 229)","rgba(0, 0, 0, 0.05) 0px 5px 10px 0px","blur(10px)")
            cy.get(this.tooltip).within(()=>{
                cy.circle_icons(this.penalty_shootout_missed,"20px","20px","cover","pointer")
                cy.fontSizeColorMargin(this.elapsed_in_tooltip,"12px","rgb(73, 185, 102)","0px 10px 0px 0px")  
            })
            //own goal
            cy.get(this.own_goal_icon).eq(0).trigger("mouseover")
            cy.checkTooltipProperties(this.tooltip,"200px","none","10px","10px","1px solid rgb(229, 229, 229)","rgba(0, 0, 0, 0.05) 0px 5px 10px 0px","blur(10px)")
            cy.get(this.tooltip).within(()=>{
                cy.circle_icons(this.own_goal_icon,"20px","20px","cover","pointer")
                cy.fontSizeColorMargin(this.elapsed_in_tooltip,"12px","rgb(73, 185, 102)","0px 10px 0px 0px")  
            })
            //injured
            cy.get(this.injured_icon).eq(0).trigger("mouseover")
            cy.checkTooltipProperties(this.tooltip,"200px","none","10px","10px","1px solid rgb(229, 229, 229)","rgba(0, 0, 0, 0.05) 0px 5px 10px 0px","blur(10px)")
            cy.get(this.tooltip).within(()=>{
                cy.circle_icons(this.injured_icon,"20px","20px","cover","pointer")
                
            })
            //yellow card
            cy.get(this.yellow_card_icon).eq(0).trigger("mouseover")
            cy.checkTooltipProperties(this.tooltip,"200px","none","10px","10px","1px solid rgb(229, 229, 229)","rgba(0, 0, 0, 0.05) 0px 5px 10px 0px","blur(10px)")
            cy.get(this.tooltip).within(()=>{
                cy.rectangle_icons(this.yellow_card_icon,"14px","20px","pointer")  
                cy.fontSizeColorMargin(this.elapsed_in_tooltip,"12px","rgb(73, 185, 102)","0px 10px 0px 0px")  
            })
            //suspended
            cy.get(this.suspended_icon).eq(0).trigger("mouseover")
            cy.checkTooltipProperties(this.tooltip,"200px","none","10px","10px","1px solid rgb(229, 229, 229)","rgba(0, 0, 0, 0.05) 0px 5px 10px 0px","blur(10px)")
            cy.get(this.tooltip).within(()=>{
                cy.rectangle_icons(this.suspended_icon,"14px","20px","pointer")                   
            })
            .trigger("mouseleave")
            //man of the match
            cy.get(this.mom_icon).eq(0).trigger("mouseover")
            cy.checkTooltipProperties(this.tooltip,"130px","none","10px","10px","1px solid rgb(229, 229, 229)","rgba(0, 0, 0, 0.05) 0px 5px 10px 0px","blur(10px)")
            cy.get(this.tooltip).within(()=>{
                cy.get(this.man_of_the_match_text).should("have.attr","aria-label","Man of the Match")
                
            })
            
            


            

        })
    }
}