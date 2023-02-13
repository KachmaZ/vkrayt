function setupImgSliders(...args) {
    args.forEach(block => {
        $(block).css("overflow", "hidden")
        
        let currentSlideIndex = 0;
    
        let contentBlock = $(block).find(".img-slider_content");
        let rightArrow = $(block).find(".angle-button.right")
        let leftArrow = $(block).find(".angle-button.left")
        let pagination = $(block).find(".img-slider_pagination")
    
        function disableButtons() {
            leftArrow.removeClass("disabled")
            rightArrow.removeClass("disabled")
    
            if (currentSlideIndex == 0) {
                leftArrow.addClass("disabled")
            }
            if (currentSlideIndex == contentBlock.children().length - 1) {
                rightArrow.addClass("disabled")
            }
        }      
    
        function setPagination() {
            pagination.children().each((index, el) => {
                $(el).removeClass("current")
                $(pagination.children()[currentSlideIndex]).addClass("current")
            })
    
        }
    
        function newSlide() {
            contentBlock.css("transform", `translateX(${-100 * currentSlideIndex}%)`)

            setPagination()
            disableButtons()
        }  
    
        newSlide()        
    
        if (pagination) {
            for (let i = 0; i < contentBlock.children(".img-slider_slide").length; i++) {
                pagination.append('<div class="pagination_item"></div>')  
            }
    
            $(pagination.children()[currentSlideIndex]).addClass("current")
    
            pagination.children().each((index, el) => {
                $(el).click((event) => {
                    pagination.children().each((index, el) => {
                        $(el).removeClass("current")
                    })
                    $(event.currentTarget).addClass("current")
                    
                    currentSlideIndex = index
                    newSlide()
                })
            })
        }
    
        rightArrow.click((event) => {
            if (!$(event.currentTarget).hasClass("disabled")) {
                currentSlideIndex++
                newSlide()
            }
        })
    
        leftArrow.click((event) => {
            if (!$(event.currentTarget).hasClass("disabled")) {
                currentSlideIndex--
                newSlide()
            }
        })     
    })
}