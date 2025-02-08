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
        cy.get(this.action_map_code).within(()=>{
            cy.get(this.return_back_button)
            .click()
            cy.wait(1000)
            cy.get(this.comment_box).should("be.visible")
            cy.get(this.comment_box).within(()=>{
                cy.get(this.goal_label).should("be.visible")
                .and("have.css","font-size","30px")
                .and("have.css","padding","0px")
                .and("have.css","margin-top","9px")
                .and("have.css","font-size","30px")
                .and("have.css","line-height","35px")
                .and("have.css","letter-spacing","6px")
                .and("have.css","color","rgb(255, 255, 255)")
                .and("have.css","text-shadow","rgb(192, 192, 192) -1px -1px 0px, rgb(192, 192, 192) 1px -1px 0px, rgb(192, 192, 192) -1px 1px 0px, rgb(192, 192, 192) 1px 1px 0px, rgba(0, 0, 0, 0.05) 0px 2px 5px")
            })
            cy.get(this.goal_details).within(()=>{
                cy.get(this.flag_class).should("have.css","width","24px")
                .and("have.css","height","24px")
                // cy.get(this.penalty_scored_icon).should("be.visible")
                // .and("have.css","height","20px")
                // .and("have.css","width","20px")
                cy.get(this.label_text).should("have.attr","aria-label","Scoring i starffesparkskonkurrence")                
            })

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
            cy.get(this.elapsed_circle_intimeline).should("have.attr","style","left: 0%;")
            .and("be.visible")       
        })
        
    }
    click_on_different_event_stages(){
        cy.get(this.action_map_code).within(()=>{
            cy.get(this.timeline_box)
            .should("be.visible") 
            cy.get(this.timeline_box).within(()=>{
                //click on half time
                cy.get(this.halftime_button).click()
                cy.get(this.elapsed_circle_intimeline).should("have.attr","style","left: calc(37% - 26px);")

                //click on FT
                cy.get(this.fulltime_button).click()
                cy.get(this.elapsed_circle_intimeline).should("have.attr","style","left: calc(75% - 26px);")
                //click on OT
                cy.get(this.extraTime_button).click()
                cy.get(this.elapsed_circle_intimeline).should("have.attr","style","left: calc(100% - 26px);")
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
export class widgets_action_map {
    constructor(){
        this.widget_code = ".wff_widget.wff_widget_FWD368461F31A89AB1.wff_widget_large"
        //on the top where the comment appears
        this.incidentCommentBox = ".wff_incident_comment_box_container"
        //below the comment appears where the stats appear
        this.statsWindow = ".wff_single_stat_bar_root"
        //pitch image class
        this.pitchClass = ".wff_action_map_field.wff_wc22_field"
        //navigation buttons
        this.beginningButton = ".wff_action_map_button_beginning.wff_active_button"
        this.previousButton = ".wff_action_map_button_previous.wff_active_button"
        this.nextIncidentButton = ".wff_action_map_next.wff_active_button"
        this.timeline = ".wff_action_map_time_line_container.wff_timeline_responsive_second_half"
        this.penaltyBox = ".wff_penalties_table"
        //flags
        this.flagClass = ".wff_flag_logo_img"
        //icon for report after finished PSS
        this.reportPSSfinish = ".icon-special_game_report.penalty_finish"
        this.elapsedCommentBox = ".wff_elapsed_root.wff_no_injury_time"
        //label text 
        this.labelText = ".wff_label_text"
        //names in the comment box
        this.homeTeamName = ".wff_participant.wff_incident_home_event_participant_name.wff_responsive_text_no_display"
        this.awayTeamName = ".wff_participant.wff_incident_away_event_participant_name.wff_responsive_text_no_display"
        //stats bars
        this.awayBar = ".wff_bar_away"
        this.homeBar = ".wff_bar_home"
        //icons
        this.penaltyScored = ".wff_time_line_icon.wff_timeline_goal.wff_timeline_scored_penalty"
        this.goalScoredRegular = ".wff_time_line_icon.wff_timeline_goal"
        this.yellowCardIcon = ".wff_time_line_icon.wff_timeline_y"
        this.substitutionIcon = ".wff_time_line_icon.wff_timeline_subst"
        this.multiIncident = ".wff_time_line_multiple_incidents"
        this.penaltyScoredTooltip = ".wff_incident_icon.wff_incident_goal_icon.wff_incident_penalty_s"
        this.goalScoredIcon = ".wff_incident_icon.wff_incident_goal_icon"
        //circle with elapsed 
        this.circleElapsed = ".wff_time_line_inprogress"
        //penalty box
        this.penaltyBox = ".wff_penalties_table_body"
        this.ArgentinaFlag = ".wff_country_flag.wff_highres_flags.wff_flags.wff_country_48"
        this.FranceFlag = ".wff_country_flag.wff_highres_flags.wff_flags.wff_country_5"
        //penalty box table header 1,2,3,4
        this.numberOfPenalties = ".wff_penalties_table_header"
        this.penaltyShootOutScored = ".wff_penalty_circle.wff_scored_penalty"
        this.penaltyShootOutMissed = ".wff_penalty_circle.wff_missed_penalty"
        //penalty score
        this.penaltyScore = ".wff_team_penalty.wff_team_penalty_total"
        //stats dots 
        this.dotsStats = ".wff_stat_change_dot"
        this.expectedCardsStatsHeader = "Cards"
        this.expectedShotsHeader = "Shots"
        this.expectedPossessionHeader = "Possession"
        //tooltip
        this.tooltipclass = ".wff_incident_tooltiptext.wff_show_tooltip"
        //icons in tooltip
        this.tooltipElapsed = ".wff_incident_minute"
        this.tooltipYellow = ".wff_incident_icon.wff_incident_ycard"
        this.tooltipSubstitution = ".wff_incident_icon.wff_incident_subst"
        this.tooltipInSub = ".wff_incident_type_sub_in"
        this.tooltipOutSub = ".wff_incident_type_sub_out"
        //checkpoints
        this.halftimeCheckpoint = ".wff_action_map_half_time_point"
        this.fulltimeCheckpoint = ".wff_action_map_full_time_point"
        this.extratimeCheckpoint = ".wff_action_map_extra_time_point"
        //expected values
        this.roundedHeight = 155
        this.expectedMaxWidth = "560px"
        this.timelineMaxWidth = "560px"
        this.flagBorder = "1px solid rgb(204, 204, 204)"
        this.heightFlag = "22px"
        this.widthFlag = "22px"
        this.homeBarStatsColor = "rgb(51, 51, 51)"
        this.nationalFlagHeight = "30px"
        this.nationalFlagWidth = "30px"
        this.expectedWelcomeMessage = "Welcome"
        this.expectedFirstHalfLabel = "1st half"
        this.expectedFontSizeInTooltip = "12px"
        this.expectedHTlabel = "Halftime"
        this.expected1stHalfET ="1st half extra time"
        this.expectedWaitingPenalty = "Waiting for penalty"
        this.expectedLabelPSscored = "Penalty shootout scored"
        this.expectedLabelPSmissed = "Penalty shootout missed, saved by the keeper"
        this.textClassPSComments = ".wff_label_text:eq(1)"
        
    }
    CheckTopVisualComponents(){
        //eventually can be used for matches in progress
        cy.get(this.widget_code).within(()=>{
            // check the comment box ("Argentina was more concentrated during the shoot - out...")
            cy.get(this.incidentCommentBox).should("be.visible")
            .and("have.attr","style","width: 360px; background-size: 360px;")
            .and("have.css","border","2px solid rgb(242, 242, 242)")            

            //check the stats window (Possession, Cards, Shots)
            cy.get(this.statsWindow)
            .should("be.visible")
            .and("have.css","max-width","360px")
            .and("have.css","border","1px solid rgb(242, 242, 242)")

            //check the pitch image
            cy.get(this.pitchClass)
            .should("have.css","background-image",'url("https://es-djs.enetscores.com/img/action_map/world_cup2022/world_cup_field.svg")').invoke("height").then((height)=>{
                let roundedHeight = Math.floor(height)
                cy.wrap(roundedHeight).should("eq",this.roundedHeight)
            })
            cy.get(this.pitchClass)
            .should("have.css","max-width",this.expectedMaxWidth)            
            .and("have.css","aspect-ratio","3.6 / 1")
            })


    }
    VisualBottomComponents(){
        cy.get(this.widget_code).within(()=>{
            //check the beginning button
            cy.get(this.beginningButton)
            .should("be.visible")
            .and("have.css","background-image",'url("https://es-ccss.enetscores.com/img/action_map/world_cup2022/wc_button_beginning.svg")')
            .and("have.css","height","20px")
            .and("have.css","width","32px")
            .and("have.css","cursor","pointer")
            
            //check the previous incident button
            cy.get(this.previousButton)
            .should("be.visible")
            .and("have.css","background-image",'url("https://es-ccss.enetscores.com/img/action_map/world_cup2022/wc_button_prev.svg")')
            .and("have.css","height","20px")
            .and("have.css","width","32px")
            .and("have.css","cursor","pointer")

            //check the next incident button
            cy.get(this.nextIncidentButton)
            .should("be.visible")
            .and("have.css","background-image",'url("https://es-ccss.enetscores.com/img/action_map/world_cup2022/wc_button_next.svg")')
            .and("have.css","height","20px")
            .and("have.css","width","32px")
            .and("have.css","cursor","pointer")

            //check the timeline
            cy.get(this.timeline)
            .should("be.visible")
            .and("have.css","max-width",this.timelineMaxWidth)
            .and("have.css","border","1px solid rgb(242, 242, 242)")
            .and("have.css","border-radius","10px")            
           

        })
    }
    CheckVisualElements(){
        //Checks flags, dots, icons
        //Check flags in the comment box 
        cy.get(this.widget_code).within(()=>{
            cy.get(this.incidentCommentBox)
            .find(this.flagClass)
            .should("be.visible")
            .and("have.css","border",this.flagBorder)
            .and("have.css","height",this.heightFlag)
            .and("have.css","width",this.widthFlag)

            //check the icon of the comment about the report for finished after penalties
            cy.get(this.reportPSSfinish)
            .should("be.visible")
            .and("have.css","height","20px")
            .and("have.css","width","20px")

            //check elapsed in the comment box
            cy.get(this.elapsedCommentBox)
            .should("be.visible")
            .and("have.css","color","rgb(22, 211, 112)")
            .and("have.css","font-size","14px")

            //check the comment's properties
            cy.get(this.incidentCommentBox)
            .find(this.labelText)
            .should("be.visible")
            .and("have.css","text-align","left")
            .and("have.css","font-size","12px")

            //Check the comments window team names
            //home team
            cy.get(this.incidentCommentBox)
            .find(this.homeTeamName)
            .should("be.visible")
            .and("have.css","font-size","14px")
            .and("have.css","font-weight","700")
            //away team
            cy.get(this.incidentCommentBox)
            .find(this.awayTeamName)
            .should("be.visible")
            .and("have.css","font-size","14px")
            .and("have.css","font-weight","700")

            //check the properties in the stats box
            //check flags
            cy.get(this.statsWindow)
            .find(this.flagClass)
            .should("be.visible")
            .and("have.css","height","22px")
            .and("have.css","width","22px")

            //Check the possession header
            cy.get(this.statsWindow)
            .find(this.labelText)
            .should("be.visible")
            .and("have.css","font-weight","600")
            .and("have.css","font-size","14px")
            .and("have.css","color","rgb(0, 0, 0)")

            //check the stats bars
            cy.get(this.statsWindow)
            .find(this.homeBar)
            .should("be.visible")
            .and("have.css","color",this.homeBarStatsColor)
            .and("have.css","height","8px")       
        })

    }
    CheckTimelineVisual(PenaltyBox){
        const LowerCaseText = PenaltyBox.toLowerCase();
        
            cy.get(this.widget_code).within(()=>{
                //check the timeline all visual elements
                cy.get(this.timeline)
                //check the penalty scored icon
                .find(this.penaltyScored)
                .should("be.visible")
                .and("have.css","height","20px")
                .and("have.css","width","20px")
                .and("have.css","background-image",'url("https://es-ccss.enetscores.com/img/action_map/world_cup2022/penalty_goal.svg")')

                //check the goal scored icon
                cy.get(this.timeline)
                .find(this.goalScoredRegular)
                .should("be.visible")
                .and("have.css","height","20px")
                .and("have.css","width","20px")
                .and("have.css","background-image",'url("https://es-ccss.enetscores.com/img/action_map/world_cup2022/penalty_goal.svg")')
                //yellow card
                cy.get(this.yellowCardIcon)
                .should("be.visible")
                .and("have.css","height","20px")
                .and("have.css","width","20px")
                .and("have.css","background-image",'url("https://es-ccss.enetscores.com/img/action_map/world_cup2022/y.svg")')
                //susbstitution 
                cy.get(this.timeline)
                .find(this.substitutionIcon)
                .should("be.visible")
                .and("have.css","height","20px")
                .and("have.css","width","20px")
                .and("have.css","background-image",'url("https://es-ccss.enetscores.com/img/action_map/world_cup2022/subst.svg")')
                //multiple incidnets
                cy.get(this.timeline)
                .find(this.multiIncident)
                .should("be.visible")
                .and("have.css","height","20px")
                .and("have.css","width","20px")
                .and("have.css","background-image",'url("https://es-ccss.enetscores.com/img/action_map/world_cup2022/multi.svg")')
                //circle elapsed
                cy.get(this.timeline)
                .find(this.circleElapsed)
                .should("be.visible")
                .and("have.css","height","22px")
                .and("have.css","width","22px")
                .and("have.css","background-color","rgb(22, 211, 112)") //green for the background of the circle
                .and("have.css","color","rgb(255, 255, 255)") // white for the text

                //big flags
                cy.get(this.timeline)
                .find(this.flagClass)
                .should("be.visible")
                .and("have.css","border","1px solid rgb(204, 204, 204)")
                
            })
        if(LowerCaseText === "penaltybox"){
            cy.get(this.widget_code).within(()=>{
                cy.get(this.penaltyBox)
                .should("be.visible")
                .and("have.css","display","flex")
                .and("have.css","align-items","flex-end")

                 //check the penalty box
                cy.get(this.penaltyBox)
                .should("be.visible")
                .and("have.css","display","flex")
                .and("have.css","border","0px none rgb(0, 0, 0)")

                //check the flags 
                //argentina
                cy.get(this.penaltyBox)
                .find(this.ArgentinaFlag)
                .should("be.visible")
                .and("have.css","width",this.nationalFlagWidth)
                .and("have.css","height",this.nationalFlagHeight)
                .and("have.css","padding","0px 5px")
                //france
                cy.get(this.penaltyBox)
                .find(this.FranceFlag)
                .should("be.visible")
                .and("have.css","width",this.nationalFlagWidth)
                .and("have.css","height",this.nationalFlagHeight)
                .and("have.css","padding","0px 5px")
                //check the order of the penalties
                cy.get(".wff_penalty_number")
                .should("be.visible")
                .and("have.css","display","flex")
                .and("have.css","padding","0px")
                .and("have.css","font-size","12px")

                //check the circles of the penalties    
                //scored penalties
                cy.get(this.penaltyShootOutScored)
                .should("be.visible")
                .and("have.css","background-color","rgb(22, 211, 112)")
                .and("have.css","width","10px")
                .and("have.css","height","10px")
                .and("have.css","border","0px none rgb(0, 0, 0)")
                //missed penalties
                cy.get(this.penaltyShootOutMissed)
                .should("be.visible")
                .and("have.css","background-color","rgb(238, 64, 64)")
                .and("have.css","width","10px")
                .and("have.css","height","10px")
                .and("have.css","border","0px none rgb(0, 0, 0)")
                //penalty score
                cy.get(this.penaltyScore)
                .should('be.visible')
                .and("have.css","font-size","14px")
                .and("have.css","font-weight","700")
            })
        }
    }
    //check functionalities
    CheckStatsButtons(){
      cy.get(this.widget_code).within(()=>{
        cy.get(this.statsWindow)
        .find(this.dotsStats).eq(1).click()
        //assert the header is cards
        cy.get(this.statsWindow)
        .find(this.labelText).eq(0).invoke("text").then((text)=>{
            let trimmedText = text.trim()
            cy.wrap(trimmedText).should("eq",this.expectedCardsStatsHeader)
        })

        //click the third button
        cy.get(this.statsWindow)
        .find(this.dotsStats).eq(2).click()
        cy.get(this.statsWindow)
        .find(this.labelText).eq(0).invoke("text").then((text)=>{
            let trimmedText = text.trim()
            cy.wrap(trimmedText).should("eq",this.expectedShotsHeader)
        })

        //return to the possession
        cy.get(this.statsWindow)
        .find(this.dotsStats).eq(0).click()
        cy.get(this.statsWindow)
        .find(this.labelText).eq(0).invoke("text").then((text)=>{
            let trimmedText = text.trim()
            cy.wrap(trimmedText).should("eq",this.expectedPossessionHeader)
        })
      })  
    }
    CheckReplayButtons(){
        cy.get(this.widget_code).within(()=>{
            //return to the beginning
            cy.get(this.beginningButton).click()
            .wait(250)
            cy.get(this.incidentCommentBox)
            .find(this.labelText).eq(0).invoke("text").then((text)=>{
                let newTrimmedText = text.trim()
                cy.wrap(newTrimmedText).should("include",this.expectedWelcomeMessage)
            })
            //go to next comment
            cy.get(this.nextIncidentButton).click({force:true})
            .wait(2500)
            cy.get(this.incidentCommentBox)
            .find(this.labelText).eq(0).invoke("text").then((text)=>{
                let newTrimmedTextTwo = text.trim()
                cy.wrap(newTrimmedTextTwo).should("eq",this.expectedFirstHalfLabel)
            })
            // //go to the previous comment
            cy.get(this.previousButton).click()
            //the widget is slow and broken we'll have a redesign of it at some point this is why the code below is not in use
            // cy.get(this.incidentCommentBox)
            // .find(this.labelText).eq(0).invoke("text").then((text)=>{
            //     let newTrimmedTextThree = text.trim()
            //     cy.wrap(newTrimmedTextThree).should("include","Welcome")
            // })
        })
    }
    CheckTooltips(){
        cy.get(this.widget_code).within(()=>{
            //penalty scored
            cy.get(this.penaltyScored)
            .trigger("mouseover")
            cy.wait(250)
            cy.get(this.tooltipclass)
            .should("be.visible")            
            .find(this.penaltyScoredTooltip)
            .should("have.css","width","20px")
            .and("have.css","height","20px")
            //goal scored
            cy.get(this.goalScoredRegular).eq(1)
            .trigger("mouseover")
            .find(this.goalScoredIcon)
            .should("be.visible")
            .and("have.css","width","20px")
            .and("have.css","height","20px")
            //elapsed minute
            cy.get(this.tooltipclass)
            .find(this.tooltipElapsed)
            .should("have.css","color","rgb(22, 211, 112)")
            .and("have.css", "font-size","14px")
            .and("have.css","font-weight",'700')

            //check yellow card
            cy.get(this.yellowCardIcon).eq(0)
            .trigger('mouseover')
            cy.get(this.tooltipclass)
            .find(this.tooltipYellow)
            .should("be.visible")
            .and("have.css","height","20px")
            .and("have.css","width","20px")

            cy.get(this.yellowCardIcon).eq(0)
            .trigger('mouseleave')

            //check substitution
            cy.get(this.substitutionIcon).eq(0)
            .trigger('mouseover')
            cy.get(this.tooltipclass)
            .find(this.tooltipSubstitution)
            .should("be.visible")
            .and("have.css","height","20px")
            .and("have.css","width","20px")
            //label "IN"
            cy.get(this.tooltipInSub)            
            .should("have.css","color","rgb(119, 221, 85)")
            .and("have.css","font-size","12px")

            //label "OUT"
            cy.get(this.tooltipOutSub)
            .should("have.css","color","rgb(238, 64, 64)")
            .and("have.css","font-size","12px")

            cy.get(this.substitutionIcon).eq(0)
            .trigger('mouseleave')
            //multiple incidents in the same minute
            cy.get(this.multiIncident).eq(8)
            .trigger('mouseover')
            cy.get(this.tooltipclass)
            .find(this.substitutionIcon)
            .should("be.visible")
            .and("have.css","height","20px")
            .and("have.css","width","20px")
            //label "IN"
            cy.get(this.tooltipInSub)            
            .should("have.css","color","rgb(119, 221, 85)")
            .and("have.css","font-size",this.expectedFontSizeInTooltip)

            //label "OUT"
            cy.get(this.tooltipOutSub)
            .should("have.css","color","rgb(238, 64, 64)")
            .and("have.css","font-size",this.expectedFontSizeInTooltip)

            //extratime icon
            cy.get(this.goalScoredRegular)
            .should("be.visible")
            .and("have.css","width","20px")
            .and("have.css","height","20px")
            cy.get(this.multiIncident).eq(3)
            .click()


        })
    }
    CheckpointsFunctionalities(){
        function clickAndInvoke(element,incidentBox,textClass,expectedText){
            cy.get(element).click({force:true})
            .wait(500)
            cy.get(incidentBox)
            .find(textClass).invoke("text").then((text)=>{
                let myText = text.trim()
                cy.wrap(myText).should("eq",expectedText)
            })
        }
        cy.get(this.widget_code).within(()=>{
            //halftime button
            clickAndInvoke(this.halftimeCheckpoint,this.incidentCommentBox,this.labelText,this.expectedHTlabel)
            //ft button
            clickAndInvoke(this.fulltimeCheckpoint,this.incidentCommentBox,this.labelText,this.expected1stHalfET)
            //et
            clickAndInvoke(this.extratimeCheckpoint,this.incidentCommentBox,this.labelText,this.expectedWaitingPenalty)
         
        })
    }
    PenaltyFunctionalities(){
        function clickAndInvokeChild(element,childElement,incidentBox,textClass,expectedText){
            cy.get(element)
            .find(childElement).eq(0).click({force:true})
            .wait(500)
            cy.get(incidentBox)
            .find(textClass).invoke("text").then((text)=>{
                let myText = text.trim()
                cy.wrap(myText).should("eq",expectedText)
            })
        }
        cy.get(this.widget_code).within(()=>{
            clickAndInvokeChild(this.penaltyBox,this.penaltyShootOutScored,this.incidentCommentBox,this.textClassPSComments,this.expectedLabelPSscored)
            cy.wait(500)
            clickAndInvokeChild(this.penaltyBox,this.penaltyShootOutMissed,this.incidentCommentBox,this.textClassPSComments,this.expectedLabelPSmissed)
        })
    }
}