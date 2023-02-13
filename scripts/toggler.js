function setActiveToggler(...args) {
    let blockSelectors = [...args]

    blockSelectors.forEach(blockSelector => {
        $(blockSelector).click((event) => {
            let targetEl = $(event.target)
            let targetBlock = $(blockSelector)
            
            if (targetEl.parent()[0] == targetBlock[0] & !targetEl.hasClass("disabled")) {
                targetBlock.children().each((index, el) => {
                    $(el).removeClass("active")
                })
    
                targetEl.addClass("active")
            }
        })
    })    
}

