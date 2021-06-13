$(document).ready(function() {
    $('#lightswitch').click(function() { //on lightswitch click
        console.log("switch flicked"); //debug
        $("body").addClass("black-background"); //dark background
        $(".container").addClass("white-font"); //white font
        $("#lightswitch").toggle(); //make light switch dissapear
        $("#darkswitch").toggle(); //make dark switch appear
    })

    $("#darkswitch").click(function() { //ondarkswitch click
        console.log("switch flicked"); //debug
        $("body").removeClass("black-background"); //dark background
        $(".container").removeClass("white-font"); //white font
        $("#lightswitch").toggle(); //make light switch dissapear
        $("#darkswitch").toggle(); //make dark switch appear
    })
});