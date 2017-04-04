console.log("Script is running");
var e = document.getElementById("alert11");
var x1 = document.getElementById("thumbnail");
$("#formGroupExampleInput").change(function() {
    console.log("RUNED");
    $.getJSON(

        "http://www.omdbapi.com/?t=" + $("#formGroupExampleInput").val(),


        function(response) {
            if (response.Response == "True") {
                console.log(response);
                console.log("Changing Page");
                $("#mSearch").html("The " + response.Type + " you've searched for is " + response.Title);
                $("#mtitle1").html(response.Title);
                $("#s1").html("hi");
                $("#desc").html(response.Plot);
                x1.setAttribute("src", response.Poster);
                console.log("Changed Page");
            }
            else if (response.Response == "False") {
                console.log("Sorry, we couldn't find it")
                e.setAttribute("visibility", "visible");
                $("#alert11").css("visibility", "visible");
            }
        });
});
