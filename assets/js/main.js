//API ASSEMBLY

$(".heading--form--btn").click(function(e) {
    e.preventDefault();

    let topic = $("#topic-textbox").val();
    let quantity = $("#quantity-input").val();
    const key = "k9dznCk2MFJkG5XhDfuhzrVfPaBNawcX";
    let rating = "R";
    let gifArr = [];

    for (let i = 0; i < parseInt(quantity); i++) {
        console.log(i);
        let giphyURL = `https://api.giphy.com/v1/gifs/random?api_key=${key}&tag=${topic}&rating=${rating}&lang=en`;

        //for search endpoint API
        //&limit=${quantity}&offset=0

        $.ajax({
            url: giphyURL,
            method: "GET"
        }).then(response => {
            let results = response.data;
            console.log(results);
            gifArr.push(results);
            console.log(gifArr);
            // console.log(result);

            // let imageURL = result.data.image_original_url;
            // console.log(imageURL);

            // let img = $('<img>');
            // img.attr('src', imageURL);

            // $('main').append(img);
            // console.log(result.data.length);

            const img = $("<img>").attr(
                "src",
                gifArr[i].images.fixed_height.url
            );
            $("main").append(img);
        });

        // console.log(gifArr);
    }
    // console.log(gifArr);
    // gifArr.forEach(gif => {
    //     const img = $('<img>').attr('src', gif.images.fixed_height.url);
    //     $('main').append(img);

    // });
});
