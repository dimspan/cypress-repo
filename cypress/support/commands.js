// ***********************************************
// This example commands.js shows you how to create various custom commands and overwrite existing commands.
// Real commands created here can be globally used. 
// Too big/too many commands are harder to support, so separate methods are encouraged.
//
// For more comprehensive examples of custom commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
// -- This is a parent command --
//Parent commands always begin a new chain of commands. Even if you've chained it off of a previous command,
//parent commands will always start a new chain, and ignore previously yielded subjects.
//
// Cypress.Commands.add('login', (email, password) => { ... })
//
// -- This is a child command --
//Child commands are always chained off of a parent command, or another child command.
//The previous subject will automatically be yielded to the callback function.
//
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
//A dual command can either start a chain of commands or be chained off of an existing one.
//It is useful if your command can work in multiple ways - either with an existing subject or without one.
//
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// import { noop } from "cypress/types/lodash"
//import 'cypress-real-events/support';
// import { find } from "cypress/types/lodash"

//Cypress.Commands.add('getElement', (selector) => { cy.get(selector).should('exist').and('not.be.disabled')})

//Cypress.Commands.add('findElement', (selector, findSelector) => { cy.get(selector).find(findSelector).should('exist').and('not.be.disabled')})

Cypress.Commands.add('findRegex', (selector, findSelector, regex) => 
{ cy.get(selector).find(findSelector).should('exist').contains (new RegExp(regex))})

Cypress.Commands.add('findFontWeight', (selector, findSelector, value) => 
{try {cy.get(selector).find(findSelector).should("exist").and("have.css","font-weight",`${value}`)
}
catch (error){
    cy.log(error)
}
})
Cypress.Commands.add("loopThroughElements",(selector,array,value) =>{
try{
    cy.get(selector)
    .filter((index,element) => index >= `${value}` && index<=array.length)
    .each((element,index)=>{
        cy.wrap(element).should("contain",array[index])
    })
}catch(error){}
})
//use this when you  expect links
Cypress.Commands.add("checkLinks",(selector,findSelector,expectedString )=>{
    try{
        cy
        .get(selector)
        .find(findSelector)
        .first()
        .invoke("attr","href")
        .then((href)=>{                
            const linkValue = href;
            console.log(href) 
        
            cy
            .get(selector)
            .find(findSelector)
            .first()
            .click()
            cy.wait(1000)
            cy
            .url()
            .should("eq",expectedString)
            .and('contains',expectedString)
})}catch(error){} 
            
})
Cypress.Commands.add("checkRequestOfLinks",(widget_code,class_with_href,status_code)=>{
  cy.get(widget_code).within(()=>{
    cy.get(class_with_href)
    .invoke("attr","href").then((href)=>{
        cy.request(href).its("status").should('eq',status_code)
    })
})
})
//multiple elements with links 
Cypress.Commands.add("checkRequestOfMultipleLinks",(widget_code,class_with_href,status_code)=>{
  cy.get(widget_code).within(()=>{
    cy.get(class_with_href).each((element,index)=>{
      cy.wrap(element)
      .invoke("attr","href").then((href)=>{
        cy.request(href).its("status").should('eq',status_code)
    })
    })
    
})
})

//use this when you don't expect links
Cypress.Commands.add("notContainLinks",(selector,findSelector,expectedString )=>{
    try{cy
        .get(selector)
        .find(findSelector)
        .first()
        .invoke("attr","href")
        .then((href)=>{                
            const linkValue = href;
            console.log(href) 
        
            cy
            .get(selector)
            .find(findSelector)
            .first()
            .click()
            cy
            .url()
            .should("not.eq",href)
            .and('contains',expectedString)
})}catch(error){} 
            
})

