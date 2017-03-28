console.log("Script is running")

$("#formGroupExampleInput").change(function() {
    console.log("RUNED");
    $.getJSON(

        "http://www.omdbapi.com/?t=" + $("#formGroupExampleInput").val(),


        function(response) {
            console.log(response);
                $(".thumbnail").append("<img src=" + response.Poster + ">");
                console.log("Changed Poster")
        });
});
