export class topscorer_po{
    constructor(){
        this.topscorerWidgetMedium = ".wff_widget.wff_widget_FWFBAD481032B199FC.wff_widget_medium"
        this.spillerHeader = ".wff_label_text_wrapper"
        this.participantLink =  ".wff_participant_container"
        this.showMore = ".wff_show_all_label_wrapper"
        this.logo = ".wff_flag_and_logo_container"
        this.topscorerWidgetSmall = ".wff_widget.wff_widget_FWFBAD481032B199FC.wff_widget_small"
    }
topScorerPc(){
    cy.get(this.topscorerWidgetMedium)
    .should("exist")
    .and("be.visible")
    cy.get(this.topscorerWidgetMedium).within(()=>{
        cy.WeightSize(this.spillerHeader,'14px','400')
        cy.length_fsize_fstyle(this.spillerHeader,1,"14px","normal")

    })
    
}
topscorerMobile(){
    cy.get(this.topscorerWidgetSmall)
    .should("exist")
    .and("be.visible")
    cy.get(this.topscorerWidgetSmall).within(()=>{
        cy.length_fsize_fstyle(this.spillerHeader,1,"14px","normal")
    })
}
countParticipants(){
    //check the participant's length before show more button
    cy.get(this.topscorerWidgetMedium).within(()=>{
        cy.get(this.participantLink).should("have.length",20)
         //click show more
        cy.get(this.showMore).click()
        cy.get(this.showMore).invoke("text").then((text)=>{
        let trimmedText = text.trim()
        expect(trimmedText).to.eq("Skjul")
    })
    })
   
   
}countParticipantsMobile(){
    //check the participant's length before show more button
    cy.get(this.topscorerWidgetSmall)
    .find(this.participantLink).should("have.length",20)
    //click show more
    cy.get(this.showMore).click()
    cy.get(this.showMore).invoke("text").then((text)=>{
        let trimmedText = text.trim()
        expect(trimmedText).to.eq("Skjul")
    })
}
checkTopscorerNames(){
      //check the css of the topscorer names
        cy.get(this.topscorerWidgetMedium).within(()=>{
            cy.flexDirection_alignItems(this.participantLink,"column","flex-start")        
            cy.only_height_width(this.logo,"20px","20px")
            
        })
        
}
checkTopscorerNamesMobile(){
    //check the css of the topscorer names
    cy.get(this.topscorerWidgetSmall).within(()=>{
        cy.flexDirection_alignItems(this.participantLink,"column","flex-start")   
        cy.only_height_width(this.logo,"20px","20px")

    })
}
}