Cypress.Commands.add("checkWidthAndHeight",(selector,findSelector,width,height)=>{
    cy
    .get(selector)
    .find(findSelector)
    .invoke("outerWidth")
    .should('eq',Number(width))

    cy
    .get(selector)
    .find(findSelector)
    .invoke("outerHeight")
    .should('eq',Number(height))
})
Cypress.Commands.add("CheckEpanelMenu",(menu,primarySelector,secondarySelector,text,expectedURL)=>{
    cy.get(menu)
    .should("exist")
    cy.get(primarySelector)        
        .click()
        cy.get(secondarySelector)        
        .should("contain",text)
        cy.url().should("equal",expectedURL)  
})
Cypress.Commands.add("LoginEpanel",(email,typeEmail,password,typePassword,submitButton,menu,burger,username,expUsername)=>{
    cy.get(email)                    
                    .click()
                    .type(typeEmail)
                cy.get(password)                   
                    .click()
                    .type(typePassword)
                cy.get(submitButton)
                    .click()
                cy.get(menu)
                    .find(burger)
                    .click()
                cy.get(username)                
                    .should("contain",expUsername)
})
Cypress.Commands.add("OpenPagesInfograph",(button,header,text)=>{
    cy.get(button)
    .click()
    cy.get(header)
    .should("exist")
    .and("contain",text)
})
Cypress.Commands.add("countElements", (selector) =>{
    cy.get(selector).then((elements) => {
        // Iterate over the elements and count the classes
        elements.each((index, element) => {
          const classList = Cypress.$(element).attr('class').split(' ');
          const classCount = classList.length;
          cy.log(`Element ${index + 1} has ${classCount} classes.`);
        })
    })
})
Cypress.Commands.add("loopThroughClasses", (selector, textValue) => {
    try{
    let foundMatchingText = false;  
    cy.get(selector).each((element, index) => {
      cy.wrap(element).should(($el) => {
        const elementText = $el.text();
        console.log(elementText)
        if (elementText.includes(textValue)) {
          foundMatchingText = true;
          expect(elementText).to.include(textValue);
        }
      });
  
      // Break the loop if a matching element is found
      if (foundMatchingText) {
        return false; // Returning false breaks the loop
      }
    }).then(() => {
      // Throw an error if no matching element is found
      if (!foundMatchingText) {
        throw new Error(`No element with text "${textValue}" found.`);
      }
    });
  }catch(err){
    console.log(err)
    throw Error

  }
});
Cypress.Commands.add("randomNameLetterNumber",(input)=>{
    const letters = "abcdefghijklmnopqrstuvwxyz"
    const number = "0123456789"
    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * letters.length);
        const randomNumbers = Math.floor(Math.random() * number.length)
        input += letters[randomIndex]+number[randomNumbers];
        console.log(input)
      }
})
Cypress.Commands.add("epanelLogo",(dropdown,livescore,logo,attr,source)=>{
  cy.get(dropdown)
    .click()
    cy.get(livescore)
    .click()
    cy.get(logo)
    .find(attr)
    .should("have.attr","src",source)
})
Cypress.Commands.add("hideFlags",(menu,parentDropdown,noOption,flag)=>{
  cy.get(menu)
    .click()
    cy.get(parentDropdown)
    .find(noOption)
    .eq(4)
    .click()
    cy.get(flag)
    .should("not.exist")
  
})
Cypress.Commands.add("checkNamesPositive",(selector,expected)=>{
  cy.get(selector)
  .invoke('text')
  .then((text) => {
      const trimmedText = text.trim();
      expect(trimmedText).to.contain(expected);
  });
})
Cypress.Commands.add("checkNamesNegative",(selector,expected)=>{
  cy.get(selector)
  .invoke('text')
  .then((text) => {
      const trimmedText = text.trim();
      expect(trimmedText).to.not.contain(expected);
  });
})
Cypress.Commands.add("clickSeveralAssert",(firstSelector,secondSelector,expected)=>{
  cy.get(firstSelector)
  .click()
  cy.get(secondSelector)
  .should(expected)
})
Cypress.Commands.add("clickSeveralAssertForceTrue",(firstSelector,secondSelector,expected)=>{
  cy.get(firstSelector)
  .click({force:true})
  // cy.wait(500)
  cy.get(secondSelector)
  .should(expected)
})
Cypress.Commands.add("clickSeveralAssertCovered",(firstSelector,secondSelector,expected)=>{
  cy.get(firstSelector)
  .click({force:true})
  cy.get(secondSelector)
  .should(expected)
})
Cypress.Commands.add("checkHeaders",(firstSelector,expectedText)=>{
  cy.get(firstSelector).invoke("text").then((text)=>{
    const print = text.trim()
    console.log(print)
    expect(print).to.eq(expectedText)
})
})
Cypress.Commands.add("textEqualTo",(majorClass,minorClass,expectedResult)=>{
  cy.get(majorClass)
    .find(minorClass).invoke("text").then((text)=>{
        let trimmedText = text.trim()
        expect(trimmedText).to.eql(expectedResult)
    })
})
Cypress.Commands.add("textEqualToWithArray",(widget,majorClass,expected_text)=>{

  cy.get(widget)
  .find(majorClass)
  .each((element,index)=>{
      cy.wrap(element).invoke("text").then((text)=>{
          let trimmed_text = text.trim()
          cy.expect(expected_text).to.include(trimmed_text)
      })
  })
})

