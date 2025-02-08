import 'cypress-real-events/support';

export class enet_event_stats_po{
    constructor(){   
        //button classes
        this.resetButton = ".btn.btn_reset"
        this.saveCustomTemplateButtonClass = '.cancel:eq(0)'
        this.saveCustomTemplateButtonAs = '.cancel:eq(1)'
        this.exportButton = '.success'
        this.formatButton16_9 = '.ep_ig_size_box:eq(0)'
        this.editSectionContainer = '.ep_ig_wrapper_container'
        this.infographicsButtonSidePanel = '.ep_left_menu_icon.epi-infographics'
        this.templateButton = ".btn.btn-app:eq(1)"
        this.closePopUpButton = '.close'
        this.cancelPopUpButtonMajorClass = '.btns'
        this.cancelPopUpButton = '.cancel'
        this.exportButton = '.success'

        //deleting all the drafts
        this.widgetBox = '.widget_box'
        this.deleteButton = '.widget-delete-button.epi-bin'
        this.confirmPopup = ".ep_ig_upload_image_popup"
        this.confirmButton = ".confirm"
        this.successmsg = 'Custom template deleted successfully!'
        
        //change something in the editable section
        this.formatButton = ".ep_ig_size_box"
        this.halfElement = ".twitter-cropper.vue-advanced-cropper"
        this.homePlayer = '.ep_ig_home_name.ep_ig_edditable_field_container'
        this.fontSizeDropDown = '.v-input.ep_data_selector'
        this.fontSizeElement = '.v-list-item__content'
        this.titleContainer = '.ep_ig_label_class.ep_ig_title.ig_lbl_last_4'

        //highlited editable areas button
        this.highlightEditableAreasButtonText = '.ep_switch_label'
        this.highlightToggleMajorClass = '.ep_ig_editable_radio'
        this.highlightEditableAreasButton = '.slider'
        this.highlightedEditableAreas = '.ep_ig_edditable_component.edittable-containers-box'
        this.highlightedHomePlayerName = '.ep_ig_edditable_component.edittable-containers-box:eq(0)'

        //save custom template button and pop-up
        this.buttonPopUp = '.modal-content'
        this.popUpHeaderMajorClass = '.modal-header'
        this.popUpHeader = '.modal-title.center'
        this.popUpSubHeader = '.modal-sub-header'
        this.typeFieldText = '.v-label.theme--light'
        this.typeFieldTextMajorClass = '.v-text-field__slot'
        this.confirmButtonSavePopUp = '.confirm'
        this.myInfographicsBreadcrumb = '[href="https://epanel.enetsites.com/infographic/client_templates"]'
        this.customTemplatesButton = '.upload-image-button:eq(1)'
        this.templateName = '.image-sub-title'
        this.newTemplatesName = ' Test enetgraphics '
        this.wrongTemplateName = "'===-0-00-00'';;/.[''"
        this.backgroundImgClassSH2HRes = ".widget-item-image"
        this.templateContainer = '.widget_box'
        this.successMessage = '.toast-message'
        this.messageCloseButton = '.toast-close-button'

        //check the export button and pop-up
        this.integrationText = '.ep_ig_integration_sub_title'
        this.exportAsText = '.ep_ig_export_as_sub_title'
        this.exportAsButtonsContainer = '.ep_ig_export_boxes_container.col-xl-12.p-0'
        this.clickedButton = '.ep_ig_size_box.active'
        this.exportAsButtons = '.ep_ig_size_box'
        this.cancelButton = '.ep_cancel_btn'
        this.closeButton = '.close'
        this.colorBoxTooltip = '.message-box'

        //font size/text decoration
        this.textClass = '.ep_ig_font_title'
        this.fontSizedropDownList = '.v-menu__content.theme--light.v-menu__content--auto.menuable__content__active.v-autocomplete__content'
        this.colorBoxTooltip = '.message-box:eq(0)'
        this.colorBackgroundBoxTooltip = '.message-box:eq(1)'
        this.colorBox = '.ep_ig_color_picker_popup'
        this.colorBackgroundBox = '.ep_ig_background_picker_popup'
        this.editorWindow = '.ep_ig_font_picker'
        this.editorWindowXButton = '.epi-cancel'
        this.colorPicker = '.v-color-picker__canvas-dot'
        this.colorPopUp = '.ep_color_picker'
        this.colorPopUpClosingButton = '.ep_color_picker_buttons_container'
        this.boldButton = '.ep_ig_button.epi-bold'
        this.underlineButton = '.ep_ig_button.epi-underline'
        this.uppercaseButton = '.ep_ig_button.epi-uppercase'
        this.italicButton = '.ep_ig_button.italic'
        this.noDataAvailableDropdown = '.v-list.v-select-list.v-sheet.theme--light.theme--light'
        this.colorBoxCoursor = '.v-color-picker__canvas-dot'
        this.colorHorizontalDragCoursor = '.v-slider__thumb.grey.lighten-2:eq(0)'
        this.noDataAvailableMessage = 'No data available'
        this.wrongFontSizeFormat = 'DS'
        this.correctFontSizeFormat = '45px'
        this.transparentColorHorizontalCoursor = '.v-slider__thumb.grey.lighten-2:eq(1)'
        this.elArray = ['.ep_ig_edditable_component:eq(0)','.ep_ig_edditable_component:eq(1)','.ep_ig_edditable_component:eq(2)','.ep_ig_edditable_component:eq(3)','.ep_ig_edditable_component:eq(4)','.ep_ig_edditable_component:eq(5)',
        '.ep_ig_edditable_component:eq(6)','.ep_ig_edditable_component:eq(7)','.ep_ig_edditable_component:eq(8)','.ep_ig_edditable_component:eq(9)','.ep_ig_edditable_component:eq(10)',
        '.ep_ig_edditable_component:eq(11)','.ep_ig_edditable_component:eq(12)','.ep_ig_edditable_component:eq(13)','.ep_ig_edditable_component:eq(14)','.ep_ig_edditable_component:eq(15)','.ep_ig_edditable_component:eq(16)','.ep_ig_edditable_component:eq(17)',
        '.ep_ig_edditable_component:eq(18)','.ep_ig_edditable_component:eq(19)','.ep_ig_edditable_component:eq(20)','.ep_ig_edditable_component:eq(21)','.ep_ig_edditable_component:eq(22)','.ep_ig_edditable_component:eq(23)','.ep_ig_edditable_component:eq(24)','.ep_ig_edditable_component:eq(25)']
        this.highlightedEditableAreasCount = 26
        this.editableElementsCount = 26
        this.nextElement;
        this.typedFontSize = '45px'
        this.elArrayElem = 2;

        //creating a random number to differentiate it from previous templates
        this.randomNumber = Math.floor(Math.random() * 1000) + 1; //generating a random number to be set in the enetgraphics name
    }

    buttonTextsStyles(){ 
        //go back to the initial format
        cy.get(this.formatButton16_9).click()
        //check the text of "Reset settings to default" button
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.resetButton,'Inter, sans-serif','14px','700','0px','static','auto')
        
