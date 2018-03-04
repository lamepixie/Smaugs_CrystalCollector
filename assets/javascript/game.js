// Game variables
var crystalNumber;
var lost = 0;
var win = 0;
var userScore = 0;

// Game setup
var startGame = function () {

    $(".crystals_trial").empty();

   var images = [
    "../images/crystal3.png",
    "C:/Users/joell/Desktop/crystals-collector/assets/images/crystal6.png",
    "C:/Users/joell/Desktop/crystals-collector/assets/images/crystal2.png",
    "C:/Users/joell/Desktop/crystals-collector/assets/images/crystal8.png"
    ]

    crystalNumber = Math.floor(Math.random() * 101) + 19;

    $("#target").html("Number to match: " + crystalNumber );

    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) + 1;

        var crystal = $("<div>");
            crystal.attr({
                "class": "crystal",
                "data-random": random
            });

           crystal.css({
            "background-image":"url('" + images[i] + "')",
            "background-size":"cover"
           });

        $(".crystals_trial").append(crystal);
    }
}

// Game scoring and restart
startGame();

$(document).on("click", ".crystal", function() {

    var num = parseInt($(this).attr("data-random"));
    userScore += num;

    $("#userScore").html("Current score: " + userScore);

    if (userScore === crystalNumber) {
        win ++;
        $("#wins").html("Games won: " + win);
        userScore = 0;
        startGame();
    }
    else if (userScore > crystalNumber) {
        lost ++;
        $("#loss").html("Games lost: " + lost);
        userScore = 0;
        startGame();
    }
});