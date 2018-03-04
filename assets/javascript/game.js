// Game variables
var crystalNumber;
var lost = 0;
var win = 0;
var userScore = 0;

// Game setup
var startGame = function () {

    $(".crystals").empty();

   var images = [
    "assets/images/crystal3.png",
    "assets/images/crystal6.png",
    "assets/images/crystal2.png",
    "assets/images/crystal8.png"
    ]

    crystalNumber = Math.floor(Math.random() * 101) + 19;

    $("#target").html(crystalNumber);

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

        $(".crystals").append(crystal);
    }
}

// Game scoring and restart
startGame();

$(document).on("click", ".crystal", function() {

    var num = parseInt($(this).attr("data-random"));
    userScore += num;

    $("#userScore").html(userScore);

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