Cypress.Commands.add("calendarGoToCertainMonth",(calendarButton,prevButtonArrow,dateTitleText,monthToGo)=>{

  cy.get(calendarButton).click()
      const goToDate = () => {
          cy.get(prevButtonArrow).click() 
          cy.get(dateTitleText).invoke("text").then((text)=>{
              if(text === monthToGo){
                  return
              }

              goToDate()
          })
      }
      goToDate()
})

Cypress.Commands.add("checkShowAllShowMoreHide",(widget,majorButtonClass,showMoreButton,showAllButton,participantName,
  participantCount,participantAfterShowMoreCount,participantAfterShowAllount)=>{
    cy.get(widget).within(()=>{
      cy.get(majorButtonClass).find(showMoreButton).eq(0).click()

      cy.get(participantName).should("have.length",participantAfterShowMoreCount)

      cy.get(majorButtonClass).find(showAllButton).eq(0).click()

      cy.get(participantName).should("have.length",participantAfterShowAllount)

      cy.get(majorButtonClass).find(showAllButton).eq(0).click()

      cy.get(participantName).should("have.length",participantCount)
    })
      
})

Cypress.Commands.add("checkHorizontalScroll",(elementToSCroll)=>{

      // cy.get(elementToSCroll).then(($element) => {
      //       const initialScrollLeft = $element[0].scrollLeft;
      //       //console.log(initialScrollLeft)
        
      //       // or scroll to the right end
      //       cy.get(elementToSCroll).scrollTo('right', {ensureScrollable: false});       

      //       // Check if the scroll position has changed
      //       cy.get(elementToSCroll).should(($elementAfterScroll) => {
      //           //console.log($elementAfterScroll[0].scrollLeft)
      //           expect($elementAfterScroll[0].scrollLeft).not.to.eq(initialScrollLeft);
      //       });
      //   });

      cy.get(elementToSCroll).should('exist').and('be.visible').then(($element) => {
          const initialScrollLeft = $element[0].scrollLeft;
          cy.get(elementToSCroll).scrollTo('right', {ensureScrollable: false}).then(() => {
              cy.get(elementToSCroll).should(($elementAfterScroll) => {
                  const finalScrollLeft = $elementAfterScroll[0].scrollLeft;
                  expect(finalScrollLeft).not.to.eq(initialScrollLeft);
              });
          });
      });
})

Cypress.Commands.add("textFromTwoElementsEqualTo",(majorClass,minorClass,expectedResult)=>{
    cy.get(majorClass)
                .find(minorClass).invoke("text").then((text)=>{
                        const filteredText = text.trim()
                        let statusAndTournament = filteredText.split("\n")
                        let h2h = statusAndTournament[2].trim()
                        let seneste = statusAndTournament[0].trim()
                        let h2hHeader = seneste + " " + h2h
                        //console.log(statusAndTournament[0] + h2h)
                        
                        expect(h2hHeader).to.equal(expectedResult)
                        
                    })
})
Cypress.Commands.add("textNotEqualTo",(widget,sub_class,not_expected_value)=>{
  cy.get(widget)
        .find(sub_class)
        .each((element,index)=>{
            cy.wrap(element).invoke("text").then((text)=>{
                let trimmed_text = text.trim()
                cy.expect(trimmed_text).to.not.eq(not_expected_value)
            })
        })
})
Cypress.Commands.add("checkFontSizeWrongFormat",(dropDown,dropDownList,wrongFontSizeFormat,noDataAvailableDropdownMessage,noDataAvailableMessage,clickSomewhere)=>{
    cy.get(dropDown).click()
    cy.get(dropDownList).should('exist')
    cy.get(dropDown).click().type(wrongFontSizeFormat) 
    cy.get(noDataAvailableDropdownMessage).should('exist').invoke('text').then((noDataAvailable) => {
        expect(noDataAvailable).eql(noDataAvailableMessage)
    })        
    cy.get(clickSomewhere).eq(0).click()
    cy.get(dropDownList).should('not.exist')
})
Cypress.Commands.add("dropDownListWithFirstOption",(fontSizeDropDown,fontSizedropDownList,fontSizeElement,correctFontSizeFormat)=>{
    // cy.get(currentElement).click()
    cy.get(fontSizeDropDown).click().type(correctFontSizeFormat) 

    cy.get(fontSizedropDownList).then(($el) => {
      const element = $el[0];
    
      // Check if the element itself is visible (ignoring parent opacity)
      const rect = element.getBoundingClientRect();
      const isVisible = (
        rect.width > 0 &&
        rect.height > 0 &&
        window.getComputedStyle(element).visibility !== 'hidden' &&
        window.getComputedStyle(element).opacity !== '0'
      );
    
      // Custom assertion
      expect(isVisible).to.be.true;
    });

    cy.get(fontSizeElement).eq(0).click()
    cy.get(fontSizedropDownList).should('not.exist')
})