        //check the text of "Save custom template" button
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.saveCustomTemplateButtonClass,'Inter, sans-serif','14px','700','0px','static','auto')
        
        //check the text of "Save custom template as" button
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.saveCustomTemplateButtonAs,'Inter, sans-serif','14px','700','0px','static','auto')

        //check the text of "Export"" button
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.exportButton,'Inter, sans-serif','14px','700','0px','static','auto')

        //check the text of "Highlight editable areas" button
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.highlightEditableAreasButtonText,'Inter, sans-serif','14.4px','700','0px','static','auto')
        
    }

    resetSettingsToDefault(){ 

        for(var i=0; i<this.elArray.length; i++){
            
            //getting the current element from the editable section/array
            let currentElement = this.elArray[i]

            //cy.get(currentElement).click()
            cy.get(currentElement).invoke('css', 'font-size').then((sizeBeforeChanges) => {

                //set new font-size of the first player's name
                cy.get(currentElement).click()
                cy.get(this.fontSizeDropDown).click().type('4px') 
                cy.get(this.fontSizeElement).eq(0).click()
                //check if the first player's name is different that the initial one
                cy.get(currentElement).should('have.css','font-size','4px')
                //check if the first player's name is equal to the the initial one after clicking the reset button
                cy.get(this.resetButton).click()
                cy.wait(500)
                cy.get(currentElement).invoke('css', 'font-size').then((sizeAfterReset) => {
                        expect(sizeBeforeChanges).to.eq(sizeAfterReset);
                });
                // cy.get('.ep_ig_edditable_component').eq(index).should('have.css','font-size','50px')
            });
        }
        //different aproach of selecting an element from the dropdown of the font size
        // cy.get(this.homePlayer).click()
        // cy.get(this.fontSizeDropDown).click().type('45p') 
        // cy.get(this.fontSizeElement).eq(0).click()
        // cy.get(this.fontSizeElement).each((element, index) => {
        //     cy.wrap(element).invoke('text').then((text) => {                
        //         if (text === "45px") {
        //             cy.get(this.fontSizeElement).eq(index).click()
        //             //fontSizeFound = true;
        //             
        //         }
        //     });
        // })

    }

    highlightEditableAreas(){ 
        //checking if the highlighting toggle is working
        cy.get(this.highlightEditableAreasButtonText).should('have.attr', 'disabled', 'disabled');
        cy.get(this.highlightToggleMajorClass).find(this.highlightEditableAreasButton).click()
        cy.get(this.highlightedEditableAreas).should('exist').and('have.length',this.highlightedEditableAreasCount)

        //checking if the editable area's background color is visible
        cy.get(this.highlightedEditableAreas).should('have.css', 'background-color', 'rgba(43, 182, 115, 0.5)')

        //disable the highlited areas
        cy.get(this.highlightToggleMajorClass).find(this.highlightEditableAreasButton).click()
    }

    saveCustomTemplateButton(){ 
        //check if the save custom temaplate pop-up is appearing
        cy.get(this.saveCustomTemplateButtonClass).click()
        cy.get(this.buttonPopUp).should('exist')

        //check after clicking the 'X' if the pop-up is closing
        cy.get(this.popUpHeaderMajorClass).find(this.closePopUpButton).click()
        cy.get(this.buttonPopUp).should('not.exist')

        //check after clicking the 'Cancel' if the pop-up is closing
        cy.get(this.saveCustomTemplateButtonClass).click()
        cy.get(this.cancelPopUpButtonMajorClass).find(this.cancelPopUpButton).click()
        cy.get(this.buttonPopUp).should('not.exist')

        //check the text styles in the pop-up
        cy.get(this.saveCustomTemplateButtonClass).click()
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.popUpHeader,'Inter, sans-serif','22px','700','0px','static','auto')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.popUpSubHeader,'Inter, sans-serif','14.4px','700','0px','static','auto')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.typeFieldText,'Inter, sans-serif','14px','700','0px','absolute','0px')
        //check if the text in the type filed is correct
        cy.get(this.typeFieldTextMajorClass).invoke('text').then((text) => { 
            expect(text).eq('Name')
        })

        //try create the template with a couple of wrong symbols
        cy.get(this.typeFieldTextMajorClass).type(this.wrongTemplateName)
        cy.get('.btns').find(this.confirmButtonSavePopUp).click()

        //check if the successful save message is appearing and it is the correct one
        cy.get(this.successMessage).should('be.visible')
        cy.get(this.successMessage).invoke('text').then((text) => { 
            expect(text).eq('The name must only contain letters, numbers, dashes, underscores and spaces.')
        })
        cy.get(this.messageCloseButton).click()

        //type a name and save the template - check if it is created correctly in the Draft page
        cy.get(this.typeFieldTextMajorClass).clear()
        cy.get(this.typeFieldTextMajorClass).type(this.newTemplatesName + this.randomNumber)
        cy.get('.btns').find(this.confirmButtonSavePopUp).click()

        //check if the successful save message is appearing and it is the correct one
        cy.get(this.successMessage).should('be.visible')
        cy.get(this.successMessage).invoke('text').then((text) => { 
            expect(text).eq('Custom template created successfully!')
        })
    }

    saveCustomTemplateAsButton(){ 
        //check if the save custom temaplate pop-up is appearing
        cy.get(this.saveCustomTemplateButtonAs).click()
        cy.get(this.buttonPopUp).should('exist')

        //check after clicking the 'X' if the pop-up is closing
        cy.get(this.popUpHeaderMajorClass).find(this.closePopUpButton).click()
        cy.get(this.buttonPopUp).should('not.exist')

        //check after clicking the 'Cancel' if the pop-up is closing
        cy.get(this.saveCustomTemplateButtonAs).click()
        cy.get(this.cancelPopUpButtonMajorClass).find(this.cancelPopUpButton).click()
        cy.get(this.buttonPopUp).should('not.exist')

        //check the text styles in the pop-up
        cy.get(this.saveCustomTemplateButtonAs).click()
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.popUpHeader,'Inter, sans-serif','22px','700','0px','static','auto')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.popUpSubHeader,'Inter, sans-serif','14.4px','700','0px','static','auto')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.typeFieldText,'Inter, sans-serif','14px','700','0px','absolute','0px')
        //check if the text in the type filed is correct
        cy.get(this.typeFieldTextMajorClass).invoke('text').then((text) => { 
            expect(text).eq('Name')
        })

        //try create the template with a couple of wrong symbols
        cy.get(this.typeFieldTextMajorClass).type(this.wrongTemplateName)
        cy.get('.btns').find(this.confirmButtonSavePopUp).click()

        //check if the successful save message is appearing and it is the correct one
        cy.get(this.successMessage).should('be.visible')
        cy.get(this.successMessage).invoke('text').then((text) => { 
            expect(text).eq('The name must only contain letters, numbers, dashes, underscores and spaces.')
        })
        cy.get(this.messageCloseButton).click()

        //type a name and save the template - check if it is created correctly in the Draft page
        cy.get(this.typeFieldTextMajorClass).clear()
        cy.get(this.typeFieldTextMajorClass).type(this.newTemplatesName + this.randomNumber)
        cy.get('.btns').find(this.confirmButtonSavePopUp).click()
        
        //check if the successful save message is appearing and it is the correct one
        cy.get(this.successMessage).should('be.visible')
        cy.get(this.successMessage).invoke('text').then((text) => { 
            expect(text).eq('Custom template created successfully!')
        })
    }

    checkIfNewTemplateExists(){
        Cypress.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes('Cannot read properties of null (reading \'style\')')) {
                return false;
            }
            return true;
        });
        
        //get in the newly created template
        cy.get(this.infographicsButtonSidePanel).click()
        cy.get(this.templateButton).click()
        cy.get(this.customTemplatesButton).click()
        let templateNameWithNumber = this.newTemplatesName + this.randomNumber
        
        let templateExist = false;
        cy.get(this.templateContainer).each((element, index) => {
            cy.wrap(element).find(this.templateName).eq(1).invoke('text').then((text) => {   
                //console.log(text)             
                if (text === templateNameWithNumber + ' ') {
                    templateExist = true;
                    expect(templateExist).eql(true)

                    cy.get(this.backgroundImgClassSH2HRes).eq(index).click()
                    cy.get(this.resetButton).should('exist');
                    return;
                }
            });
        })
        //check if the successful save message is appearing and it is the correct one
        cy.get('.ep_ig_save_export_container').find(this.saveCustomTemplateButtonClass).click()
        cy.get(this.buttonPopUp).should('not.exist')
        cy.wait(1000)
        cy.get(this.successMessage).should('be.visible')
        cy.get(this.successMessage).invoke('text').then((text) => { 
            expect(text).eq('Custom template saved successfully!')
        })
    }

    exportButtonAndPopUp(){
        cy.get(this.exportButton).click()
        cy.get(this.buttonPopUp).should('be.visible')

        //check the text of integration" text
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.integrationText,'Barlow, sans-serif','16px','700','0px','static','auto')

        //check the text of "Reset settings to default" button
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.exportAsText,'Barlow, sans-serif','16px','700','0px','static','auto') 
        
        //check if the 'export as' buttons are clickable
        cy.get(this.exportAsButtonsContainer).eq(0).within(()=>{
            cy.get(this.exportAsButtons).each((element, index) => {

                cy.get(element).click()
                cy.get(this.clickedButton).should('exist') 

            })
        })

        //check if the 'X' button is working and the pop-up is closing
        cy.get(this.integrationText).find(this.closeButton).click()
        cy.get(this.buttonPopUp).should('not.exist') 

        //check if the 'cancel' button is working and the pop-up is closing
        cy.get(this.exportButton).click()
        cy.get(this.cancelButton).click()
        cy.get(this.buttonPopUp).should('not.exist') 
    }

    deleteDrafts(){
        //delete all drafts
        cy.get(this.infographicsButtonSidePanel).click()
        cy.get(this.templateButton).click()
        cy.get(this.customTemplatesButton).click()

        cy.get(this.widgetBox).each((element) => {

            cy.wrap(element)
                .find(this.deleteButton)
                .click()  

            cy.get(this.confirmPopup)
                .find(this.confirmButton)
                .click() 
        })
        //check if delete successful message appears
        cy.get(this.successMessage).should('exist').invoke('text').then((text) => { 
            expect(text).eq(this.successmsg)
        })
    }

    fontSizeTestDecoration(){
        cy.get(this.homePlayer).click()
        cy.get(this.editorWindow).should('exist')

        //check the text of font size and text decoration headers
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.textClass,'Barlow, sans-serif','14px','700','0px','static','auto')

        //check the font size drop down list and select one option
        cy.dropDownListWithFirstOption(currentElement,this.fontSizeDropDown,this.fontSizedropDownList,this.fontSizeElement,this.correctFontSizeFormat)
        //check after clicking somewhere else in the pop-up if the drop-down is closing ad intended
        cy.checkDropdownListClosing(this.fontSizeDropDown,this.fontSizedropDownList,this.textClass)

        //check with typing wrong format
        cy.get(this.fontSizeDropDown).click()
        cy.get(this.fontSizedropDownList).should('be.visible')
        cy.get(this.fontSizeDropDown).click().type('DS') 
        cy.get(this.noDataAvailableDropdown).should('exist').invoke('text').then((noDataAvailable) => {
            expect(noDataAvailable).eql('No data available')
        })        
        cy.get(this.textClass).eq(0).click()
        cy.get(this.fontSizedropDownList).should('not.exist')

        //check if the the whole edit pop-up is draggable
        cy.Move_and_assert_movement(this.editorWindow)
        cy.get(this.editorWindowXButton).click()
        cy.get(this.titleContainer).click()
        // cy.get(this.fontSizeElement).each((element, index) => {
        //     cy.wrap(element).invoke('text').then((text) => {                
        //         if (text === "45px") {
        //             cy.get(this.fontSizeElement).eq(index).click()
        //             //fontSizeFound = true;
                    
        //         }
        //     });
        // })

        //check the tooltip and the text in it
        cy.get(this.homePlayer).click()
        cy.get(this.colorBox).trigger('mouseover')
        cy.get(this.colorBoxTooltip).should('exist').invoke('text').then((tooltipText) => {
            expect(tooltipText).eql('Text color')
        })
        //open and close the color box
        cy.get(this.homePlayer).click()
        cy.get(this.colorBox).click()
        cy.get(this.colorPopUp).should('exist')

        //drag the coursor in the color box
        cy.Move_right_and_assert_movement(this.colorBoxCoursor)
        cy.Move_horizontally_and_assert_movement(this.colorHorizontalDragCoursor)
        cy.Move_horizontally_and_assert_movement(this.transparentColorHorizontalCoursor)
        cy.get(this.editorWindowXButton).click()
        cy.get(this.titleContainer).click()
        //cy.get(this.colorPopUpClosingButton).click()

        //activate all the available text decorations and check if the player's name is changed with them after that
        //cy.get(this.boldButton).click()
        cy.get(this.homePlayer).click()
        cy.get(this.underlineButton).click()
        cy.get(this.uppercaseButton).click()
        cy.get(this.italicButton).click()
        cy.get(this.homePlayer).find('.ep_ig_edditable_component')            
        .should("have.css","font-size",'45px')
        .and("have.css","font-style",'italic')
        .and("have.css","font-weight",'700')
        .and("have.css",'text-transform', 'uppercase')
        .and("have.css",'text-decoration', 'underline solid rgba(255, 251, 251, 0)');

        
    }

    fontSizeTestDecorationAllElements(){
        const propUndefinedErrorMsg = /^[^Cannot read properties of undefined (reading 'split')]/
        Cypress.on('uncaught:exception', (err) => {
            /* returning false here prevents Cypress from failing the test */
            if (propUndefinedErrorMsg.test(err.message)) {
                return false
            }
        })

        //assuring there are exactly 25 elements
        expect(this.elArray.length).eql(this.editableElementsCount)

        for(var i=0; i<this.elArray.length; i++){
            //getting the current element from the editable section/array
            var currentElement = this.elArray[i]

            cy.get(currentElement).click()
            cy.get(this.editorWindow).should('exist')

            //check the text of font size and text decoration headers
            cy.FFamily_fSize_fWeight_marginRight_position_left(this.textClass,'Barlow, sans-serif','14px','700','0px','static','auto')

            //check the font size drop down list and select one option
            cy.get(currentElement).click()
            cy.dropDownListWithFirstOption(this.fontSizeDropDown,this.fontSizedropDownList,this.fontSizeElement,this.correctFontSizeFormat)
            //check after clicking somewhere else in the pop-up if the drop-down is closing as intended
            cy.checkDropdownListClosing(0,1,this.fontSizeDropDown,this.fontSizedropDownList,this.textClass)

            //check with typing wrong format
            cy.checkFontSizeWrongFormat(this.fontSizeDropDown,this.fontSizedropDownList,this.wrongFontSizeFormat,this.noDataAvailableDropdown,
                this.noDataAvailableMessage,this.textClass)

            //check the color tooltip and the text in it
            cy.checkColorBoxTooltip(currentElement,this.colorBox,this.colorBoxTooltip)
            const $accountBox = Cypress.$(this.colorBackgroundBox);
            //console.log($accountBox)
            
            if ($accountBox.length > 0) {
                //check the background color tooltip and the text in it
                cy.checkColorBoxTooltip(currentElement,this.colorBackgroundBox,this.colorBackgroundBoxTooltip)
            }
            
            //open and close the color box
            cy.openCloseColorBoxInEditorPopUp(currentElement,this.colorBox,this.colorPopUp,this.editorWindowXButton)

            //activate all the available text decorations and check if the player's name is changed with them after that
            //cy.get(this.boldButton).click()
            cy.get(currentElement).click()
            cy.get(this.underlineButton).click()
            cy.get(this.uppercaseButton).click()
            cy.get(this.italicButton).click()
            //check if the bold button is clicked and click it if not
            cy.get('body').then(($body) => {
                if ($body.find('.ep_ig_button.epi-bold.ep_ig_active_font_property').length < 1) {
                    cy.get('.ep_ig_button.epi-bold').click();
                }
            });

            cy.fontWeightSizeStyle(currentElement,'45px','italic','700')
            
            cy.get(currentElement)
            .invoke("css",'text-decoration')
            .should('contain','underline');
            cy.get(this.editorWindowXButton).click()
        }
            
        
    }

    checkIfChangesAreOnlyOnOneElement(){
        //assuring if the made changes are only on one of the elements and the rest are still untouched
        // make a change to the first element
        cy.get(this.elArray[0]).click()
        cy.get(this.fontSizeDropDown).click().type('4px') 
        cy.get(this.fontSizeElement).eq(0).click()

        // check if the first element has changed
        cy.get(this.elArray[0]).should('have.css', 'font-size', '4px')

        // use a loop to check if other elements remain unchanged
        for (let i = 1; i < this.elArray.length; i++) {
            cy.get(this.elArray[i]).invoke('css', 'font-size').then((size) => {
                // Check if the font size of other elements remains unchanged
                expect(size).to.not.equal('4px')
            });
        }
    }

    fontSizeTestDecorationDragableElements(){
        const propUndefinedErrorMsg = /^[^Cannot read properties of undefined (reading 'split')]/
        Cypress.on('uncaught:exception', (err) => {
            /* returning false here prevents Cypress from failing the test */
            if (propUndefinedErrorMsg.test(err.message)) {
                return false
            }
        })

        for(var i=0; i<this.elArray.length; i++){
            //getting the current element from the editable section/array
            var currentElement = this.elArray[i]
            if(this.nextElement === this.elArray[this.elArrayElem] || this.nextElement === this.elArray[this.elArray.length - 1]){
                this.nextElement = this.elArray[0]

            }
            else{
                this.nextElement = this.elArray[i+1]
            }
            
            cy.get(currentElement).click({force: true})
            cy.get(this.editorWindow).should('exist')

            //check if the the whole edit pop-up is draggable
            cy.Move_and_assert_movement(this.editorWindow)
            cy.get(this.editorWindowXButton).click({force: true})
            cy.get(this.nextElement).click()

            //check the tooltip and the text in it
            cy.get(currentElement).click({force: true} )
            cy.get(this.colorBox).click()
            cy.get(this.colorPopUp).should('exist')
            //drag the coursor in the color box
            cy.Move_right_and_assert_movement(this.colorBoxCoursor)
            cy.Move_horizontally_and_assert_movement(this.colorHorizontalDragCoursor)
            cy.Move_horizontally_and_assert_movement(this.transparentColorHorizontalCoursor)
            cy.get(this.editorWindowXButton).click()
            cy.get(this.nextElement).click()
            //cy.get(this.colorPopUpClosingButton).click()

            cy.get(this.editorWindowXButton).click()
        }
            
        //reset all changes to default
        cy.get(this.resetButton).click()
    }
}

