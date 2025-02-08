import 'cypress-real-events/support';

export class football_infograph_po{
   constructor(){    
    this.imageButton = ".btn.btn-app:eq(0)";
    this.imagesHeader = ".ep_ig_sub_title"
    this.templateButton = ".btn.btn-app:eq(1)"
    this.templates = ".btn.btn-app:eq(2)"
    this.clientAllowed = ".btn.btn-app:eq(3)"
    this.array = ["Images","My Infographics","Templates","Allowed Templates","Client Allowed Fonts","Labels","Translations","Template Demo"]
    this.subTitle = ".sub-title"
    this.uploadButton = ".ep_ig_upload_image_button"
    this.modal = ".modal-content"
    this.modalHeader = ".modal-title.center"
    this.fileInput = ".v-file-input__text.v-file-input__text--placeholder"
    this.confirmButton = ".confirm"
    this.errorMessage = ".toast.toast-error"
    this.message = ".toast-message"
    this.cancelButton = ".cancel"
    this.editButton = ".widget-preview-button.epi-change_label_btn:eq(0)"
    this.nameField = ".v-text-field__slot:eq(0)"
    this.imageName = ".v-text-field__slot:eq(1)"
    this.endPoint = "/infographic/editImage"
    this.closeButton = ".epi-close"
    this.successmsg =".toast.toast-success"
    this.name = ""
    this.widgetBox =".widget_box:eq(0)"
    this.newName = ".image-sub-title"
    this.dashboard = ".breadcrumb-custom-style"
    this.backgroundImgClassh2h =".infographic-background-image:eq(0)"
    this.backgroundImgClassSEvSt=".infographic-background-image:eq(2)"
    this.backgroungImgClassSingleCareer =".infographic-background-image"
    this.desiredText = false;
    this.resetBtn = ".btn.btn_reset"
    this.firstPlayerName = "#home-name"
    this.secondPlayerName = "#away-name"
    this.singleStats2ndPlayerName = ".ep_ig_edditable_component:eq(7)"
    this.title ="#template-title"
    this.title16_9 ='[id="template-title"]'
    this.title4_5 =".ep_ig_title"
    this.title3_2 =".ep_ig_title"
    this.title1_1 =".ep_ig_title"
    this.boxHeaders = ".ep_ig_stat_stage.ep_ig_edditable_field_container"
    this.boxHeadersEdit = ".ep_ig_edditable_component"
    this.stat = ".ep_ig_stat_result"
    this.librarybtn = ".confirm:eq(0)"//".cancel:eq(2)"
    this.firstLibraryimg =".widget-preview-button.epi-down:eq(0)"
    this.cropper = ".vue-advanced-cropper__image-wrapper:eq(0)"
    this.subCropper = ".vue-advanced-cropper__image"
    this.scaleWindow = ".ep_ig_cropper_zoom_container.left_image"
    this.logoMenu = ".v-select__slot:eq(0)"
    this.flashScore =".v-list-item__content:eq(1)"
    this.livescore =".v-list-item__content:eq(0)"
    this.footerBckgr = ".ep_ig_footer_container"
    this.childFooterBckgr = ".ep_ig_footer_background"
    this.logoFooter = ".ep_ig_footer_background"
    this.displayFlags = ".v-select__slot:eq(1)"
    this.parentFlagMenu = ".v-list.v-select-list.v-sheet.theme--light.theme--light"
    this.secondOptionSelector = ".v-list-item__content"
    this.firstplayerflag = ".ep_ig_player_1_flag"
    this.careerFlag = ".ep_ig_player_2_flag"
    this.primaryFont = ".v-select__slot:eq(2)"
    this.secondaryFont = ".v-select__slot:eq(3)"
    this.edditableComponent = ".ep_ig_edditable_field_container:eq(1)"
    this.edditableHeaderCareerStats = ".ep_ig_edditable_field_container:eq(0)"
    this.firstPlayerHeader = ".ep_ig_header_player_1"
    this.searchFirstName= ".ep_ig_search_bar_input:eq(0)"
    this.firstSearch = 'input[type="text"][placeholder="Search for player..."]'
    this.suggestion = ".ep_ig_player_list.ep_ig_event_results"
    this.saveDraft = ".ep_ig_save_export_container"
    this.buttonPanel = ".ep_ig_save_export_container"
    this.draftsBtn = ".upload-image-button:eq(1)"
    this.myTemplatesBtn = ".upload-image-button"
    this.deleteBtn = ".widget-delete-button.epi-bin"
    this.editorWindow = ".ep_ig_font_picker"
    this.fontWindow = ".v-input__slot"
    this.fontSuggestion = ".v-menu__content.theme--light.v-menu__content--auto.menuable__content__active.v-autocomplete__content"
    this.changeFontValue = ".v-list-item__title:eq(71)"
    this.colorPicker = ".ep_ig_color_picker_popup"
    this.colorWindow = ".ep_color_picker"
    this.colorLibrary = ".v-color-picker__canvas"
    this.dot = ".v-color-picker__canvas-dot"
    this.closeColorWindowPicker = ".reset"
    this.makeItBold = ".ep_ig_button.epi-bold"
    this.makeItUnderline = ".ep_ig_button.epi-underline"
    this.strikeItThrough = ".ep_ig_button.epi-line_through"
    this.uppercase = ".ep_ig_button.epi-uppercase"
    this.italic = ".ep_ig_button.italic"
    this.closeTheEditWindow = ".epi-cancel"
    this.firstStageHeader = ".ep_ig_edditable_component:eq(3)"
    this.secondStageHeader = ".ep_ig_edditable_component:eq(9)"
    this.thirdStageHeader = ".ep_ig_edditable_component:eq(15)"
    this.fourthStageHeader = ".ep_ig_edditable_component:eq(20)"
    this.fifthStageHeader = ".ep_ig_edditable_component:eq(21)"
    this.sixthStageHeader = "..ep_ig_edditable_component:eq(22)"
    this.allBackgroundImgs = '.infographic-background-image'
    this.box = '[id="ev_box-1"]'
    this.secondScore = ".ep_ig_edditable_component:eq(10)"
    this.singleStatsHeaders = "#stat_label-"
    this.careerStats = "[id='ee_stat-result-"
    this.homeStat = "#home_stat-"
    this.awayStat = "#away_stat-"
    this.flagClass = ".ep_ig_player_"
    this.searchClass = ".ep_ig_search_bar_input"
    this.suggestionSingleEvStats = ".ep_ig_event_wrapper:eq(0)"
    this.secondPlayerNameEvStats = ".ep_ig_edditable_component:eq(5)"
    this.scaleWindowRight = ".ep_ig_cropper_zoom_container.right_image"
    this.playerNameCareer = ".ep_ig_header_player_2"
    this.careerStatsFifthRow = ".ep_ig_edditable_component:eq(10)"
    this.careerStatsValueFifth = ".ep_ig_edditable_component:eq(11)"
    this.careerStatsSixthRow = ".ep_ig_edditable_component:eq(12)"
    this.careerStatsValueSixth = ".ep_ig_edditable_component:eq(13)" 
    this.formatButton = ".ep_ig_size_box"
    this.setsResults = "#template-result-"
    this.team_name_versus = '[id="versus_team"]'
    this.dataMenu = ".ep_ig_data_container.ep_ig_data_container_player:eq(0)"
    
    // this.formatButton3_2 = ".ep_ig_size_box:eq(2)"
    // this.formatButton1_1 = ".ep_ig_size_box:eq(3)"
    this.halfElement = ".twitter-cropper.vue-advanced-cropper"
    //this.element = ".twitter-cropper.vue-advanced-cropper"
    this.dropdown_suggestions = ".ep_ig_player_list.ep_ig_player_first.ep_ig_event_results"
    // this.formatButton3_2 = ".ep_ig_size_box:eq(2)"
    // this.formatButton1_1 = ".ep_ig_size_box:eq(3)"
    // this.halfElement = ".twitter-cropper.vue-advanced-cropper"
    //this.element = ".twitter-cropper.vue-advanced-cropper"
    this.infograph_canvas = ".ep_ig_wrapper_container"
    this.x_class = ".ep_ig_close_search_input"
    this.player_suggestions = ".ep_ig_player_list.ep_ig_event_results"
    this.search_input = ".ep_ig_event_input_search"
    this.event_suggestions = ".ep_ig_event_results"
    this.event_header = ".ep_ig_event_search"
    
}openImagePage(){
    // cy.OpenPagesInfograph(this.imageButton,this.imagesHeader,"Images")
    // cy.go(-1) //go back to the previous page
    // cy.OpenPagesInfograph(this.imageButton,this.imagesHeader,"Images")
    for(var i = 0; i<(this.array).length;i++){        
        cy.get(".btn.btn-app").eq(i)
        .click()
        if(i === 4){
            cy.get(this.subTitle)
            .should("exist")
            .and("contain",this.array[i])
        }else{
            cy.get(this.imagesHeader)
            .should("exist")
            .and("contain",this.array[i])

        }       
        cy.go(-1)
        // cy.get(this.imageButton)
        // .click()
    }
}testImagePage(){
    cy.get(this.imageButton)
    .click()
    //upload image
    cy.clickSeveralAssert(this.uploadButton,this.modal,"be.visible")    
    cy.get(this.modalHeader)
    .should("be.visible")
    .and("have.text","Upload image")
    cy.clickSeveralAssert(this.confirmButton,this.errorMessage,"be.visible")
    cy.clickSeveralAssert(this.cancelButton,this.modal,"not.exist")    
    cy.get(this.errorMessage)
    .find(this.closeButton)
    .click()


}editNameOfImgNegative(){       
    
    cy.ImageNameNegative(this.endPoint,this.editButton,this.modal,this.imageName,this.confirmButton,this.errorMessage,this.closeButton,this.errorMessage,422,this.cancelButton);
}editNameOfImgSymbols(){
    cy.ImageNameNegativeSymbols(this.endPoint,this.editButton,this.modal,this.imageName,this.confirmButton,this.errorMessage,this.closeButton,this.errorMessage,422,this.cancelButton)
}editNameSuccessful(){ 
    const letters = "abcdefghijklmnopqrstuvwxyz"
    const number = "0123456789"
    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * letters.length);
        const randomNumbers = Math.floor(Math.random() * number.length)
        this.name += letters[randomIndex]+number[randomNumbers];        
      }
    cy.imageNamePositive(this.editButton,this.modal,this.imageName,this.confirmButton,this.successmsg,this.name,this.widgetBox,this.newName)    
    cy.wait(1000)
    cy.loopThroughClasses(this.newName,this.name)
    cy.get(this.dashboard)
    .click()
    cy.get(this.subTitle)
    .should("have.text","Dashboard")
}openH2Htemplate(){
        cy.get(this.templateButton)
        .click()        
        cy.get(this.newName).each((element, index) => {
            cy.wrap(element).invoke('text').then((text) => {                
                if (text === " LS Tennis Single H2H Results ") {
                    this.desiredText = true;
                    cy.get(this.backgroundImgClassh2h)
                    // .find(this.backgroundImgClass)
                    .click()
                    cy.get(this.resetBtn)
                    .should('exist');
                }
            });
        }).then(() => {
            if (this.desiredText) {                
            
            } else {
                throw Error;            
            }
        });
        
}
openSinglesEventStats(){
    cy.get(this.templateButton)
    .click()        
    cy.get(this.newName).each((element, index) => {
        cy.wrap(element).invoke('text').then((text) => {                
            if (text === " LS Tennis Single Event Stats ") {
                this.desiredText = true;
                cy.get(this.backgroundImgClassSEvSt)
                // .find(this.backgroundImgClass)
                .click()
                cy.get(this.resetBtn)
                .should('exist');
            }
        });
    }).then(() => {
        if (this.desiredText) {                
        
        } else {
            throw Error;            
        }
    });
    
}
openSinglePlayerStats(){
    cy.get(this.templateButton)
    .click()        
    cy.get(this.newName).each((element, index) => {
        cy.wrap(element).invoke('text').then((text) => {                
            if (text === " EG Football Player Event Stats ") {
                this.desiredText = true;
                cy.get(this.backgroungImgClassSingleCareer).eq(index)
                // .find(this.backgroundImgClass)
                .click()
                cy.get(this.resetBtn)
                .should('exist');
            }
        });
    }).then(() => {
        if (this.desiredText) {                
        
        } else {
            throw Error;            
        }
    });
    
}
h2hTemplateDesign(){ //more things can be added here
    //format 16:9

    cy.get(this.firstPlayerName)
    .should("have.css","font-size","50px")
    .and("have.css","font-weight",'700')
    .and("have.css","color","rgb(255, 255, 255)")

    cy.get(this.secondPlayerName)
    .should("have.css","font-size","50px")
    .and("have.css","font-weight",'700')
    .and("have.css","color","rgb(255, 255, 255)")

    cy.get(this.title)
    .should("have.attr","style","color: rgb(255, 255, 255); font-size: 120px;")
    .and("have.css","font-weight",'400')
    

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

    cy.get(this.title)
    .should("have.attr","style","color: rgb(255, 255, 255); font-size: 80px;")
    .and("have.css","font-weight",'400')
    

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

    cy.get(this.title)
    .should("have.attr","style","color: rgb(255, 255, 255); font-size: 120px;")
    .and("have.css","font-weight",'400')
    

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
    .should("have.css","font-size","36px")
    .and("have.css","font-weight",'700')
    .and("have.css","color","rgb(255, 255, 255)")

    cy.get(this.secondPlayerName)
    .should("have.css","font-size","36px")
    .and("have.css","font-weight",'700')
    .and("have.css","color","rgb(255, 255, 255)")

    cy.get(this.title)
    .should("have.attr","style","color: rgb(255, 255, 255); font-size: 80px;")
    .and("have.css","font-weight",'400')
    

    cy.get(this.boxHeaders)
    .find(this.boxHeadersEdit)
    .each((element,index)=>{
        cy.wrap(element).should("have.css","font-weight","700")
        .and("have.css","font-size","26px")
        .and("have.css","color","rgb(0, 0, 0)")
    })

}
singlesEventStatsDesign(){ 
    //format 16:9
    cy.get(this.firstPlayerName)
    .should("have.css","font-size","50px")
    .and("have.css","font-weight",'700')
    .and("have.css","color","rgb(255, 255, 255)")
    //check 2nd player name
    cy.get(this.secondPlayerName)
    .should("have.css","font-size","50px")
    .and("have.css","font-weight",'700')
    .and("have.css","color","rgb(255, 255, 255)")
    //check the title
    cy.get(this.title16_9)
    .should("have.css","font-size","130px")
    .and("have.css","font-weight",'400')
    .and("have.css","color","rgb(255, 255, 255)")  
    //check the set results
    for(let i = 0; i <= 4; i++){
        cy.get(this.setsResults + i)
        .should("have.css","font-weight","400")
        .and("have.css","color","rgb(255, 255, 255)")
        .and("have.attr","style","color: rgb(255, 255, 255); font-size: 30px;")
    }
    //check the stats headers
    for(let i = 0;i<=5; i++){
        let stat = this.singleStatsHeaders + i
        cy.get(stat).should("have.attr","style","font-weight: 700; color: rgb(0, 30, 40); font-size: 46px;")
        
    }
    // //check the data values for home participant
    for(let i = 0 ; i <=5; i++){
        let home_stat =  this.homeStat + i
        cy.get(home_stat).should("have.attr","style","color: rgb(255, 0, 70); font-size: 46px;")       
    }
    // //check the data values for away participant
    for(let i = 0 ; i <=5; i++){
        let away_stat =  this.awayStat + i
        cy.get(away_stat).should("have.attr","style","color: rgb(255, 0, 70); font-size: 46px;")       
    }
    // //check the flags
    for(let i = 1; i <=2; i++){
        let home_away = this.flagClass + i + "_flag"
        cy.get(home_away).should("have.css","align-items","center")
        .and("have.css","background-color","rgb(255, 255, 255)")
        .and("have.css","border-radius","20px")
        .and("have.css","display","flex")
        .and("have.css","justify-content","center")

    }
     
    // //format 4:5
    cy.changeFormat(this.halfElement,this.formatButton,1)

    cy.get(this.firstPlayerName)
    .should("have.css","font-size","50px")
    .and("have.css","font-weight",'700')
    .and("have.css","color","rgb(255, 255, 255)")
    //check 2nd player name
    cy.get(this.secondPlayerName)
    .should("have.css","font-size","50px")
    .and("have.css","font-weight",'700')
    .and("have.css","color","rgb(255, 255, 255)")
    //check the title
    cy.get(this.title16_9) // this is header for 4:5
    .should("have.css","font-size","100px")
    .and("have.css","font-weight",'400')
    .and("have.css","color","rgb(255, 255, 255)")  
    //check the set results
    for(let i = 0; i <= 4; i++){
        cy.get(this.setsResults + i)
        .should("have.css","font-weight","400")
        .and("have.css","color","rgb(255, 255, 255)")
        .and("have.attr","style","color: rgb(255, 255, 255); font-size: 22px;")
    }
    //check the stats headers
    for(let i = 0;i<=5; i++){
        let stat = this.singleStatsHeaders + i
        cy.get(stat).should("have.attr","style","font-weight: 700; color: rgb(0, 30, 40); font-size: 32px;")
        
    }
    //check the data values for home participant
    for(let i = 0 ; i <=5; i++){
        let home_stat =  this.homeStat + i
        cy.get(home_stat).should("have.attr","style","color: rgb(255, 0, 70); font-size: 36px;")       
    }
    //check the data values for away participant
    for(let i = 0 ; i <=5; i++){
        let away_stat =  this.awayStat + i
        cy.get(away_stat).should("have.attr","style","color: rgb(255, 0, 70); font-size: 36px;")       
    }
    //check the flags
    for(let i = 1; i <=2; i++){
        let home_away = this.flagClass + i + "_flag"
        cy.get(home_away).should("have.css","align-items","center")
        .and("have.css","background-color","rgb(255, 255, 255)")
        .and("have.css","border-radius","20px")
        .and("have.css","display","flex")
        .and("have.css","justify-content","center")

    }

    // //format 3:2
    cy.changeFormat(this.halfElement,this.formatButton,2)

    cy.get(this.firstPlayerName)
    .should("have.css","font-size","50px")
    .and("have.css","font-weight",'700')
    .and("have.css","color","rgb(255, 255, 255)")
    //check 2nd player name
    cy.get(this.secondPlayerName)
    .should("have.css","font-size","50px")
    .and("have.css","font-weight",'700')
    .and("have.css","color","rgb(255, 255, 255)")
    //check the title
    cy.get(this.title16_9)//this is header for 3:2
    .should("have.css","font-size","100px")
    .and("have.css","font-weight",'400')
    .and("have.css","color","rgb(255, 255, 255)")  
    //check the set results
    for(let i = 0; i <= 4; i++){
        cy.get(this.setsResults + i)
        .should("have.css","font-weight","400")
        .and("have.css","color","rgb(255, 255, 255)")
        .and("have.attr","style","color: rgb(255, 255, 255); font-size: 30px;")
    }
    //check the stats headers
    for(let i = 0;i<=5; i++){
        let stat = this.singleStatsHeaders + i
        cy.get(stat).should("have.attr","style","font-weight: 700; color: rgb(0, 30, 40); font-size: 46px;")
        
    }
    //check the data values for home participant
    for(let i = 0 ; i <=5; i++){
        let home_stat =  this.homeStat + i
        cy.get(home_stat).should("have.attr","style","color: rgb(255, 0, 70); font-size: 46px;")       
    }
    //check the data values for away participant
    for(let i = 0 ; i <=5; i++){
        let away_stat =  this.awayStat + i
        cy.get(away_stat).should("have.attr","style","color: rgb(255, 0, 70); font-size: 46px;")       
    }
    //check the flags
    for(let i = 1; i <=2; i++){
        let home_away = this.flagClass + i + "_flag"
        cy.get(home_away).should("have.css","align-items","center")
        .and("have.css","background-color","rgb(255, 255, 255)")
        .and("have.css","border-radius","20px")
        .and("have.css","display","flex")
        .and("have.css","justify-content","center")

    }
    
    // //format 3:2
    cy.changeFormat(this.halfElement,this.formatButton,3)

    cy.get(this.firstPlayerName)
    .should("have.css","font-size","50px")
    .and("have.css","font-weight",'700')
    .and("have.css","color","rgb(255, 255, 255)")
    //check 2nd player name
    cy.get(this.secondPlayerName)
    .should("have.css","font-size","50px")
    .and("have.css","font-weight",'700')
    .and("have.css","color","rgb(255, 255, 255)")
    //check the title
    cy.get(this.title16_9)//this is header for 1:1
    .should("have.css","font-size","50px")
    .and("have.css","font-weight",'400')
    .and("have.css","color","rgb(255, 255, 255)")  
    //check the set results
    for(let i = 0; i <= 4; i++){
        cy.get(this.setsResults + i)
        .should("have.css","font-weight","400")
        .and("have.css","color","rgb(255, 255, 255)")
        .and("have.attr","style","color: rgb(255, 255, 255); font-size: 22px;")
    }
    //check the stats headers
    for(let i = 0;i<=5; i++){
        let stat = this.singleStatsHeaders + i
        cy.get(stat).should("have.attr","style","font-weight: 700; color: rgb(0, 30, 40); font-size: 32px;")
        
    }
    //check the data values for home participant
    for(let i = 0 ; i <=5; i++){
        let home_stat =  this.homeStat + i
        cy.get(home_stat).should("have.attr","style","color: rgb(255, 0, 70); font-size: 36px;")       
    }
    //check the data values for away participant
    for(let i = 0 ; i <=5; i++){
        let away_stat =  this.awayStat + i
        cy.get(away_stat).should("have.attr","style","color: rgb(255, 0, 70); font-size: 36px;")       
    }
    //check the flags
    for(let i = 1; i <=2; i++){
        let home_away = this.flagClass + i + "_flag"
        cy.get(home_away).should("have.css","align-items","center")
        .and("have.css","background-color","rgb(255, 255, 255)")
        .and("have.css","border-radius","20px")
        .and("have.css","display","flex")
        .and("have.css","justify-content","center")

    }

    // //restarting format 16:9
    cy.changeFormat(this.halfElement,this.formatButton,0)

    // }
}
singlesPlayerCareerDesign(){ 
    //format 16:9
    //checks players name
    cy.get(this.secondPlayerName)
    .should("have.attr","style","font-weight: 700; color: rgb(255, 255, 255); font-size: 80px;")
    // .and("have.css","font-weight",'400')
    // .and("have.css","color","rgb(255, 255, 255)")
    // //check title font size
    
    //check the player's name
    cy.get(this.team_name_versus)
    .should("have.css","font-size","40px")
    .and("have.css","font-weight",'400')
    .and("have.css","color","rgb(255, 255, 255)")  
    //check the stats text
    for(let i = 2; i <= 13; i++){
        if(i % 2 === 0){
            cy.get(this.boxHeadersEdit).eq(i)
            .should("have.css","font-weight","700")
            .and("have.css","color","rgb(0, 0, 0)")
            .and("have.attr","style","font-weight: 700; color: rgb(0, 0, 0); font-size: 34px;")
        } else{
            let stat = this.careerStats + i + "']"
            // cy.get(stat).should("have.attr","style","font-family: FlashDisplay;")
            cy.get(this.boxHeadersEdit).eq(i)
            .should("have.css","font-size","58px")
            .and("have.css","color","rgb(202, 23, 68)")
        }
       
    }  
    //check the flag
    
    cy.get(this.careerFlag).should("have.css","align-items","center")
        .and("have.css","background-color","rgb(255, 255, 255)")
        .and("have.css","border-radius","20px")
        .and("have.css","display","flex")
        .and("have.css","justify-content","center")

    //format 4:5
    cy.changeFormat(this.halfElement,this.formatButton,1)
    
    cy.get(this.secondPlayerName)
    .should("have.css","font-size","80px")
    .and("have.css","font-weight",'700')
    .and("have.css","color","rgb(255, 255, 255)")
    //check title font size
    
    //check the player's name
    cy.get(this.team_name_versus)
    .should("have.css","font-size","40px")
    .and("have.css","font-weight",'400')
    .and("have.css","color","rgb(255, 255, 255)")  
    //check the stats text
    for(let i = 2; i <= 13; i++){
        if(i % 2 === 0){
            cy.get(this.boxHeadersEdit).eq(i)
            .should("have.css","font-weight","700")
            .and("have.css","color","rgb(0, 0, 0)")
            .and("have.attr","style","font-weight: 700; color: rgb(0, 0, 0); font-size: 32px;")
        } else{
            let stat = this.careerStats + i + "']"
            // cy.get(stat).should("have.attr","style","font-family: FlashDisplay;")
            cy.get(this.boxHeadersEdit).eq(i)
            .should("have.css","font-size","54px")
            .and("have.css","color","rgb(202, 23, 68)")
        }
       
    }  
    //check the flag
    
    cy.get(this.careerFlag).should("have.css","align-items","center")
        .and("have.css","background-color","rgb(255, 255, 255)")
        .and("have.css","border-radius","20px")
        .and("have.css","display","flex")
        .and("have.css","justify-content","center")

    cy.changeFormat(this.halfElement,this.formatButton,2)
        //format 3:2
    cy.get(this.secondPlayerName)
        .should("have.css","font-size","80px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
        //check title font size
        
        //check the player's name
    cy.get(this.team_name_versus)
        .should("have.css","font-size","40px")
        .and("have.css","font-weight",'400')
        .and("have.css","color","rgb(255, 255, 255)")  
        //check the stats text
    for(let i = 2; i <= 13; i++){
            if(i % 2 === 0){
                cy.get(this.boxHeadersEdit).eq(i)
                .should("have.css","font-weight","700")
                .and("have.css","color","rgb(0, 0, 0)")
                .and("have.attr","style","font-weight: 700; color: rgb(0, 0, 0); font-size: 34px;")
            } else{
                let stat = this.careerStats + i + "']"
                // cy.get(stat).should("have.attr","style","font-family: FlashDisplay;")
                cy.get(this.boxHeadersEdit).eq(i)
                .should("have.css","font-size","58px")
                .and("have.css","color","rgb(202, 23, 68)")
            }
           
    }  
        //check the flag
        
    cy.get(this.careerFlag).should("have.css","align-items","center")
            .and("have.css","background-color","rgb(255, 255, 255)")
            .and("have.css","border-radius","20px")
            .and("have.css","display","flex")
            .and("have.css","justify-content","center")

    //format 1:1
    cy.changeFormat(this.halfElement,this.formatButton,3)

    cy.get(this.secondPlayerName)
        .should("have.css","font-size","80px")
        .and("have.css","font-weight",'700')
        .and("have.css","color","rgb(255, 255, 255)")
        //check title font size
        
        //check the player's name
    cy.get(this.team_name_versus)
        .should("have.css","font-size","40px")
        .and("have.css","font-weight",'400')
        .and("have.css","color","rgb(255, 255, 255)")  
        //check the stats text
    for(let i = 2; i <= 13; i++){
            if(i % 2 === 0){
                cy.get(this.boxHeadersEdit).eq(i)
                .should("have.css","font-weight","700")
                .and("have.css","color","rgb(0, 0, 0)")
                .and("have.attr","style","font-weight: 700; color: rgb(0, 0, 0); font-size: 32px;")
            } else{
                let stat = this.careerStats + i + "']"
                // cy.get(stat).should("have.attr","style","font-family: FlashDisplay;")
                cy.get(this.boxHeadersEdit).eq(i)
                .should("have.css","font-size","54px")
                .and("have.css","color","rgb(202, 23, 68)")
            }
           
    }  
        //check the flag
        
    cy.get(this.careerFlag).should("have.css","align-items","center")
            .and("have.css","background-color","rgb(255, 255, 255)")
            .and("have.css","border-radius","20px")
            .and("have.css","display","flex")
            .and("have.css","justify-content","center")
       
    // //restarting format 16:9
    cy.changeFormat(this.halfElement,this.formatButton,0)
    
}
scaleCheck(){
    //upload image
    cy.get(this.librarybtn)
    .click()
    cy.get(this.firstLibraryimg)
    .click()
    cy.wait(1000) //upload image
    cy.get(this.cropper)
    .find(this.subCropper)// check image's attributes (if it's loadded)
    .invoke('attr', 'style')
    .should('contain', 'height: 1024px;')
    .and('contain', 'left: 0px;')
    .and('contain', 'top: 0px;')
    .and('contain', 'width: 768px;')
    .and('contain', 'height: 1024px; left: 0px; top: 0px; width: 768px; transform: translate(576px, 28px) rotate(0deg) scaleX(1.56801) scaleY(1.56801);')
    //check for scale window
    cy.clickSeveralAssertForceTrue(this.cropper,".ep_ig_cropper_zoom_container.right_image","be.visible")    
    cy.get(".epi-cancel")
    .click() //close the scale window
    //click reset to defaults
    cy.get(this.resetBtn)
    .click()
    cy.wait(500)
    //click on the image
    cy.clickSeveralAssertForceTrue(".vue-advanced-cropper__image-wrapper",".ep_ig_cropper_zoom_container.right_image","be.visible")
}
scaleCheckPlayerCareerStats(){
    //upload image
    cy.get(this.librarybtn)
    .click()
    cy.get(this.firstLibraryimg)
    .click()
    cy.wait(1000) //upload image
    cy.get(this.cropper)
    .find(this.subCropper)// check image's attributes (if it's loadded)
    .invoke('attr', 'style')
    .should('contain', 'height: 1024px;')
    .and('contain', 'left: 0px;')
    .and('contain', 'top: 0px;')
    .and('contain', 'width: 768px;')
    .and('contain', 'transform: translate(576px, 28px) rotate(0deg) scaleX(1.56801) scaleY(1.56801);')
    //check for scale window
    cy.clickSeveralAssertCovered(this.cropper,this.scaleWindowRight,"be.visible")    
    cy.get(".epi-cancel")
    .click() //close the scale window
    //click reset to defaults
    cy.wait(500)
    cy.get(this.resetBtn)
    .click()
    cy.wait(500)
    //click on the image to assert it still exists
    cy.clickSeveralAssertCovered(this.cropper,this.scaleWindowRight,"be.visible")
}
changeDataH2h(){
    //change logo
    cy.epanelLogo(this.logoMenu,this.flashScore,this.logoFooter,'/css/infographic/logos/flashscore.png')
    cy.epanelLogo(this.logoMenu,this.livescore,this.logoFooter,'/css/infographic/logos/livesport.png')
    //hide flags
    cy.hideFlags(this.displayFlags,this.parentFlagMenu,".v-list-item__content",this.firstplayerflag)
    //change primary font
    cy.get(this.primaryFont)
    .click()
    cy.get(this.secondOptionSelector).eq(5)
    .click()
    cy.get(this.edditableComponent)
    .should("have.attr","style","font-family: Ubuntu;")
    //change the secondary font
    cy.get(this.secondaryFont)
    .click()
    cy.get(this.secondOptionSelector).eq(10)
    .click()
    cy.get(this.firstPlayerHeader)
    .should("have.attr","style","font-family: DRPublik;")
    //change first player name
    cy.get(this.firstSearch)
    .eq(0)
    .click()
    .clear().type("Grigor Dimitrov")
    cy.wait(1000) 
    cy.get(this.suggestion)
    .click()
    cy.wait(1000)
    cy.get(this.firstPlayerName)
    .invoke('text')    
    .then((text)=>{
        const playerName = text.trim();
        // console.log(text)
        console.log("this is it" + playerName)
        cy.wrap(playerName).should("equal","Grigor Dimitrov")
    })
    //change second player name
    cy.get(this.firstSearch)
    .eq(1)
    .click()
    .clear().type("Alexander Zverev")
    cy.wait(1000) 
    cy.get(this.suggestion)
    .click()
    cy.wait(1000)
    cy.get(this.secondPlayerName)
    .invoke('text')    
    .then((text)=>{
        const playerName = text.trim();
        // console.log(text)
        console.log("this is it" + playerName)
        cy.wrap(playerName).should("equal","Alexander Zverev")
    })    
}
changeDataSinglesEvStats(){ 
        //change logo
        cy.epanelLogo(this.logoMenu,this.flashScore,this.logoFooter,'/css/infographic/logos/flashscore.png')
        cy.epanelLogo(this.logoMenu,this.livescore,this.logoFooter,'/css/infographic/logos/livesport.png')
        //hide flags
        cy.hideFlags(this.displayFlags,this.parentFlagMenu,".v-list-item__content",this.firstplayerflag)
        //change primary font
        cy.get(this.primaryFont)
        .click()
        cy.get(this.secondOptionSelector).eq(5)
        .click()
        cy.get(this.edditableComponent)
        .should("have.attr","style","font-family: Ubuntu;")
        //change the secondary font
        cy.get(this.secondaryFont)
        .click()
        cy.get(this.secondOptionSelector).eq(10)
        .click()
        cy.get(this.firstPlayerHeader)
        .should("have.attr","style","font-family: DRPublik;")
        //change first player name
        cy.get(this.searchFirstName)
        .eq(0)
        .click()
        .type("Roger Federer")
        cy.wait(1000) 
        cy.get(this.suggestionSingleEvStats)
        .click()        
        cy.wait(1000)
        cy.get(this.firstPlayerName)
        .invoke('text')    
        .then((text)=>{
            const playerName = text.trim();
            // console.log(text)
            console.log("this is it" + playerName)
            if(text ==="Roger Federer"){cy.wrap(playerName).should("equal","Roger Federer")}
            else {
                cy.get(this.firstPlayerName).invoke('text').then((text)=>{
                    const secondPlayer = text.trim()
                    cy.wrap(secondPlayer).should('equal',"Roger Federer")
                })
            }
            
        })
       
}
changeDataPlayerCareerStats(){ //in progress / paused due to a bug
    //change logo
    cy.epanelLogo(this.logoMenu,this.flashScore,this.logoFooter,'img','/css/infographic/logos/enetpulse_white.png')
    cy.epanelLogo(this.logoMenu,this.livescore,this.logoFooter,'img','/css/infographic/logos/enetpulse.png')
    //hide flags
    // cy.hideFlags(".ep_ig_show_flags",this.parentFlagMenu,".v-list-item__content",this.careerFlag)
    //hide the flags with the button no
    cy.get(".ep_ig_show_flags")
    .find('li').contains('No').click({force:true})
    //check the logo next to player's name
    cy.get(this.careerFlag)
    .should("not.exist")
    //change primary font
    cy.get(this.primaryFont)
    .click()
    cy.get(this.secondOptionSelector,{scrollIntoView: false}).eq(5) //select DR Publik
    .wait(500)
    .click({force:true})
    cy.get(this.team_name_versus)
    .should("have.attr","style","color: rgb(255, 255, 255); font-size: 40px;")
    //change the secondary font
    cy.get(this.secondaryFont)
    .click()
    //check if it's changed
    cy.get(this.secondOptionSelector,{scrollIntoView:false}).eq(10)
    .click({force:true})
    cy.get('.ep_ig_stat_value') //first stat value 
    .should("have.attr","style","font-family: FlashDisplay;")
    //search for event
    cy.get(".ep_ig_data_container.ep_ig_data_container_player").eq(0).within(()=>{
        cy.get(".ep_ig_search_bar_input")
        .click({ force: true })
        .type("Argentina-France");
        cy.get(this.suggestionSingleEvStats)
        .click({force:true});
      
    })
    // .scrollIntoView()
   
    // cy.wait(2000);
  
   
  

    cy.wait(1000)
    cy.get("[id='away-name']")
    .invoke('text')    
    .then((text)=>{
        const playerName = text.trim();
        // console.log(text)
        console.log(text)
        if(playerName ==="Lionel Messi"){cy.wrap(playerName).should("equal","Lionel Messi")}
        else {
            // cy.get(this.title).invoke('text').then((text)=>{
            //     const secondPlayer = text.trim()
            //     cy.wrap(secondPlayer).should('equal',"Grigor Dimitrov")
            // })
            console.log("ERRRRRROOOR")
            throw new Error ("Unexpected player name: " + playerName)
        }
        
    }) 
   
}
draftWorkH2H(){
    const letters = "abcdefghijklmnopqrstuvwxyz"
    const number = "0123456789"
    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * letters.length);
        const randomNumbers = Math.floor(Math.random() * number.length)
        this.name += letters[randomIndex]+number[randomNumbers];        
      }
    cy.get(this.buttonPanel)  
    .find(".cancel").eq(0)  
    .click()
    cy.get(this.modal)
    .find(this.nameField)
    .click()
    .type(this.name)
    cy.get(".confirm").eq(2)
    .click()
    cy.wait(2000)
    cy.get(this.successmsg)
    .should('exist')
    .and('be.visible')
    let flag = false;
    cy.get(this.dashboard).eq(1).click()
    cy.get(this.draftsBtn).click()   
    cy.get(this.newName)  
    //check if the draft is created
    .each((element,index)=>{
        cy.wrap(element).invoke('text').then((text) => {       
            cy.log(text)
            cy.log(this.playerName)                    
            if (text === " "+this.name+" ") {                
                flag = true;
                let LowerIndex = Math.floor(index/2)
                cy.get(this.allBackgroundImgs+":eq("+LowerIndex+")").click();      
                
                cy.get(this.edditableComponent)
                .should("have.attr","style","font-family: Ubuntu;") //check if the font style is saved
                cy.get(this.firstPlayerHeader)
                .should("have.attr","style","font-family: DRPublik;") // check if the font style is saved
                cy.get(this.firstPlayerName)
                .invoke('text')    
                .then((text)=>{
                    const playerName = text.trim();
                    // console.log(text)
                    console.log("this is it" + playerName)
                    cy.wrap(playerName).should("equal","Grigor Dimitrov")
                })
                cy.get(this.secondPlayerName)
                .invoke('text')    
                .then((text)=>{
                    const playerName = text.trim();
                    // console.log(text)
                    console.log("this is it" + playerName)
                    cy.wrap(playerName).should("equal","Alexander Zverev")
                })
            
                cy.go(-1) //go back to templates
                cy.get(this.draftsBtn).click()// go to drafts 
                
            }
        });
    }).then(() => {
        if (flag) {                
            expect(flag).to.be.true;
            
        } else {
            throw Error;            
        }
    })



