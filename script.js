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
            console.log("response[xp]");
            console.log(response[xp])
            for (i = 0; i < response[xp].length; i++) {
                console.log(response[xp][0])
                debugger;
                $.getJSON("http://www.omdbapi.com/?apikey=" + "40e9cece" + "&i=" + response[xp][i].id,
                    function(response) {
                        console.log(response)
                        if (response.Response == "True") {
                            debugger;
                            console.log(response);
                            console.log("Changing Page");
                            $("#maindiv").append($("#result1").html())
                            console.log($(".mtitle1").length)
                            $("#mSearch").html("The " + response.Type + " you've searched for is " + response.Title);
                            $("#mtitle1").last().html(response.Title + "(" + response.Year + ")" + '<span class="badge badge-info s1">' +  $(".mtitle1").length
                            + '</span>');
                            $("#desc").last().html(response.Plot);
                            $("#rate").last().html(response.Title);
                            $("#extra").last().html("Released in " + response.Released + ", " + response.Title +
                            " is rated " + response.Rated + ", " + response.Title + " has earrned a total of " +
                            response.BoxOffice + ", " + response.Title + " is " + response.DVD + " on " + " DVD")
                        
                            $("#thumbnail").last().attr("src", response.Poster);
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