Cypress.Commands.add("checkDropdownDataListClosing",(firstElementInLoop,loopCount,fontSizeDropDown,fontSizedropDownList,clickSomewhere)=>{
  for(var i=firstElementInLoop; i<loopCount; i++){
    (function(index) {
      cy.get(fontSizeDropDown).eq(index).click()
      cy.get(fontSizedropDownList).should('be.visible')
      cy.get(clickSomewhere).eq(0).click()
      cy.get(fontSizedropDownList).should('not.be.visible')
    })(i)
  }
})

Cypress.Commands.add("dropDownLitWithFirstOptionFromAray",(firstElementInLoop,dataDropDown,dataDropDownList,dataElement,correctFormatArray)=>{
 
  for(var i=firstElementInLoop; i<firstElementInLoop+correctFormatArray.length; i++){
    (function(index) {
      cy.get(dataDropDown).eq(index).then($input => {
        if ($input.is(':disabled')) {
          // Handle the case when the input is disabled
          // You might want to wait or perform some action to enable it
          cy.log('Input is disabled, waiting to be enabled...');
          cy.wait(1000); // Example wait, adjust as needed
        }
      })
      
      cy.get(dataDropDown).eq(index).click().type(correctFormatArray[index - firstElementInLoop]) 
      cy.get(dataDropDownList).should('exist')
      cy.get(dataElement).eq(0).click({force: true} )
      // cy.get(dataDropDownList).should('not.be.visible')
    })(i)
  }
  
})

Cypress.Commands.add("twoDropDownListsWithFirstOptionFromAray",(firstElementInLoop,dataDropDown,dataDropDownList,dataElementOne,dataElementTwo,correctFormatArray)=>{
 
  for(var i=firstElementInLoop; i<firstElementInLoop+correctFormatArray.length; i++){
    (function(index) {
      var $accountBox = 0
      console.log($accountBox)

      cy.get(dataDropDown).eq(index).then($input => {
        if ($input.is(':disabled')) {
          // Handle the case when the input is disabled
          // You might want to wait or perform some action to enable it
          cy.log('Input is disabled, waiting to be enabled...');
          cy.wait(1000); // Example wait, adjust as needed
        }
      })
      
      cy.get(dataDropDown).eq(index).click().type(correctFormatArray[index - firstElementInLoop]) 
      cy.get(dataDropDownList).should('exist')

      cy.wait(2000)
      // cy.wrap(null).then(() => {
        
      //   $accountBox = Cypress.$(dataElementOne);
      //   console.log($accountBox)

      //   if($accountBox.length === 1){
      //       //choose a dropdown and type an option (event)
            
      //       cy.get(dataElementOne).eq(0).click({force: true} )
      //   }
      //   else{
      //     //choose a dropdown and type an option (player)
          
      //     cy.get(dataElementTwo).eq(0).click({force: true} )
      //   }
      // })
      
      cy.get('body').then(($body) => {
        if ($body.find(dataElementOne).length === 1) {
            // choose a dropdown and type an option (event)
            
            cy.get(dataElementOne).eq(0).click({force: true} )
        }else if ($body.find(dataElementTwo).length === 1){
          //choose a dropdown and type an option (player)
          
          cy.get(dataElementTwo).eq(0).click({force: true} )
        }
      });
      

    })(i)
  }
  
})

Cypress.Commands.add("checkDropdownListClosing",(firstElementInLoop,loopCount,fontSizeDropDown,fontSizedropDownList,clickSomewhere)=>{
  for(var i=firstElementInLoop; i<loopCount; i++){
    (function(index) {
      cy.get(fontSizeDropDown).eq(index).click()
      cy.get(fontSizedropDownList).should('exist')
      cy.get(clickSomewhere).eq(0).click()
      cy.get(fontSizedropDownList).should('not.exist')
    })(i)
  }
})

