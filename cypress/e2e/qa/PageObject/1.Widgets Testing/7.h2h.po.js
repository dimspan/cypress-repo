export class ice_hockey_h2h_po{
    constructor(){
        this.h2h_code = ".wff_widget.wff_widget_FWE26DA5441FC45E23.wff_widget_small:eq(0)"
        this.headers = ".wff_h2h_section_data_header"
        this.flags = ".wff_flag_logo_img"
        this.form_icons_draw= ".wff_stats_ball_container.wff_circle_value_l_ot"
        this.form_icons_win = ".wff_stats_ball_container.wff_circle_value_w"
        this.form_icons_lost = ".wff_stats_ball_container.wff_circle_value_l"
        this.stats_ball = ".wff_stats_ball"
        this.score_boxes = ".wff_event_result_single_row_container.wff_event_finished"
        this.score = ".wff_event_result_single_row_container.wff_event_finished"
        this.penalty_score_home = ".wff_penalty_result:eq(0)"
        this.penalty_score_away = ".wff_penalty_result:eq(1)"
        this.status_and_date_wrapper = ".wff_event_name_time_status_wrapper"
        this.event_start_time = ".wff_event_start_time"
        this.event_status = ".wff_event_status.wff_has_start_time"
        this.icon_expanded_arrow = ".icon-expanded_arrow"
        this.section_header = ".wff_h2h_section_data_header"
        this.collapsed_arrow = ".icon-collapsed_arrow"
        this.match_status = ".wff_event_status.wff_has_start_time"
        
    }
    check_headers(){
        cy.get(this.h2h_code).within(()=>{
            cy.get(this.headers)
            .should("be.visible")            
            .and("have.css","background-color","rgb(241, 241, 241)")            
            cy.Margin_Border_Padding_Height_Radius_Color(this.headers,"10px","5px","0px","1px solid rgba(0, 0, 0, 0.08)","42px","rgb(0, 0, 0)")
        })
    }
    check_visual_elements(){
        cy.get(this.h2h_code).within(()=>{
            //check flags
            cy.widthHeight(this.flags,"20px","20px")
            cy.get(this.flags)
            .should("have.css","aspect-ratio","auto 20 / 20")
            //check the header section properties
            cy.Margin_Border_Padding_Height_Radius_Color(this.section_header,"10px","5px","0px","1px solid rgba(0, 0, 0, 0.08)","42px","rgb(0, 0, 0)")
            cy.get(this.section_header)
            .should("be.visible")
            .and("have.css","min-width","100%")
            .and("have.css","background-color","rgb(241, 241, 241)")
            //check collapsing arrow of sections
            cy.backgroundImage(this.icon_expanded_arrow,"20px","20px",'url("https://es-bimg.enetscores.com/img/h2h/expanded_arrow.svg")')
            cy.get(this.icon_expanded_arrow)
            .should("have.css","background-position","50% 50%")

            //check the form icons        
            // cy.get(this.form_icons_draw)
            //     cy.formIcons(this.form_icons_draw,"center","flex","center","100%")
               
            //     cy.widthHeight(this.stats_ball,"20px","20px")           
            
            cy.get(this.form_icons_win)
                cy.formIcons(this.form_icons_win,"center","flex","center","100%")
               
                cy.widthHeight(this.stats_ball,"20px","20px")
              
        
            cy.get(this.form_icons_lost)
                cy.formIcons(this.form_icons_lost,"center","flex","center","100%")
               
                cy.widthHeight(this.stats_ball,"20px","20px")
               
            

            //check team names font-weight and status font-weight
            cy.WeightSize(this.match_status,"12px","700")
            cy.get(".wff_participant_name.wff_responsive_text").eq(0).should("have.css","font","700 14px Roboto, sans-serif")
            .and("have.css","font-weight","700")
        })
    }
    check_score_boxes(){
        cy.get(this.h2h_code).within(()=>{
            cy.Height_Width_Border(this.score_boxes,"50px","26px","1px solid rgb(241, 241, 241)")
            cy.get(this.score_boxes)
            .should("be.visible")
            .and("have.css","position","static")
            .and("have.css","z-index","auto")

            //check score
            cy.get(this.score)
            .should("be.visible")
            .and("have.css","font-size","14px")            
            .and("have.css","border","1px solid rgb(241, 241, 241)")
            //check penalty score
            cy.penaltyScoreMultiple(this.penalty_score_home,"10px","14px","14px","50%","1px solid rgb(201, 201, 201)","center","center","absolute","18px","-4px")
            cy.penaltyScoreMultiple(this.penalty_score_away,"10px","14px","14px","50%","1px solid rgb(201, 201, 201)","center","center","absolute","18px","40px")
           

        })
    }
    check_status_and_date(){
        cy.get(this.h2h_code).within(()=>{
            cy.get(this.status_and_date_wrapper)
            .should("have.css","margin-right","0px")
            .and("have.css","font-size","18px")
            //check date
            cy.get(this.event_start_time).should("be.visible")
            .and("have.css","font-size","12px")
            .and("have.css","font-weight","400")
            .and("have.css","text-transform","capitalize")
            cy.get(this.event_start_time).each((element,index)=>{
                cy.wrap(element).invoke("text").then((text)=>{
                    let trimmed_text = text.trim()
                    cy.expect(trimmed_text).to.match(/\d{1,2}\.\s\w+\s\d{4}/)
                })
            })
            //check status
            cy.get(this.event_status)
            .should("be.visible")
            .and("have.css","flex-wrap","wrap")
            .and("have.css","justify-content","center")
            
            cy.WeightSize(this.event_status,"12px","700")
            cy.flexDirection_alignItems(this.event_status,"column","center")
            cy.get(this.event_status).each((element,index)=>{
                cy.wrap(element).invoke("text").then((status_text)=>{
                    let trimmed_status_text = status_text.trim()
                    const expectedValues = ["SES","SLUT","SET","FIN","FAP","FOT"]
                    cy.expect(expectedValues).to.include(trimmed_status_text)
                })
            })
        })
    }
    check_collapsing_functionality(){
        cy.get(this.h2h_code).within(()=>{
            cy.get(this.score_boxes)
            .should("have.length","15")
            cy.get(this.section_header).each((element,index)=>{
                cy.wrap(element).click()
                
            })
            cy.get(this.score_boxes).should("not.exist")
            
            // cy.get(this.score_boxes).should("have.length","10")
            // cy.get(this.collapsed_arrow)
            // .should("exist")
            // .and("be.visible")
        })
    }
    // add cases for tabs
}