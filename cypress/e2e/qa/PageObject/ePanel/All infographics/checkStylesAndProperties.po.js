import 'cypress-real-events/support';

export class enetgraphics_styles_po{
    constructor(){   
        //leading to the needed tempalte
        this.templateButton = ".btn.btn-app:eq(1)"
        this.newName = ".image-sub-title"
        this.backgroundImgClassSEvSt=".infographic-background-image"
        this.resetBtn = ".btn.btn_reset"
        this.desiredText = false;
        this.selectedTemplate = " EG Tennis Single H2H Results "
        this.infographicsButton = '.epi-infographics'

        //checking the design styles and properties
        this.firstPlayerName = "#home-name"
        this.secondPlayerName = "#away-name"
        this.firstTeam = '#team_1'
        this.secondTeam = '#team_2'
        this.playerEventStatsName = '#away-name'
        // home/away scores in Match score and Goal templates
        this.firstTeamScore = '#team_1'
        this.secondTeamScore = '#team_2'
        this.playerTeamName = ".ep_ig_edditable_component:eq(1)"
        this.title = '#template-title'
        this.title16_9 ='[id="template-title"]'
        this.title4_5 =".ep_ig_title"
        this.title3_2 =".ep_ig_title"
        this.title1_1 =".ep_ig_title"
        this.boxHeaders = ".ep_ig_stat_stage.ep_ig_edditable_field_container"
        this.boxHeadersEdit = ".ep_ig_edditable_component"
        this.tournamentStageName = '#league'
        this.eventStartTime = '#start-time'
        this.eventVenue = '#venue'
        this.quoteOfTheDay = '#quote'
        this.quoteAuthor = '#author'
        this.koTimeAndVenue = '.ep_ig_start-time-and-venue'
        this.playerRating = '#player-rating'
        this.eventName = '#teams'
        this.eventName2 = '#teams2'
        this.teamName = '#player-team'
        //for ice hockey Goal template
        this.goalElapsed = '#goal-elapsed'
        this.goalScorer = '#goal-scorer'

        //for football penalty history
        this.missedPenalty = '#penalty-missed'
        this.savedPenalty = '#penalty-saved'
        this.scoredPenalty = '#penalty-scored'

        //for the tennis single event stats
        this.boxStats = '.ep_ig_label_class.ep_ig_stat_label'
        this.boxStatsSubClass = '.ep_ig_edditable_field_container'
        
        this.formatButton = ".ep_ig_size_box"
        this.halfElement = ".twitter-cropper.vue-advanced-cropper"

        //for tennis singles latest results
        this.tournametInfoText = '.ep_ig_event_info.ep_ig_edditable_field_container'

        //for football top 11
        this.lineupPlayerNames = '.ep_ig_player_name'
        this.lineupPlayerTeams = '.ep_ig_player_team'

        //for the login form
        this.email = ".form-control:eq(0)"
        this.password = ".form-control:eq(1)"
        this.submitButton = ".btn.btn-primary"
        this.topBar = ".left-menu-list"
        this.burger = ".epi-menu-open"
        this.testClient = ".user:eq(0)"

        //side sections
        this.sideSectionHeaders = '.ep_ig_data_title.epi-down'
        this.closedSections = ['.ep_ig_data_container.ep_ig_data_images_container.ep_ig_image_params.hide_container','.ep_ig_data_container.ep_ig_data_layout_container.hide_container',
        '.ep_ig_data_container.ep_ig_data_container_player.hide_container','.ep_ig_data_container.ep_ig_data_container_player.hide_container']
    }

  

    openExactGraphic(){
        cy.get(this.infographicsButton).click()        

        cy.get(this.templateButton).click()        
        cy.get(this.newName).each((element, index) => {
            cy.wrap(element).invoke('text').then((text) => {                
                if (text === this.selectedTemplate) {
                    
                    cy.get(this.backgroundImgClassSEvSt).eq(index).click()
                    cy.get(this.resetBtn).should('exist');
                    return;
                }
            });
        })
        
    }

    allSideSectionExpCol(){ 
        //images section expand/collapse
        let self = this
        // for(var i=0;i<this.closedSections.length; i++){
        cy.get(this.sideSectionHeaders).each((element,index)=>{
            // (function(index) {
                cy.get(element).click()
                cy.wait(1000)
                cy.get(self.closedSections[index]).should('exist')
                cy.get(element).click()
            // })
        })
    
    }

    //Enetgraphics designs
    singleH2HTemplateDesign(){ 
        //format 16:9
    
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","50px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        cy.get(this.secondPlayerName)
        .should("have.css","font-size","50px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        // cy.get(this.title)
        // .should("have.attr","style","font-weight: 700; color: rgb(255, 255, 255); font-size: 120px; text-transform: uppercase;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'Barlow','120px','700','0px','static','auto')
        
    
        cy.get(this.boxHeaders)
        .find(this.boxHeadersEdit)
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","700")
            .and("have.css","font-size","26px")
            .and("have.css","color","rgb(0, 0, 0)")
        })
    
