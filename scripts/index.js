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

setActiveToggler(
    ".nav", 
    ".sale_buttons", 
    ".color_choise", 
    ".size_choise", 
    ".nav-mobile_menu"
)

$(".nav-mobile_icon").click(() => {
    $(".nav-mobile").toggleClass("opened")
})

$(".to-favorite").click((event) => {
    $(event.currentTarget).toggleClass("active")
})

$(".actions_item__save").click((event) => {
    $(event.currentTarget).children("svg").toggleClass("active")
})