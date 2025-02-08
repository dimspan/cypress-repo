export class fodbold_comments_po{
    constructor(){
        this.comments_widget = '[id="eswid_match_comments_child"]'
        this.toggle = ".wff_slider_button.wff_slider_button_rounded"
        this.header_toggle = ".wff_label_text.wff_slider_button_text"
        this.last_comment = ".wff_label_text.wff_comment_text"



    }
    check_visual_elements(){
        cy.get(this.comments_widget).within(()=>{
            //toggle
            cy.toggleElements(this.toggle,"absolute","pointer","0px","0px","0px","0px","all 0.4s ease 0s","1px solid rgb(255, 255, 255)","34px")
      
            //header next to toggle
            cy.toggleAlign(this.header_toggle,"700","14px","center","10px")
        })       
    }
    check_toggle_proper_work(){
        cy.get(this.comments_widget).within(()=>{
            cy.get(this.last_comment).eq(0)
            .should("have.attr","aria-label","Kampen er slut efter straffesparkskonkurrence")

            // click the highlights 
            cy.get(this.toggle).click()
            cy.get(this.last_comment).eq(0)
            .should("have.attr","aria-label","M Å Å Å Å L! - Gonzalo Montiel udnytter straffesparket med højre. Rui Patricio var uheldig og gik til den forkerte side") //it hid the "minor" comments
            cy.get(this.toggle).should("have.css","background-color","rgb(0, 0, 0)")// changed its color
            
        })
        
    }
}