import 'cypress-real-events/support';

export class enetgraphics_matches_po{
    constructor(){   
        //all texts
        this.eventTexts = '.ep_ig_results_sub_title'
        this.homeParticipant = '.ep_ig_home_name.ep_ig_edditable_field_container'
        this.awayParticipant = '.ep_ig_away_name.ep_ig_edditable_field_container'
    }

    textsInMatches(){ 
        //check if the participants names from the editable section are the same as the ones in the matches section
        cy.get(this.eventTexts).each((element,index)=>{
            cy.wrap(element).invoke('text').then((evenText)=> {
                cy.get('.ep_ig_home_name.ep_ig_edditable_field_container, .ep_ig_away_name.ep_ig_edditable_field_container').then(elements => {
                    const home = elements.eq(0).text().trim();
                    const away = elements.eq(1).text().trim();
                
                    expect(evenText).contain(home)
                    expect(evenText).contain(away)

                });
            })
        })
    }


}