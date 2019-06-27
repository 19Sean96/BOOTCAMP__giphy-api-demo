$('input[type=range]').on('input', function () {
    console.log(
        $(this).val()
    );

    $('#current-quantity').text($(this).val());
});




$('.heading--form--input__topic').after(function() {
    $(this).css({
        "position": "absolute",
        "z-index": "1",
        "content": '""',
        "top": "0",
        "left": "0",
        "right": "0",
        "height": "100%",
        "width": "100%",
        "transition": ".5s all ease-in-out",
    });
});

$('.heading--form--input__topic').click(function (e) { 
    e.preventDefault();
    $('.heading--form--input__topic').after(function() {
        $(this).css({
            "position": "absolute",
            "z-index": "1",
            "content": '""',
            "top": "0",
            "left": "0",
            "height": "0%",
            "width": "100%",
            "background-color": "rgba(5,5,5,0)",
            "transition": ".5s all ease-in-out"
        });
    });

    $(this).css({
        "border-radius": ".2rem",
        "padding": ".65rem .5rem",
        // "background-color": "white",
        "font-size": "1rem",
        "width": "120%",
        "left": "-10%",
        "border-left": "white .15rem solid",
        "border-bottom": "white .2rem solid",
        "border-top": "white .05rem solid",
        "border-right": "white .05rem solid"
    });
});


