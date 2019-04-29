var mouseHover = true;

$(document).mousemove(function(e) {
    $("html, body").scrollTop(function(i, v) {
        var h = $(window).height();
        var y = e.clientY - h / 2;
        return v + y * 0.025;
    });
});

$("cornsyrup.html").on("click", "a", function () {

    // get the href attribute
    var newUrl = $(this).attr("href");

    // veryfy if the new url exists or is a hash
    if (!newUrl || newUrl[0] === "#") {
        // set that hash
        location.hash = newUrl;
        return;
    }

    // now, fadeout the html (whole page)
    $("cornsyrup.html").fadeOut(function () {
        // when the animation is complete, set the new location
        location = newUrl;
    });

    // prevent the default browser behavior.
    return false;
});


$(document).ready(function(){
    $('.item').mouseover(function(){
        if (mouseHover) {
            $('.item p').hide();
            $(this).find('p').show();
            // $('#bg').css("background-color",$(this).attr('data'));
        }
    });

    $('.item').click(function(){

        mouseHover != !mouseHover;
        
        if (mouseHover === true) {
            mouseHover = false;
        } else if (mouseHover === false) {
            mouseHover = true;
        }


        console.log('click');
        console.log(mouseHover);

    });
});






