export class event_info_po{
    constructor(){
        this.event_info_code = '[id="wff_event_info_generic_soccer_FW7E2EA9FC85D2CF9A"]'
        this.home_flag = ".wff_flag_and_logo_container.wff_home"
        this.away_flag = ".wff_flag_and_logo_container.wff_away"
        this.int_flag_stage = ".wff_flag_and_logo_container.wff_national_team"
        this.bg_image = ".wff_bgimage"
        this.score_box = ".wff_event_result_single_row_wrapper"
        this.score_values = ".wff_event_result_single_row_participant_result"
        this.penalty_score = ".wff_penalty_result"
        this.status_circle = ".wff_event_status"
        this.stage_name = ".wff_stage_name"
        this.round_name = ".wff_draw_round_name.wff_round_label"
        this.date = ".wff_event_date"
        this.time = ".wff_event_time"
        this.venue = ".wff_event_venue"
        this.team_names = ".wff_participant_link"
        this.status_text = ".wff_status_value.wff_uppercase_text_transform"
        this.tooltip_class = ".wff_tooltip_root"
    }
    check_visual_elements(){
        //team flags
        cy.get(this.event_info_code).within(()=>{
            cy.threeMarginsRight(this.home_flag,"60px","60px","60px","10px","3px","3px")

            cy.threeMarginsLeft(this.away_flag,"60px","60px","60px","10px","3px","3px")

            //international stage flag
            cy.heightMarginRightWidth(this.int_flag_stage,"20px","20px","20px","22px")
 
            //background image
            cy.get(this.bg_image)
            .should("be.visible")
            .and("have.css","background-image",'url("https://es-bimg.enetscores.com/img/sports_banners/wc_soccer_banner_blurred.webp")')
            .and("have.css","z-index","0")
            .and("have.css","border-radius","10px")
            .and("have.css","background-size","cover")
            .and("have.css","background-position","50% 80%")
        })
    }
    check_score_box(){
        cy.get(this.event_info_code).within(()=>{
            cy.scoreBoxProperties(this.score_box,"flex","center","center","rgb(0, 0, 0)","rgb(255, 255, 255)","1px solid rgb(241, 241, 241)","rgba(0, 0, 0, 0.25) 0px 0px 20px 0px","40px","border-box","122px","60px")

            //check the result
            cy.WeightSize(this.score_values,"34px","700")
    
            //check penalty score
            cy.penaltyScore(this.penalty_score,"rgba(0, 0, 0, 0.25) 0px 0px 5px 0px","-2px","-10px","22px","22px","14px","700")
       
            //check status circle
            cy.statusCircle(this.status_circle,"rgb(176, 176, 176)","30px","48px","30px","30px","40px","rgba(0, 0, 0, 0.25) 0px 0px 5px 0px","absolute","-30px","0px 2.5px","-0.42px","10px")

        })
    }
    check_texts(){
        cy.get(this.event_info_code).within(()=>{
            //stage text
            cy.stageName(this.stage_name,"ellipsis","block","hidden","400","capitalize","12px")
      
            //round text
            cy.WeightSize(this.round_name,"12px","400")
            cy.get(this.round_name)
            .should("be.visible")            
            .and("have.css","visibility","visible")
            //date
            cy.get(this.date)
            .should("be.visible")
            cy.textTransBoxSize(this.date,"none","border-box")
            cy.WeightSize(this.date,"12px","400")
            
            //time
            cy.get(this.time)
            .should("be.visible")
            cy.textTransBoxSize(this.time,"none","border-box")
            cy.WeightSize(this.time,"12px","400")

            //venue
            cy.get(this.venue)
            .should("be.visible")
            .and("have.css","color","rgb(255, 255, 255)")
            cy.ffWeight_ffSize_textTrans(this.venue,"700","14px","capitalize")      

            //team names
            cy.teamNames(this.team_names,"visible","100%","none solid rgb(255, 255, 255)","rgb(255, 255, 255)","border-box","700","20px")
   
            //text in the status
            cy.get(this.status_text)
            .should("be.visible")
            .and("have.css","color","rgb(255, 255, 255)")
            .and("have.css","text-transform","uppercase")
            cy.WeightSize(this.status_text,"12px","400")

        })
    }
    check_tooltip(){
        cy.get(this.event_info_code).within(()=>{
            cy.get(".wff_status_value.wff_uppercase_text_transform").click()
            cy.flexDirection_alignItems(this.tooltip_class,"column","center")
            cy.bgColor_height_bRadius(this.tooltip_class,"rgb(0, 0, 0)","18px","5px")
            cy.bgColor_fWeight_fSize_color_border(this.tooltip_class,"400","12px","rgb(255, 255, 255)","rgb(0, 0, 0)","1px solid rgb(0, 0, 0)")
            cy.zIndexPaddingDisplayRounded(this.tooltip_class,"1","flex",105,"absolute","26px","8px 5px","center","default","15px","matrix(1, 0, 0, 1, 52.6094, 0)")
           
        })
    }
}