//delete all drafts
    cy.get(this.deleteBtn)
    .each((element,index)=>{
        cy.wrap(element)
        .click()
        cy.get(this.modal)
        cy.get(this.confirmButton)
        .click()
    })
    //check if delete successful message appears
    cy.get(this.successmsg)
    .should('exist')
}
draftWorkSinglesEventStats(){
 
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const number = "0123456789";
    this.name = ""; // Initialize this.name
    
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * letters.length);
      const randomNumbers = Math.floor(Math.random() * number.length);
      this.name += letters[randomIndex] + number[randomNumbers];
    }
    
    cy.get(this.buttonPanel)
      .find(".cancel")
      .eq(0)
      .click();
    cy.get(this.modal)
      .find(this.nameField)
      .click()
      .type(this.name);
    cy.get(".confirm")
      .eq(2)
      .click();
    cy.wait(2000);
    cy.get(this.successmsg).should('exist').and('be.visible');
    
    let flag = false;
    cy.get(this.dashboard).eq(1).click();
    cy.get(this.draftsBtn).click();
    
    cy.get(this.newName)
      //check if the draft is created
      .each((element, index) => {
        cy.wrap(element).invoke('text').then((text) => {
          cy.log(text);
          cy.log(this.playerName);
          if (text === " " + this.name + " ") {
            flag = true;           
            let LowerIndex = Math.floor(index/2)
            cy.get(this.allBackgroundImgs+":eq("+LowerIndex+")").click();
    
            // Rest of your assertions here...
            cy.get(this.edditableComponent)
              .should("have.attr", "style", "font-family: Ubuntu;"); //check if the font style is saved
            cy.get(this.firstPlayerHeader)
              .should("have.attr", "style", "font-family: DRPublik;"); // check if the font style is saved
            cy.get(this.firstPlayerName)
              .invoke('text')
              .then((text) => {
                const playerName = text.trim();
                console.log("this is it" + playerName);
                if (text === "Roger Federer") {
                  cy.wrap(playerName).should("equal", "Roger Federer");
                } else {
                  cy.get(this.firstPlayerName).invoke('text').then((text) => {
                    const secondPlayer = text.trim();
                    cy.wrap(secondPlayer).should('equal', "Roger Federer");
                  });
                }
              });
    
            // Rest of your assertions here...
    
            cy.go(-1); //go back to templates
            cy.get(this.draftsBtn).click(); // go to drafts
          }
        });
      })
      .then(() => {
        if (flag) {
          expect(flag).to.be.true;
        } else {
          throw Error;
        }
      })