Cypress.Commands.add("checkFontDecorations",(currentElement,fontDecoration,fontDecorationButton)=>{
  cy.get(currentElement).as('element')
            cy.get('@element').click({force: true})
            cy.get('@element').invoke('css', fontDecoration).then(fontWeightBefore => {
                cy.get(fontDecorationButton).click()
                cy.get('@element').invoke('css', fontDecoration).then(fontWeightAfter => {

                    expect(fontWeightBefore).not.eql(fontWeightAfter)
                })
            })
    
})

Cypress.Commands.add("checkParticipantNameEqlParticipantTypedNameFromAnArray",(playerTypeField,playerTypeFieldText,searchListFirstPLayer,playerName)=>{
  for (var i = 0; i < 2; i++) {
    (function(index) {
      cy.get(playerTypeField).eq(index).type(playerTypeFieldText[index]);
      cy.wait(1000)
      cy.get(searchListFirstPLayer).click({ force: true });
  
      cy.get(playerTypeField).eq(index).invoke("text").then((elementText) => {
        let playerTypeFieldName = elementText.trim();
  
        cy.get(playerName[index]).invoke("text").then((secondElementText) => {
          let firstPlayerName = secondElementText.trim();
          expect(playerTypeFieldName).to.eql(firstPlayerName);
        });
      });
    })(i); // Immediately invoke the function with the current value of i
  }
    
})

Cypress.Commands.add("checkParticipantNameEqlParticipantTypedName",(playerTypeField,playerTypeFieldText,searchListFirstPLayer,playerName)=>{
  
      cy.get(playerTypeField).type(playerTypeFieldText);
      cy.wait(1000)
      cy.get(searchListFirstPLayer).click({ force: true });
  
      cy.get(playerTypeField).invoke("text").then((elementText) => {
        let playerTypeFieldName = elementText.trim();
  
        cy.get(playerName).invoke("text").then((secondElementText) => {
          let firstPlayerName = secondElementText.trim();
          expect(playerTypeFieldName).to.eql(firstPlayerName);
        });
      });
})

Cypress.Commands.add("openCloseColorBoxInEditorPopUp",(currentElement,colorBox,colorPopUp,editorWindowXButton)=>{
    cy.get(currentElement).click()
    cy.get(colorBox).click()
    cy.get(colorPopUp).should('exist')
    cy.get(editorWindowXButton).click()
})
Cypress.Commands.add("checkColorBoxTooltip",(currentElement,colorBox,colorBoxTooltip)=>{
    cy.get(currentElement).click({force: true})
    cy.get(colorBox).trigger('mouseover')
    cy.get(colorBoxTooltip).eq(0).should('exist').invoke('text').then((tooltipText) => {
        expect(tooltipText).eql('Text color')
    })
})
Cypress.Commands.add("changeFormat", (halfView,formatButton,buttonOrder)=>{
  cy.get(halfView).invoke('width').then((width) => {
            // half element 4:5 format width
            let elementWidth4_5 = width
            
        
        cy.get(halfView).invoke('height').then((height) => {
            // half element 4:5 format height
            
            let elementHeight4_5 = height
            
            cy.get(formatButton).eq(`${buttonOrder}`).click()


            cy.get(halfView).invoke('width').then((width) => {
                // half element 3:2 format width
                
                let elementWidth3_2 = width

                cy.get(halfView).invoke('height').then((height) => {
                    // half element 3:2 format height
                    
                    let elementHeight3_2 = height

                    // cy.expect(elementHeight3_2).to.not.eq(elementHeight4_5)
                    expect(elementWidth3_2).to.not.eq(elementWidth4_5)
                    
                })
            })

        });
    
        
    });
})
Cypress.Commands.add("checkTextSize", (text_class, expectedValue)=>{
  cy.get(text_class).invoke("css","font-size").then((fontsize)=>{
    console.log(fontsize)
    let newFontSize = Math.round(parseFloat(fontsize)) //parseFloat removes the "px" in the fontsize
    cy.expect(newFontSize).to.eq(expectedValue)
})
})
Cypress.Commands.add("textMatches",(widget,sub_class,regexExpected)=>{
  cy.get(widget)
        .find(sub_class)
        .each((element,index)=>{
            cy.wrap(element).invoke("text").then((text)=>{
                let trimmed_text = text.trim()
                cy.expect(trimmed_text).to.match(regexExpected)
            })
        })
})
Cypress.Commands.add("tooltipVisibility",(widget, icon,tooltip_class)=>{
  cy.get(widget).within(()=>{
    cy.get(icon).each((element,index)=>{
      cy.wrap(element).trigger('mouseover')
      cy.get(tooltip_class).should("be.visible")
    })
  })
})
Cypress.Commands.add("tooltipText",(widget,icon,tooltip_class,expected_text)=>{
  cy.get(widget).within(()=>{
    cy.get(icon).each((element,index)=>{
      cy.wrap(element).trigger('mouseover')
      cy.get(tooltip_class).should("be.visible")
      cy.get(tooltip_class).invoke("text").then((text)=>{
        let trimmed_text = text.trim()
        cy.expect(trimmed_text).to.eq(expected_text)
      })
    })
  })
})



