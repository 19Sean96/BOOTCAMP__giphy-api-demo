$(document).ready(function() {
    let topics = [
        "cats",
        "dogs",
        "fish",
        "turtles",
        "dolphins",
        "shrug",
        "gasp",
        "eagles",
        "fractal",
        "drake",
        "art",
        "cartoon",
        "anime"
    ];
    let j = 0;

    function generateButtons() {
        topics.forEach(topic => {
            const btn = $("<button>").addClass("btn-topic");
            const removeBtn = $("<span>")
                .addClass("remove-btn")
                .html("X");
            btn.html(topic).prepend(removeBtn);
            console.log(btn);
            $(".btn-list").append(btn);
        });
    }

    $("body").on("click", ".btn-topic", function(e) {
        e.preventDefault();

        let topic = $(this)
            .text()
            .substring(1);
        // let quantity = $("#quantity-input").val();
        let quantity = $("#input-number").val();
        const key = "k9dznCk2MFJkG5XhDfuhzrVfPaBNawcX";
        let rating = $("#input-rating").val();
        let gifArr = [];

        for (let i = 0; i < parseInt(quantity); i++) {
            let giphyURL = `https://api.giphy.com/v1/gifs/random?api_key=${key}&tag=${topic}&rating=${rating}&lang=en`;
            // &rating=${rating}
            //for search endpoint API
            //&limit=${quantity}&offset=0
            j = j;
            $.ajax({
                url: giphyURL,
                method: "GET"
            }).then(response => {
                console.log(j);
                let results = response.data;
                console.log(results);
                // console.log(results.rating);
                gifArr.push(results);
                console.log(gifArr);
                // console.log(result);

                // let imageURL = result.data.image_original_url;
                // console.log(imageURL);

                // let img = $('<img>');
                // img.attr('src', imageURL);

                // $('main').append(img);
                // console.log(result.data.length);
                const container = $('<div>').addClass('gif-container');
                const ratingPar = $('<p>')
                    .addClass('gif-rating')
                    .html(`Rating: ${rating}`);
                const download = $('<a>')
                    .attr({
                        'href': gifArr[i].images.fixed_height.url,
                        // 'download': `${gifArr[i].slug}.gif`
                        'download': gifArr[i].images.fixed_height.url,
                        'target': '_blank'
                    })
                    .addClass('download-link')
                    .text('Download');
                const img = $("<img>")
                    .attr("src", gifArr[i].images.fixed_height_still.url)
                    .addClass("gif")
                    .attr("index", j)
                    .attr("src-animate", gifArr[i].images.fixed_height.url)
                    .attr("src-still", gifArr[i].images.fixed_height_still.url);
                
                container
                    .append(img)
                    .append(download)
                    .append(ratingPar);

                $(".gif-list").append(container);
                j++;
            });
            // j++;
            console.log(j);
        }
        // console.log(gifArr);
        // gifArr.forEach(gif => {
        //     const img = $('<img>').attr('src', gif.images.fixed_height.url);
        //     $('main').append(img);

        // });
    });

    $("body").on("click", ".gif", function(e) {
        e.preventDefault();
        const animateURL = $(this).attr("src-animate");
        const stillURL = $(this).attr("src-still");
        if ($(this).attr("src") == stillURL) {
            $(this).attr("src", animateURL);
        } else if ($(this).attr("src") == animateURL) {
            $(this).attr("src", stillURL);
        }
    });

    $(".toggle-switch").click(function(e) {
        e.preventDefault();

        $(this).toggleClass("slideRightToggle");
        $("header").toggleClass("slideRightHeader");
        $("main").toggleClass("widthToggle");
    });

    $("body").on("click", ".remove-btn", function(e) {
        e.preventDefault();
        console.log($(this).html());
        $(this)
            .parent()
            .remove();
    });

    $("#input-topic").keydown(function(e) {
        console.log(e);
        $("#submit-topic").css({
            opacity: 1,
            transform: "scale(1)"
        });

        console.log($(this).val());

        if (($(this).val() === "" || $(this).val() === " ") && e.which === 8) {
            $("#submit-topic").css("opacity", 0);
        }
    });

    $("#submit-topic").click(function(e) {
        e.preventDefault();
        let input = $("#input-topic").val();
        topics.push(input);
        console.log(input, topics);
        $(".btn-topic").remove();
        generateButtons();
    });

    $("#input-number").keydown(function(e) {
        $(this).val("");
    });

    $("#reset-gifs").click(function(e) {
        e.preventDefault();
        $(".gif-list").empty();
    });

    generateButtons();
});
