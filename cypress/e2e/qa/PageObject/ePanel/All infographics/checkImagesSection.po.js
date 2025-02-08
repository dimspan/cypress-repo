import 'cypress-real-events/support';

export class enetgraphics_images_po{
    constructor(){   
        //all texts
        this.imagesHeaderText = '.ep_ig_data_title.epi-down'
        this.playerHeaderText = '.ep_ig_images_sub_title'
        this.removeBackgroundText = '.ep_ig_remove_bg_label'
        this.uploadYourImagesText = '.ep_ig_image_preview_title'
        this.uploadImageLibraryContainer = '.ep_ig_upload_buttons_container'
        this.uploadImage = '.epi-upload'
        this.playerHeaderMajorClass = '.ep_ig_player_and_button_wrapper'
        this.uploadImagesDesc = '.ep_ig_upload_description'

        //image library pop-up and button
        this.imageLibraryHeaderText = '.modal-title.center'
        this.imageLibrarySubText = '.modal-sub-header'
        this.searchFieldText = '.v-text-field__slot'
        this.imageLibraryHeaderContainer = '.modal-header'
        this.imageLibrarySearchField = '.v-text-field__slot'
        this.firstElementSelectButton = '.widget-preview-button.epi-down:eq(0)'
        this.firstElementImage = 'img[data-src="/infographic/displayImage/$2y$10$UBwHAsQxGqiET8eysuNLejjfIckrgKMzpsF2cJFDADVMM39mVLdi/png/yes/thumbnail"'
        this.firstPlayerImage = '.vue-advanced-cropper__image:eq(0)'
        this.imageLibraryPopUp = '.modal-content'
        this.correctName = 'mufc'
        this.wrongName = 'wrong test'
        this.imageLibraryErrorMessage = '.image-error-msg'
        this.imageContainer = '.modal-body'
        this.seventhImage = '.widget_box.mx-2:eq(6)'

        //scale pop-up
        this.imageFirstPlayer = '.vue-advanced-cropper__image-wrapper:eq(0)'
        this.scalePopUpHeader = '.ep_ig_zoom_title'
        this.scalePopUpContainer = '.ep_ig_cropper_zoom_container.left_image'
        this.scaleSlider = '.v-slider__thumb-container.primary--text'
        this.scalePopUpXButton = '.epi-cancel'
        this.templateContainer = '.ep_ig_template_demo'

        //remove background toggle and tooltip
        this.removeBGTooltipIcon = '.ep_ig_information_tooltip'
        this.removeBGTooltip = '.ep_ig_tooltip_wrapper'
        this.removeBGToggle = '.slider.round'
        this.playerImagePreview = '.ep_ig_images_preview'
    }