        cy.changeFormat(this.halfElement,this.formatButton,1)
        //format 4:5
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","40px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        cy.get(this.secondPlayerName)
        .should("have.css","font-size","40px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        // cy.get(this.title)
        // .should("have.attr","style","color: rgb(255, 255, 255); font-size: 80px;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'Barlow','90px','700','0px','static','auto')
        
    
        cy.get(this.boxHeaders)
        .find(this.boxHeadersEdit)
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","700")
            .and("have.css","font-size","26px")
            .and("have.css","color","rgb(0, 0, 0)")
        })
    
        cy.changeFormat(this.halfElement,this.formatButton,2)
        //format 3:2
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","50px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        cy.get(this.secondPlayerName)
        .should("have.css","font-size","50px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        // cy.get(this.title)
        // .should("have.attr","style","color: rgb(255, 255, 255); font-size: 120px;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'Barlow','120px','700','0px','static','auto')
        
    
        cy.get(this.boxHeaders)
        .find(this.boxHeadersEdit)
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","700")
            .and("have.css","font-size","26px")
            .and("have.css","color","rgb(0, 0, 0)")
        })
    
        cy.changeFormat(this.halfElement,this.formatButton,3)
        //format 1:1
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","40px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        cy.get(this.secondPlayerName)
        .should("have.css","font-size","40px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        // cy.get(this.title)
        // .should("have.attr","style","color: rgb(255, 255, 255); font-size: 80px;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'Barlow','90px','700','0px','static','auto')
    
        cy.get(this.boxHeaders)
        .find(this.boxHeadersEdit)
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","700")
            .and("have.css","font-size","26px")
            .and("have.css","color","rgb(0, 0, 0)")
        })

        //revert back to the 16:9 format
        cy.changeFormat(this.halfElement,this.formatButton,0)
    
    }

    singleEventStatsTemplateDesign(){ 
        //format 16:9
    
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","60px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        cy.get(this.secondPlayerName)
        .should("have.css","font-size","60px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        // cy.get(this.title)
        // .should("have.attr","style","font-weight: 700; color: rgb(255, 255, 255); font-size: 120px; text-transform: uppercase;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'Inter','90px','700','0px','static','auto')
        
    
        cy.get(this.boxStats)
        .find(this.boxStatsSubClass)
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","400")
            .and("have.css","font-size","14.4px")
            .and("have.css","color","rgb(0, 0, 0)")
        })
    
        cy.changeFormat(this.halfElement,this.formatButton,1)
        //format 4:5
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","40px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        cy.get(this.secondPlayerName)
        .should("have.css","font-size","40px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        // cy.get(this.title)
        // .should("have.attr","style","color: rgb(255, 255, 255); font-size: 80px;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'Inter','110px','700','0px','static','auto')
        
    
        cy.get(this.boxStats)
        .find(this.boxStatsSubClass)        
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","400")
            .and("have.css","font-size","14.4px")
            .and("have.css","color","rgb(0, 0, 0)")
        })
    
        cy.changeFormat(this.halfElement,this.formatButton,2)
        //format 3:2
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","60px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        cy.get(this.secondPlayerName)
        .should("have.css","font-size","60px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        // cy.get(this.title)
        // .should("have.attr","style","color: rgb(255, 255, 255); font-size: 120px;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'Inter','130px','700','0px','static','auto')
        
    
        cy.get(this.boxStats)
        .find(this.boxStatsSubClass)
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","400")
            .and("have.css","font-size","14.4px")
            .and("have.css","color","rgb(0, 0, 0)")
        })
    
        cy.changeFormat(this.halfElement,this.formatButton,3)
        //format 1:1
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","40px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        cy.get(this.secondPlayerName)
        .should("have.css","font-size","40px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        // cy.get(this.title)
        // .should("have.attr","style","color: rgb(255, 255, 255); font-size: 80px;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'Inter','100px','400','0px','static','auto')
    
        cy.get(this.boxStats)
        .find(this.boxStatsSubClass)
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","400")
            .and("have.css","font-size","14.4px")
            .and("have.css","color","rgb(0, 0, 0)")
        })
        
        //revert back to the 16:9 format
        cy.changeFormat(this.halfElement,this.formatButton,0)
    }

    tennisSinglePlayerStatsTemplDesign(){ 
        //format 16:9
    
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","52px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        // cy.get(this.title)
        // .should("have.attr","style","font-weight: 700; color: rgb(255, 255, 255); font-size: 120px; text-transform: uppercase;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'Inter','110px','700','0px','static','auto')
        
    
        cy.get(this.boxStats)
        .find(this.boxStatsSubClass)
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","400")
            .and("have.css","font-size","14.4px")
            .and("have.css","color","rgb(255, 255, 255)")
        })
    
        cy.changeFormat(this.halfElement,this.formatButton,1)
        //format 4:5
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","54px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        // cy.get(this.title)
        // .should("have.attr","style","color: rgb(255, 255, 255); font-size: 80px;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'Inter','110px','700','0px','static','auto')
        
    
        cy.get(this.boxStats)
        .find(this.boxStatsSubClass)        
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","400")
            .and("have.css","font-size","14.4px")
            .and("have.css","color","rgb(255, 255, 255)")
        })
    
        cy.changeFormat(this.halfElement,this.formatButton,2)
        //format 3:2
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","54px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        // cy.get(this.title)
        // .should("have.attr","style","color: rgb(255, 255, 255); font-size: 120px;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'Inter','120px','700','0px','static','auto')
        
    
        cy.get(this.boxStats)
        .find(this.boxStatsSubClass)
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","400")
            .and("have.css","font-size","14.4px")
            .and("have.css","color","rgb(255, 255, 255)")
        })
    
        cy.changeFormat(this.halfElement,this.formatButton,3)
        //format 1:1
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","50px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        // cy.get(this.title)
        // .should("have.attr","style","color: rgb(255, 255, 255); font-size: 80px;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'Inter','100px','700','0px','static','auto')
    
        cy.get(this.boxStats)
        .find(this.boxStatsSubClass)
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","400")
            .and("have.css","font-size","14.4px")
            .and("have.css","color","rgb(255, 255, 255)")
        })
        
        //revert back to the 16:9 format
        cy.changeFormat(this.halfElement,this.formatButton,0)
    }

    tennisSinglesLatestResultTemplDesign(){ 
        //format 16:9

        cy.get(this.firstPlayerName)
        .should("have.css","font-size","64px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        // cy.get(this.title)
        // .should("have.attr","style","font-weight: 700; color: rgb(255, 255, 255); font-size: 120px; text-transform: uppercase;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'Barlow','100px','400','0px','static','auto')
        
    
        cy.get(this.tournametInfoText)
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","400")
            .and("have.css","font-size","14.4px")
            .and("have.css","color","rgb(0, 0, 0)")
        })
    
        cy.changeFormat(this.halfElement,this.formatButton,1)
        //format 4:5
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","54px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        // cy.get(this.title)
        // .should("have.attr","style","color: rgb(255, 255, 255); font-size: 80px;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'Barlow','100px','400','0px','static','auto')
        
    
        cy.get(this.tournametInfoText)      
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","400")
            .and("have.css","font-size","14.4px")
            .and("have.css","color","rgb(0, 0, 0)")
        })
    
        cy.changeFormat(this.halfElement,this.formatButton,2)
        //format 3:2
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","64px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        // cy.get(this.title)
        // .should("have.attr","style","color: rgb(255, 255, 255); font-size: 120px;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'Barlow','130px','400','0px','static','auto')
        
    
        cy.get(this.tournametInfoText)
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","400")
            .and("have.css","font-size","14.4px")
            .and("have.css","color","rgb(0, 0, 0)")
        })
    
        cy.changeFormat(this.halfElement,this.formatButton,3)
        //format 1:1
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","54px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        // cy.get(this.title)
        // .should("have.attr","style","color: rgb(255, 255, 255); font-size: 80px;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'Barlow','100px','400','0px','static','auto')
    
        cy.get(this.tournametInfoText)
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","400")
            .and("have.css","font-size","14.4px")
            .and("have.css","color","rgb(0, 0, 0)")
        })
        
        //revert back to the 16:9 format
        cy.changeFormat(this.halfElement,this.formatButton,0)
    }

    footballSinglePlayerStatsTemplDesign(){ 
        //format 16:9
    
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","80px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        // cy.get(this.title)
        // .should("have.attr","style","font-weight: 700; color: rgb(255, 255, 255); font-size: 120px; text-transform: uppercase;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.playerTeamName,'Inter','40px','400','0px','static','auto')
        
    
        cy.get(this.boxStats)
        .find(this.boxStatsSubClass)
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","400")
            .and("have.css","font-size","14.4px")
            .and("have.css","color","rgb(255, 255, 255)")
        })
    
        cy.changeFormat(this.halfElement,this.formatButton,1)
        //format 4:5
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","80px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        // cy.get(this.title)
        // .should("have.attr","style","color: rgb(255, 255, 255); font-size: 80px;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.playerTeamName,'Inter','40px','400','0px','static','auto')
        
    
        cy.get(this.boxStats)
        .find(this.boxStatsSubClass)        
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","400")
            .and("have.css","font-size","14.4px")
            .and("have.css","color","rgb(255, 255, 255)")
        })
    
        cy.changeFormat(this.halfElement,this.formatButton,2)
        //format 3:2
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","80px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        // cy.get(this.title)
        // .should("have.attr","style","color: rgb(255, 255, 255); font-size: 120px;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.playerTeamName,'Inter','40px','400','0px','static','auto')
        
    
        cy.get(this.boxStats)
        .find(this.boxStatsSubClass)
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","400")
            .and("have.css","font-size","14.4px")
            .and("have.css","color","rgb(255, 255, 255)")
        })
    
        cy.changeFormat(this.halfElement,this.formatButton,3)
        //format 1:1
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","80px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        // cy.get(this.title)
        // .should("have.attr","style","color: rgb(255, 255, 255); font-size: 80px;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.playerTeamName,'Inter','40px','400','0px','static','auto')
    
        cy.get(this.boxStats)
        .find(this.boxStatsSubClass)
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","400")
            .and("have.css","font-size","14.4px")
            .and("have.css","color","rgb(255, 255, 255)")
        })
        
        //revert back to the 16:9 format
        cy.changeFormat(this.halfElement,this.formatButton,0)
    }

    footballNextEventTemplDesign(){ 
        //format 16:9
        //check first team
        cy.FSize_FWeight_color(this.firstTeam,"72px",'700',"rgb(255, 255, 255)")
        //check second team
        cy.FSize_FWeight_color(this.secondTeam,"72px",'700',"rgb(255, 255, 255)")
        //check title
        cy.get(this.title)
        .should("have.attr","style","font-weight: 700; color: rgb(255, 255, 255); font-size: 96px; text-transform: uppercase;")
        .and("have.css","font-weight",'700')
        //check the tournament stage name
        cy.FSize_FWeight_color(this.tournamentStageName,"46px",'700',"rgb(255, 255, 255)")
        //check the KO time of the event
        cy.FSize_FWeight_color(this.eventStartTime,"40px",'400',"rgb(255, 255, 255)")
        //check the venue
        cy.FSize_FWeight_color(this.eventVenue,"40px",'400',"rgb(255, 255, 255)")
    
        cy.changeFormat(this.halfElement,this.formatButton,1)
        //format 4:5
        //check first team
        cy.FSize_FWeight_color(this.firstTeam,"72px",'700',"rgb(255, 255, 255)")
        //check second team
        cy.FSize_FWeight_color(this.secondTeam,"72px",'700',"rgb(255, 255, 255)")
    
        cy.get(this.title)
        .should("have.attr","style","font-weight: 700; color: rgb(255, 255, 255); font-size: 96px; text-transform: uppercase;")
        .and("have.css","font-weight",'700')
        //check the tournament stage name
        cy.FSize_FWeight_color(this.tournamentStageName,"46px",'700',"rgb(255, 255, 255)")
        //check the KO time of the event
        cy.FSize_FWeight_color(this.eventStartTime,"40px",'400',"rgb(255, 255, 255)")
        //check the venue
        cy.FSize_FWeight_color(this.eventVenue,"40px",'400',"rgb(255, 255, 255)")
    
        cy.changeFormat(this.halfElement,this.formatButton,2)
        //format 3:2
        //check first team
        cy.FSize_FWeight_color(this.firstTeam,"72px",'700',"rgb(255, 255, 255)")
        //check second team
        cy.FSize_FWeight_color(this.secondTeam,"72px",'700',"rgb(255, 255, 255)")
    
        cy.get(this.title)
        .should("have.attr","style","font-weight: 700; color: rgb(255, 255, 255); font-size: 96px; text-transform: uppercase;")
        .and("have.css","font-weight",'700')
        //check the tournament stage name
        cy.FSize_FWeight_color(this.tournamentStageName,"46px",'700',"rgb(255, 255, 255)")
        //check the KO time of the event
        cy.FSize_FWeight_color(this.eventStartTime,"40px",'400',"rgb(255, 255, 255)")
        //check the venue
        cy.FSize_FWeight_color(this.eventVenue,"40px",'400',"rgb(255, 255, 255)")
    
        cy.changeFormat(this.halfElement,this.formatButton,3)
        //format 1:1
        //check first team
        cy.FSize_FWeight_color(this.firstTeam,"72px",'700',"rgb(255, 255, 255)")
        //check second team
        cy.FSize_FWeight_color(this.secondTeam,"72px",'700',"rgb(255, 255, 255)")
    
        cy.get(this.title)
        .should("have.attr","style","font-weight: 700; color: rgb(255, 255, 255); font-size: 96px; text-transform: uppercase;")
        .and("have.css","font-weight",'700')
        //check the tournament stage name
        cy.FSize_FWeight_color(this.tournamentStageName,"46px",'700',"rgb(255, 255, 255)")
        //check the KO time of the event
        cy.FSize_FWeight_color(this.eventStartTime,"40px",'400',"rgb(255, 255, 255)")
        //check the venue
        cy.FSize_FWeight_color(this.eventVenue,"40px",'400',"rgb(255, 255, 255)")
        
        //revert back to the 16:9 format
        cy.changeFormat(this.halfElement,this.formatButton,0)
    }

    footballQuoteOfTheDayTemplDesign(){ 
        //format 16:9
        //check the quote of the day text
        cy.get(this.quoteOfTheDay)
        .should("have.attr","style","font-weight: 700; color: rgb(255, 255, 255); font-size: 40px;")
        
        //check the tournament stage name
        cy.FSize_FWeight_color(this.quoteAuthor,"46px",'700',"rgb(255, 255, 255)")
    
        cy.changeFormat(this.halfElement,this.formatButton,1)
        //format 4:5
        //check the quote of the day text
        cy.get(this.quoteOfTheDay)
        .should("have.attr","style","font-weight: 700; color: rgb(255, 255, 255); font-size: 40px;")
        
        //check the tournament stage name
        cy.FSize_FWeight_color(this.quoteAuthor,"46px",'700',"rgb(255, 255, 255)")
    
        cy.changeFormat(this.halfElement,this.formatButton,2)
        //format 3:2
        //check the quote of the day text
        cy.get(this.quoteOfTheDay)
        .should("have.attr","style","font-weight: 700; color: rgb(255, 255, 255); font-size: 40px;")
        
        //check the tournament stage name
        cy.FSize_FWeight_color(this.quoteAuthor,"46px",'700',"rgb(255, 255, 255)")
    
        cy.changeFormat(this.halfElement,this.formatButton,3)
        //format 1:1
        //check the quote of the day text
        cy.get(this.quoteOfTheDay)
        .should("have.attr","style","font-weight: 700; color: rgb(255, 255, 255); font-size: 30px;")
        
        //check the tournament stage name
        cy.FSize_FWeight_color(this.quoteAuthor,"36px",'700',"rgb(255, 255, 255)")
        
        //revert back to the 16:9 format
        cy.changeFormat(this.halfElement,this.formatButton,0)
    }

    iceHockeyNextEventTemplDesign(){ 
        
        //format 16:9
        //check first team
        cy.FSize_FWeight_color(this.firstTeam,"50px",'700',"rgb(0, 0, 0)")
        //check second team
        cy.FSize_FWeight_color(this.secondTeam,"50px",'700',"rgb(0, 0, 0)")
        //check title
        cy.get(this.title)
        .should("have.attr","style", "color: rgb(255, 255, 255); font-size: 170px; text-transform: uppercase;")
        .and("have.css","font-weight",'400')
        //check the tournament stage name
        cy.FSize_FWeight_color(this.tournamentStageName,"50px",'700',"rgb(255, 255, 255)")
        //check the KO time of the event
        cy.FSize_FWeight_color(this.eventStartTime,"50px",'700',"rgb(255, 255, 255)")
    
        cy.changeFormat(this.halfElement,this.formatButton,1)

        //format 4:5
        //check first team
        cy.FSize_FWeight_color(this.firstTeam,"50px",'700',"rgb(0, 0, 0)")
        //check second team
        cy.FSize_FWeight_color(this.secondTeam,"50px",'700',"rgb(0, 0, 0)")
    
        cy.get(this.title)
        .should("have.attr","style","color: rgb(255, 255, 255); font-size: 140px; text-transform: uppercase;")
        .and("have.css","font-weight",'400')
        //check the tournament stage name
        cy.FSize_FWeight_color(this.tournamentStageName,"50px",'700',"rgb(255, 255, 255)")
        //check the KO time of the event
        cy.FSize_FWeight_color(this.eventStartTime,"50px",'700',"rgb(255, 255, 255)")
    
        cy.changeFormat(this.halfElement,this.formatButton,2)
        
        //format 3:2
        //check first team
        cy.FSize_FWeight_color(this.firstTeam,"50px",'700',"rgb(0, 0, 0)")
        //check second team
        cy.FSize_FWeight_color(this.secondTeam,"50px",'700',"rgb(0, 0, 0)")
    
        cy.get(this.title)
        .should("have.attr","style","color: rgb(255, 255, 255); font-size: 180px; text-transform: uppercase;")
        .and("have.css","font-weight",'400')
        //check the tournament stage name
        cy.FSize_FWeight_color(this.tournamentStageName,"50px",'700',"rgb(255, 255, 255)")
        //check the KO time of the event
        cy.FSize_FWeight_color(this.eventStartTime,"50px",'700',"rgb(255, 255, 255)")
    
        cy.changeFormat(this.halfElement,this.formatButton,3)
        //format 1:1
        //check first team
        cy.FSize_FWeight_color(this.firstTeam,"40px",'700',"rgb(0, 0, 0)")
        //check second team
        cy.FSize_FWeight_color(this.secondTeam,"40px",'700',"rgb(0, 0, 0)")
    
        cy.get(this.title)
        .should("have.attr","style","color: rgb(255, 255, 255); font-size: 120px; text-transform: uppercase;")
        .and("have.css","font-weight",'400')
        //check the tournament stage name
        cy.FSize_FWeight_color(this.tournamentStageName,"46px",'700',"rgb(255, 255, 255)")
        //check the KO time of the event
        cy.FSize_FWeight_color(this.eventStartTime,"46px",'700',"rgb(255, 255, 255)")
        
        //revert back to the 16:9 format
        cy.changeFormat(this.halfElement,this.formatButton,0)
    }

    iceHockeyH2HTemplateDesign(){ 
        //format 16:9
    
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","60px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        cy.get(this.secondPlayerName)
        .should("have.css","font-size","60px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        // cy.get(this.title)
        // .should("have.attr","style","font-weight: 700; color: rgb(255, 255, 255); font-size: 120px; text-transform: uppercase;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'Barlow','70px','400','0px','static','auto')
        
    
        cy.get(this.koTimeAndVenue)
        .find('.ep_ig_edditable_component')
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","700")
            .and("have.css","font-size","26px")
            .and("have.css","color","rgb(0, 30, 40)")
        })
    
        cy.changeFormat(this.halfElement,this.formatButton,1)
        //format 4:5
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","46px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        cy.get(this.secondPlayerName)
        .should("have.css","font-size","46px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        // cy.get(this.title)
        // .should("have.attr","style","color: rgb(255, 255, 255); font-size: 80px;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'Barlow','70px','400','0px','static','auto')
        
    
        cy.get(this.koTimeAndVenue)
        .find('.ep_ig_edditable_component')
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","700")
            .and("have.css","font-size","30px")
            .and("have.css","color","rgb(0, 30, 40)")
        })
    
        cy.changeFormat(this.halfElement,this.formatButton,2)
        //format 3:2
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","60px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        cy.get(this.secondPlayerName)
        .should("have.css","font-size","60px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        // cy.get(this.title)
        // .should("have.attr","style","color: rgb(255, 255, 255); font-size: 120px;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'Barlow','70px','400','0px','static','auto')
        
    
        cy.get(this.koTimeAndVenue)
        .find('.ep_ig_edditable_component')
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","700")
            .and("have.css","font-size","30px")
            .and("have.css","color","rgb(0, 30, 40)")
        })
    
        cy.changeFormat(this.halfElement,this.formatButton,3)
        //format 1:1
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","46px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        cy.get(this.secondPlayerName)
        .should("have.css","font-size","46px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        // cy.get(this.title)
        // .should("have.attr","style","color: rgb(255, 255, 255); font-size: 80px;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'Barlow','70px','400','0px','static','auto')
    
        cy.get(this.koTimeAndVenue)
        .find('.ep_ig_edditable_component')
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","700")
            .and("have.css","font-size","26px")
            .and("have.css","color","rgb(0, 30, 40)")
        })

        //revert back to the 16:9 format
        cy.changeFormat(this.halfElement,this.formatButton,0)
    
    }

    iceHockeyGoalTemplDesign(){ 
        
        //format 16:9
        //check first team
        cy.FSize_FWeight_color(this.firstTeam,"60px",'700',"rgb(255, 255, 255)")
        //check first team score
        cy.FSize_FWeight_color(this.firstTeamScore,"100px",'400',"rgb(255, 0, 70)")
        //check second team
        cy.FSize_FWeight_color(this.secondTeam,"60px",'700',"rgb(255, 255, 255)")
        //check second team score
        cy.FSize_FWeight_color(this.secondTeamScore,"100px",'400',"rgb(255, 255, 255)")
        //check title
        cy.get(this.title)
        .should("have.attr","style", "color: rgb(255, 0, 70); font-size: 200px;")
        .and("have.css","font-weight",'400')

        //check the goal scorer
        cy.FSize_FWeight_color(this.goalScorer,"80px",'700',"rgb(0, 0, 0)")
    
        cy.changeFormat(this.halfElement,this.formatButton,1)

        //format 4:5
        //check first team
        cy.FSize_FWeight_color(this.firstTeam,"46px",'700',"rgb(255, 255, 255)")
        //check first team score
        cy.FSize_FWeight_color(this.firstTeamScore,"100px",'400',"rgb(255, 0, 70)")
        //check second team
        cy.FSize_FWeight_color(this.secondTeam,"46px",'700',"rgb(255, 255, 255)")
        //check second team score
        cy.FSize_FWeight_color(this.secondTeamScore,"100px",'400',"rgb(255, 255, 255)")
        cy.get(this.title)
        .should("have.attr","style","color: rgb(255, 0, 70); font-size: 200px;")
        .and("have.css","font-weight",'400')
       
        //check the goal minute
        cy.FSize_FWeight_color(this.goalElapsed,"60px",'400',"rgb(255, 0, 70)")

        //check the goal scorer
        cy.FSize_FWeight_color(this.goalScorer,"80px",'700',"rgb(0, 0, 0)")
    
        cy.changeFormat(this.halfElement,this.formatButton,2)
        
        //format 3:2
        //check first team
        cy.FSize_FWeight_color(this.firstTeam,"60px",'700',"rgb(255, 255, 255)")
        //check first team score
        cy.FSize_FWeight_color(this.firstTeamScore,"100px",'400',"rgb(255, 0, 70)")
        //check second team
        cy.FSize_FWeight_color(this.secondTeam,"60px",'700',"rgb(255, 255, 255)")
        //check second team score
        cy.FSize_FWeight_color(this.secondTeamScore,"100px",'400',"rgb(255, 255, 255)")
    
        cy.get(this.title)
        .should("have.attr","style","color: rgb(255, 0, 70); font-size: 220px;")
        .and("have.css","font-weight",'400')
        
        //check the goal scorer
        cy.FSize_FWeight_color(this.goalScorer,"80px",'700',"rgb(0, 0, 0)")
    
        cy.changeFormat(this.halfElement,this.formatButton,3)
        //format 1:1
        //check first team
        cy.FSize_FWeight_color(this.firstTeam,"46px",'700',"rgb(255, 255, 255)")
        //check first team score
        cy.FSize_FWeight_color(this.firstTeamScore,"100px",'400',"rgb(255, 0, 70)")
        //check second team
        cy.FSize_FWeight_color(this.secondTeam,"46px",'700',"rgb(255, 255, 255)")
        //check second team score
        cy.FSize_FWeight_color(this.secondTeamScore,"100px",'400',"rgb(255, 255, 255)")
    
        cy.get(this.title)
        .should("have.attr","style","color: rgb(255, 0, 70); font-size: 200px;")
        .and("have.css","font-weight",'400')
        
        //check the goal minute
        cy.FSize_FWeight_color(this.goalElapsed,"60px",'400',"rgb(255, 0, 70)")

        //check the goal scorer
        cy.FSize_FWeight_color(this.goalScorer,"80px",'700',"rgb(0, 0, 0)")
        
        //revert back to the 16:9 format
        cy.changeFormat(this.halfElement,this.formatButton,0)
    }

    iceHockeyMatchScoreTemplDesign(){ 
        
        //format 16:9
        
        //check first team score
        cy.FSize_FWeight_color(this.firstTeamScore,"120px",'400',"rgb(255, 0, 70)")
        
        //check second team score
        cy.FSize_FWeight_color(this.secondTeamScore,"120px",'400',"rgb(255, 0, 70)")
        //check title
        cy.get(this.title)
        .should("have.attr","style", "color: rgb(255, 255, 255); font-size: 170px; text-transform: uppercase;")
        .and("have.css","font-weight",'400')
        
        //check the KO time of the event
        cy.FSize_FWeight_color(this.eventStartTime,"50px",'700',"rgb(255, 255, 255)")

        //check the tournament stage name
        cy.FSize_FWeight_color(this.tournamentStageName,"50px",'700',"rgb(255, 255, 255)")
    
        cy.changeFormat(this.halfElement,this.formatButton,1)

        //format 4:5
        
        //check first team score
        cy.FSize_FWeight_color(this.firstTeamScore,"120px",'400',"rgb(255, 0, 70)")
        
        //check second team score
        cy.FSize_FWeight_color(this.secondTeamScore,"120px",'400',"rgb(255, 0, 70)")
        cy.get(this.title)
        .should("have.attr","style","color: rgb(255, 255, 255); font-size: 140px; text-transform: uppercase;")
        .and("have.css","font-weight",'400')
       
        //check the KO time of the event
        cy.FSize_FWeight_color(this.eventStartTime,"50px",'700',"rgb(255, 255, 255)")

        //check the tournament stage name
        cy.FSize_FWeight_color(this.tournamentStageName,"50px",'700',"rgb(255, 255, 255)")
    
        cy.changeFormat(this.halfElement,this.formatButton,2)
        
        //format 3:2
        
        //check first team score
        cy.FSize_FWeight_color(this.firstTeamScore,"120px",'400',"rgb(255, 0, 70)")
        
        //check second team score
        cy.FSize_FWeight_color(this.secondTeamScore,"120px",'400',"rgb(255, 0, 70)")
    
        cy.get(this.title)
        .should("have.attr","style","color: rgb(255, 255, 255); font-size: 180px; text-transform: uppercase;")
        .and("have.css","font-weight",'400')
        
        //check the KO time of the event
        cy.FSize_FWeight_color(this.eventStartTime,"50px",'700',"rgb(255, 255, 255)")

        //check the tournament stage name
        cy.FSize_FWeight_color(this.tournamentStageName,"50px",'700',"rgb(255, 255, 255)")
    
        cy.changeFormat(this.halfElement,this.formatButton,3)
        //format 1:1
        //check first team score
        cy.FSize_FWeight_color(this.firstTeamScore,"120px",'400',"rgb(255, 0, 70)")
        
        //check second team score
        cy.FSize_FWeight_color(this.secondTeamScore,"120px",'400',"rgb(255, 0, 70)")
    
        cy.get(this.title)
        .should("have.attr","style","color: rgb(255, 255, 255); font-size: 120px; text-transform: uppercase;")
        .and("have.css","font-weight",'400')
        
        //check the KO time of the event
        cy.FSize_FWeight_color(this.eventStartTime,"46px",'700',"rgb(255, 255, 255)")

        //check the tournament stage name
        cy.FSize_FWeight_color(this.tournamentStageName,"46px",'700',"rgb(255, 255, 255)")
        
        //revert back to the 16:9 format
        cy.changeFormat(this.halfElement,this.formatButton,0)
    }

    iceHockeyEventStatsTemplateDesign(){ 

        //format 16:9
    
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","60px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        cy.get(this.secondPlayerName)
        .should("have.css","font-size","60px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        // cy.get(this.title)
        // .should("have.attr","style","font-weight: 700; color: rgb(255, 255, 255); font-size: 120px; text-transform: uppercase;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'FlashDisplay','100px','400','0px','static','auto')
        
    
        cy.get(this.boxStats)
        .find(this.boxStatsSubClass)
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","400")
            .and("have.css","font-size","14.4px")
            .and("have.css","color","rgb(0, 0, 0)")
        })
    
        cy.changeFormat(this.halfElement,this.formatButton,1)
        //format 4:5
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","46px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        cy.get(this.secondPlayerName)
        .should("have.css","font-size","46px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        // cy.get(this.title)
        // .should("have.attr","style","color: rgb(255, 255, 255); font-size: 80px;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'FlashDisplay','100px','400','0px','static','auto')
        
    
        cy.get(this.boxStats)
        .find(this.boxStatsSubClass)        
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","400")
            .and("have.css","font-size","14.4px")
            .and("have.css","color","rgb(0, 0, 0)")
        })
    
        cy.changeFormat(this.halfElement,this.formatButton,2)
        //format 3:2
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","60px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        cy.get(this.secondPlayerName)
        .should("have.css","font-size","60px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        // cy.get(this.title)
        // .should("have.attr","style","color: rgb(255, 255, 255); font-size: 120px;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'FlashDisplay','100px','400','0px','static','auto')
        
    
        cy.get(this.boxStats)
        .find(this.boxStatsSubClass)
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","400")
            .and("have.css","font-size","14.4px")
            .and("have.css","color","rgb(0, 0, 0)")
        })
    
        cy.changeFormat(this.halfElement,this.formatButton,3)
        //format 1:1
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","46px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        cy.get(this.secondPlayerName)
        .should("have.css","font-size","46px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        // cy.get(this.title)
        // .should("have.attr","style","color: rgb(255, 255, 255); font-size: 80px;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'FlashDisplay','100px','400','0px','static','auto')
    
        cy.get(this.boxStats)
        .find(this.boxStatsSubClass)
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","400")
            .and("have.css","font-size","14.4px")
            .and("have.css","color","rgb(0, 0, 0)")
        })
        
        //revert back to the 16:9 format
        cy.changeFormat(this.halfElement,this.formatButton,0)
    }

    //LS infographics designs
    lsIceHockeyNextEventTemplDesign(){ 
        
        //format 16:9
        cy.changeFormat(this.halfElement,this.formatButton,1)
        //check first team
        cy.FSize_FWeight_color(this.firstTeam,"46px",'700',"rgb(255, 255, 255)")
        //check second team
        cy.FSize_FWeight_color(this.secondTeam,"46px",'700',"rgb(255, 255, 255)")
        //check title
        cy.get(this.title)
        .should("have.attr","style", "color: rgb(255, 255, 255); font-size: 114px; text-transform: uppercase;")
        .and("have.css","font-weight",'400')
        
        //check the KO time of the event
        cy.FSize_FWeight_color(this.eventStartTime,"40px",'700',"rgb(255, 255, 255)")
    
        cy.changeFormat(this.halfElement,this.formatButton,0)

        //format 4:5
        //check first team
        cy.FSize_FWeight_color(this.firstTeam,"46px",'700',"rgb(255, 255, 255)")
        //check second team
        cy.FSize_FWeight_color(this.secondTeam,"46px",'700',"rgb(255, 255, 255)")
    
        cy.get(this.title)
        .should("have.attr","style","color: rgb(255, 255, 255); font-size: 90px; text-transform: uppercase;")
        .and("have.css","font-weight",'400')
       
        //check the KO time of the event
        cy.FSize_FWeight_color(this.eventStartTime,"40px",'700',"rgb(255, 255, 255)")
    
        cy.changeFormat(this.halfElement,this.formatButton,2)
        
        //format 3:2
        //check first team
        cy.FSize_FWeight_color(this.firstTeam,"56px",'700',"rgb(255, 255, 255)")
        //check second team
        cy.FSize_FWeight_color(this.secondTeam,"56px",'700',"rgb(255, 255, 255)")
    
        cy.get(this.title)
        .should("have.attr","style","color: rgb(255, 255, 255); font-size: 136px; text-transform: uppercase;")
        .and("have.css","font-weight",'400')
        
        //check the KO time of the event
        cy.FSize_FWeight_color(this.eventStartTime,"50px",'700',"rgb(255, 255, 255)")
    
        cy.changeFormat(this.halfElement,this.formatButton,3)
        //format 1:1
        //check first team
        cy.FSize_FWeight_color(this.firstTeam,"46px",'700',"rgb(255, 255, 255)")
        //check second team
        cy.FSize_FWeight_color(this.secondTeam,"46px",'700',"rgb(255, 255, 255)")
    
        cy.get(this.title)
        .should("have.attr","style","color: rgb(255, 255, 255); font-size: 90px; text-transform: uppercase;")
        .and("have.css","font-weight",'400')
        
        //check the KO time of the event
        cy.FSize_FWeight_color(this.eventStartTime,"40px",'700',"rgb(255, 255, 255)")
        
        //revert back to the 16:9 format
        cy.changeFormat(this.halfElement,this.formatButton,1)
    }

    lsIceHockeyH2HTemplateDesign(){ 

        cy.changeFormat(this.halfElement,this.formatButton,1)

        //format 16:9
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","48px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        cy.get(this.secondPlayerName)
        .should("have.css","font-size","48px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        // cy.get(this.title)
        // .should("have.attr","style","font-weight: 700; color: rgb(255, 255, 255); font-size: 120px; text-transform: uppercase;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'FlashDisplay','112px','400','0px','static','auto')
        
    
        cy.get(this.koTimeAndVenue)
        .find('.ep_ig_edditable_component')
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","700")
            .and("have.css","font-size","26px")
            .and("have.css","color","rgb(0, 30, 40)")
        })
    
        cy.changeFormat(this.halfElement,this.formatButton,0)
        //format 4:5
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","28px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        cy.get(this.secondPlayerName)
        .should("have.css","font-size","28px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        // cy.get(this.title)
        // .should("have.attr","style","color: rgb(255, 255, 255); font-size: 80px;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'FlashDisplay','112px','400','0px','static','auto')
        
    
        cy.get(this.koTimeAndVenue)
        .find('.ep_ig_edditable_component')
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","700")
            .and("have.css","font-size","26px")
            .and("have.css","color","rgb(0, 30, 40)")
        })
    
        cy.changeFormat(this.halfElement,this.formatButton,2)
        //format 3:2
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","48px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        cy.get(this.secondPlayerName)
        .should("have.css","font-size","48px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        // cy.get(this.title)
        // .should("have.attr","style","color: rgb(255, 255, 255); font-size: 120px;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'FlashDisplay','140px','400','0px','static','auto')
        
    
        cy.get(this.koTimeAndVenue)
        .find('.ep_ig_edditable_component')
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","700")
            .and("have.css","font-size","30px")
            .and("have.css","color","rgb(0, 30, 40)")
        })
    
        cy.changeFormat(this.halfElement,this.formatButton,3)
        //format 1:1
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","28px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        cy.get(this.secondPlayerName)
        .should("have.css","font-size","28px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        // cy.get(this.title)
        // .should("have.attr","style","color: rgb(255, 255, 255); font-size: 80px;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'FlashDisplay','112px','400','0px','static','auto')
    
        cy.get(this.koTimeAndVenue)
        .find('.ep_ig_edditable_component')
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","700")
            .and("have.css","font-size","26px")
            .and("have.css","color","rgb(0, 30, 40)")
        })

        //revert back to the 16:9 format
        cy.changeFormat(this.halfElement,this.formatButton,1)
    
    }

    lsQuoteOfTheDayTemplDesign(){ 
        //format 16:9
        cy.changeFormat(this.halfElement,this.formatButton,1)
        //check the quote of the day text
        cy.get(this.quoteOfTheDay)
        .should("have.attr","style","font-weight: 700; color: rgb(255, 255, 255); font-size: 40px;")
        
        //check the tournament stage name
        cy.FSize_FWeight_color(this.quoteAuthor,"40px",'700',"rgb(255, 255, 255)")
    
        cy.changeFormat(this.halfElement,this.formatButton,0)
        //format 4:5
        //check the quote of the day text
        cy.get(this.quoteOfTheDay)
        .should("have.attr","style","font-weight: 700; color: rgb(255, 255, 255); font-size: 40px;")
        
        //check the tournament stage name
        cy.FSize_FWeight_color(this.quoteAuthor,"40px",'700',"rgb(255, 255, 255)")
    
        cy.changeFormat(this.halfElement,this.formatButton,2)
        //format 3:2
        //check the quote of the day text
        cy.get(this.quoteOfTheDay)
        .should("have.attr","style","font-weight: 700; color: rgb(255, 255, 255); font-size: 46px;")
        
        //check the tournament stage name
        cy.FSize_FWeight_color(this.quoteAuthor,"46px",'700',"rgb(255, 255, 255)")
    
        cy.changeFormat(this.halfElement,this.formatButton,3)
        //format 1:1
        //check the quote of the day text
        cy.get(this.quoteOfTheDay)
        .should("have.attr","style","font-weight: 700; color: rgb(255, 255, 255); font-size: 32px;")
        
        //check the tournament stage name
        cy.FSize_FWeight_color(this.quoteAuthor,"32px",'700',"rgb(255, 255, 255)")
        
        //revert back to the 16:9 format
        cy.changeFormat(this.halfElement,this.formatButton,1)
    }

    lsSingleEventStatsTemplateDesign(){ 
        cy.changeFormat(this.halfElement,this.formatButton,1)

        //format 16:9
    
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","40px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        cy.get(this.secondPlayerName)
        .should("have.css","font-size","40px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        // cy.get(this.title)
        // .should("have.attr","style","font-weight: 700; color: rgb(255, 255, 255); font-size: 120px; text-transform: uppercase;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'FlashDisplay','120px','400','0px','static','auto')
        
    
        cy.get(this.boxStats)
        .find(this.boxStatsSubClass)
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","400")
            .and("have.css","font-size","14.4px")
            .and("have.css","color","rgb(0, 0, 0)")
        })
    
        cy.changeFormat(this.halfElement,this.formatButton,0)
        //format 4:5
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","28px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        cy.get(this.secondPlayerName)
        .should("have.css","font-size","28px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        // cy.get(this.title)
        // .should("have.attr","style","color: rgb(255, 255, 255); font-size: 80px;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'FlashDisplay','112px','400','0px','static','auto')
        
    
        cy.get(this.boxStats)
        .find(this.boxStatsSubClass)        
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","400")
            .and("have.css","font-size","14.4px")
            .and("have.css","color","rgb(0, 0, 0)")
        })
    
        cy.changeFormat(this.halfElement,this.formatButton,2)
        //format 3:2
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","50px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        cy.get(this.secondPlayerName)
        .should("have.css","font-size","50px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        // cy.get(this.title)
        // .should("have.attr","style","color: rgb(255, 255, 255); font-size: 120px;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'FlashDisplay','140px','400','0px','static','auto')
        
    
        cy.get(this.boxStats)
        .find(this.boxStatsSubClass)
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","400")
            .and("have.css","font-size","14.4px")
            .and("have.css","color","rgb(0, 0, 0)")
        })
    
        cy.changeFormat(this.halfElement,this.formatButton,3)
        //format 1:1
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","28px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        cy.get(this.secondPlayerName)
        .should("have.css","font-size","28px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        // cy.get(this.title)
        // .should("have.attr","style","color: rgb(255, 255, 255); font-size: 80px;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'FlashDisplay','112px','400','0px','static','auto')
    
        cy.get(this.boxStats)
        .find(this.boxStatsSubClass)
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","400")
            .and("have.css","font-size","14.4px")
            .and("have.css","color","rgb(0, 0, 0)")
        })
        
        //revert back to the 16:9 format
        cy.changeFormat(this.halfElement,this.formatButton,1)
    }

    lsIceHockeyMatchScoreTemplDesign(){ 
        
        //format 16:9
        cy.changeFormat(this.halfElement,this.formatButton,1)
        //check first team
        cy.FSize_FWeight_color(this.firstTeam,"46px",'700',"rgb(255, 255, 255)")
        //check first team score
        cy.FSize_FWeight_color(this.firstTeamScore,"350px",'400',"rgb(255, 255, 255)")
        //check second team
        cy.FSize_FWeight_color(this.secondTeam,"46px",'700',"rgb(255, 255, 255)")
        //check second team score
        cy.FSize_FWeight_color(this.secondTeamScore,"350px",'400',"rgb(255, 255, 255)")
        //check title
        cy.get(this.title)
        .should("have.attr","style", "color: rgb(255, 255, 255); font-size: 114px; text-transform: uppercase;")
        .and("have.css","font-weight",'400')
        
        //check the KO time of the event
        cy.FSize_FWeight_color(this.eventStartTime,"40px",'700',"rgb(255, 255, 255)")
    
        cy.changeFormat(this.halfElement,this.formatButton,0)

        //format 4:5
        //check first team
        cy.FSize_FWeight_color(this.firstTeam,"40px",'700',"rgb(255, 255, 255)")
        //check first team score
        cy.FSize_FWeight_color(this.firstTeamScore,"330px",'400',"rgb(255, 255, 255)")
        //check second team
        cy.FSize_FWeight_color(this.secondTeam,"40px",'700',"rgb(255, 255, 255)")
        //check second team score
        cy.FSize_FWeight_color(this.secondTeamScore,"330px",'400',"rgb(255, 255, 255)")
        cy.get(this.title)
        .should("have.attr","style","color: rgb(255, 255, 255); font-size: 114px; text-transform: uppercase;")
        .and("have.css","font-weight",'400')
       
        //check the KO time of the event
        cy.FSize_FWeight_color(this.eventStartTime,"40px",'700',"rgb(255, 255, 255)")
    
        cy.changeFormat(this.halfElement,this.formatButton,2)
        
        //format 3:2
        //check first team
        cy.FSize_FWeight_color(this.firstTeam,"50px",'700',"rgb(255, 255, 255)")
        //check first team score
        cy.FSize_FWeight_color(this.firstTeamScore,"350px",'400',"rgb(255, 255, 255)")
        //check second team
        cy.FSize_FWeight_color(this.secondTeam,"50px",'700',"rgb(255, 255, 255)")
        //check second team score
        cy.FSize_FWeight_color(this.secondTeamScore,"350px",'400',"rgb(255, 255, 255)")
    
        cy.get(this.title)
        .should("have.attr","style","color: rgb(255, 255, 255); font-size: 150px; text-transform: uppercase;")
        .and("have.css","font-weight",'400')
        
        //check the KO time of the event
        cy.FSize_FWeight_color(this.eventStartTime,"50px",'700',"rgb(255, 255, 255)")
    
        cy.changeFormat(this.halfElement,this.formatButton,3)
        //format 1:1
        //check first team
        cy.FSize_FWeight_color(this.firstTeam,"36px",'700',"rgb(255, 255, 255)")
        //check first team score
        cy.FSize_FWeight_color(this.firstTeamScore,"240px",'400',"rgb(255, 255, 255)")
        //check second team
        cy.FSize_FWeight_color(this.secondTeam,"36px",'700',"rgb(255, 255, 255)")
        //check second team score
        cy.FSize_FWeight_color(this.secondTeamScore,"240px",'400',"rgb(255, 255, 255)")
    
        cy.get(this.title)
        .should("have.attr","style","color: rgb(255, 255, 255); font-size: 114px; text-transform: uppercase;")
        .and("have.css","font-weight",'400')
        
        //check the KO time of the event
        cy.FSize_FWeight_color(this.eventStartTime,"40px",'700',"rgb(255, 255, 255)")
        
        //revert back to the 16:9 format
        cy.changeFormat(this.halfElement,this.formatButton,1)
    }

    lsIceHockeyGoalTemplDesign(){ 
        
        //format 16:9
        cy.changeFormat(this.halfElement,this.formatButton,1)
        //check first team
        cy.FSize_FWeight_color(this.firstTeam,"40px",'700',"rgb(255, 255, 255)")
        //check first team score
        cy.FSize_FWeight_color(this.firstTeamScore,"200px",'400',"rgb(255, 255, 255)")
        //check second team
        cy.FSize_FWeight_color(this.secondTeam,"40px",'700',"rgb(255, 255, 255)")
        //check second team score
        cy.FSize_FWeight_color(this.secondTeamScore,"200px",'400',"rgb(255, 255, 255)")
        //check title
        cy.get(this.title)
        .should("have.attr","style", "color: rgb(255, 255, 255); font-size: 350px;")
        .and("have.css","font-weight",'400')

        //check the goal scorer
        cy.FSize_FWeight_color(this.goalScorer,"60px",'400',"rgb(255, 255, 255)")
    
        cy.changeFormat(this.halfElement,this.formatButton,0)

        //format 4:5
        //check first team
        cy.FSize_FWeight_color(this.firstTeam,"26px",'700',"rgb(255, 255, 255)")
        //check first team score
        cy.FSize_FWeight_color(this.firstTeamScore,"100px",'400',"rgb(255, 255, 255)")
        //check second team
        cy.FSize_FWeight_color(this.secondTeam,"26px",'700',"rgb(255, 255, 255)")
        //check second team score
        cy.FSize_FWeight_color(this.secondTeamScore,"100px",'400',"rgb(255, 255, 255)")
        cy.get(this.title)
        .should("have.attr","style","color: rgb(255, 255, 255); font-size: 300px;")
        .and("have.css","font-weight",'400')
       
        //check the goal minute
        cy.FSize_FWeight_color(this.goalElapsed,"52px",'400',"rgb(255, 255, 255)")

        //check the goal scorer
        cy.FSize_FWeight_color(this.goalScorer,"60px",'400',"rgb(255, 255, 255)")
    
        cy.changeFormat(this.halfElement,this.formatButton,2)
        
        //format 3:2
        //check first team
        cy.FSize_FWeight_color(this.firstTeam,"48px",'700',"rgb(255, 255, 255)")
        //check first team score
        cy.FSize_FWeight_color(this.firstTeamScore,"160px",'400',"rgb(255, 255, 255)")
        //check second team
        cy.FSize_FWeight_color(this.secondTeam,"48px",'700',"rgb(255, 255, 255)")
        //check second team score
        cy.FSize_FWeight_color(this.secondTeamScore,"160px",'400',"rgb(255, 255, 255)")
    
        cy.get(this.title)
        .should("have.attr","style","color: rgb(255, 255, 255); font-size: 350px;")
        .and("have.css","font-weight",'400')
        
        //check the goal scorer
        cy.FSize_FWeight_color(this.goalScorer,"72px",'400',"rgb(255, 255, 255)")
    
        cy.changeFormat(this.halfElement,this.formatButton,3)
        //format 1:1
        //check first team
        cy.FSize_FWeight_color(this.firstTeam,"26px",'700',"rgb(255, 255, 255)")
        //check first team score
        cy.FSize_FWeight_color(this.firstTeamScore,"100px",'400',"rgb(255, 255, 255)")
        //check second team
        cy.FSize_FWeight_color(this.secondTeam,"26px",'700',"rgb(255, 255, 255)")
        //check second team score
        cy.FSize_FWeight_color(this.secondTeamScore,"100px",'400',"rgb(255, 255, 255)")
    
        cy.get(this.title)
        .should("have.attr","style","color: rgb(255, 255, 255); font-size: 300px;")
        .and("have.css","font-weight",'400')
        
        //check the goal minute
        cy.FSize_FWeight_color(this.goalElapsed,"52px",'400',"rgb(255, 255, 255)")

        //check the goal scorer
        cy.FSize_FWeight_color(this.goalScorer,"60px",'400',"rgb(255, 255, 255)")
        
        //revert back to the 16:9 format
        cy.changeFormat(this.halfElement,this.formatButton,1)
    }

    lsIceHockeyPlayerEventStatsTemplateDesign(){ 
        cy.changeFormat(this.halfElement,this.formatButton,1)

        //format 16:9
    
        cy.get(this.firstTeam)
        .should("have.css","font-size","40px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")

        //check first team score
        cy.FSize_FWeight_color(this.firstTeamScore,"60px",'400',"rgb(255, 255, 255)")
    
        cy.get(this.secondTeam)
        .should("have.css","font-size","40px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")

        //check second team score
        cy.FSize_FWeight_color(this.secondTeamScore,"60px",'400',"rgb(255, 255, 255)")
    
        // cy.get(this.title)
        // .should("have.attr","style","font-weight: 700; color: rgb(255, 255, 255); font-size: 120px; text-transform: uppercase;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.playerEventStatsName,'FlashDisplay','70px','400','0px','static','auto')
        
    
        cy.get(this.boxStats)
        .find(this.boxStatsSubClass)
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","400")
            .and("have.css","font-size","14.4px")
            .and("have.css","color","rgb(255, 255, 255)")
        })
    
        cy.changeFormat(this.halfElement,this.formatButton,0)
        //format 4:5
        cy.get(this.firstTeam)
        .should("have.css","font-size","30px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
        
        //check first team score
        cy.FSize_FWeight_color(this.firstTeamScore,"71px",'400',"rgb(255, 255, 255)")
    
        cy.get(this.secondTeam)
        .should("have.css","font-size","30px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")

        //check second team score
        cy.FSize_FWeight_color(this.secondTeamScore,"71px",'400',"rgb(255, 255, 255)")
    
        // cy.get(this.title)
        // .should("have.attr","style","color: rgb(255, 255, 255); font-size: 80px;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.playerEventStatsName,'FlashDisplay','70px','400','0px','static','auto')
        
    
        cy.get(this.boxStats)
        .find(this.boxStatsSubClass)        
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","400")
            .and("have.css","font-size","14.4px")
            .and("have.css","color","rgb(255, 255, 255)")
        })
    
        cy.changeFormat(this.halfElement,this.formatButton,2)
        //format 3:2
        cy.get(this.firstTeam)
        .should("have.css","font-size","46px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")

        //check first team score
        cy.FSize_FWeight_color(this.firstTeamScore,"70px",'400',"rgb(255, 255, 255)")
    
        cy.get(this.secondTeam)
        .should("have.css","font-size","46px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")

        //check second team score
        cy.FSize_FWeight_color(this.secondTeamScore,"70px",'400',"rgb(255, 255, 255)")
    
        // cy.get(this.title)
        // .should("have.attr","style","color: rgb(255, 255, 255); font-size: 120px;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.playerEventStatsName,'FlashDisplay','84px','400','0px','static','auto')
        
    
        cy.get(this.boxStats)
        .find(this.boxStatsSubClass)
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","400")
            .and("have.css","font-size","14.4px")
            .and("have.css","color","rgb(255, 255, 255)")
        })
    
        cy.changeFormat(this.halfElement,this.formatButton,3)
        //format 1:1
        cy.get(this.firstTeam)
        .should("have.css","font-size","30px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")

        //check first team score
        cy.FSize_FWeight_color(this.firstTeamScore,"71px",'400',"rgb(255, 255, 255)")
    
        cy.get(this.secondTeam)
        .should("have.css","font-size","30px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")

        //check second team score
        cy.FSize_FWeight_color(this.secondTeamScore,"71px",'400',"rgb(255, 255, 255)")
    
        // cy.get(this.title)
        // .should("have.attr","style","color: rgb(255, 255, 255); font-size: 80px;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.playerEventStatsName,'FlashDisplay','70px','400','0px','static','auto')
    
        cy.get(this.boxStats)
        .find(this.boxStatsSubClass)
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","400")
            .and("have.css","font-size","14.4px")
            .and("have.css","color","rgb(255, 255, 255)")
        })
        
        //revert back to the 16:9 format
        cy.changeFormat(this.halfElement,this.formatButton,1)
    }

    lsFootballH2HTemplateDesign(){ 

        cy.changeFormat(this.halfElement,this.formatButton,1)

        //format 16:9
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","60px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        cy.get(this.secondPlayerName)
        .should("have.css","font-size","60px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        // cy.get(this.title)
        // .should("have.attr","style","font-weight: 700; color: rgb(255, 255, 255); font-size: 120px; text-transform: uppercase;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'FlashDisplay','100px','400','0px','static','auto')
        
    
        cy.get(this.koTimeAndVenue)
        .find('.ep_ig_edditable_component')
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","700")
            .and("have.css","font-size","36px")
            .and("have.css","color","rgb(0, 30, 40)")
        })
    
        cy.changeFormat(this.halfElement,this.formatButton,0)
        //format 4:5
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","40px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        cy.get(this.secondPlayerName)
        .should("have.css","font-size","40px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        // cy.get(this.title)
        // .should("have.attr","style","color: rgb(255, 255, 255); font-size: 80px;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'FlashDisplay','120px','400','0px','static','auto')
        
    
        cy.get(this.koTimeAndVenue)
        .find('.ep_ig_edditable_component')
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","700")
            .and("have.css","font-size","26px")
            .and("have.css","color","rgb(0, 30, 40)")
        })
    
        cy.changeFormat(this.halfElement,this.formatButton,2)
        //format 3:2
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","60px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        cy.get(this.secondPlayerName)
        .should("have.css","font-size","60px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        // cy.get(this.title)
        // .should("have.attr","style","color: rgb(255, 255, 255); font-size: 120px;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'FlashDisplay','120px','400','0px','static','auto')
        
    
        cy.get(this.koTimeAndVenue)
        .find('.ep_ig_edditable_component')
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","700")
            .and("have.css","font-size","36px")
            .and("have.css","color","rgb(0, 30, 40)")
        })
    
        cy.changeFormat(this.halfElement,this.formatButton,3)
        //format 1:1
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","40px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        cy.get(this.secondPlayerName)
        .should("have.css","font-size","40px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        // cy.get(this.title)
        // .should("have.attr","style","color: rgb(255, 255, 255); font-size: 80px;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'FlashDisplay','100px','400','0px','static','auto')
    
        cy.get(this.koTimeAndVenue)
        .find('.ep_ig_edditable_component')
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","700")
            .and("have.css","font-size","24px")
            .and("have.css","color","rgb(0, 30, 40)")
        })

        //revert back to the 16:9 format
        cy.changeFormat(this.halfElement,this.formatButton,1)
    
    }

    lsFootballPlayerEventStatsTemplateDesign(){ 
        cy.changeFormat(this.halfElement,this.formatButton,1)

        //format 16:9
    
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","60px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")

        // cy.get(this.title)
        // .should("have.attr","style","font-weight: 700; color: rgb(255, 255, 255); font-size: 120px; text-transform: uppercase;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'FlashDisplay','80px','400','0px','static','auto')
        
    
        cy.get(this.boxStats)
        .find(this.boxStatsSubClass)
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","400")
            .and("have.css","font-size","14.4px")
            .and("have.css","color","rgb(255, 255, 255)")
        })
    
        cy.changeFormat(this.halfElement,this.formatButton,0)
        //format 4:5
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","40px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
        
        // cy.get(this.title)
        // .should("have.attr","style","color: rgb(255, 255, 255); font-size: 80px;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'FlashDisplay','80px','400','0px','static','auto')
        
    
        cy.get(this.boxStats)
        .find(this.boxStatsSubClass)        
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","400")
            .and("have.css","font-size","14.4px")
            .and("have.css","color","rgb(255, 255, 255)")
        })
    
        cy.changeFormat(this.halfElement,this.formatButton,2)
        //format 3:2
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","60px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")

        // cy.get(this.title)
        // .should("have.attr","style","color: rgb(255, 255, 255); font-size: 120px;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'FlashDisplay','80px','400','0px','static','auto')
        
    
        cy.get(this.boxStats)
        .find(this.boxStatsSubClass)
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","400")
            .and("have.css","font-size","14.4px")
            .and("have.css","color","rgb(255, 255, 255)")
        })
    
        cy.changeFormat(this.halfElement,this.formatButton,3)
        //format 1:1
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","40px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")

        // cy.get(this.title)
        // .should("have.attr","style","color: rgb(255, 255, 255); font-size: 80px;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'FlashDisplay','70px','400','0px','static','auto')
    
        cy.get(this.boxStats)
        .find(this.boxStatsSubClass)
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","400")
            .and("have.css","font-size","14.4px")
            .and("have.css","color","rgb(255, 255, 255)")
        })
        
        //revert back to the 16:9 format
        cy.changeFormat(this.halfElement,this.formatButton,1)
    }

    lsFootballPlayerRatingTemplateDesign(){ 
        cy.changeFormat(this.halfElement,this.formatButton,1)

        //format 16:9
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","64px")
        .and("have.css","font-weight",'400')
        .and("have.css","color","rgb(255, 0, 70)")

        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'FlashDisplay','90px','400','0px','static','auto')
        
        //event name
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.eventName,'LivesportFinder','60px','700','0px','static','auto')

        cy.changeFormat(this.halfElement,this.formatButton,0)
        //format 4:5
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","44px")
        .and("have.css","font-weight",'400')
        .and("have.css","color","rgb(255, 0, 70)")
        
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'FlashDisplay','64px','400','0px','static','auto')
        
        //event name
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.eventName,'LivesportFinder','40px','700','0px','static','auto')
    
        cy.changeFormat(this.halfElement,this.formatButton,2)
        //format 3:2
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","64px")
        .and("have.css","font-weight",'400')
        .and("have.css","color","rgb(255, 0, 70)")

        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'FlashDisplay','90px','400','0px','static','auto')
        
        //event name
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.eventName,'LivesportFinder','60px','700','0px','static','auto')
    
        cy.changeFormat(this.halfElement,this.formatButton,3)
        //format 1:1
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","44px")
        .and("have.css","font-weight",'400')
        .and("have.css","color","rgb(255, 0, 70)")

        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'FlashDisplay','64px','400','0px','static','auto')
    
        //event name
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.eventName,'LivesportFinder','40px','700','0px','static','auto')
        
        //revert back to the 16:9 format
        cy.changeFormat(this.halfElement,this.formatButton,1)
    }

    lsFootballPenaltyHistoryTemplateDesign(){ 
        cy.changeFormat(this.halfElement,this.formatButton,1)

        //format 16:9
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","60px")
        .and("have.css","font-weight",'400')
        .and("have.css","color","rgb(255, 255, 255)")

        //template title
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'FlashDisplay','90px','400','0px','static','auto')
        
        //team name
        cy.get(this.teamName)
        .should("have.css","font-size","60px")
        .and("have.css","font-weight",'400')
        .and("have.css","color","rgb(255, 255, 255)")

        //check the penalties legend
        cy.get(this.missedPenalty)
        .should("have.css","font-size","40px")
        .and("have.css","font-weight",'400')
        .and("have.css","color","rgb(255, 0, 70)")

        cy.get(this.savedPenalty)
        .should("have.css","font-size","40px")
        .and("have.css","font-weight",'400')
        .and("have.css","color","rgb(255, 0, 70)")

        cy.get(this.scoredPenalty)
        .should("have.css","font-size","40px")
        .and("have.css","font-weight",'400')
        .and("have.css","color","rgb(255, 255, 255)")

        cy.changeFormat(this.halfElement,this.formatButton,0)
        //format 4:5
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","40px")
        .and("have.css","font-weight",'400')
        .and("have.css","color","rgb(255, 255, 255)")
        
        //template title
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'FlashDisplay','64px','400','0px','static','auto')
        
        //team name
        cy.get(this.teamName)
        .should("have.css","font-size","40px")
        .and("have.css","font-weight",'400')
        .and("have.css","color","rgb(255, 255, 255)")

        //check the penalties legend
        cy.get(this.missedPenalty)
        .should("have.css","font-size","40px")
        .and("have.css","font-weight",'400')
        .and("have.css","color","rgb(255, 0, 70)")

        cy.get(this.savedPenalty)
        .should("have.css","font-size","40px")
        .and("have.css","font-weight",'400')
        .and("have.css","color","rgb(255, 0, 70)")

        cy.get(this.scoredPenalty)
        .should("have.css","font-size","40px")
        .and("have.css","font-weight",'400')
        .and("have.css","color","rgb(255, 255, 255)")
    
        cy.changeFormat(this.halfElement,this.formatButton,2)
        //format 3:2
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","60px")
        .and("have.css","font-weight",'400')
        .and("have.css","color","rgb(255, 255, 255)")

        //template title
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'FlashDisplay','90px','400','0px','static','auto')
        
        //team name
        cy.get(this.teamName)
        .should("have.css","font-size","60px")
        .and("have.css","font-weight",'400')
        .and("have.css","color","rgb(255, 255, 255)")

        //check the penalties legend
        cy.get(this.missedPenalty)
        .should("have.css","font-size","40px")
        .and("have.css","font-weight",'400')
        .and("have.css","color","rgb(255, 0, 70)")

        cy.get(this.savedPenalty)
        .should("have.css","font-size","40px")
        .and("have.css","font-weight",'400')
        .and("have.css","color","rgb(255, 0, 70)")

        cy.get(this.scoredPenalty)
        .should("have.css","font-size","40px")
        .and("have.css","font-weight",'400')
        .and("have.css","color","rgb(255, 255, 255)")
    
        cy.changeFormat(this.halfElement,this.formatButton,3)
        //format 1:1
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","40px")
        .and("have.css","font-weight",'400')
        .and("have.css","color","rgb(255, 255, 255)")

        //template title
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'FlashDisplay','64px','400','0px','static','auto')
    
        //team name
        cy.get(this.teamName)
        .should("have.css","font-size","40px")
        .and("have.css","font-weight",'400')
        .and("have.css","color","rgb(255, 255, 255)")

        //check the penalties legend
        cy.get(this.missedPenalty)
        .should("have.css","font-size","40px")
        .and("have.css","font-weight",'400')
        .and("have.css","color","rgb(255, 0, 70)")

        cy.get(this.savedPenalty)
        .should("have.css","font-size","40px")
        .and("have.css","font-weight",'400')
        .and("have.css","color","rgb(255, 0, 70)")

        cy.get(this.scoredPenalty)
        .should("have.css","font-size","40px")
        .and("have.css","font-weight",'400')
        .and("have.css","color","rgb(255, 255, 255)")
        
        //revert back to the 16:9 format
        cy.changeFormat(this.halfElement,this.formatButton,1)
    }

    lsFootballPlayerRatingH2HTemplateDesign(){ 
        cy.changeFormat(this.halfElement,this.formatButton,1)

        //format 16:9
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","64px")
        .and("have.css","font-weight",'400')
        .and("have.css","color","rgb(255, 0, 70)")

        cy.get(this.secondPlayerName)
        .should("have.css","font-size","64px")
        .and("have.css","font-weight",'400')
        .and("have.css","color","rgb(255, 0, 70)")
        
        //player rating
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.playerRating,'LivesportFinder','72px','700','0px','static','auto')

        //event name first player
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.eventName,'LivesportFinder','60px','700','0px','static','auto')

        //event name second player
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.eventName2,'LivesportFinder','60px','700','0px','static','auto')

        cy.changeFormat(this.halfElement,this.formatButton,0)
        //format 4:5
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","44px")
        .and("have.css","font-weight",'400')
        .and("have.css","color","rgb(255, 0, 70)")

        cy.get(this.secondPlayerName)
        .should("have.css","font-size","44px")
        .and("have.css","font-weight",'400')
        .and("have.css","color","rgb(255, 0, 70)")
        
        //player rating
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.playerRating,'LivesportFinder','72px','700','0px','static','auto')

        //event name
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.eventName,'LivesportFinder','40px','700','0px','static','auto')

        //event name second player
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.eventName2,'LivesportFinder','40px','700','0px','static','auto')
    
        cy.changeFormat(this.halfElement,this.formatButton,2)
        //format 3:2
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","64px")
        .and("have.css","font-weight",'400')
        .and("have.css","color","rgb(255, 0, 70)")

        cy.get(this.secondPlayerName)
        .should("have.css","font-size","64px")
        .and("have.css","font-weight",'400')
        .and("have.css","color","rgb(255, 0, 70)")
        
        //player rating
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.playerRating,'LivesportFinder','72px','700','0px','static','auto')

        //event name
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.eventName,'LivesportFinder','60px','700','0px','static','auto')

        //event name second player
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.eventName2,'LivesportFinder','60px','700','0px','static','auto')
    
        cy.changeFormat(this.halfElement,this.formatButton,3)
        //format 1:1
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","44px")
        .and("have.css","font-weight",'400')
        .and("have.css","color","rgb(255, 0, 70)")

        cy.get(this.secondPlayerName)
        .should("have.css","font-size","44px")
        .and("have.css","font-weight",'400')
        .and("have.css","color","rgb(255, 0, 70)")
    
        //player rating
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.playerRating,'LivesportFinder','72px','700','0px','static','auto')

        //event name
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.eventName,'LivesportFinder','40px','700','0px','static','auto')

        //event name second player
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.eventName2,'LivesportFinder','40px','700','0px','static','auto')
        
        //revert back to the 16:9 format
        cy.changeFormat(this.halfElement,this.formatButton,1)
    }

    lsTennisSinglesLatestResultTemplDesign(){ 
        //format 16:9
        cy.changeFormat(this.halfElement,this.formatButton,1)

        cy.get(this.firstPlayerName)
        .should("have.css","font-size","54px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        // cy.get(this.title)
        // .should("have.attr","style","font-weight: 700; color: rgb(255, 255, 255); font-size: 120px; text-transform: uppercase;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'FlashDisplay','110px','400','0px','static','auto')
        
    
        cy.get(this.tournametInfoText)
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","400")
            .and("have.css","font-size","14.4px")
            .and("have.css","color","rgb(0, 0, 0)")
        })
    
        cy.changeFormat(this.halfElement,this.formatButton,0)
        //format 4:5
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","48px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        // cy.get(this.title)
        // .should("have.attr","style","color: rgb(255, 255, 255); font-size: 80px;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'FlashDisplay','100px','400','0px','static','auto')
        
    
        cy.get(this.tournametInfoText)      
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","400")
            .and("have.css","font-size","14.4px")
            .and("have.css","color","rgb(0, 0, 0)")
        })
    
        cy.changeFormat(this.halfElement,this.formatButton,2)
        //format 3:2
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","54px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        // cy.get(this.title)
        // .should("have.attr","style","color: rgb(255, 255, 255); font-size: 120px;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'FlashDisplay','110px','400','0px','static','auto')
        
    
        cy.get(this.tournametInfoText)
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","400")
            .and("have.css","font-size","14.4px")
            .and("have.css","color","rgb(0, 0, 0)")
        })
    
        cy.changeFormat(this.halfElement,this.formatButton,3)
        //format 1:1
        cy.get(this.firstPlayerName)
        .should("have.css","font-size","40px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
    
        // cy.get(this.title)
        // .should("have.attr","style","color: rgb(255, 255, 255); font-size: 80px;")
        // .and("have.css","font-weight",'400')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'FlashDisplay','80px','400','0px','static','auto')
    
        cy.get(this.tournametInfoText)
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","400")
            .and("have.css","font-size","14.4px")
            .and("have.css","color","rgb(0, 0, 0)")
        })
        
        //revert back to the 16:9 format
        cy.changeFormat(this.halfElement,this.formatButton,1)
    }

    lsFootballTop11TemplateDesign(){ 
        cy.changeFormat(this.halfElement,this.formatButton,1)

        //format 16:9
        
        //check the template title
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'FlashDisplay','120px','400','0px','static','auto')
        
        //check the lineup player names 
        cy.get(this.lineupPlayerNames)
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","400")
            .and("have.css","font-size","14.4px")
            .and("have.css","color","rgb(255, 255, 255)")
        })

        //check the lineup player team names
        cy.get(this.lineupPlayerTeams)
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","400")
            .and("have.css","font-size","14.4px")
            .and("have.css","color","rgb(255, 255, 255)")
        })
    
        cy.changeFormat(this.halfElement,this.formatButton,0)
        //format 4:5
        //check the template title
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'FlashDisplay','90px','400','0px','static','auto')
        
        //check the lineup player names 
        cy.get(this.lineupPlayerNames)
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","400")
            .and("have.css","font-size","14.4px")
            .and("have.css","color","rgb(255, 255, 255)")
        })

        //check the lineup player team names
        cy.get(this.lineupPlayerTeams)
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","400")
            .and("have.css","font-size","14.4px")
            .and("have.css","color","rgb(255, 255, 255)")
        })
    
        cy.changeFormat(this.halfElement,this.formatButton,2)
        //format 3:2
        //check the template title
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'FlashDisplay','120px','400','0px','static','auto')
        
        //check the lineup player names 
        cy.get(this.lineupPlayerNames)
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","400")
            .and("have.css","font-size","14.4px")
            .and("have.css","color","rgb(255, 255, 255)")
        })

        //check the lineup player team names
        cy.get(this.lineupPlayerTeams)
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","400")
            .and("have.css","font-size","14.4px")
            .and("have.css","color","rgb(255, 255, 255)")
        })
    
        cy.changeFormat(this.halfElement,this.formatButton,3)
        //format 1:1
        //check the template title
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.title,'FlashDisplay','90px','400','0px','static','auto')
        
        //check the lineup player names 
        cy.get(this.lineupPlayerNames)
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","400")
            .and("have.css","font-size","14.4px")
            .and("have.css","color","rgb(255, 255, 255)")
        })

        //check the lineup player team names
        cy.get(this.lineupPlayerTeams)
        .each((element,index)=>{
            cy.wrap(element).should("have.css","font-weight","400")
            .and("have.css","font-size","14.4px")
            .and("have.css","color","rgb(255, 255, 255)")
        })
        
        //revert back to the 16:9 format
        cy.changeFormat(this.halfElement,this.formatButton,1)
    }
}