export class enet_h2h_results_po{
    constructor(){   
        //button classes
        this.resetButton = ".btn.btn_reset"
        this.saveCustomTemplateButtonClass = '.cancel:eq(0)'
        this.saveCustomTemplateButtonAs = '.cancel:eq(1)'
        this.exportButton = '.success'
        this.formatButton16_9 = '.ep_ig_size_box:eq(0)'
        this.editSectionContainer = '.ep_ig_wrapper_container'
        this.infographicsButtonSidePanel = '.ep_left_menu_icon.epi-infographics'
        this.templateButton = ".btn.btn-app:eq(1)"
        this.closePopUpButton = '.close'
        this.cancelPopUpButtonMajorClass = '.btns'
        this.cancelPopUpButton = '.cancel'
        this.exportButton = '.success'

        //deleting all the drafts
        this.widgetBox = '.widget_box'
        this.deleteButton = '.widget-delete-button.epi-bin'
        this.confirmPopup = ".ep_ig_upload_image_popup"
        this.confirmButton = ".confirm"
        this.successmsg = 'Custom template deleted successfully!'
        
        //change something in the editable section
        this.formatButton = ".ep_ig_size_box"
        this.halfElement = ".twitter-cropper.vue-advanced-cropper"
        this.homePlayer = '.ep_ig_home_name.ep_ig_edditable_field_container'
        this.fontSizeDropDown = '.v-input.ep_data_selector'
        this.fontSizeElement = '.v-list-item__content'
        this.titleContainer = '.ep_ig_label_class.ep_ig_title.ig_lbl_last_4'

        //highlited editable areas button
        this.highlightEditableAreasButtonText = '.ep_switch_label'
        this.highlightToggleMajorClass = '.ep_ig_editable_radio'
        this.highlightEditableAreasButton = '.slider'
        this.highlightedEditableAreas = '.ep_ig_edditable_component.edittable-containers-box'
        this.highlightedHomePlayerName = '.ep_ig_edditable_component.edittable-containers-box:eq(0)'
        this.highlightedEditableAreasCount = 25

        //save custom template button and pop-up
        this.buttonPopUp = '.modal-content'
        this.popUpHeaderMajorClass = '.modal-header'
        this.popUpHeader = '.modal-title.center'
        this.popUpSubHeader = '.modal-sub-header'
        this.typeFieldText = '.v-label.theme--light'
        this.typeFieldTextMajorClass = '.v-text-field__slot'
        this.confirmButtonSavePopUp = '.confirm'
        this.myInfographicsBreadcrumb = '[href="https://epanel.enetsites.com/infographic/client_templates"]'
        this.customTemplatesButton = '.upload-image-button:eq(1)'
        this.templateName = '.image-sub-title'
        this.newTemplatesName = ' Test enetgraphics '
        this.wrongTemplateName = "'===-0-00-00'';;/.[''"
        this.backgroundImgClassSH2HRes = ".widget-item-image"
        this.templateContainer = '.widget_box'
        this.successMessage = '.toast-message'
        this.messageCloseButton = '.toast-close-button'

        //check the export button and pop-up
        this.integrationText = '.ep_ig_integration_sub_title'
        this.exportAsText = '.ep_ig_export_as_sub_title'
        this.exportAsButtonsContainer = '.ep_ig_export_boxes_container.col-xl-12.p-0'
        this.clickedButton = '.ep_ig_size_box.active'
        this.exportAsButtons = '.ep_ig_size_box'
        this.cancelButton = '.ep_cancel_btn'
        this.closeButton = '.close'
        this.colorBoxTooltip = '.message-box'

        //font size/text decoration
        this.textClass = '.ep_ig_font_title'
        this.fontSizedropDownList = '.v-menu__content.theme--light.v-menu__content--auto.menuable__content__active.v-autocomplete__content'
        this.colorBoxTooltip = '.message-box:eq(0)'
        this.colorBackgroundBoxTooltip = '.message-box:eq(1)'
        this.colorBox = '.ep_ig_color_picker_popup'
        this.colorBackgroundBox = '.ep_ig_background_picker_popup'
        this.editorWindow = '.ep_ig_font_picker'
        this.editorWindowXButton = '.epi-cancel'
        this.colorPicker = '.v-color-picker__canvas-dot'
        this.colorPopUp = '.ep_color_picker'
        this.colorPopUpClosingButton = '.ep_color_picker_buttons_container'
        this.boldButton = '.ep_ig_button.epi-bold'
        this.underlineButton = '.ep_ig_button.epi-underline'
        this.uppercaseButton = '.ep_ig_button.epi-uppercase'
        this.italicButton = '.ep_ig_button.italic'
        this.noDataAvailableDropdown = '.v-list.v-select-list.v-sheet.theme--light.theme--light'
        this.colorBoxCoursor = '.v-color-picker__canvas-dot'
        this.colorHorizontalDragCoursor = '.v-slider__thumb.grey.lighten-2:eq(0)'
        this.noDataAvailableMessage = 'No data available'
        this.wrongFontSizeFormat = 'DS'
        this.correctFontSizeFormat = '45px'
        this.transparentColorHorizontalCoursor = '.v-slider__thumb.grey.lighten-2:eq(1)'
        this.elArray = ['.ep_ig_edditable_component:eq(0)','.ep_ig_edditable_component:eq(1)','.ep_ig_edditable_component:eq(2)','.ep_ig_edditable_component:eq(3)','.ep_ig_edditable_component:eq(4)','.ep_ig_edditable_component:eq(5)',
        '.ep_ig_edditable_component:eq(6)','.ep_ig_edditable_component:eq(7)','.ep_ig_edditable_component:eq(8)','.ep_ig_edditable_component:eq(9)','.ep_ig_edditable_component:eq(10)',
        '.ep_ig_edditable_component:eq(11)','.ep_ig_edditable_component:eq(12)','.ep_ig_edditable_component:eq(13)','.ep_ig_edditable_component:eq(14)','.ep_ig_edditable_component:eq(15)','.ep_ig_edditable_component:eq(16)','.ep_ig_edditable_component:eq(17)',
        '.ep_ig_edditable_component:eq(18)','.ep_ig_edditable_component:eq(19)','.ep_ig_edditable_component:eq(20)','.ep_ig_edditable_component:eq(21)','.ep_ig_edditable_component:eq(22)','.ep_ig_edditable_component:eq(23)','.ep_ig_edditable_component:eq(24)']
        this.nextElement;
        this.typedFontSize = '45px'

        //creating a random number to differentiate it from previous templates
        this.randomNumber = Math.floor(Math.random() * 1000) + 1; //generating a random number to be set in the enetgraphics name
    }

