console.log("Script is running");
var e = document.getElementById("alert11");

$("#formGroupExampleInput").change(function() {
    console.log("RUNED");
    $.getJSON(

        "http://www.omdbapi.com/?t=" + $("#formGroupExampleInput").val(),


        function(response) {
           if(response.Response == "True"){
            console.log(response);
                console.log("Changing Page");
                $(".mSearch").html("HI");
                $(".thumbnail").append("<img src=" + response.Poster + ">");
                console.log("Changed Page");
           }
           else if(response.Response == "False"){
               console.log("Sorry, we couldn't find it")
               e.setAttribute("visibility", "visible");
               $(".alert11").css("visibility", "visible");
           }
        });
});
