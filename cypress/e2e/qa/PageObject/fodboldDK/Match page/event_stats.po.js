export class event_stats_fodbold{
    constructor(){
        this.event_stats_code = '[id="wff_event_stats_generic_soccer_FWF8FF8366D632FA39"]'
        this.flag = ".wff_flag_and_logo_container.wff_national_team"
        this.stats_bars = ".wff_stats_bar"
        this.stats_home_bars = ".wff_bar_home"
        this.stats_away_bars = ".wff_bar_away"
        this.team_names = ".wff_participant_link"
        this.participant_responsive_text = ".wff_participant.wff_responsive_text"
        this.stats_value = ".wff_stats_value"
        this.stats_bars_value = ".wff_stats_bars_value"
        this.header_class = ".wff_label_text.wff_stat_category_name"
        this.half_tabs = ".wff_event_stats_scope"

    }
    check_visual_elements(){
        cy.get(this.event_stats_code).within(()=>{
            //team flags
            cy.width_height_minwidth(this.flag,"20px","20px","20px")
 
            //bars
            cy.marginBottom_position_display(this.stats_bars,"10px","relative","flex")
      
            //home
            cy.bgColor_height_bRadius(this.stats_home_bars,"rgb(51, 51, 51)","10px","10px 0px 0px 10px")

            //away
            cy.bgColor_height_bRadius(this.stats_away_bars,"rgb(165, 165, 165)","10px","0px 10px 10px 0px")
        })
    }
    check_text_elements(){  
        cy.get(this.event_stats_code).within(()=>{
            // team names 
            cy.WeightSize(this.team_names,"14px","700")

            cy.alignItems_display_fWeight_overflow_whiteSpace_textOverflow(this.participant_responsive_text,"flex","center","700","hidden","nowrap","ellipsis")
        

            //check stats 
            cy.WeightSize(this.stats_value,"14px","400") 
            
            cy.padding_height_alignItems_color(this.stats_bars_value,"0px","30px","center","rgb(0, 0, 0)")            
            //check headers
            cy.letterSpacing_height_display_alignItems_justifyContent_textTransform(this.header_class,"-0.32px","50px","flex","center","center","14px","700","none")
 
        })
    }
    check_tabs_in_ev_stats(){
        cy.get(this.event_stats_code).within(()=>{
            cy.border_borderRadius_height_margin(this.half_tabs,"1px solid rgb(229, 229, 229)","5px","30px","0px")
        
            for(var i = 3; i > -1; i--){
                cy.get(this.half_tabs).eq(i)
                .click()
                
            } 
            
            
                    
                    
        })              
    }        
}