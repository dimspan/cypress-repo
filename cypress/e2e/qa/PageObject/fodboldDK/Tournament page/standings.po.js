export class standings_po{
    constructor(){
        this.standingsWidgetMedium =".wff_widget.wff_widget_FW31379CE25E2C9F60.wff_widget_medium.wff_standings_soccer"
        this.holdHeader = ".wff_table_header_cell.wff_standings_team"
        this.kampeSpillet = ".wff_table_header_cell.wff_standings_stats_box:eq(0)"
        this.mal = ".wff_table_header_cell.wff_standings_stats_box:eq(1)"
        this.point = ".wff_table_header_cell.wff_standings_stats_box:eq(2)"
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
    }standingsWidget(){  
        //check if the widget exists
        cy.get(this.standingsWidgetMedium).should("exist").and("be.visible")
        
            //checks the design of the headers}
        //hold
        cy.PositionWeightSizeTextTransform(this.holdHeader,"relative","700","14px","capitalize")
        cy.ffWeight_ffSize_textTrans(this.headerClass,"700","14px","capitalize")
       
        
        //checks the headers text
         
        //hold   
        cy.textEqualTo(this.standingsWidgetMedium,this.holdHeader,"Hold")
     
        //kampe spillet
        cy.textEqualTo(this.standingsWidgetMedium,this.kampeSpillet,"K")
        //mal
        cy.textEqualTo(this.standingsWidgetMedium,this.mal,"Mål")
        //point
        cy.textEqualTo(this.standingsWidgetMedium,this.point,"P")        
        
        
        //check the legend
        //champions league
        cy.get(this.championsLeague).should("have.length",4)
        cy.MarginBorderRadiusWidthHeight(this.championsLeague,"50%","24px","24px","10px")
    
        //europa league
        cy.get(this.uefaCup).should("have.length",1)
        cy.MarginBorderRadiusWidthHeight(this.uefaCup,"50%","24px","24px","10px")   
    
        //count the participants
        cy.get(this.standingsWidgetMedium).within(()=>{
            cy.length_fsize_fstyle(this.participantClass,20,"14px","normal")        
        })
        
        
        //check the flags
        cy.minWidthAndWidth(this.flagContainer,"20px","20px","20px")        
    }
    pcTooltips(){
        //checks the tooltips
        //kampeSpillet
        cy.get(this.standingsWidgetMedium).find(this.kampeSpillet).trigger("mouseover")
        .wait(500)
        cy.get(this.tooltip).should("exist").and("be.visible")
        //check the text
        cy.textEqualTo(this.tooltip,this.tooltipTextClass,"Kampe spillet")
        
        //mal 
        cy.get(this.standingsWidgetMedium).find(this.mal).trigger("mouseover")
        cy.get(this.tooltip).should("exist").and("be.visible")
        //check the text
        cy.textEqualTo(this.tooltip,this.tooltipTextClass,"Mål")
        
        //point it's not in use at the moment because it causes troubles in CI/CD
        // cy.get(this.standingsWidgetMedium).find(this.point).trigger("mouseover")
        // cy.get(this.tooltip).should("exist").and("be.visible")
        //check the text
        // cy.textEqualTo(this.tooltip,this.tooltipTextClass,"Point")
    }
    standingsWidgetMobile(){  
        //check if the widget exists
        cy.get(this.standingsSmall).should("exist").and("be.visible")
        //checks the design of the headers}
        //hold
        cy.PositionWeightSizeTextTransform(this.holdHeader,"relative","700","14px","capitalize")
        
        cy.ffWeight_ffSize_textTrans(this.headerClass,"700","14px","capitalize")       
        
        //checks the headers text
         
        //hold   
        cy.textEqualTo(this.standingsSmall,this.holdHeader,"Hold")
     
        //kampe spillet
        cy.textEqualTo(this.standingsSmall,this.kampeSpillet,"K")
        //mal
        cy.textEqualTo(this.standingsSmall,this.mal,"Mål")
        //point
        cy.textEqualTo(this.standingsSmall,this.point,"P")      
        
        
        
        
        //check the legend
        //champions league
        cy.get(this.championsLeague).should("have.length",4)
        cy.MarginBorderRadiusWidthHeight(this.championsLeague,"50%","24px","24px","10px") 
    
        //europa league
        cy.get(this.uefaCup).should("have.length",1)
        cy.MarginBorderRadiusWidthHeight(this.uefaCup,"50%","24px","24px","10px")    
    
        //count the participants
        cy.get(this.standingsSmall).within(()=>{
            cy.length_fsize_fstyle(this.participantClass,20,"14px","normal")          
            //check the flags
            cy.minWidthAndWidth(this.flagContainer,"20px","20px","20px")       
        
        })       
        
    }
    mobileTooltips(){
        //checks the tooltips
        //point
        const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
        Cypress.on('uncaught:exception', (err) => {
            /* returning false here prevents Cypress from failing the test */
            if (resizeObserverLoopErrRe.test(err.message)) {
                return false
            }
        })
        cy.get(this.standingsSmall).within(()=>{
            cy.get(this.point).click({x: 18, y: 18 });
            cy.wait(1000)
            cy.get(this.tooltip).should("exist").and("be.visible")
        })
       
        //check the text
        cy.textEqualTo(this.tooltip,this.tooltipTextClass,"Point")
    
    
        //kampeSpillet
        cy.get(this.standingsSmall).find(this.kampeSpillet).click()
        cy.get(this.tooltip).should("exist").and("be.visible")
        //check the text
        cy.textEqualTo(this.tooltip,this.tooltipTextClass,"Kampe spillet")
        
        //mal 
        cy.get(this.standingsSmall).find(this.mal).click()
        cy.get(this.tooltip).should("exist").and("be.visible")
        //check the text
        cy.textEqualTo(this.tooltip,this.tooltipTextClass,"Mål")
        // console.log(this.tool)
        cy.get(this.standingsSmall).find(this.mal).click()
    }
}