Cypress.Commands.add("tooltipTextWithArray",(widget,icon,tooltip_class,expected_text)=>{
  cy.get(widget).eq(0).within(()=>{
    for(let i=0; i<expected_text.length; i++){
      cy.get(icon).eq(i).click()
      cy.get(tooltip_class).should("be.visible")
      cy.get(tooltip_class).invoke("text").then((text)=>{
        let trimmed_text = text.trim()
        cy.expect(trimmed_text).to.eq(expected_text[i])
      })
    }
  })
})

Cypress.Commands.add('scrollToBottomWithLazyLoading', () => {
  // Define a function to check if we have reached the bottom of the page
  const isBottomReached = () => {
    const windowHeight = Cypress.config('viewportHeight');
    const scrollHeight = Cypress.$(document).height();
    const scrollTop = Cypress.$(document).scrollTop();

    return windowHeight + scrollTop >= scrollHeight;
  };

  // Scroll down repeatedly until the bottom is reached or a timeout is reached
  const scrollInterval = setInterval(() => {
    if (isBottomReached()) {
      clearInterval(scrollInterval);
    } else {
      // Scroll down by a fixed amount (you can adjust this value as needed)
      cy.scrollTo('bottom');
    }
  }, 10000); // Adjust the interval as needed
});

Cypress.Commands.add("textIs",(majorClass,expectedResult)=>{
  cy.get(majorClass)
    .invoke("text").then((text)=>{
        let trimmedText = text.trim()
        expect(trimmedText).to.eql(expectedResult)
    })
})

// Cypress.Commands.add("textEqualTo",(selector,expected)=>{
//   cy.get(selector)
//   .invoke('text')
//   .then((text) => {
//       const trimmedText = text.trim();
//       cy.wrap(trimmedText).should("eq",expected);
//   });
// })

   
// Cypress.Commands.add("severalElements",(primarySelector,selector,findSelector,value) =>{
//     try{
//         cy.get(primarySelector)
//         .filter((index,element) => index >= `${value}` && index<=findSelector.length)
//         .each((element,index)=>{
//             cy.log(element)
//             cy.wrap(element).should("contain",findSelector[index])
            
//         })
//     }catch(error){}
//     })
Cypress.Commands.add('acceptCookies', () => {
  const $cookieBar = Cypress.$("#onetrust-banner-sdk");
  if($cookieBar.length > 0) {
    cy.get("#onetrust-accept-btn-handler")
      .click().wait(500)
  }
});

Cypress.Commands.add("hideDynamicData", () => {
  cy.wrap(null).then(() => {
    const $nextLeagueGames = Cypress.$("div[class='main-inner-section-bgcolor mb-5 flex h-auto w-[315px] flex-col']");
    // const $topEvents = Cypress.$(".observe-top-events-right-bar");
    // const $topBanner = Cypress.$(".banner-slot");
    // const $midBanner = Cypress.$("div[class='sticky top-0 z-10 flex-col pl-3 pr-3 flex-center']");
    // const $leftBanner = Cypress.$("div[class='flex justify-center']");
    // const $rightBanner = Cypress.$("div[class='w-[315px] justify-center flex-col items-center mb-3']");
    // const $sendFeedback = Cypress.$("div[class='sg-b-f sg-b-bar']");

    const $cookiePopup = Cypress.$("div[class='otFlat bottom vertical-align-content']");
    const $topBanner = Cypress.$("#header-adv-banner");
    const $mainBanner = Cypress.$("div[class='Animation-styles__Top-sc-d91406e3-6 kYazQL']");

    if ($nextLeagueGames.length > 0) {
      $nextLeagueGames.hide();
    } 
    if ($cookiePopup.length > 0) {
      $cookiePopup.hide();
    } 
    if ($topBanner.length > 0) {
      $topBanner.hide();
    } 
    if ($mainBanner.length > 0) {
      $mainBanner.hide();
    } 
  });
});