import 'cypress-real-events/support';

export class enetgraphics_statistics_po{
    constructor(){   
        //stats dropdowns
        this.startStatsArray = 1
        this.endStatsArray = 7
        this.statsDropdowns = '.v-input.ep_ig_dropdown.v-input--hide-details.v-input--is-label-active.v-input--is-dirty.theme--light.v-text-field.v-text-field--is-booted.v-select.v-autocomplete'
        this.typedStatistic = 'Unforced Errors'
        this.selectedFirstElement = '.v-list-item__mask'
        this.boxStatsElement = '.ep_ig_icon_and_label_wrapper'
    }

    checkStatsDropdowns(){ 
        //check if the participants names from the editable section are the same as the ones in the matches section
        for(var i=this.startStatsArray; i<this.endStatsArray; i++){
            cy.get(this.statsDropdowns).eq(i).click().type(this.typedStatistic)

            cy.get(this.selectedFirstElement).eq(i).invoke('text').then((statsFirstElement)=>{
                let trimmedText = statsFirstElement.trim()

                cy.get(this.selectedFirstElement).click()

                console.log(trimmedText)
                for(var a=0; a<6; a++){
                    cy.get(this.boxStatsElement).eq(a).invoke('text').then((boxStatsElementText)=>{
                        let trimmedStatsElement = boxStatsElementText.trim()
                        console.log(trimmedStatsElement)
                        expect(trimmedText).contain(trimmedStatsElement)
                    })
                }

            })  
        }
        
    }


}