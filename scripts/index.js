// Setting up toggle effects

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

// Setting up sliders 

setupSliders(
    "#intro-slider",
    "#sale-slider",
    "#daily-slider" 
)

setupImgSliders(
    "#daily-imgSlider1",
    "#daily-imgSlider2",
    "#sale-card_imgSlider1",
    "#sale-card_imgSlider2",
    "#sale-card_imgSlider3",
    "#sale-card_imgSlider4",
)   

// Setting up Custom Select component

setupCustomSelect()