    buttonTextsStyles(){ 
        //go back to the initial format
        cy.get(this.formatButton16_9).click()
        //check the text of "Reset settings to default" button
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.resetButton,'Inter, sans-serif','14px','700','0px','static','auto')
        
        //check the text of "Save custom template" button
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.saveCustomTemplateButtonClass,'Inter, sans-serif','14px','700','0px','static','auto')
        
        //check the text of "Save custom template as" button
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.saveCustomTemplateButtonAs,'Inter, sans-serif','14px','700','0px','static','auto')

        //check the text of "Export"" button
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.exportButton,'Inter, sans-serif','14px','700','0px','static','auto')

        //check the text of "Highlight editable areas" button
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.highlightEditableAreasButtonText,'Inter, sans-serif','14.4px','700','0px','static','auto')
        
    }

    resetSettingsToDefault(){ 

        for(var i=0; i<this.elArray.length; i++){
            
            //getting the current element from the editable section/array
            let currentElement = this.elArray[i]

            //cy.get(currentElement).click()
            cy.get(currentElement).invoke('css', 'font-size').then((sizeBeforeChanges) => {

                //set new font-size of the first player's name
                cy.get(currentElement).click()
                cy.get(this.fontSizeDropDown).click().type('4px') 
                cy.get(this.fontSizeElement).eq(0).click()
                //check if the first player's name is different that the initial one
                cy.get(currentElement).should('have.css','font-size','4px')
                //check if the first player's name is equal to the the initial one after clicking the reset button
                cy.get(this.resetButton).click()
                cy.wait(500)
                cy.get(currentElement).invoke('css', 'font-size').then((sizeAfterReset) => {
                        expect(sizeBeforeChanges).to.eq(sizeAfterReset);
                });
                // cy.get('.ep_ig_edditable_component').eq(index).should('have.css','font-size','50px')
            });
        }
        //different aproach of selecting an element from the dropdown of the font size
        // cy.get(this.homePlayer).click()
        // cy.get(this.fontSizeDropDown).click().type('45p') 
        // cy.get(this.fontSizeElement).eq(0).click()
        // cy.get(this.fontSizeElement).each((element, index) => {
        //     cy.wrap(element).invoke('text').then((text) => {                
        //         if (text === "45px") {
        //             cy.get(this.fontSizeElement).eq(index).click()
        //             //fontSizeFound = true;
        //             
        //         }
        //     });
        // })

    }

    highlightEditableAreas(){ 
        //checking if the highlighting toggle is working
        cy.get(this.highlightEditableAreasButtonText).should('have.attr', 'disabled', 'disabled');
        cy.get(this.highlightToggleMajorClass).find(this.highlightEditableAreasButton).click()
        cy.get(this.highlightedEditableAreas).should('exist').and('have.length',this.highlightedEditableAreasCount)

        //checking if the editable area's background color is visible
        cy.get(this.highlightedEditableAreas).should('have.css', 'background-color', 'rgba(43, 182, 115, 0.5)')

        //disable the highlited areas
        cy.get(this.highlightToggleMajorClass).find(this.highlightEditableAreasButton).click()
    }

    saveCustomTemplateButton(){ 
        //check if the save custom temaplate pop-up is appearing
        cy.get(this.saveCustomTemplateButtonClass).click()
        cy.get(this.buttonPopUp).should('exist')

        //check after clicking the 'X' if the pop-up is closing
        cy.get(this.popUpHeaderMajorClass).find(this.closePopUpButton).click()
        cy.get(this.buttonPopUp).should('not.exist')

        //check after clicking the 'Cancel' if the pop-up is closing
        cy.get(this.saveCustomTemplateButtonClass).click()
        cy.get(this.cancelPopUpButtonMajorClass).find(this.cancelPopUpButton).click()
        cy.get(this.buttonPopUp).should('not.exist')

        //check the text styles in the pop-up
        cy.get(this.saveCustomTemplateButtonClass).click()
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.popUpHeader,'Inter, sans-serif','22px','700','0px','static','auto')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.popUpSubHeader,'Inter, sans-serif','14.4px','700','0px','static','auto')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.typeFieldText,'Inter, sans-serif','14px','700','0px','absolute','0px')
        //check if the text in the type filed is correct
        cy.get(this.typeFieldTextMajorClass).invoke('text').then((text) => { 
            expect(text).eq('Name')
        })

        //try create the template with a couple of wrong symbols
        cy.get(this.typeFieldTextMajorClass).type(this.wrongTemplateName)
        cy.get('.btns').find(this.confirmButtonSavePopUp).click()

        //check if the successful save message is appearing and it is the correct one
        cy.get(this.successMessage).should('be.visible')
        cy.get(this.successMessage).invoke('text').then((text) => { 
            expect(text).eq('The name must only contain letters, numbers, dashes, underscores and spaces.')
        })
        cy.get(this.messageCloseButton).click()

        //type a name and save the template - check if it is created correctly in the Draft page
        cy.get(this.typeFieldTextMajorClass).clear()
        cy.get(this.typeFieldTextMajorClass).type(this.newTemplatesName + this.randomNumber)
        cy.get('.btns').find(this.confirmButtonSavePopUp).click()

        //check if the successful save message is appearing and it is the correct one
        cy.get(this.successMessage).should('be.visible')
        cy.get(this.successMessage).invoke('text').then((text) => { 
            expect(text).eq('Custom template created successfully!')
        })
    }

    saveCustomTemplateAsButton(){ 
        //check if the save custom temaplate pop-up is appearing
        cy.get(this.saveCustomTemplateButtonAs).click()
        cy.get(this.buttonPopUp).should('exist')

        //check after clicking the 'X' if the pop-up is closing
        cy.get(this.popUpHeaderMajorClass).find(this.closePopUpButton).click()
        cy.get(this.buttonPopUp).should('not.exist')

        //check after clicking the 'Cancel' if the pop-up is closing
        cy.get(this.saveCustomTemplateButtonAs).click()
        cy.get(this.cancelPopUpButtonMajorClass).find(this.cancelPopUpButton).click()
        cy.get(this.buttonPopUp).should('not.exist')

        //check the text styles in the pop-up
        cy.get(this.saveCustomTemplateButtonAs).click()
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.popUpHeader,'Inter, sans-serif','22px','700','0px','static','auto')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.popUpSubHeader,'Inter, sans-serif','14.4px','700','0px','static','auto')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.typeFieldText,'Inter, sans-serif','14px','700','0px','absolute','0px')
        //check if the text in the type filed is correct
        cy.get(this.typeFieldTextMajorClass).invoke('text').then((text) => { 
            expect(text).eq('Name')
        })

        //try create the template with a couple of wrong symbols
        cy.get(this.typeFieldTextMajorClass).type(this.wrongTemplateName)
        cy.get('.btns').find(this.confirmButtonSavePopUp).click()

        //check if the successful save message is appearing and it is the correct one
        cy.get(this.successMessage).should('be.visible')
        cy.get(this.successMessage).invoke('text').then((text) => { 
            expect(text).eq('The name must only contain letters, numbers, dashes, underscores and spaces.')
        })
        cy.get(this.messageCloseButton).click()

        //type a name and save the template - check if it is created correctly in the Draft page
        cy.get(this.typeFieldTextMajorClass).clear()
        cy.get(this.typeFieldTextMajorClass).type(this.newTemplatesName + this.randomNumber)
        cy.get('.btns').find(this.confirmButtonSavePopUp).click()
        
        //check if the successful save message is appearing and it is the correct one
        cy.get(this.successMessage).should('be.visible')
        cy.get(this.successMessage).invoke('text').then((text) => { 
            expect(text).eq('Custom template created successfully!')
        })
    }

    checkIfNewTemplateExists(){
        Cypress.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes('Cannot read properties of null (reading \'style\')')) {
                return false;
            }
            return true;
        });

        //get in the newly created template
        cy.get(this.infographicsButtonSidePanel).click()
        cy.get(this.templateButton).click()
        cy.get(this.customTemplatesButton).click()
        let templateNameWithNumber = this.newTemplatesName + this.randomNumber
        
        let templateExist = false;
        cy.get(this.templateContainer).each((element, index) => {
            cy.wrap(element).find(this.templateName).eq(1).invoke('text').then((text) => {   
                //console.log(text)             
                if (text === templateNameWithNumber + ' ') {
                    templateExist = true;
                    expect(templateExist).eql(true)

                    cy.get(this.backgroundImgClassSH2HRes).eq(index).click()
                    cy.get(this.resetButton).should('exist');
                    return;
                }
            });
        })
        //check if the successful save message is appearing and it is the correct one
        cy.get('#save_draft_button').click()
        cy.get(this.buttonPopUp).should('not.exist')
        cy.wait(1000)
        cy.get(this.successMessage).should('be.visible')
        cy.get(this.successMessage).invoke('text').then((text) => { 
            expect(text).eq('Custom template saved successfully!')
        })
    }

    exportButtonAndPopUp(){
        cy.get(this.exportButton).click()
        cy.get(this.buttonPopUp).should('be.visible')

        //check the text of integration" text
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.integrationText,'Barlow, sans-serif','16px','700','0px','static','auto')

        //check the text of "Reset settings to default" button
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.exportAsText,'Barlow, sans-serif','16px','700','0px','static','auto') 
        
        //check if the 'export as' buttons are clickable
        cy.get(this.exportAsButtonsContainer).eq(0).within(()=>{
            cy.get(this.exportAsButtons).each((element, index) => {

                cy.get(element).click()
                cy.get(this.clickedButton).should('exist') 

            })
        })

        //check if the 'X' button is working and the pop-up is closing
        cy.get(this.integrationText).find(this.closeButton).click()
        cy.get(this.buttonPopUp).should('not.exist') 

        //check if the 'cancel' button is working and the pop-up is closing
        cy.get(this.exportButton).click()
        cy.get(this.cancelButton).click()
        cy.get(this.buttonPopUp).should('not.exist') 
    }

    deleteDrafts(){
        //delete all drafts
        cy.get(this.infographicsButtonSidePanel).click()
        cy.get(this.templateButton).click()
        cy.get(this.customTemplatesButton).click()

        cy.get(this.widgetBox).each((element) => {

            cy.wrap(element)
                .find(this.deleteButton)
                .click()  

            cy.get(this.confirmPopup)
                .find(this.confirmButton)
                .click() 
        })
        //check if delete successful message appears
        cy.get(this.successMessage).should('exist').invoke('text').then((text) => { 
            expect(text).eq(this.successmsg)
        })
    }

    fontSizeTestDecoration(){
        cy.get(this.homePlayer).click()
        cy.get(this.editorWindow).should('exist')

        //check the text of font size and text decoration headers
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.textClass,'Barlow, sans-serif','14px','700','0px','static','auto')

        //check the font size drop down list and select one option
        cy.dropDownListWithFirstOption(currentElement,this.fontSizeDropDown,this.fontSizedropDownList,this.fontSizeElement,this.correctFontSizeFormat)
        //check after clicking somewhere else in the pop-up if the drop-down is closing ad intended
        cy.checkDropdownListClosing(this.fontSizeDropDown,this.fontSizedropDownList,this.textClass)

        //check with typing wrong format
        cy.get(this.fontSizeDropDown).click()
        cy.get(this.fontSizedropDownList).should('be.visible')
        cy.get(this.fontSizeDropDown).click().type('DS') 
        cy.get(this.noDataAvailableDropdown).should('exist').invoke('text').then((noDataAvailable) => {
            expect(noDataAvailable).eql('No data available')
        })        
        cy.get(this.textClass).eq(0).click()
        cy.get(this.fontSizedropDownList).should('not.exist')

        //check if the the whole edit pop-up is draggable
        cy.Move_and_assert_movement(this.editorWindow)
        cy.get(this.editorWindowXButton).click()
        cy.get(this.titleContainer).click()
        // cy.get(this.fontSizeElement).each((element, index) => {
        //     cy.wrap(element).invoke('text').then((text) => {                
        //         if (text === "45px") {
        //             cy.get(this.fontSizeElement).eq(index).click()
        //             //fontSizeFound = true;
                    
        //         }
        //     });
        // })

        //check the tooltip and the text in it
        cy.get(this.homePlayer).click()
        cy.get(this.colorBox).trigger('mouseover')
        cy.get(this.colorBoxTooltip).should('exist').invoke('text').then((tooltipText) => {
            expect(tooltipText).eql('Text color')
        })
        //open and close the color box
        cy.get(this.homePlayer).click()
        cy.get(this.colorBox).click()
        cy.get(this.colorPopUp).should('exist')

        //drag the coursor in the color box
        cy.Move_right_and_assert_movement(this.colorBoxCoursor)
        cy.Move_horizontally_and_assert_movement(this.colorHorizontalDragCoursor)
        cy.Move_horizontally_and_assert_movement(this.transparentColorHorizontalCoursor)
        cy.get(this.editorWindowXButton).click()
        cy.get(this.titleContainer).click()
        //cy.get(this.colorPopUpClosingButton).click()

        //activate all the available text decorations and check if the player's name is changed with them after that
        //cy.get(this.boldButton).click()
        cy.get(this.homePlayer).click()
        cy.get(this.underlineButton).click()
        cy.get(this.uppercaseButton).click()
        cy.get(this.italicButton).click()
        cy.get(this.homePlayer).find('.ep_ig_edditable_component')            
        .should("have.css","font-size",'45px')
        .and("have.css","font-style",'italic')
        .and("have.css","font-weight",'700')
        .and("have.css",'text-transform', 'uppercase')
        .and("have.css",'text-decoration', 'underline solid rgba(255, 251, 251, 0)');

        
    }

    fontSizeTestDecorationAllElements(){
        const propUndefinedErrorMsg = /^[^Cannot read properties of undefined (reading 'split')]/
        Cypress.on('uncaught:exception', (err) => {
            /* returning false here prevents Cypress from failing the test */
            if (propUndefinedErrorMsg.test(err.message)) {
                return false
            }
        })

        //assuring there are exactly 25 elements
        expect(this.elArray.length).eql(this.highlightedEditableAreasCount)

        for(var i=0; i<this.elArray.length; i++){
            //getting the current element from the editable section/array
            var currentElement = this.elArray[i]

            cy.get(currentElement).click()
            cy.get(this.editorWindow).should('exist')

            //check the text of font size and text decoration headers
            cy.FFamily_fSize_fWeight_marginRight_position_left(this.textClass,'Barlow, sans-serif','14px','700','0px','static','auto')

            //check the font size drop down list and select one option
            cy.get(currentElement).click()
            cy.dropDownListWithFirstOption(this.fontSizeDropDown,this.fontSizedropDownList,this.fontSizeElement,this.correctFontSizeFormat)
            //check after clicking somewhere else in the pop-up if the drop-down is closing as intended
            cy.checkDropdownListClosing(0,1,this.fontSizeDropDown,this.fontSizedropDownList,this.textClass)

            //check with typing wrong format
            cy.checkFontSizeWrongFormat(this.fontSizeDropDown,this.fontSizedropDownList,this.wrongFontSizeFormat,this.noDataAvailableDropdown,
                this.noDataAvailableMessage,this.textClass)

            //check the color tooltip and the text in it
            cy.checkColorBoxTooltip(currentElement,this.colorBox,this.colorBoxTooltip)
            const $accountBox = Cypress.$(this.colorBackgroundBox);
            //console.log($accountBox)
            
            if ($accountBox.length > 0) {
                //check the background color tooltip and the text in it
                cy.checkColorBoxTooltip(currentElement,this.colorBackgroundBox,this.colorBackgroundBoxTooltip)
            }
            
            //open and close the color box
            cy.openCloseColorBoxInEditorPopUp(currentElement,this.colorBox,this.colorPopUp,this.editorWindowXButton)

            //activate all the available text decorations and check if the player's name is changed with them after that
            //cy.get(this.boldButton).click()
            cy.get(currentElement).click()
            cy.get(this.underlineButton).click()
            cy.get(this.uppercaseButton).click()
            cy.get(this.italicButton).click()
            cy.get('body').then(($body) => {
                if ($body.find('.ep_ig_button.epi-bold.ep_ig_active_font_property').length < 1) {
                    cy.get('.ep_ig_button.epi-bold').click();
                }
            });

            cy.fontWeightSizeStyle(currentElement,'45px','italic','700')
            cy.get(currentElement)
            .invoke("css",'text-decoration')
            .should('contain','underline');
            cy.get(this.editorWindowXButton).click()
        }
            
        
    }

    checkIfChangesAreOnlyOnOneElement(){
        //assuring if the made changes are only on one of the elements and the rest are still untouched
        // make a change to the first element
        cy.get(this.elArray[0]).click()
        cy.get(this.fontSizeDropDown).click().type('4px') 
        cy.get(this.fontSizeElement).eq(0).click()

        // check if the first element has changed
        cy.get(this.elArray[0]).should('have.css', 'font-size', '4px')

        // use a loop to check if other elements remain unchanged
        for (let i = 1; i < this.elArray.length; i++) {
            cy.get(this.elArray[i]).invoke('css', 'font-size').then((size) => {
                // Check if the font size of other elements remains unchanged
                expect(size).to.not.equal('4px')
            });
        }
    }

    fontSizeTestDecorationDragableElements(){
        const propUndefinedErrorMsg = /^[^Cannot read properties of undefined (reading 'split')]/
        Cypress.on('uncaught:exception', (err) => {
            /* returning false here prevents Cypress from failing the test */
            if (propUndefinedErrorMsg.test(err.message)) {
                return false
            }
        })

        for(var i=0; i<this.elArray.length; i++){
            //getting the current element from the editable section/array
            var currentElement = this.elArray[i]
            if(this.nextElement === this.elArray[2] || this.nextElement === this.elArray[this.elArray.length - 1]){
                this.nextElement = this.elArray[0]
            }
            else{
                this.nextElement = this.elArray[i+1]
            }

            cy.get(currentElement).click()
            cy.get(this.editorWindow).should('exist')

            //check if the the whole edit pop-up is draggable
            cy.Move_and_assert_movement(this.editorWindow)
            cy.get(this.editorWindowXButton).click()
            cy.get(this.nextElement).click()

            //check the tooltip and the text in it
            cy.get(currentElement).click({force: true})
            cy.get(this.colorBox).click()
            cy.get(this.colorPopUp).should('exist')
            //drag the coursor in the color box
            cy.Move_right_and_assert_movement(this.colorBoxCoursor)
            cy.Move_horizontally_and_assert_movement(this.colorHorizontalDragCoursor)
            cy.Move_horizontally_and_assert_movement(this.transparentColorHorizontalCoursor)
            cy.get(this.editorWindowXButton).click()
            cy.get(this.nextElement).click()
            //cy.get(this.colorPopUpClosingButton).click()

            cy.get(this.editorWindowXButton).click()
        }
            
        
    }
}