    textsStylesByDesign(){ 
        //Images header
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.imagesHeaderText,'Barlow, sans-serif','16px','700','0px','relative','0px')
        //Player header
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.playerHeaderText,'Inter, sans-serif','14px','700','0px','static','auto')
        //Remove background button
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.removeBackgroundText,'Inter, sans-serif','14.4px','400','0px','static','auto')
        //Upload your images
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.uploadYourImagesText,'Inter, sans-serif','18px','700','0px','static','auto')
        //Upload your images description
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.uploadImagesDesc,'Inter, sans-serif','12px','400','0px','static','auto')
        //upload image
        cy.get(this.uploadImage).should('exist')
        //go into the image library
        cy.get('.ep_ig_upload_buttons_container').eq(0).find('.confirm').click()
        //image library header
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.imageLibraryHeaderText,'Inter, sans-serif','22px','700','0px','static','auto')
        //image library sub header text
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.imageLibrarySubText,'Inter, sans-serif','14.4px','700','0px','static','auto')
        //text in the search field
        cy.FFamily_fSize_fWeight_marginRight_position_left(this.searchFieldText,'Inter, sans-serif','16px','400','0px','relative','0px')
        //closing the image library pop up
        cy.get(this.imageLibraryHeaderContainer).find('.close').click()
    }

    checkImageLibrabryButtonPopUp(){ 
        //check if the selected image is the same as the selected one in the image library pop up
        //open the image library 
        cy.get('.ep_ig_upload_buttons_container').eq(0).find('.confirm').click()
        //image library pop-up should exist
        cy.get(this.imageLibraryPopUp).should('exist')
        //search for something in the search field and select the first image
        cy.get(this.imageLibrarySearchField).click().type(this.correctName)
        
        cy.get(this.firstElementImage).invoke('attr', 'src').then((selectedImage) => {
            cy.get(this.firstElementSelectButton).click()
            cy.get('.vue-advanced-cropper__image-wrapper').eq(0).find(this.firstPlayerImage).invoke('attr', 'src').should((firstPlayerSelectedImage) => {
                    expect(selectedImage).to.contain(firstPlayerSelectedImage);
            });
        });

        //try to type something wrong in the search field and "No results found" message should appear
        cy.get('.ep_ig_upload_buttons_container').eq(0).find('.confirm').click()
        cy.get(this.imageLibrarySearchField).clear()
        cy.get(this.imageLibrarySearchField).click().type(this.wrongName)
        cy.get(this.imageLibraryErrorMessage).invoke('text').then((noResultsFound) => {
            cy.wrap(noResultsFound).should('eql', 'No results found')
        })

        //check if the scroll is working fine
        cy.get(this.imageLibrarySearchField).clear()
        cy.get(this.imageContainer).as('targetElement');
        cy.get('@targetElement').scrollTo('bottom')
        cy.get(this.seventhImage).should('exist');

        //close the pop-up
        cy.get(this.imageLibraryHeaderContainer).find('.close').click()

        //remove the image from the editable section
        cy.get(this.playerHeaderMajorClass).eq(0).find('.close').click()
    }

    checkScalePopUp(){ 
        //open the image library 
        cy.get('.ep_ig_upload_buttons_container').eq(0).find('.confirm').click()
        //search for something in the search field and select the first image
        cy.get(this.imageLibrarySearchField).click().type(this.correctName)
        cy.get(this.firstElementSelectButton).click()

        //check the scale pop-up header
        cy.get(this.imageFirstPlayer).click({force: true})
        cy.get(this.scalePopUpContainer).should('exist')
        cy.get(this.scalePopUpHeader).invoke('text').then((scaleText)=>{
            cy.wrap(scaleText).should('eql', 'Scale')
        })

        cy.FFamily_fSize_fWeight_marginRight_position_left(this.scalePopUpHeader,'Inter, sans-serif','16px','700','0px','static','auto')

        //check if the whole scale pop-up conatiner is visible within the template container
        cy.get(this.scalePopUpContainer).should('be.visible')
        .then(($element) => {
            const elementRect = $element[0].getBoundingClientRect();
            
            cy.get(this.templateContainer).should('be.visible')
            .then(($parent) => {
                const parentRect = $parent[0].getBoundingClientRect();

                expect(elementRect.top >= parentRect.top).to.be.true;
                expect(elementRect.bottom <= parentRect.bottom).to.be.true;
                expect(elementRect.left >= parentRect.left).to.be.true;
                expect(elementRect.right <= parentRect.right).to.be.true;
            });
        });

        //check if the new player background image's size is different after re-scaling it
        cy.get('.vue-advanced-cropper__image').eq(0).invoke('attr', 'style').then(style => {
            const transformRegex = /transform:\s*([^;]+)/;
            const transformMatchBeforeResize = style.match(transformRegex);

            if (transformMatchBeforeResize) {
                // Extract the transform value
                const styleBeforeResizing = transformMatchBeforeResize[1];

                //check if the drag coursor is working
                cy.Move_right_and_assert_movement(this.scaleSlider)
                cy.get('.vue-advanced-cropper__image').eq(0).invoke('attr', 'style').then((styleAfterResize) => {
                    const transformMatchAfterResize = styleAfterResize.match(transformRegex);

                    if (transformMatchAfterResize) {
                        // Extract the transform value
                        const styleAfterResizing = transformMatchAfterResize[1];

                        expect(styleBeforeResizing).not.eq(styleAfterResizing);
                    }
                    
                });            
            }
               
        })

        //check if the X button is working
        cy.get(this.scalePopUpXButton).click({force: true})
        cy.get(this.scalePopUpContainer).should('not.exist')
    }

    removeBackgroundToggle(){ 
        //open the image library 
        cy.get('.ep_ig_upload_buttons_container').eq(0).find('.confirm').click()
        //image library pop-up should exist
        cy.get(this.imageLibraryPopUp).should('exist')
        //search for something in the search field and select the first image
        cy.get(this.imageLibrarySearchField).click().type(this.correctName)
        //select the first element after search
        cy.get(this.firstElementSelectButton).click()

        
        //check the tooltip icon and text in it
        cy.get(this.removeBGTooltipIcon).eq(0).should('exist').click()
        cy.get(this.removeBGTooltip).should('exist').invoke('text').then((tooltipText) => {
            let trimmedText = tooltipText.trim()
            cy.wrap(trimmedText).should('eql','Pick an image from the Image Library or upload an image to use this feature.')
        })

        //check the toggle if moving and the bg color
        cy.get(this.removeBGToggle).should('have.css', 'background-color', 'rgb(204, 204, 204)')
        cy.get(this.playerImagePreview).eq(0).click()
        cy.get(this.removeBGToggle).eq(0).click()
        cy.get(this.removeBGToggle).should('have.css', 'background-color', 'rgb(0, 0, 0)')

    }


}