//delete all drafts
    cy.get(this.deleteBtn)
    .each((element,index)=>{
        cy.wrap(element)
        .click()
        cy.get(this.modal)
        cy.get(this.confirmButton)
        .click()
    })
    //check if delete successful message appears
    cy.get(this.successmsg)
    .should('exist')
}
draftWorkSingleCareerStats(){
 
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const number = "0123456789";
    this.name = ""; // Initialize this.name
    
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * letters.length);
      const randomNumbers = Math.floor(Math.random() * number.length);
      this.name += letters[randomIndex] + number[randomNumbers];
    }
    
    cy.get(this.buttonPanel)
      .find(".cancel")
      .eq(0)
      .click();
    cy.get(this.modal)
      .find(this.nameField)
      .click()
      .type(this.name);
    cy.get(".confirm")
      .eq(1)
      .click();
    cy.wait(2000);
    cy.get(this.successmsg).should('exist').and('be.visible');
    
    let flag = false;
    cy.get(this.dashboard).eq(1).click();
    cy.get(this.draftsBtn).click();
    
    cy.get(this.newName)
      //check if the draft is created
      .each((element, index) => {
        cy.wrap(element).invoke('text').then((text) => {
          cy.log(text);
          cy.log(this.playerName);
          
          if (text === " " + this.name + " ") {
            flag = true;           
            let LowerIndex = Math.floor(index/2)
            cy.get(this.allBackgroundImgs+":eq("+LowerIndex+")").click();
    
            // Rest of your assertions here...
            // cy.get(this.edditableComponent)
            //   .should("have.attr", "style", "font-family: Ubuntu;"); //check if the font style is saved
            cy.get(".ep_ig_edditable_component").eq(0)
              .should("have.attr", "style", "font-weight: 700; color: rgb(255, 255, 255); font-size: 80px;"); // check if the font style is saved
            cy.get(".ep_ig_edditable_component").eq(0).invoke('text')             
              .then((text) => {
                const playerName = text.trim();
                console.log(text);
                if (playerName === "Lionel Messi") {
                  cy.wrap(playerName).should("equal", "Lionel Messi"); // SHOULD BE CHANGED WHEN THE FIX IS DONE
                } else {
                //   cy.get(this.secondPlayerNameEvStats).invoke('text').then((text) => {
                //     const secondPlayer = text.trim();
                //     cy.wrap(secondPlayer).should('equal', "Grigor Dimitrov");
                //   });
                    console.log("TELSE")
                    throw Error
                }
              });
    
            // Rest of your assertions here...
    
            cy.go(-1); //go back to templates
            cy.get(this.draftsBtn).click(); // go to drafts
          }
        });
      }).then(() => {        
            if (flag===true) {
                expect(flag).to.be.true;
            } else {
                throw Error;
            }
      })