export class enet_player_stats_po{
    constructor(){   
        //button classes
        this.resetButton = ".btn.btn_reset"
        this.saveCustomTemplateButtonClass = '.cancel:eq(0)'
        this.saveCustomTemplateButtonAs = '.cancel:eq(1)'
        this.exportButton = '.success'
        this.formatButton16_9 = '.ep_ig_size_box:eq(0)'
        this.editSectionContainer = '.ep_ig_wrapper_container'
        this.infographicsButtonSidePanel = '.ep_left_menu_icon.epi-infographics'
        this.templateButton = ".btn.btn-app:eq(1)"
        this.closePopUpButton = '.close'
        this.cancelPopUpButtonMajorClass = '.btns'
        this.cancelPopUpButton = '.cancel'
        this.exportButton = '.success'

        //deleting all the drafts
        this.widgetBox = '.widget_box'
        this.deleteButton = '.widget-delete-button.epi-bin'
        this.confirmPopup = ".ep_ig_upload_image_popup"
        this.confirmButton = ".confirm"
        this.successmsg = 'Custom template deleted successfully!'
        
        //change something in the editable section
        this.formatButton = ".ep_ig_size_box"
        this.halfElement = ".twitter-cropper.vue-advanced-cropper"
        this.homePlayer = '.ep_ig_home_name.ep_ig_edditable_field_container'
        this.fontSizeDropDown = '.v-input.ep_data_selector'
        this.fontSizeElement = '.v-list-item__content'
        this.titleContainer = '.ep_ig_label_class.ep_ig_title.ig_lbl_last_4'

        //highlited editable areas button
        this.highlightEditableAreasButtonText = '.ep_switch_label'
        this.highlightToggleMajorClass = '.ep_ig_editable_radio'
        this.highlightEditableAreasButton = '.slider'
        this.highlightedEditableAreas = '.ep_ig_edditable_component.edittable-containers-box'
        this.highlightedHomePlayerName = '.ep_ig_edditable_component.edittable-containers-box:eq(0)'
        this.highlightedEditableAreasCount = 14

        //save custom template button and pop-up
        this.buttonPopUp = '.modal-content'
        this.popUpHeaderMajorClass = '.modal-header'
        this.popUpHeader = '.modal-title.center'
        this.popUpSubHeader = '.modal-sub-header'
        this.typeFieldText = '.v-label.theme--light'
        this.typeFieldTextMajorClass = '.v-text-field__slot'
        this.confirmButtonSavePopUp = '.confirm'
        this.myInfographicsBreadcrumb = '[href="https://epanel.enetsites.com/infographic/client_templates"]'
        this.customTemplatesButton = '.upload-image-button:eq(1)'
        this.templateName = '.image-sub-title'
        this.newTemplatesName = ' Test enetgraphics '
        this.wrongTemplateName = "'===-0-00-00'';;/.[''"
        this.backgroundImgClassSH2HRes = ".widget-item-image"
        this.templateContainer = '.widget_box'
        this.successMessage = '.toast-message'
        this.messageCloseButton = '.toast-close-button'

        //check the export button and pop-up
        this.integrationText = '.ep_ig_integration_sub_title'
        this.exportAsText = '.ep_ig_export_as_sub_title'
        this.exportAsButtonsContainer = '.ep_ig_export_boxes_container.col-xl-12.p-0'
        this.clickedButton = '.ep_ig_size_box.active'
        this.exportAsButtons = '.ep_ig_size_box'
        this.cancelButton = '.ep_cancel_btn'
        this.closeButton = '.close'
        this.colorBoxTooltip = '.message-box'

        //font size/text decoration
        this.textClass = '.ep_ig_font_title'
        this.fontSizedropDownList = '.v-menu__content.theme--light.v-menu__content--auto.menuable__content__active.v-autocomplete__content'
        this.colorBoxTooltip = '.message-box:eq(0)'
        this.colorBackgroundBoxTooltip = '.message-box:eq(1)'
        this.colorBox = '.ep_ig_color_picker_popup'
        this.colorBackgroundBox = '.ep_ig_background_picker_popup'
        this.editorWindow = '.ep_ig_font_picker'
        this.editorWindowXButton = '.epi-cancel'
        this.colorPicker = '.v-color-picker__canvas-dot'
        this.colorPopUp = '.ep_color_picker'
        this.colorPopUpClosingButton = '.ep_color_picker_buttons_container'
        this.boldButton = '.ep_ig_button.epi-bold'
        this.underlineButton = '.ep_ig_button.epi-underline'
        this.uppercaseButton = '.ep_ig_button.epi-uppercase'
        this.italicButton = '.ep_ig_button.italic'
        this.lineThroughButton = '.ep_ig_button.epi-line_through'
        this.noDataAvailableDropdown = '.v-list.v-select-list.v-sheet.theme--light.theme--light'
        this.colorBoxCoursor = '.v-color-picker__canvas-dot'
        this.colorHorizontalDragCoursor = '.v-slider__thumb.grey.lighten-2:eq(0)'
        this.noDataAvailableMessage = 'No data available'
        this.wrongFontSizeFormat = 'DS'
        this.correctFontSizeFormat = '45px'
        this.transparentColorHorizontalCoursor = '.v-slider__thumb.grey.lighten-2:eq(1)'
        this.elArray = ['.ep_ig_edditable_component:eq(0)','.ep_ig_edditable_component:eq(1)','.ep_ig_edditable_component:eq(2)','.ep_ig_edditable_component:eq(3)','.ep_ig_edditable_component:eq(4)','.ep_ig_edditable_component:eq(5)',
        '.ep_ig_edditable_component:eq(6)','.ep_ig_edditable_component:eq(7)','.ep_ig_edditable_component:eq(8)','.ep_ig_edditable_component:eq(9)','.ep_ig_edditable_component:eq(10)',
        '.ep_ig_edditable_component:eq(11)','.ep_ig_edditable_component:eq(12)','.ep_ig_edditable_component:eq(13)']
        this.editableElementsCount = 14
        this.typedFontSize = '45px'
        this.typedFontWeight = '700'
        this.typedFontItalic = 'italic'

        //creating a random number to differentiate it from previous templates
        this.randomNumber = Math.floor(Math.random() * 1000) + 1; //generating a random number to be set in the enetgraphics name
    }

