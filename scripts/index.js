function setActiveToggler(...args) {
    let blockSelectors = [...args]
    console.log(args)

    blockSelectors.forEach(blockSelector => {
        $(blockSelector).click((event) => {
            let targetEl = $(event.target)
            let targetBlock = $(blockSelector)
            
            if (targetEl.parent()[0] == targetBlock[0]) {
                targetBlock.children().each((index, el) => {
                    $(el).removeClass("active")
                })
    
                targetEl.addClass("active")
            }
        })
    })

    
}

setActiveToggler(".nav", ".sale_buttons", ".color_choise", ".size_choise")