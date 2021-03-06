# Smaug's Treasure Hoard #
### A Crystals Collector Game ###
*Trilogy Full Stack Flex Bootcamp Assignment*

In this Game, the user must click crystals in an effort to match their score to the magic number displayed on the page. When the user has matched the magic number, the game will reset and the win will be recorded.  If the user goes higher than the magic number, the game will reset and  loss is tallied.

*Have fun and get clicking!*

Play the game: 
[Smaug's Treasure Hoard!](https://lamepixie.github.io/Smaugs_CrystalCollector/)

![Smaug's Treasure Hoard](assets/images/crystals_screengrab.JPG)

# Assignment Breakdown: 

### Overview

In this assignment, you'll create another fun and interactive game for web browsers. This time, your app must dynamically update your HTML pages with the jQuery library.

### Option One: CrystalsCollector Game (Recommended)

1. [Watch the demo](homework_demos/crystalsCollector_demo.mp4).

2. The player will have to guess the answer, just like in Hangman. This time, though, the player will guess with numbers instead of letters. 

3. Here's how the app works:

   * There will be four crystals displayed as buttons on the page.

   * The player will be shown a random number at the start of the game.

   * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

     * Your game will hide this amount until the player clicks a crystal.
     * When they do click one, update the player's score counter.

   * The player wins if their total score matches the random number from the beginning of the game.

   * The player loses if their score goes above the random number.

   * The game restarts whenever the player wins or loses.

     * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

   * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

##### Option 1 Game design notes

* The random number shown at the start of the game should be between 19 - 120.

* Each crystal should have a random hidden value between 1 - 12.
