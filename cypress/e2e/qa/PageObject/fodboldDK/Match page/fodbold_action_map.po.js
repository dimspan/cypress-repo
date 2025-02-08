export class action_map_fodbold_po {
    constructor(){
        this.action_map_code = ".wff_widget.wff_widget_FWD8B2062625E4FCD8.wff_widget_medium"
        this.comment_box = ".wff_incident_comment_box_container"
        this.flag_class = ".wff_flag_logo_img"
        this.names_in_comment_box = ".wff_participant_name.wff_responsive_text"
        this.elapsed = ".wff_elapsed_root.wff_no_injury_time"
        this.comment_icon = ".icon-f-ap_:eq(1)"
        this.label_text = ".wff_label_text"
        this.stats_box = ".wff_single_stat_bar_container"
        this.change_dot = ".wff_stat_change_dot"
        this.return_back_button = ".wff_action_map_button_previous.wff_active_button"
        this.goal_label = ".wff_label_text.wff_incident_cmt_goal_label"
        this.goal_details = ".wff_incident_comment_goal_details"
        this.penalty_scored_icon = ".icon-goal_opposite_direction.right_foot:goalkeeper.wff_icon_goal_p"
        this.return_to_beginning_button = ".wff_action_map_button_beginning.wff_active_button"
        this.team_names_class = ".wff_participant_name.wff_responsive_text"
        this.elapsed_circle_intimeline = ".wff_time_line_inprogress"
        this.timeline_box = ".wff_action_map_time_line_container.wff_timeline_responsive_second_half"
        this.halftime_button =".wff_action_map_half_time_point"
        this.fulltime_button = ".wff_action_map_full_time_point"
        this.extraTime_button = ".wff_action_map_extra_time_point"
        this.multi_incidents_icon = ".wff_time_line_multiple_incidents"
        this.tooltip = ".wff_incident_tooltiptext.wff_show_tooltip"
        this.yellow_card_icon = ".wff_time_line_icon.wff_timeline_y" //in the tooltip
        this.substitution_tooltip_icon = ".wff_time_line_icon.wff_timeline_subst"
        this.goal_icon_tooltip = ".wff_time_line_icon.wff_timeline_goal"
        this.row_in_tooltip = ".wff_incident_row:eq(4)"
        this.elapsed_root = ".wff_elapsed_root"
        this.yellow_card_comment_box = ".icon-card_unsportsmanlike.cond_y.wff_icon_card_yellow"
        this.penalty_box = ".wff_penalties_table_body"
        this.team_logo_in_penalty_box = ".wff_team_logo"
        this.missed_penalty_in_penalty_box = ".wff_penalty_circle.wff_missed_penalty"
        }
    check_boxes_finished_match(){
        cy.get(this.action_map_code).within(()=>{
            //check comment box properties
            cy.get(this.comment_box)
            .should("be.visible")
            .and("have.css","width","360px")
            .and("have.css","background-size","360px")
            .and("have.css","flex-direction","column")
            .and("have.css","padding","16px 14px")
            .and("have.css","border-radius","10px")
            .and("have.css","box-sizing","border-box")
            //check all flags in the boxes
            cy.get(this.flag_class)
            .should("be.visible")
            .and("have.css","width","24px")
            .and("have.css","height","24px")
            //check elements in comment box
            
            //check the names
            cy.get(this.names_in_comment_box)
            .should("have.css","font-weight","700")
            .and("have.css","font-size","14px")
            .and("be.visible")
            //check elapsed time 
            cy.get(this.elapsed)
            .should("be.visible")
            .and("have.css","color","rgb(22, 211, 112)")
            .and("have.css","font-weight","600")
            .and("have.css","font-size","14px")
            .and("be.visible")
            //check comment icon
            cy.get(this.comment_icon)
            .should("be.visible")
            .and("have.css","height","20px")
            .and("have.css","width","20px")
            //slut efter straffe
            cy.get(this.label_text)
            .should("be.visible")
            .and("have.attr","aria-label","Slut efter straffe")

            //stats box
            cy.get(this.stats_box)
            .should("be.visible")
            .and("have.css","width","400px")
            .and("have.css","height","109px")

            
        })
    }
    check_other_statistics(){
        cy.get(this.action_map_code).within(()=>{
            cy.get(this.label_text).eq(1)
            .should("have.attr","aria-label","Boldbesiddelse")
            //check attributes for second stats button (Kort)
            cy.get(this.change_dot).eq(1).click()
            cy.get(this.label_text).eq(1)
            .should("have.attr","aria-label","Kort")
            cy.get(this.stats_box).within(()=>{
                cy.get(this.label_text).eq(1)
                .should("have.attr","aria-label","Gult")
                cy.get(this.label_text).eq(2)
                .should("have.attr","aria-label","Rødt")
                
            })
            //check attributes for third stats button (Skud)
            cy.get(this.change_dot).eq(2).click()
            cy.get(this.label_text).eq(1)
            .should("have.attr","aria-label","Skud")
            cy.get(this.stats_box).within(()=>{
                cy.get(this.label_text).eq(1)
                .should("have.attr","aria-label","På mål")
                cy.get(this.label_text).eq(2)
                .should("have.attr","aria-label","Forbi mål")
                
            })

        })               
    }
    check_functionalities(){
        // cy.get(this.action_map_code).within(()=>{
        //     cy.get(".wff_action_map_button_beginning.wff_active_button") // go back to the beginning of the match
        //     .click()
        //     cy.wait(2000)
        //     cy.get(this.comment_box).should("be.visible")
        //     cy.get(this.comment_box).within(()=>{
        //         cy.get(".wff_label_text").should("be.visible")
        //         .and("have.css","font-size","12px")
        //         // .and("have.css","padding","0px")
        //         .and("have.css","margin-top","0px")
        //         // .and("have.css","font-size","30px")
        //         .and("have.css","line-height","35px")
        //         .and("have.css","letter-spacing","6px")
        //         .and("have.css","color","rgb(255, 255, 255)")
        //         // .and("have.css","text-shadow","rgb(192, 192, 192) -1px -1px 0px, rgb(192, 192, 192) 1px -1px 0px, rgb(192, 192, 192) -1px 1px 0px, rgb(192, 192, 192) 1px 1px 0px, rgba(0, 0, 0, 0.05) 0px 2px 5px")
        //     })
        //     cy.get(this.goal_details).within(()=>{
        //         cy.get(this.flag_class).should("have.css","width","24px")
        //         .and("have.css","height","24px")
        //         // cy.get(this.penalty_scored_icon).should("be.visible")
        //         // .and("have.css","height","20px")
        //         // .and("have.css","width","20px")
        //         cy.get(this.label_text).should("have.attr","aria-label","Scoring i starffesparkskonkurrence")                
        //     })

            //return to beginning
            cy.get(this.return_to_beginning_button).click()
            cy.wait(500)
            cy.get(this.comment_box)
            .find(this.team_names_class).should("be.visible")
            .and("have.css","font-weight","700")
            .and("have.css","font-size","14px")
            cy.get(this.comment_box).within(()=>{
                cy.get(this.label_text).invoke("attr","aria-label").then((attr)=>{
                    cy.expect(attr).to.contain("Velkommen til ")
                })
            })
            cy.get(this.elapsed_circle_intimeline).should("have.attr","style","left: calc(100% - 26px);")
            .and("be.visible")       
        // })
        
    }
    click_on_different_event_stages(){
        cy.get(this.action_map_code).within(()=>{
            cy.get(this.timeline_box)
            .should("be.visible") 
            cy.get(this.timeline_box).within(()=>{
                //click on half time
                cy.get(this.halftime_button).click()
                cy.get(this.elapsed_circle_intimeline).should("have.attr","style","left: calc(26% - 26px);")

                //click on FT
                cy.get(this.fulltime_button).click()
                cy.get(this.elapsed_circle_intimeline).should("have.attr","style","left: calc(37% - 26px);")
                //click on OT
                cy.get(this.extraTime_button).click()
                cy.get(this.elapsed_circle_intimeline).should("have.attr","style","left: calc(68% - 26px);")
            })      
            
        })
    }
    check_tooltips(){
        cy.get(this.action_map_code).within(()=>{
            cy.get(this.multi_incidents_icon).eq(2).trigger("mouseover")
            cy.get(this.tooltip).should("be.visible")
            .and("have.css","bottom","239px")            
            .and("have.css","right","0px")
            .and("have.css","opacity","1")
            //check left css position
            cy.get(this.tooltip).invoke("css","left").then((left)=>{
                let rounded = Math.floor(parseFloat(left))
                cy.expect(rounded).to.eql(-316)
            })
            cy.get(this.tooltip).within(()=>{
                cy.get(this.yellow_card_icon).should("be.visible")
                cy.get(this.substitution_tooltip_icon).should("be.visible")
                cy.get(this.goal_icon_tooltip).should("be.visible")
                //click on a certain incident
                cy.get(this.row_in_tooltip).click()
            })
            cy.get(this.comment_box).within(()=>{
                cy.get(this.elapsed_root).should("have.attr","aria-label","Minute: 120;+10;")
                cy.get(this.yellow_card_comment_box).should("be.visible")
                cy.get(this.names_in_comment_box).should("have.attr","aria-label","Participant: Lucas Ocampos")
            })
        })  
    }
    check_penalty_box(){
        cy.get(this.action_map_code).within(()=>{
            cy.get(this.penalty_box).should("be.visible")
            .and("have.css","display","flex")
            .and("have.css","align-items","flex-end")
            cy.get(this.team_logo_in_penalty_box).should("be.visible")
            .and("have.css","height","33px")
            .and("have.css","width","30px")
            //click on missed penalty
            cy.get(this.missed_penalty_in_penalty_box).eq(1).click()
            cy.get(this.comment_box).within(()=>{
                cy.get(this.goal_label).should("have.attr","aria-label","Straffe brændt") //checks the header of the comment box (on top of the widget)

            })
        })
    }
}