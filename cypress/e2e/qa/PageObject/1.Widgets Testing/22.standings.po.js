export class ice_hockey_standings_po{
    constructor(){
        this.easternConference =".wff_standings_generic_content.wff_standings_conf_eastern.wff_standings_conf_title"
        this.westernConference = ".wff_standings_generic_content.wff_standings_conf_western.wff_standings_conf_title"
        this.iconDropDown = ".icon-drop_down"
        this.iconDropUp = ".icon-drop_up"
        this.atlanticDivision = ".wff_standings_generic_content.wff_standings_eastern_atlantic"
        this.metropolitanDivision = ".wff_standings_generic_content.wff_standings_eastern_metropolitan"
        this.pacificDivision = ".wff_standings_generic_content.wff_standings_western_pacific"
        this.centralDivision = ".wff_standings_generic_content.wff_standings_western_central"
        this.standingsHockeyWidget = ".wff_widget.wff_widget_FWD0DB8011943A0BC9.wff_widget_large.wff_standings_icehockey"
        this.teamHeader = ".wff_table_header_cell.wff_standings_team"
        this.matchesPlayed = ".wff_table_header_cell.wff_standings_stats_box:eq(0)"
        this.wins = ".wff_table_header_cell.wff_standings_stats_box:eq(1)"
        this.overtimeLoses = ".wff_table_header_cell.wff_standings_stats_box:eq(2)"
        this.lostMatches = ".wff_table_header_cell.wff_standings_stats_box:eq(3)"
        this.goals = ".wff_table_header_cell.wff_standings_stats_box:eq(4)"
        this.points = ".wff_table_header_cell.wff_standings_stats_box:eq(5)"
        this.tooltip = ".wff_tooltip_root"
        this.tooltipTextClass = ".wff_tooltip_participant_text"
        this.championsLeague = ".wff_standings_position_marker.wff_division_championship_playoff"
        this.uefaCup = ".wff_standings_position_marker.wff_wildcard_qualification"
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
        this.formHeader = ".wff_table_header_cell.wff_standings_form"
        this.dropdownsClass = ".wff_dropdowns"
        this.standingsType = ".wff_standing_type_select.wff_closed"
        this.seasonSelector = ".wff_tournament_selector.wff_closed"
        this.filterDropdown = ".wff_standing_type_selector_list"
        this.seasonDropdown = ".wff_tournament_selector_list"
        this.label_text = ".wff_label_text"

    }conferencesCheck(){  
        
        //check if the widget exists
        cy.get(this.standingsHockeyWidget).within(()=>{
        // -------------------------EASTERN CONFERENCE-------------------
        cy.get(this.easternConference).should("exist").and("be.visible")
        
        //checks the design of the headers}
        //hold
        cy.PositionWeightSizeTextTransform(this.teamHeader,"relative","700","14px","capitalize")
        cy.ffWeight_ffSize_textTrans(this.headerClass,"700","14px","capitalize")
       
        
        //checks the headers text
         
        //team   
        cy.textEqualTo(this.easternConference,this.teamHeader,"Team")
     
        //matches played
        cy.textEqualTo(this.easternConference,this.matchesPlayed,"MP")
        //wins
        cy.textEqualTo(this.easternConference,this.wins,"W")
        //point
        cy.textEqualTo(this.easternConference,this.overtimeLoses,"OTL")        
        //Lost matches
        cy.textEqualTo(this.easternConference,this.lostMatches,"L")
        //Goals
        cy.textEqualTo(this.easternConference,this.goals,"Goals")          
        //Pts
        cy.textEqualTo(this.easternConference,this.points,"Pts")
        //form
        cy.textEqualTo(this.easternConference,this.formHeader,"Form")          
        
        //check the legend
        //champions league
            cy.get(this.easternConference).within(()=>{
                cy.get(this.championsLeague).should("have.length",6)
                cy.MarginBorderRadiusWidthHeight(this.championsLeague,"50%","24px","24px","3px 0px 0px")
        
                //europa league
                cy.get(this.uefaCup).should("have.length",2)
                cy.MarginBorderRadiusWidthHeight(this.uefaCup,"50%","24px","24px","3px 0px 0px")   
            
                //count the participants
                
                cy.length_fsize_fstyle(this.participantClass,16,"14px","normal")        
          
            
            
            //check the flags
            cy.minWidthAndWidth(this.flagContainer,"20px","20px","20px")  
            })
        })
        // -------------------------WESTERN CONFERENCE-------------------
        cy.get(this.easternConference).should("exist").and("be.visible")
        
        //checks the design of the headers}
        //hold
        cy.PositionWeightSizeTextTransform(this.teamHeader,"relative","700","14px","capitalize")
        cy.ffWeight_ffSize_textTrans(this.headerClass,"700","14px","capitalize")
       
        
        //checks the headers text
         
        //team   
        cy.textEqualTo(this.westernConference,this.teamHeader,"Team")
     
        //matches played
        cy.textEqualTo(this.westernConference,this.matchesPlayed,"MP")
        //wins
        cy.textEqualTo(this.westernConference,this.wins,"W")
        //point
        cy.textEqualTo(this.westernConference,this.overtimeLoses,"OTL")        
        //Lost matches
        cy.textEqualTo(this.westernConference,this.lostMatches,"L")
        //Goals
        cy.textEqualTo(this.westernConference,this.goals,"Goals")          
        //Pts
        cy.textEqualTo(this.westernConference,this.points,"Pts")
        //form
        cy.textEqualTo(this.westernConference,this.formHeader,"Form")          
        
        //check the legend
        //champions league
            cy.get(this.westernConference).within(()=>{
                cy.get(this.championsLeague).should("have.length",6)
                cy.MarginBorderRadiusWidthHeight(this.championsLeague,"50%","24px","24px","3px 0px 0px")
        
                //europa league
                cy.get(this.uefaCup).should("have.length",2)
                cy.MarginBorderRadiusWidthHeight(this.uefaCup,"50%","24px","24px","3px 0px 0px")   
            
                //count the participants
                
                cy.length_fsize_fstyle(this.participantClass,16,"14px","normal")        
          
            
            
            //check the flags
            cy.minWidthAndWidth(this.flagContainer,"20px","20px","20px")  
            })
        
    }
    divisionsCheck(){  
        
        //check if the widget exists
        // -------------------------ATLANTIC DIVISION-------------------
        cy.get(this.standingsHockeyWidget).within(()=>{
        
        
        cy.get(this.atlanticDivision).should("exist").and("be.visible")
        cy.get(this.atlanticDivision).find(this.iconDropDown).click()
        cy.get(this.atlanticDivision).find(this.iconDropUp).should("be.visible")
        
        //checks the design of the headers}
        //hold
        cy.PositionWeightSizeTextTransform(this.teamHeader,"relative","700","14px","capitalize")
        cy.ffWeight_ffSize_textTrans(this.headerClass,"700","14px","capitalize")
       
        
        //checks the headers text
         
        //team   
        cy.textEqualTo(this.atlanticDivision,this.teamHeader,"Team")
     
        //matches played
        cy.textEqualTo(this.atlanticDivision,this.matchesPlayed,"MP")
        //wins
        cy.textEqualTo(this.atlanticDivision,this.wins,"W")
        //point
        cy.textEqualTo(this.atlanticDivision,this.overtimeLoses,"OTL")        
        //Lost matches
        cy.textEqualTo(this.atlanticDivision,this.lostMatches,"L")
        //Goals
        cy.textEqualTo(this.atlanticDivision,this.goals,"Goals")          
        //Pts
        cy.textEqualTo(this.atlanticDivision,this.points,"Pts")
        //form
        cy.textEqualTo(this.atlanticDivision,this.formHeader,"Form")          
        
        //check the legend
        //playoffs
            cy.get(this.atlanticDivision).within(()=>{
                cy.get(this.championsLeague).should("have.length",3)
                cy.MarginBorderRadiusWidthHeight(this.championsLeague,"50%","24px","24px","3px 0px 0px")
        
                //wildcard league
                cy.get(this.uefaCup).should("have.length",1)
                cy.MarginBorderRadiusWidthHeight(this.uefaCup,"50%","24px","24px","3px 0px 0px")   
            
                //count the participants
                
                cy.length_fsize_fstyle(this.participantClass,8,"14px","normal")        
          
            
            
            //check the flags
            cy.minWidthAndWidth(this.flagContainer,"20px","20px","20px")  
            })
        })
        
        // -------------------------METROPOLITAN DIVISION-------------------
        cy.get(this.standingsHockeyWidget).within(()=>{


        cy.get(this.metropolitanDivision).should("exist").and("be.visible")
        cy.get(this.metropolitanDivision).find(this.iconDropDown).click()
        cy.get(this.metropolitanDivision).find(this.iconDropUp).should("be.visible")
        
        //checks the design of the headers}
        //hold
        cy.PositionWeightSizeTextTransform(this.teamHeader,"relative","700","14px","capitalize")
        cy.ffWeight_ffSize_textTrans(this.headerClass,"700","14px","capitalize")
       
        
        //checks the headers text
         
        //team   
        cy.textEqualTo(this.metropolitanDivision,this.teamHeader,"Team")
     
        //matches played
        cy.textEqualTo(this.metropolitanDivision,this.matchesPlayed,"MP")
        //wins
        cy.textEqualTo(this.metropolitanDivision,this.wins,"W")
        //point
        cy.textEqualTo(this.metropolitanDivision,this.overtimeLoses,"OTL")        
        //Lost matches
        cy.textEqualTo(this.metropolitanDivision,this.lostMatches,"L")
        //Goals
        cy.textEqualTo(this.metropolitanDivision,this.goals,"Goals")          
        //Pts
        cy.textEqualTo(this.metropolitanDivision,this.points,"Pts")
        //form
        cy.textEqualTo(this.metropolitanDivision,this.formHeader,"Form")          
        
        //check the legend
        //champions league
            cy.get(this.metropolitanDivision).within(()=>{
                cy.get(this.championsLeague).should("have.length",3)
                cy.MarginBorderRadiusWidthHeight(this.championsLeague,"50%","24px","24px","3px 0px 0px")
        
                //europa league
                cy.get(this.uefaCup).should("have.length",1)
                cy.MarginBorderRadiusWidthHeight(this.uefaCup,"50%","24px","24px","3px 0px 0px")   
            
                //count the participants
                
                cy.length_fsize_fstyle(this.participantClass,8,"14px","normal")        
          
            
            
            //check the flags
            cy.minWidthAndWidth(this.flagContainer,"20px","20px","20px")  
            })
        })
         // -------------------------PACIFIC DIVISION-------------------
         cy.get(this.standingsHockeyWidget).within(()=>{


            cy.get(this.pacificDivision).should("exist").and("be.visible")
            cy.get(this.pacificDivision).find(this.iconDropDown).click()
            cy.get(this.pacificDivision).find(this.iconDropUp).should("be.visible")
            
            //checks the design of the headers}
            //hold
            cy.PositionWeightSizeTextTransform(this.teamHeader,"relative","700","14px","capitalize")
            cy.ffWeight_ffSize_textTrans(this.headerClass,"700","14px","capitalize")
           
            
            //checks the headers text
             
            //team   
            cy.textEqualTo(this.pacificDivision,this.teamHeader,"Team")
         
            //matches played
            cy.textEqualTo(this.pacificDivision,this.matchesPlayed,"MP")
            //wins
            cy.textEqualTo(this.pacificDivision,this.wins,"W")
            //point
            cy.textEqualTo(this.pacificDivision,this.overtimeLoses,"OTL")        
            //Lost matches
            cy.textEqualTo(this.pacificDivision,this.lostMatches,"L")
            //Goals
            cy.textEqualTo(this.pacificDivision,this.goals,"Goals")          
            //Pts
            cy.textEqualTo(this.pacificDivision,this.points,"Pts")
            //form
            cy.textEqualTo(this.pacificDivision,this.formHeader,"Form")          
            
            //check the legend
            //champions league
                cy.get(this.pacificDivision).within(()=>{
                    cy.get(this.championsLeague).should("have.length",3)
                    cy.MarginBorderRadiusWidthHeight(this.championsLeague,"50%","24px","24px","3px 0px 0px")
            
                    //europa league
                    cy.get(this.uefaCup).should("have.length",1)
                    cy.MarginBorderRadiusWidthHeight(this.uefaCup,"50%","24px","24px","3px 0px 0px")   
                
                    //count the participants
                    
                    cy.length_fsize_fstyle(this.participantClass,8,"14px","normal")        
              
                
                
                //check the flags
                cy.minWidthAndWidth(this.flagContainer,"20px","20px","20px")  
                })
        })
         // -------------------------CENTRAL DIVISION-------------------
         cy.get(this.standingsHockeyWidget).within(()=>{


            cy.get(this.centralDivision).should("exist").and("be.visible")
            cy.get(this.centralDivision).find(this.iconDropDown).click()
            cy.get(this.centralDivision).find(this.iconDropUp).should("be.visible")
            
            //checks the design of the headers}
            //hold
            cy.PositionWeightSizeTextTransform(this.teamHeader,"relative","700","14px","capitalize")
            cy.ffWeight_ffSize_textTrans(this.headerClass,"700","14px","capitalize")
           
            
            //checks the headers text
             
            //team   
            cy.textEqualTo(this.centralDivision,this.teamHeader,"Team")
         
            //matches played
            cy.textEqualTo(this.centralDivision,this.matchesPlayed,"MP")
            //wins
            cy.textEqualTo(this.centralDivision,this.wins,"W")
            //point
            cy.textEqualTo(this.centralDivision,this.overtimeLoses,"OTL")        
            //Lost matches
            cy.textEqualTo(this.centralDivision,this.lostMatches,"L")
            //Goals
            cy.textEqualTo(this.centralDivision,this.goals,"Goals")          
            //Pts
            cy.textEqualTo(this.centralDivision,this.points,"Pts")
            //form
            cy.textEqualTo(this.centralDivision,this.formHeader,"Form")          
            
            //check the legend
            //champions league
                cy.get(this.centralDivision).within(()=>{
                    cy.get(this.championsLeague).should("have.length",3)
                    cy.MarginBorderRadiusWidthHeight(this.championsLeague,"50%","24px","24px","3px 0px 0px")
            
                    //europa league
                    cy.get(this.uefaCup).should("have.length",1)
                    cy.MarginBorderRadiusWidthHeight(this.uefaCup,"50%","24px","24px","3px 0px 0px")   
                
                    //count the participants
                    
                    cy.length_fsize_fstyle(this.participantClass,8,"14px","normal")        
              
                
                
                //check the flags
                cy.minWidthAndWidth(this.flagContainer,"20px","20px","20px")  
                })
            })
        
    }
    pcTooltips(){
        //checks the tooltips
        //kampeSpillet
        cy.get(this.easternConference).find(this.matchesPlayed).trigger("mouseover").wait(200)
        cy.get(this.tooltip).should("exist").and("be.visible")
        //check the text
        cy.textEqualTo(this.tooltip,this.tooltipTextClass,"Matches Played")
        
        //mal 
        cy.get(this.westernConference).find(this.wins).trigger("mouseover")
        cy.get(this.tooltip).should("exist").and("be.visible")
        //check the text
        cy.textEqualTo(this.tooltip,this.tooltipTextClass,"Won Matches")
        
        //OTL
        cy.get(this.atlanticDivision).find(this.overtimeLoses).trigger("mouseover")
        cy.get(this.tooltip).should("exist").and("be.visible")
        //check the text
        cy.textEqualTo(this.tooltip,this.tooltipTextClass,"Overtime losses")

        //Lost matches
        cy.get(this.metropolitanDivision).find(this.lostMatches).trigger("mouseover")
        cy.get(this.tooltip).should("exist").and("be.visible")
        //check the text
        cy.textEqualTo(this.tooltip,this.tooltipTextClass,"Lost Matches")        


        //Goals
        cy.get(this.pacificDivision).find(this.goals).trigger("mouseover")
        cy.get(this.tooltip).should("exist").and("be.visible")
        //check the text
        cy.textEqualTo(this.tooltip,this.tooltipTextClass,"Goals") 


        //Points
        cy.get(this.centralDivision).find(this.points).trigger("mouseover")
        cy.get(this.tooltip).should("exist").and("be.visible")
        //check the text
        cy.textEqualTo(this.tooltip,this.tooltipTextClass,"Points") 
    }
    standingsWidgetMobile(){  
        //check if the widget exists
        cy.get(this.standingsSmall).should("exist").and("be.visible")
        //checks the design of the headers}
        //hold
        cy.PositionWeightSizeTextTransform(this.teamHeader,"relative","700","14px","capitalize")
        
        cy.ffWeight_ffSize_textTrans(this.headerClass,"700","14px","capitalize")       
        
        //checks the headers text
         
        //hold   
        cy.textEqualTo(this.standingsSmall,this.teamHeader,"Hold")
     
        //kampe spillet
        cy.textEqualTo(this.standingsSmall,this.matchesPlayed,"K")
        //mal
        cy.textEqualTo(this.standingsSmall,this.wins,"Mål")
        //point
        cy.textEqualTo(this.standingsSmall,this.overtimeLoses,"P")      
        
        
        
        
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
            cy.get(this.overtimeLoses).click(18,18)
            cy.wait(1000)
            cy.get(this.tooltip).should("exist").and("be.visible")
        })
       
        //check the text
        cy.textEqualTo(this.tooltip,this.tooltipTextClass,"Point")
    
    
        //kampeSpillet
        cy.get(this.standingsSmall).find(this.matchesPlayed).click()
        cy.get(this.tooltip).should("exist").and("be.visible")
        //check the text
        cy.textEqualTo(this.tooltip,this.tooltipTextClass,"Kampe spillet")
        
        //mal 
        cy.get(this.standingsSmall).find(this.wins).click()
        cy.get(this.tooltip).should("exist").and("be.visible")
        //check the text
        cy.textEqualTo(this.tooltip,this.tooltipTextClass,"Mål")
        // console.log(this.tool)
        cy.get(this.standingsSmall).find(this.wins).click()
    }
    minimizeAllSections(){
        cy.get(this.standingsHockeyWidget).within(()=>{
            cy.get(this.iconDropUp).should("have.length",6)
            cy.get(this.iconDropUp).each((element,index)=>{
                cy.wrap(element).click()
            })
            cy.get(this.iconDropDown).should("have.length",6)


        })
    }
    //tests for the dropdowns
    dropdownVisual(){
        cy.get(this.standingsHockeyWidget).within(()=>{
            //filter
            cy.get(this.dropdownsClass)
            .should("be.visible")
            .and("have.css","margin-bottom","0px")
            cy.widthHeight(this.standingsType,"84px","30px")
          
            cy.bgColor_fWeight_fSize_color_border(this.standingsType,"400","14px","rgb(0, 0, 0)","rgb(255, 255, 255)","1px solid rgb(229, 229, 229)")

            //season
            cy.get(this.seasonSelector)
            .should("be.visible")
            .and("have.css","margin-bottom","0px")
            cy.widthHeight(this.seasonSelector,"84px","30px")
            cy.bgColor_fWeight_fSize_color_border(this.seasonSelector,"400","14px","rgb(0, 0, 0)","rgb(255, 255, 255)","1px solid rgb(229, 229, 229)")

            //filter opened
            cy.get(this.standingsType).click()
            cy.get(this.filterDropdown).should("be.visible")
            .and("have.css","top","34px")
            cy.zIndexPaddingDisplay(this.filterDropdown,"1","block","87px","absolute","-118px","10px 0px","normal","pointer","-5px","none")

            //season opened
            cy.get(this.seasonSelector).click()
            cy.get(this.seasonDropdown).should("be.visible")
            .and("have.css","top","34px")
            cy.zIndexPaddingDisplay(this.seasonDropdown,"1","block","87px","absolute","-266px","10px 0px","normal","pointer","-5px","none")
            //text values
            // cy.get(this.filterDropdown).within(()=>{
            //     cy.WeightSize(".wff_standing_type_selector_list_item","11px","400")
            // })
            // cy.get(this.seasonDropdown).within(()=>{
            //     cy.WeightSize(".wff_standing_type_selector_list_item","11px","400")
            // })
         

        })
    }
    dropdownFunctional(){
        const $clicked = Cypress.$(".wff_standing_type_select.wff_clicked")
        if($clicked.length >= 1){
            cy.get($clicked).click()
        }
        cy.get(this.standingsHockeyWidget).within(()=>{
             // to close everything 
            cy.get(this.standingsType).click()
            cy.get(this.filterDropdown).should("be.visible")           
            cy.get(this.filterDropdown).within(()=>{
                cy.get(this.label_text).eq(0).invoke("text").then((text)=>{
                    let trimmed_text = text.trim()
                    cy.wrap(trimmed_text).should("eq","Overall")
                })
                cy.get(this.label_text).eq(1).invoke("text").then((text)=>{
                    let trimmed_text = text.trim()
                    cy.wrap(trimmed_text).should("eq","Home")
                })
                cy.get(this.label_text).eq(2).invoke("text").then((text)=>{
                    let trimmed_text = text.trim()
                    cy.wrap(trimmed_text).should("eq","Away")
                })
               //not working
                //     cy.get(this.label_text).each((element,index)=>{
                //         cy.wait(500)
                //         const $variable = Cypress.$(".wff_standing_type_select.wff_clicked")
                //         if($variable < 1){
                //             cy.get(this.standingsType).click()
                //             cy.log("it's here")
                //         }               
                    
                //         cy.wrap(element)
                //         .should("be.visible")
                //         .click()
                // })
                    
            })
            
        })
           
        
    }
}