console.log("Script is running");
var e = document.getElementById("alert11");
var x1 = document.getElementById("thumbnail");
$("#formGroupExampleInput").change(function() {
    console.log("RUNED");
    $.getJSON(

        "http://www.imdb.com/xml/find?json=1&nr=1&tt=on&q=" + $("#formGroupExampleInput").val(),

        function(response) {
            console.log(response);
            var xp = Object.keys(response)[0];
            for (i = 0; i < response[xp].length; i++) {
                $.getJSON("http://www.omdbapi.com/?i=" + response[xp][0],
                    function(response) {
                        console.log(response)
                        if (response.Response == "True") {
                            console.log(response);
                            console.log("Changing Page");
                            $("#mSearch").html("The " + response.Type + " you've searched for is " + response.Title);
                            $("#mtitle1").html(response.Title + "(" + response.Year + ")");
                            $("#s1").html("hi");
                            $("#desc").html(response.Plot);
                            $("#rate").html(response.Title);
                            $("#extra").html("Released in " + response.Released + ", " + response.Title +
                            " is rated " + response.Rated + ", " + response.Title + " has earrned a total of " +
                            response.BoxOffice + ", " + response.Title + " is " + response.DVD + " on " + " DVD")
                            x1.setAttribute("src", response.Poster);
                            console.log("Changed Page");
                        }
                        else if (response.Response == "False") {
                            console.log("Sorry, we couldn't find it")
                            e.setAttribute("visibility", "visible");
                            $("#alert11").css("visibility", "visible");
                            $("#box2").css("visibility", "hidden");
                        }
                        
                    }
                );
            };
            });
    });
