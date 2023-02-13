function setupCustomSelect() {
    $(".custom-select").each((index, select) => {
        const currentBlock = $(select).find(".custom-select_current")
        const currentValue = currentBlock.find(".value")
        const options = $(select).find(".custom-select_list")
        const icon = $(select).find(".custom-select_icon")
    
        let chosenOption = options.find(".current").html()
    
        currentValue.html(chosenOption)
    
        currentBlock.click((event) => {
            if (options.hasClass("opened")){
                options.removeClass("opened")
                icon.removeClass("opened")
            }
            else {
                options.addClass("opened")
                icon.addClass("opened")
            }
        })
    
        options.children().each((index, option) => {
            $(option).click(event => {
                chosenOption = $(event.currentTarget).html()
                options.children().each((index, option) => {
                    $(option).removeClass("current")
                })
    
                $(event.currentTarget).addClass("current")
                currentValue.html(chosenOption)
    
                options.removeClass("opened")
                icon.removeClass("opened")
            })
        })
    })
}