//delete all drafts
    cy.get(this.deleteBtn)
    .each((element,index)=>{
        cy.wrap(element)
        .click()
        cy.get(this.modal)
        cy.get(this.confirmButton)
        .click()
    })
    //check if delete successful message appears
    cy.get(this.successmsg)
    .should('exist')
}
changeComponentsPropertiesH2H(){
    cy.wait(1000)
    cy.visit('https://epanel.enetsites.com/infographic/client_templates')
    
    cy.wait(1000)
    cy.get(this.backgroundImgClassh2h).click()
    cy.get(this.firstPlayerName).click()
    //opens the editor window
    cy.getElement('css',this.editorWindow,500)
    cy.clickSeveralAssert(this.logoMenu,this.fontSuggestion,"be.visible") 
    cy.get(this.changeFontValue).click() //select a new value for the font size to 72px
    //change the first player  color to background-color: rgb(128, 64, 64);
    cy.clickSeveralAssert(this.colorPicker,this.colorWindow,"be.visible")  
    cy.get(this.colorLibrary).click()
    cy.get(this.closeColorWindowPicker).click()
    cy.get(this.colorPicker).invoke('attr', 'style').then(style => {
        const rgbMatch = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/.exec(style);
        const r = parseInt(rgbMatch[1]);
        const g = parseInt(rgbMatch[2]);
        const b = parseInt(rgbMatch[3]);
    
        cy.wrap(r).should('be.gte', 127).and('be.lte', 130);
        cy.wrap(g).should('be.gte', 63).and('be.lte',66);
        cy.wrap(b).should('be.gte', 63).and('be.lte',66);
    });
    //make it with normal weight
    cy.get(this.makeItBold).click() 
    //make it underlined 
    cy.get(this.makeItUnderline).click()
    //make it uppercase 
    cy.get(this.uppercase).click()
    //make it italic
    cy.get(this.italic).click()
    //assert these styles are applied
    cy.get(this.closeTheEditWindow).click()
    cy.get(this.firstPlayerName).should('have.attr','style','font-weight: 400; color: rgb(128, 64, 64); font-size: 72px; text-decoration: underline; text-transform: uppercase; font-style: italic;')
    // cy.get(this.closeColorWindowPicker)
    //change background of the box colors
    cy.get(".ep_ig_stat.ep_ig_edditable_background_container:eq(0)").click({ top: 10, left: 20, force: true });
    cy.wait(1000)
    cy.get(this.colorLibrary).click()
    cy.get(this.closeColorWindowPicker).click()
    cy.assertValueColors('[id="ev-box-1"]',253,256,255,255) //check the color
    //change score texts 
    cy.get(this.secondScore).click().clear().type("I've Changed the score")
    cy.get(this.closeTheEditWindow).click()
    cy.get(this.secondScore)
    .invoke('text').should("contain","I've Changed the score")

}
changeComponentsPropertiesSinglesEventStats(){
    cy.wait(1000)
    cy.visit('https://epanel.enetsites.com/infographic/client_templates')
    
    cy.wait(1000)
    cy.get(this.newName).each((element, index) => {
        cy.wrap(element).invoke('text').then((text) => {                
            if (text === " LS Tennis Single Event Stats ") {
                this.desiredText = true;
                cy.get(this.backgroundImgClassSEvSt)
                // .find(this.backgroundImgClass)
                .click()
                cy.get(this.resetBtn)
                .should('exist');
            }
        });
    }).then(() => {
        if (this.desiredText) {                
        
        } else {
            throw Error;            
        }
    });
    //edit first player name
    cy.get(this.firstPlayerName).click()
    //opens the editor window
    cy.get(this.firstPlayerName).should("be.visible")
    cy.getElement('css',this.editorWindow,500)
    cy.clickSeveralAssert(this.logoMenu,this.fontSuggestion,"be.visible") 
    cy.get(this.changeFontValue).click() //select a new value for the font size to 72px
    //change the first player  color to background-color: rgb(128, 64, 64);
    cy.clickSeveralAssert(this.colorPicker,this.colorWindow,"be.visible")  
    cy.get(this.colorLibrary).click()
    cy.get(this.closeColorWindowPicker).click()
    cy.get(this.colorPicker).invoke('attr', 'style').then(style => {
        const rgbMatch = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/.exec(style);
        const r = parseInt(rgbMatch[1]);
        const g = parseInt(rgbMatch[2]);
        const b = parseInt(rgbMatch[3]);
    
        cy.wrap(r).should('be.gte', 127).and('be.lte', 130);
        cy.wrap(g).should('be.gte', 63).and('be.lte',66);
        cy.wrap(b).should('be.gte', 63).and('be.lte',66);
    });
    //make it with normal weight
    cy.get(this.makeItBold).click() 
    //make it underlined 
    cy.get(this.makeItUnderline).click()
    //make it uppercase 
    cy.get(this.uppercase).click()
    //make it italic
    cy.get(this.italic).click()
    //assert these styles are applied
    cy.get(this.closeTheEditWindow).click()
    cy.get(this.firstPlayerName).should('have.attr','style','font-weight: 400; color: rgb(128, 64, 64); font-size: 72px; text-decoration: underline; text-transform: uppercase; font-style: italic;')
    // cy.get(this.closeColorWindowPicker)
    //change background of the box colors
    cy.get(this.box)
    .click({ top: 10, left: 20, force: true });
    cy.wait(1000)
    cy.get(this.colorLibrary).click()
    cy.get(this.closeColorWindowPicker).click()
    cy.betweenAssertValueColors(this.box,127,130,64,66,64,66) //check the color
    //change score texts 
    cy.get(this.secondScore).click()
    cy.get(this.secondScore).should("be.visible")
    cy.get(this.secondScore)
    .clear().type("I've Changed the score")
    cy.get(this.closeTheEditWindow).click()
    cy.get(this.secondScore)
    .invoke('text').should("contain","I've Changed the score")
}
changeComponentsPropertiesSinglesPlayerStats(){
    cy.wait(1000)
    cy.visit('https://epanel.enetsites.com/infographic/client_templates')
    
    cy.wait(1000)
    cy.get(this.newName).each((element, index) => {
        cy.wrap(element).invoke('text').then((text) => {                
            if (text === " EG Football Player Event Stats ") {
                this.desiredText = true;
                cy.get(this.backgroungImgClassSingleCareer).eq(index)
                // .find(this.backgroundImgClass)
                .click()
                cy.get(this.resetBtn)
                .should('exist');
            }
        });
    }).then(() => {
        if (this.desiredText) {                
        
        } else {
            throw Error;            
        }
    });
    cy.get('[id="versus_team"]').click()
    //opens the editor window
    cy.getElement('css',this.editorWindow,500)
    cy.clickSeveralAssert(this.logoMenu,this.fontSuggestion,"be.visible") 
    cy.get(this.changeFontValue).click() //select a new value for the font size to 72px
    //change the first player  color to background-color: rgb(128, 64, 64);
    cy.clickSeveralAssert(this.colorPicker,this.colorWindow,"be.visible")  
    cy.get(this.colorLibrary).click()
    cy.get(this.closeColorWindowPicker).click()
    cy.get(this.colorPicker).invoke('attr', 'style').then(style => {
        const rgbMatch = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/.exec(style);
        const r = parseInt(rgbMatch[1]);
        const g = parseInt(rgbMatch[2]);
        const b = parseInt(rgbMatch[3]);
    
        cy.wrap(r).should('be.gte', 127).and('be.lte', 130);
        cy.wrap(g).should('be.gte', 63).and('be.lte', 66);
        cy.wrap(b).should('be.gte', 63).and('be.lte', 66);
    });
    //make it with normal weight
    cy.get(this.makeItBold).click() 
    //make it underlined 
    cy.get(this.makeItUnderline).click()
    //make it uppercase 
    cy.get(this.uppercase).click()
    //make it italic
    cy.get(this.italic).click()
    //assert these styles are applied
    cy.get(this.closeTheEditWindow).click()
    cy.get("[id='away-name']").should('have.attr','style','font-weight: 700; color: rgb(255, 255, 255); font-size: 80px;')
    // cy.get(this.closeColorWindowPicker)
    //change background of the box colors
    cy.get(".ep_ig_stat.ep_ig_edditable_background_container:eq(0)").click({ top: 10, left: 20, force: true });
    cy.wait(1000)
    cy.get(this.colorLibrary).click()
    cy.get(this.closeColorWindowPicker).click()
    cy.betweenAssertValueColors(".ep_ig_stat.ep_ig_edditable_background_container:eq(0)",127,130,64,66,64,66) //check the color
    //change all texts
    //name
    cy.changeStageHeaderText("[id='away-name']","QA MATCH",this.closeTheEditWindow,this.secondPlayerNameEvStats,"MarinTestEpanel"
    ,this.team_name_versus,"STEFAN_TEST_EPANEL",".ep_ig_edditable_component:eq(9)","Vasil Levski",".ep_ig_edditable_component:eq(3)","Fun Area",".ep_ig_edditable_component:eq(11)","Maracana"
    ,".ep_ig_edditable_component:eq(7)","NBA")
    // cy.get(this.secondScore).click().clear().type("I've Changed the score")
    // cy.get(this.closeTheEditWindow).click()
    // cy.get(this.secondScore)
    // .invoke('text').should("contain","I've Changed the score")

}
changeTextsH2H(){
    cy.changeStageHeaderText(this.firstPlayerName,"StefanTestEpanel",this.closeTheEditWindow,this.secondPlayerName,"MarinTestEpanel",this.title
    ,"QA MATCH",this.firstStageHeader,"Vasil Levski",this.secondStageHeader,"Fun Area",this.thirdStageHeader,"Maracana",this.fourthStageHeader,"NBA")
}
changeTextsSinglesEventStats(){
    cy.changeStageHeaderText(this.firstPlayerName,"StefanTestEpanel",this.closeTheEditWindow,this.secondPlayerNameEvStats,"MarinTestEpanel"
    ,this.title16_9,"QA MATCH",this.secondStageHeader,"Vasil Levski",this.thirdStageHeader,"Fun Area",this.fourthStageHeader,"Maracana"
    ,this.fifthStageHeader,"NBA")
}
changeTextsSinglesPlayerCareer(){
    cy.changeStageHeaderText(this.secondPlayerName,"StefanTestEpanel",this.closeTheEditWindow,this.secondPlayerNameEvStats,"MarinTestEpanel"
    ,'[id="stat-stage-0"]',"QA MATCH",this.secondStageHeader,"Vasil Levski",this.careerStatsFifthRow,"Fun Area",this.careerStatsValueFifth,"Maracana"
    ,this.careerStatsSixthRow,"NBA")
}
resetSettingsH2H(){
    cy.get(this.resetBtn).click()
    cy.checkNamesPositive(this.firstPlayerName,"Novak Djokovic")
    cy.checkNamesPositive(this.secondPlayerName,"Rafael Nadal")
    cy.checkNamesPositive(this.title,"Last 4")
    cy.checkNamesNegative(this.firstStageHeader,"Vasil Levski")
    cy.checkNamesNegative(this.secondStageHeader,"Fun Area")
    cy.checkNamesNegative(this.thirdStageHeader,"Maracana")
    cy.checkNamesNegative(this.fourthStageHeader,"NBA")
    cy.checkNamesNegative(this.secondScore,"I've changed the score")
}
resetSettingsSinglesEventStats(){
    cy.get(this.resetBtn).click({force:true})
    cy.checkNamesPositive(this.firstPlayerName,"Carlos Alcaraz")
    cy.checkNamesPositive(this.secondPlayerName ,"Novak Djokovic")
    cy.checkNamesPositive(this.title16_9,"3 - 2")
    cy.checkNamesNegative(this.secondStageHeader,"Vasil Levski")
    cy.checkNamesNegative(this.thirdStageHeader,"Fun Area")
    cy.checkNamesNegative(this.fourthStageHeader,"Maracana")
    cy.checkNamesNegative(this.fifthStageHeader,"NBA")
    cy.checkNamesNegative(this.secondScore,"I've changed the score")
}
resetSettingsSinglesCareerStats(){
    cy.get(this.resetBtn).click()
    cy.wait(1000)
    cy.checkNamesPositive(this.secondPlayerName,"Christian Eriksen")
    // cy.checkNamesPositive(this.secondPlayerName,"2003")
    cy.checkNamesPositive(this.team_name_versus,"vs Manchester City")
    cy.checkNamesNegative('[id="stat-stage-0"]',"QA MATCH")
    cy.checkNamesNegative(this.secondStageHeader,"Vasil Levski")
    cy.checkNamesNegative(this.careerStatsFifthRow,"Fun Area")
    cy.checkNamesNegative(this.careerStatsValueFifth,"Maracana")
    cy.checkNamesNegative(this.careerStatsSixthRow,"NBA")
}
testformat_4_5(){
    
    cy.get(this.halfElement).invoke('width').then((width) => {
        // half element 16:9 format width
        let elementWidth16_9 = width
        
        cy.get(this.halfElement).invoke('height').then((height) => {
            // half element 16:9 format height
            
            let elementHeight16_9 = height

            // console.log(elementWidth)
            // console.log(elementHeight)
            
            cy.get(this.formatButton).eq(1).click()
            


            cy.get(this.halfElement).invoke('width').then((width) => {
                // half element 4:5 format width
                
                let elementWidth4_5 = width

                cy.get(this.halfElement).invoke('height').then((height) => {
                    // half element 4:5 format height
                    
                    let elementHeight4_5 = height

                    cy.expect(elementHeight16_9).to.not.eq(elementHeight4_5)
                    cy.expect(elementWidth16_9).to.not.eq(elementWidth4_5)
                    
                })
            })

        });
    
        
    });
    
    
}
testformat_3_2(){

    cy.changeFormat(this.halfElement,this.formatButton,2)
    
    // cy.get(this.halfElement).invoke('width').then((width) => {
    //         // half element 4:5 format width
    //         let elementWidth4_5 = width
        
    //     cy.get(this.halfElement).invoke('height').then((height) => {
    //         // half element 4:5 format height
            
    //         let elementHeight4_5 = height
            
    //         cy.get(this.formatButton).eq(2).click()


    //         cy.get(this.halfElement).invoke('width').then((width) => {
    //             // half element 3:2 format width
                
    //             let elementWidth3_2 = width

    //             cy.get(this.halfElement).invoke('height').then((height) => {
    //                 // half element 3:2 format height
                    
    //                 let elementHeight3_2 = height

    //                 cy.expect(elementHeight3_2).to.not.eq(elementHeight4_5)
    //                 cy.expect(elementWidth3_2).to.not.eq(elementWidth4_5)
                    
    //             })
    //         })

    //     });
    
        
    // });
    
    
}
testformat_1_1(){
    
    cy.get(this.halfElement).invoke('width').then((width) => {
            // half element 3:2 format width
            let elementWidth3_2 = width
        
        cy.get(this.halfElement).invoke('height').then((height) => {
            // half element 3:2 format height
            
            let elementHeight3_2 = height
            
            cy.get(this.formatButton).eq(3).click()


            cy.get(this.halfElement).invoke('width').then((width) => {
                // half element 1:1 format width
                
                let elementWidth1_1 = width

                cy.get(this.halfElement).invoke('height').then((height) => {
                    // half element 1:1 format height
                    
                    let elementHeight1_1 = height

                    cy.expect(elementHeight3_2).to.not.eq(elementHeight1_1)
                    cy.expect(elementWidth3_2).to.not.eq(elementWidth1_1)
                    
                })
            })

        });
    
        
    });
    
    
}
//checks for reports from LS
h2hMovableEditorWindow(){
    //check the editor window properties
    cy.get(this.boxHeadersEdit).eq(0) //home player name
    .click()
    cy.opacity_cursor_left_top(this.editorWindow,"move","238.195px","5px","1")
    cy.get(this.editorWindow)
    .should("have.css","backdrop-filter","blur(5px)")
    .and("have.css","background","rgba(255, 255, 255, 0.95) none repeat scroll 0% 0% / auto padding-box border-box")
    .and("have.css","border","1px solid rgb(232, 232, 232)")
    .and("have.css","border-radius","5px")
    .and("have.css","box-shadow","rgba(0, 0, 0, 0.1) 0px 0px 15px 0px")
    .and("have.css","color","rgb(0, 0, 0)")
    .and("have.css","display","flex")
    .and("have.css","font-family","Barlow, sans-serif")
    .and("have.css","padding","10px")
    .and("have.css","position","absolute")
    .and("have.css","transition","opacity 0.2s linear 0s")
    .and("have.css","width","388px")
    .and("have.css","z-index","2")
    cy.get(this.closeTheEditWindow).click({force:true})
    cy.get(this.boxHeadersEdit)
    .each((element,index)=>{
        cy.wrap(element).click() 
        cy.get(this.editorWindow).should("be.visible")
        cy.Move_and_assert_movement(this.editorWindow,this.editorWindow)
        cy.get(this.closeTheEditWindow).click({force:true})
    })
   
}
tennisSinglesEvStatsMovableEditorWindow(){
    //check the editor window properties
    cy.get(this.boxHeadersEdit).eq(0) //home player name
    .click()
    cy.opacity_cursor_left_top(this.editorWindow,"move","243.708px","5px","1")
    cy.get(this.editorWindow)
    .should("have.css","backdrop-filter","blur(5px)")
    .and("have.css","background","rgba(255, 255, 255, 0.95) none repeat scroll 0% 0% / auto padding-box border-box")
    .and("have.css","border","1px solid rgb(232, 232, 232)")
    .and("have.css","border-radius","5px")
    .and("have.css","box-shadow","rgba(0, 0, 0, 0.1) 0px 0px 15px 0px")
    .and("have.css","color","rgb(0, 0, 0)")
    .and("have.css","display","flex")
    .and("have.css","font-family","Barlow, sans-serif")
    .and("have.css","padding","10px")
    .and("have.css","position","absolute")
    .and("have.css","transition","opacity 0.2s linear 0s")
    .and("have.css","width","388px")
    .and("have.css","z-index","2")
    cy.get(this.closeTheEditWindow).click({force:true})
    // for( var i = 0; i < 25; i++){
        //check the editor window movement on the home name
        cy.get(this.boxHeadersEdit)
        .each((element,index)=>{
            cy.wrap(element).click() 
            cy.get(this.editorWindow).should("be.visible")
            cy.Move_and_assert_movement(this.editorWindow,this.editorWindow)
            cy.get(this.closeTheEditWindow).click({force:true})
        })
    // }    
   
}
tennisPlayerSingleEvStatsMovableEditorWindow(){
    //check the editor window properties
    cy.get(this.boxHeadersEdit).eq(0) //home player name
    .click()
    cy.opacity_cursor_left_top(this.editorWindow,"move","242.1px","5px","1")
    cy.get(this.editorWindow)
    .should("have.css","backdrop-filter","blur(5px)")
    .and("have.css","background","rgba(255, 255, 255, 0.95) none repeat scroll 0% 0% / auto padding-box border-box")
    .and("have.css","border","1px solid rgb(232, 232, 232)")
    .and("have.css","border-radius","5px")
    .and("have.css","box-shadow","rgba(0, 0, 0, 0.1) 0px 0px 15px 0px")
    .and("have.css","color","rgb(0, 0, 0)")
    .and("have.css","display","flex")
    .and("have.css","font-family","Barlow, sans-serif")
    .and("have.css","padding","10px")
    .and("have.css","position","absolute")
    .and("have.css","transition","opacity 0.2s linear 0s")
    .and("have.css","width","388px")
    .and("have.css","z-index","2")
    cy.get(this.closeTheEditWindow).click({force:true})
    // for( var i = 0; i < 14; i++){
        
        //check the editor window movement on the home name
    
        cy.get(this.boxHeadersEdit)
        .each((element,index)=>{
            cy.wrap(element).click() 
            cy.get(this.editorWindow).should("be.visible")
            cy.Move_and_assert_movement(this.editorWindow,this.editorWindow)
            cy.get(this.closeTheEditWindow).click({force:true})
        })
               
    // }    
   
}
searchEventFunctionalities(){
    cy.get(this.dataMenu).within(()=>{
        //delete pre-selected player's name
        cy.get(this.searchClass).click()          
        cy.get("span")
        .invoke("text").should("eq"," Search for event...")   
        //Type a name
        cy.get(this.searchClass).click({force:true})
        .type("Manchester united-totte")
        cy.wait(1000)

        //assert the dropdown appears
        cy.get(this.event_suggestions).should("exist")
        cy.get(this.event_header).click({force:true})
        //close the dropdown
        // cy.wait(1000)
        cy.get(this.event_suggestions).should("have.css","display","none")
        //continue typing
        cy.get(this.searchClass).click({force:true})
        .type("nham")
        cy.wait(500)
        cy.get(".ep_ig_event_wrapper").eq(0).click({force:true})
        cy.wait(1000)

    })
        //assert  appears indeed
        //get the name in the graph
       
    cy.get(this.boxHeadersEdit).eq(0).invoke("text").then((text)=>{
        let trimmed_text = text.trim()
        cy.wrap(trimmed_text).should("eq","Jonny Evans")
    })
    cy.get(this.team_name_versus).invoke("text").then((text)=>{
        let trimmed_text = text.trim()
        cy.wrap(trimmed_text).should("eq","vs Tottenham")
    })

    //check the X functionality
    cy.get(this.dataMenu).within(()=>{
        cy.get(this.search_input).should("have.text","Manchester United-Tottenham Hotspur")
        cy.get(this.x_class)
        .should("have.css","margin","0px")
        .and("have.css","padding","0px")
        .and("be.visible")
        .and("have.css","cursor","pointer")
        cy.get(this.x_class).click()
        //assert that everything is cleared 
        cy.get("span")
        .invoke("text").should("eq"," Search for event...")   
    })
}

}