    buttonTextsStyles(){ 
        //go back to the initial format
        cy.get(this.formatButton16_9).click()
        //check the text of "Reset settings to default" button
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.resetButton,'Inter, sans-serif','14px','700','0px','static','auto')
        
        //check the text of "Save custom template" button
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.saveCustomTemplateButtonClass,'Inter, sans-serif','14px','700','0px','static','auto')
        
        //check the text of "Save custom template as" button
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.saveCustomTemplateButtonAs,'Inter, sans-serif','14px','700','0px','static','auto')

        //check the text of "Export"" button
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.exportButton,'Inter, sans-serif','14px','700','0px','static','auto')

        //check the text of "Highlight editable areas" button
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.highlightEditableAreasButtonText,'Inter, sans-serif','14.4px','700','0px','static','auto')
        
    }

    resetSettingsToDefault(){ 

        for(var i=0; i<this.elArray.length; i++){
            
            //getting the current element from the editable section/array
            let currentElement = this.elArray[i]

            //cy.get(currentElement).click()
            cy.get(currentElement).invoke('css', 'font-size').then((sizeBeforeChanges) => {

                //set new font-size of the first player's name
                cy.get(currentElement).click()
                cy.get(this.fontSizeDropDown).click().type('4px') 
                cy.get(this.fontSizeElement).eq(0).click()
                //check if the first player's name is different that the initial one
                cy.get(currentElement).should('have.css','font-size','4px')
                //check if the first player's name is equal to the the initial one after clicking the reset button
                cy.get(this.resetButton).click()
                cy.wait(500)
                cy.get(currentElement).invoke('css', 'font-size').then((sizeAfterReset) => {
                        expect(sizeBeforeChanges).to.eq(sizeAfterReset);
                });
                // cy.get('.ep_ig_edditable_component').eq(index).should('have.css','font-size','50px')
            });
        }
        //different aproach of selecting an element from the dropdown of the font size
        // cy.get(this.homePlayer).click()
        // cy.get(this.fontSizeDropDown).click().type('45p') 
        // cy.get(this.fontSizeElement).eq(0).click()
        // cy.get(this.fontSizeElement).each((element, index) => {
        //     cy.wrap(element).invoke('text').then((text) => {                
        //         if (text === "45px") {
        //             cy.get(this.fontSizeElement).eq(index).click()
        //             //fontSizeFound = true;
        //             
        //         }
        //     });
        // })

    }

    highlightEditableAreas(){ 
        //checking if the highlighting toggle is working
        cy.get(this.highlightEditableAreasButtonText).should('have.attr', 'disabled', 'disabled');
        cy.get(this.highlightToggleMajorClass).find(this.highlightEditableAreasButton).click()
        cy.get(this.highlightedEditableAreas).should('exist').and('have.length',this.highlightedEditableAreasCount)

        //checking if the editable area's background color is visible
        cy.get(this.highlightedEditableAreas).should('have.css', 'background-color', 'rgba(43, 182, 115, 0.5)')

        //disable the highlited areas
        cy.get(this.highlightToggleMajorClass).find(this.highlightEditableAreasButton).click()
    }

    saveCustomTemplateButton(){ 
        //check if the save custom temaplate pop-up is appearing
        cy.get(this.saveCustomTemplateButtonClass).click()
        cy.get(this.buttonPopUp).should('exist')

        //check after clicking the 'X' if the pop-up is closing
        cy.get(this.popUpHeaderMajorClass).find(this.closePopUpButton).click()
        cy.get(this.buttonPopUp).should('not.exist')

        //check after clicking the 'Cancel' if the pop-up is closing
        cy.get(this.saveCustomTemplateButtonClass).click()
        cy.get(this.cancelPopUpButtonMajorClass).find(this.cancelPopUpButton).click()
        cy.get(this.buttonPopUp).should('not.exist')

        //check the text styles in the pop-up
        cy.get(this.saveCustomTemplateButtonClass).click()
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.popUpHeader,'Inter, sans-serif','22px','700','0px','static','auto')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.popUpSubHeader,'Inter, sans-serif','14.4px','700','0px','static','auto')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.typeFieldText,'Inter, sans-serif','14px','700','0px','absolute','0px')
        //check if the text in the type filed is correct
        cy.get(this.typeFieldTextMajorClass).invoke('text').then((text) => { 
            expect(text).eq('Name')
        })

        //try create the template with a couple of wrong symbols
        cy.get(this.typeFieldTextMajorClass).type(this.wrongTemplateName)
        cy.get('.btns').find(this.confirmButtonSavePopUp).click()

        //check if the successful save message is appearing and it is the correct one
        cy.get(this.successMessage).should('be.visible')
        cy.get(this.successMessage).invoke('text').then((text) => { 
            expect(text).eq('The name must only contain letters, numbers, dashes, underscores and spaces.')
        })
        cy.get(this.messageCloseButton).click()

        //type a name and save the template - check if it is created correctly in the Draft page
        cy.get(this.typeFieldTextMajorClass).clear()
        cy.get(this.typeFieldTextMajorClass).type(this.newTemplatesName + this.randomNumber)
        cy.get('.btns').find(this.confirmButtonSavePopUp).click()

        //check if the successful save message is appearing and it is the correct one
        cy.get(this.successMessage).should('be.visible')
        cy.get(this.successMessage).invoke('text').then((text) => { 
            expect(text).eq('Custom template created successfully!')
        })
    }

    saveCustomTemplateAsButton(){ 
        //check if the save custom temaplate pop-up is appearing
        cy.get(this.saveCustomTemplateButtonAs).click()
        cy.get(this.buttonPopUp).should('exist')

        //check after clicking the 'X' if the pop-up is closing
        cy.get(this.popUpHeaderMajorClass).find(this.closePopUpButton).click()
        cy.get(this.buttonPopUp).should('not.exist')

        //check after clicking the 'Cancel' if the pop-up is closing
        cy.get(this.saveCustomTemplateButtonAs).click()
        cy.get(this.cancelPopUpButtonMajorClass).find(this.cancelPopUpButton).click()
        cy.get(this.buttonPopUp).should('not.exist')

        //check the text styles in the pop-up
        cy.get(this.saveCustomTemplateButtonAs).click()
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.popUpHeader,'Inter, sans-serif','22px','700','0px','static','auto')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.popUpSubHeader,'Inter, sans-serif','14.4px','700','0px','static','auto')
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.typeFieldText,'Inter, sans-serif','14px','700','0px','absolute','0px')
        //check if the text in the type filed is correct
        cy.get(this.typeFieldTextMajorClass).invoke('text').then((text) => { 
            expect(text).eq('Name')
        })

        //try create the template with a couple of wrong symbols
        cy.get(this.typeFieldTextMajorClass).type(this.wrongTemplateName)
        cy.get('.btns').find(this.confirmButtonSavePopUp).click()

        //check if the successful save message is appearing and it is the correct one
        cy.get(this.successMessage).should('be.visible')
        cy.get(this.successMessage).invoke('text').then((text) => { 
            expect(text).eq('The name must only contain letters, numbers, dashes, underscores and spaces.')
        })
        cy.get(this.messageCloseButton).click()

        //type a name and save the template - check if it is created correctly in the Draft page
        cy.get(this.typeFieldTextMajorClass).clear()
        cy.get(this.typeFieldTextMajorClass).type(this.newTemplatesName + this.randomNumber)
        cy.get('.btns').find(this.confirmButtonSavePopUp).click()
        
        //check if the successful save message is appearing and it is the correct one
        cy.get(this.successMessage).should('be.visible')
        cy.get(this.successMessage).invoke('text').then((text) => { 
            expect(text).eq('Custom template created successfully!')
        })
    }

    checkIfNewTemplateExists(){
        Cypress.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes('Cannot read properties of null (reading \'style\')')) {
                return false;
            }
            return true;
        });

        //get in the newly created template
        cy.get(this.infographicsButtonSidePanel).click()
        cy.get(this.templateButton).click()
        cy.get(this.customTemplatesButton).click()
        let templateNameWithNumber = this.newTemplatesName + this.randomNumber
        
        let templateExist = false;
        cy.get(this.templateContainer).each((element, index) => {
            cy.wrap(element).find(this.templateName).eq(1).invoke('text').then((text) => {   
                //console.log(text)             
                if (text === templateNameWithNumber + ' ') {
                    templateExist = true;
                    expect(templateExist).eql(true)

                    cy.get(this.backgroundImgClassSH2HRes).eq(index).click()
                    cy.get(this.resetButton).should('exist');
                    return;
                }
            });
        })
        //check if the successful save message is appearing and it is the correct one
        cy.get('.ep_ig_save_export_container').find(this.saveCustomTemplateButtonClass).click()
        cy.get(this.buttonPopUp).should('not.exist')
        cy.get(this.successMessage).should('be.visible')
        cy.get(this.successMessage).invoke('text').then((text) => { 
            expect(text).eq('Custom template saved successfully!')
        })
    }

    exportButtonAndPopUp(){
        cy.get(this.exportButton).click()
        cy.get(this.buttonPopUp).should('be.visible')

        //check the text of integration" text
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.integrationText,'Barlow, sans-serif','16px','700','0px','static','auto')

        //check the text of "Reset settings to default" button
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.exportAsText,'Barlow, sans-serif','16px','700','0px','static','auto') 
        
        //check if the 'export as' buttons are clickable
        cy.get(this.exportAsButtonsContainer).eq(0).within(()=>{
            cy.get(this.exportAsButtons).each((element, index) => {

                cy.get(element).click()
                cy.get(this.clickedButton).should('exist') 

            })
        })

        //check if the 'X' button is working and the pop-up is closing
        cy.get(this.integrationText).find(this.closeButton).click()
        cy.get(this.buttonPopUp).should('not.exist') 

        //check if the 'cancel' button is working and the pop-up is closing
        cy.get(this.exportButton).click()
        cy.get(this.cancelButton).click()
        cy.get(this.buttonPopUp).should('not.exist') 
    }

    deleteDrafts(){
        //delete all drafts
        cy.get(this.infographicsButtonSidePanel).click()
        cy.get(this.templateButton).click()
        cy.get(this.customTemplatesButton).click()

        cy.get(this.widgetBox).each((element) => {

            cy.wrap(element)
                .find(this.deleteButton)
                .click()  

            cy.get(this.confirmPopup)
                .find(this.confirmButton)
                .click() 
        })
        //check if delete successful message appears
        cy.get(this.successMessage).should('exist').invoke('text').then((text) => { 
            expect(text).eq(this.successmsg)
        })
    }

    fontSizeTestDecoration(){
        cy.get(this.homePlayer).click()
        cy.get(this.editorWindow).should('exist')

        //check the text of font size and text decoration headers
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.textClass,'Barlow, sans-serif','14px','700','0px','static','auto')

        //check the font size drop down list and select one option
        cy.dropDownListWithFirstOption(currentElement,this.fontSizeDropDown,this.fontSizedropDownList,this.fontSizeElement,this.correctFontSizeFormat)
        //check after clicking somewhere else in the pop-up if the drop-down is closing ad intended
        cy.checkDropdownListClosing(this.fontSizeDropDown,this.fontSizedropDownList,this.textClass)

        //check with typing wrong format
        cy.get(this.fontSizeDropDown).click()
        cy.get(this.fontSizedropDownList).should('be.visible')
        cy.get(this.fontSizeDropDown).click().type('DS') 
        cy.get(this.noDataAvailableDropdown).should('exist').invoke('text').then((noDataAvailable) => {
            expect(noDataAvailable).eql('No data available')
        })        
        cy.get(this.textClass).eq(0).click()
        cy.get(this.fontSizedropDownList).should('not.exist')

        //check if the the whole edit pop-up is draggable
        cy.Move_and_assert_movement(this.editorWindow)
        cy.get(this.editorWindowXButton).click()
        cy.get(this.titleContainer).click()
        // cy.get(this.fontSizeElement).each((element, index) => {
        //     cy.wrap(element).invoke('text').then((text) => {                
        //         if (text === "45px") {
        //             cy.get(this.fontSizeElement).eq(index).click()
        //             //fontSizeFound = true;
                    
        //         }
        //     });
        // })

        //check the tooltip and the text in it
        cy.get(this.homePlayer).click()
        cy.get(this.colorBox).trigger('mouseover')
        cy.get(this.colorBoxTooltip).should('exist').invoke('text').then((tooltipText) => {
            expect(tooltipText).eql('Text color')
        })
        //open and close the color box
        cy.get(this.homePlayer).click()
        cy.get(this.colorBox).click()
        cy.get(this.colorPopUp).should('exist')

        //drag the coursor in the color box
        cy.Move_right_and_assert_movement(this.colorBoxCoursor)
        cy.Move_horizontally_and_assert_movement(this.colorHorizontalDragCoursor)
        cy.Move_horizontally_and_assert_movement(this.transparentColorHorizontalCoursor)
        cy.get(this.editorWindowXButton).click()
        cy.get(this.titleContainer).click()
        //cy.get(this.colorPopUpClosingButton).click()

        //activate all the available text decorations and check if the player's name is changed with them after that
        //cy.get(this.boldButton).click()
        cy.get(this.homePlayer).click()
        cy.get(this.underlineButton).click()
        cy.get(this.uppercaseButton).click()
        cy.get(this.italicButton).click()
        cy.get(this.homePlayer).find('.ep_ig_edditable_component')            
        .should("have.css","font-size",'45px')
        .and("have.css","font-style",'italic')
        .and("have.css","font-weight",'700')
        .and("have.css",'text-transform', 'uppercase')
        .and("have.css",'text-decoration', 'underline solid rgba(255, 251, 251, 0)');

        
    }

    fontSizeTestDecorationAllElements(){
        //assuring there are exactly a certain count of elements
        expect(this.elArray.length).eql(this.editableElementsCount)

        for(var i=0; i<this.elArray.length; i++){
            //getting the current element from the editable section/array
            var currentElement = this.elArray[i]

            cy.get(currentElement).click()
            cy.get(this.editorWindow).should('exist')

            //check the text of font size and text decoration headers
            cy.FFamily_fSize_fWeight_marginRight_position_left(this.textClass,'Barlow, sans-serif','14px','700','0px','static','auto')

            //check the font size drop down list and select one option
            cy.get(currentElement).click()
            cy.dropDownListWithFirstOption(this.fontSizeDropDown,this.fontSizedropDownList,this.fontSizeElement,this.correctFontSizeFormat)
            //check after clicking somewhere else in the pop-up if the drop-down is closing as intended
            cy.checkDropdownListClosing(0,1,this.fontSizeDropDown,this.fontSizedropDownList,this.textClass)

            //check with typing wrong format
            cy.checkFontSizeWrongFormat(this.fontSizeDropDown,this.fontSizedropDownList,this.wrongFontSizeFormat,this.noDataAvailableDropdown,
                this.noDataAvailableMessage,this.textClass)

            //check the color tooltip and the text in it
            cy.checkColorBoxTooltip(currentElement,this.colorBox,this.colorBoxTooltip)
            const $accountBox = Cypress.$(this.colorBackgroundBox);
            //console.log($accountBox)
            
            if ($accountBox.length > 0) {
                //check the background color tooltip and the text in it
                cy.checkColorBoxTooltip(currentElement,this.colorBackgroundBox,this.colorBackgroundBoxTooltip)
            }
            
            //open and close the color box
            cy.openCloseColorBoxInEditorPopUp(currentElement,this.colorBox,this.colorPopUp,this.editorWindowXButton)

            //activate all the available text decorations and check if the player's name is changed with them after that
            //cy.get(this.boldButton).click()
            cy.checkFontDecorations(currentElement,'font-weight',this.boldButton)
            cy.checkFontDecorations(currentElement,'text-transform',this.uppercaseButton)
            cy.checkFontDecorations(currentElement,'font-style',this.italicButton)
            cy.checkFontDecorations(currentElement,'text-decoration',this.lineThroughButton)
            cy.checkFontDecorations(currentElement,'text-decoration',this.underlineButton)

            //close the editor window
            cy.get(this.editorWindowXButton).click()
        }
        
        //reset all changes to default
        cy.get(this.resetButton).click()
    }

    checkIfChangesAreOnlyOnOneElement(){
        const propUndefinedErrorMsg = /^[^Cannot read properties of undefined (reading 'split')]/
        Cypress.on('uncaught:exception', (err) => {
            /* returning false here prevents Cypress from failing the test */
            if (propUndefinedErrorMsg.test(err.message)) {
                return false
            }
        })

        //assuring if the made changes are only on one of the elements and the rest are still untouched
        // make a change to the first element
        cy.get(this.elArray[0]).click()
        cy.get(this.fontSizeDropDown).click().type('4px') 
        cy.get(this.fontSizeElement).eq(0).click()

        // check if the first element has changed
        cy.get(this.elArray[0]).should('have.css', 'font-size', '4px')

        // use a loop to check if other elements remain unchanged
        for (let i = 1; i < this.elArray.length; i++) {
            cy.get(this.elArray[i]).invoke('css', 'font-size').then((size) => {
                // Check if the font size of other elements remains unchanged
                expect(size).to.not.equal('4px')
            });
        }

        //reset all changes to default
        cy.get(this.resetButton).click()
    }

    fontSizeTestDecorationDragableElements(){
        const propUndefinedErrorMsg = /^[^Cannot read properties of undefined (reading 'split')]/
        Cypress.on('uncaught:exception', (err) => {
            /* returning false here prevents Cypress from failing the test */
            if (propUndefinedErrorMsg.test(err.message)) {
                return false
            }
        })
        
        for(var i=0; i<this.elArray.length; i++){
            //getting the current element from the editable section/array
            var currentElement = this.elArray[i]
            if(this.nextElement === this.elArray[this.elArray.length - 1]){
                this.nextElement = this.elArray[0]
            }
            else{
                this.nextElement = this.elArray[i+1]
            }
            
            cy.get(currentElement).click({force: true})
            cy.get(this.editorWindow).should('exist')

            //check if the the whole edit pop-up is draggable
            cy.Move_and_assert_movement(this.editorWindow)
            cy.get(this.editorWindowXButton).click()
            cy.get(this.nextElement).click()

            //check the tooltip and the text in it
            cy.get(currentElement).click({force: true})
            cy.get(this.colorBox).click()
            cy.get(this.colorPopUp).should('exist')
            //drag the coursor in the color box
            cy.Move_right_and_assert_movement(this.colorBoxCoursor)
            cy.Move_horizontally_and_assert_movement(this.colorHorizontalDragCoursor)
            cy.Move_horizontally_and_assert_movement(this.transparentColorHorizontalCoursor)
            cy.get(this.editorWindowXButton).click()
            cy.get(this.nextElement).click()
            //cy.get(this.colorPopUpClosingButton).click()

            cy.get(this.editorWindowXButton).click()
        }
            
        //reset all changes to default
        cy.get(this.resetButton).click()
    }
}
