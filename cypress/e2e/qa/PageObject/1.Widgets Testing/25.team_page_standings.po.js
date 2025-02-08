export class standings_team_page_po {
    constructor(){
        this.holdHeader = ".wff_table_header_cell.wff_standings_team"
        this.tooltip = ".wff_tooltip_root"
        this.tooltipTextClass = ".wff_tooltip_participant_text"
        this.championsLeague = ".wff_table_row_column_content_wrapper.wff_championsleague"
        this.uefaCup = ".wff_table_row_column_content_wrapper.wff_uefacup"
        this.participantClass = ".wff_participant.wff_responsive_text_no_display"
        this.flagContainer = ".wff_flag_and_logo_container"
        this.headerClass = ".wff_table_header_cell.wff_standings_stats_box"
        this.standingsSmall = ".wff_widget.wff_widget_FW31379CE25E2C9F60.wff_widget_small.wff_standings_soccer"
        this.standingsWide = ".wff_widget.wff_widget_FW31379CE25E2C9F60.wff_widget_wide.wff_standings_soccer"
        this.largeVundneKampeStillingTab = ".wff_table_header_cell.wff_standings_stats_box:eq(1)" //wide header
        this.uafgjortStillingTab = ".wff_table_header_cell.wff_standings_stats_box:eq(2)" //wide header
        this.tabtStillingTab = ".wff_table_header_cell.wff_standings_stats_box:eq(3)" //wide header
        this.malStillingTab = ".wff_table_header_cell.wff_standings_stats_box:eq(4)" //wide header
        this.diffStillingTab = ".wff_table_header_cell.wff_standings_stats_box:eq(5)" //wide header
        this.pointStillingTab = ".wff_table_header_cell.wff_standings_stats_box:eq(6)" //wide header
        this.formStillingTab = ".wff_table_header_cell.wff_standings_form"
        this.kampeSpillet = ".wff_table_header_cell.wff_standings_stats_box:eq(0)"
        this.fixtureForm = ".wff_form_ball.wff_form_fxtr:eq(0)"
        this.fixtureFormStandingsTeamPage = ".wff_form_ball.wff_form_fxtr:eq(1)"
        this.eventInfoSmall = ".wff_widget.wff_standings_event_info.wff_widget_FW31379CE25E2C9F60.wff_widget_small"
        this.formContainer = ".wff_table_row_column.wff_standings_form:eq(1)"
        this.pointStillingTabMultiStage = ".wff_table_header_cell.wff_standings_stats_box:eq(5)"
        this.participant_link = ".wff_participant_link"
    }
    standingsWidgetStillingTab(){
        //check if the widget exists
        cy.get(this.standingsWide).should("exist").and("be.visible")
        //checks the design of the headers}
        //hold
        cy.PositionWeightSizeTextTransform(this.holdHeader,"relative","700","14px","capitalize")        
        
        cy.ffWeight_ffSize_textTrans(this.headerClass,"700","14px","capitalize")    
            
        //check the legend
        //champions league
        if(this.championsLeague == ".wff_table_row_column_content_wrapper.wff_qualification_to_next_stage"){//for multi-stage (groups) they should be 16 this class is from champions league standings 
            cy.get(this.championsLeague).should("have.length",16)
        }else{
            cy.get(this.championsLeague).should("have.length",4)
        }
        
        cy.get(this.championsLeague)
        .should("have.css","border-radius","50%")
        .and("have.css","width","24px")
        .and("have.css","height","24px")
        .and("have.css","margin","10px")
        if(this.championsLeague != ".wff_table_row_column_content_wrapper.wff_qualification_to_next_stage"){
             //europa league
        cy.get(this.uefaCup).should("have.length",1)
        cy.MarginBorderRadiusWidthHeight(this.uefaCup,"50%","24px","24px","10px")   
    
        //count the participants
        cy.get(this.standingsWide).within(()=>{
            cy.length_fsize_fstyle(this.participantClass,20,"14px","normal")
        })
        
        }
        else if (this.championsLeague == ".wff_table_row_column_content_wrapper.wff_qualification_to_next_stage"){
            cy.get(this.standingsWide).within(()=>{
                cy.length_fsize_fstyle(this.participantClass,32,"14px","normal")
            })
           
        }else{
            throw Error
        }
       
        
        //check the flags
        cy.get(this.standingsWide).within(()=>{
            cy.get(this.flagContainer)
                if(this.flagContainer == ".wff_flag_logo_img"){
                    cy.width_height_minwidth(this.flagContainer,"20px","20px","auto")
                }
                else{
                    cy.width_height_minwidth(this.flagContainer,"20px","20px","20px")           
                }
        })
        
           
            
        
    }
    standingsStillingHeaders(){
           //checks the headers text
         
        //hold   
        cy.textEqualTo(this.standingsWide,this.holdHeader,"Hold")
     
        //kampe spillet
        cy.textEqualTo(this.standingsWide,this.kampeSpillet,"K")
        //mal
        cy.textEqualTo(this.standingsWide,this.malStillingTab,"Mål")
        //vundnekampe
        cy.textEqualTo(this.standingsWide,this.largeVundneKampeStillingTab,"V")
        //uafgjort
         cy.textEqualTo(this.standingsWide,this.uafgjortStillingTab,"U")  
         //tabt
         cy.textEqualTo(this.standingsWide,this.tabtStillingTab,"T")
         //Diff
         cy.textEqualTo(this.standingsWide,this.diffStillingTab,"DIFF.")
         //Point
         cy.textEqualTo(this.standingsWide,this.pointStillingTab,"P")  
    }
    pcTooltipsStillingTab(){
        //checks the tooltips
        //kampeSpillet
        cy.get(this.standingsWide).find(this.kampeSpillet).trigger("mouseover")
        cy.get(this.tooltip).should("exist").and("be.visible")
        //check the text
        cy.textEqualTo(this.tooltip,this.tooltipTextClass,"Kampe spillet")
        
        //vundne kampe 
        cy.get(this.standingsWide).find(this.largeVundneKampeStillingTab).trigger("mouseover")
        cy.get(this.tooltip).should("exist").and("be.visible")
        //check the text
        cy.textEqualTo(this.tooltip,this.tooltipTextClass,"Vundne kampe")
        
        //uafgjort
        cy.get(this.standingsWide).find(this.uafgjortStillingTab).trigger("mouseover")
        cy.get(this.tooltip).should("exist").and("be.visible")
        //check the text
        cy.textEqualTo(this.tooltip,this.tooltipTextClass,"Uafgjort")

        //tabt
        cy.get(this.standingsWide).find(this.tabtStillingTab).trigger("mouseover")
        cy.get(this.tooltip).should("exist").and("be.visible")
        //check the text
        cy.textEqualTo(this.tooltip,this.tooltipTextClass,"Tabt")

        //mal
        cy.get(this.standingsWide).find(this.malStillingTab).trigger("mouseover")
        cy.get(this.tooltip).should("exist").and("be.visible")
        //check the text
        cy.textEqualTo(this.tooltip,this.tooltipTextClass,"Mål")

        //diff
        cy.get(this.standingsWide).find(this.diffStillingTab).trigger("mouseover")
        cy.get(this.tooltip).should("exist").and("be.visible")
        //check the text
        cy.textEqualTo(this.tooltip,this.tooltipTextClass,"Forskel")

        //point
        cy.get(this.standingsWide).find(this.pointStillingTab).trigger("mouseover")
        cy.get(this.tooltip).should("exist").and("be.visible")
        //check the text
        cy.textEqualTo(this.tooltip,this.tooltipTextClass,"Point")

        //form this is removed
        // cy.get(this.standingsWide).find('.wff_table_header_cell.wff_standings_form').contains("Form").trigger("mouseover")
        // cy.get(this.tooltip).should("exist").and("be.visible")
        // //check the text
        // cy.textEqualTo(this.tooltip,this.tooltipTextClass,"Form")
    }
    formTooltip(){
        cy.get(this.fixtureForm).should("exist").and("be.visible")
        cy.border_height_width_bgcolor(this.fixtureForm,"0px none rgb(0, 0, 0)","20px","20px","rgb(224, 224, 224)")

        cy.get(this.fixtureForm).trigger("mouseover")
        cy.get(this.eventInfoSmall).should("exist").and("be.visible")


    }
    formTooltipTeamPage(){
        cy.get(this.standingsWide).within(()=>{
            cy.get(this.fixtureFormStandingsTeamPage).should("exist").and("be.visible")
            cy.border_height_width_bgcolor(this.fixtureFormStandingsTeamPage,"0px none rgb(0, 0, 0)","20px","20px","rgb(224, 224, 224)")
            
        })

        cy.get(this.fixtureFormStandingsTeamPage).click({force:true})
        cy.get(this.eventInfoSmall).should("exist").and("be.visible")
    }
    roundedCorners(){
        try{
            cy.get(this.formContainer)
            cy.bottom_radius(this.formContainer,"5px","5px")  
        }
        catch(error){
            console.error("An error occurred:",error.message)
            throw Error
        }
    }
    matchStandingsTooltipHeaders(){
        cy.get(this.standingsWide).find(this.kampeSpillet).trigger("mouseover")
        cy.get(this.tooltip).should("exist").and("be.visible")
        cy.get(this.kampeSpillet).should("have.css","font","700 14px Roboto, sans-serif")
        .and("have.css","color","rgb(0, 0, 0)")
        //check the text
        cy.textEqualTo(this.tooltip,this.tooltipTextClass,"Kampe spillet")

        cy.get(this.standingsWide).find(this.malStillingTab).trigger("mouseover")
        cy.get(this.tooltip).should("exist").and("be.visible")
        cy.get(this.malStillingTab).should("have.css","font","700 14px Roboto, sans-serif")
        .and("have.css","color","rgb(0, 0, 0)")
        //check the text
        cy.textEqualTo(this.tooltip,this.tooltipTextClass,"Mål")

        cy.get(this.standingsWide).find(this.pointStillingTabMultiStage).click(17,15)
        cy.get(this.tooltip).should("exist").and("be.visible")
        cy.get(this.pointStillingTabMultiStage).should("have.css","font","700 14px Roboto, sans-serif")
        .and("have.css","color","rgb(0, 0, 0)")
        //check the text
        cy.textEqualTo(this.tooltip,this.tooltipTextClass,"Point")



    }
    check_names_links(){
        cy.checkRequestOfLinks(this.standingsWide,this.participant_link,200)
       
    }
}