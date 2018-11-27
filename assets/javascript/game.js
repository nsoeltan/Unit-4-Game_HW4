// This code will be executed when the DOM has fully loaded
$(document).ready(function () {

  // Declaring the Variables for the characters and all of their properties
  // ===================================================================

  // Creating an object to hold our characters and their properties
  var characters = {
    "Obi-Wan Kenobi": {
      name: "Obi-Wan Kenobi",
      health: 120,
      attack: 8,
      imageUrl: "assets/images/Obi Wan Kenobi.png",
      enemyAttackBack: 15
    },
    "Luke Skywalker": {
      name: "Luke Skywalker",
      health: 100,
      attack: 14,
      imageUrl: "assets/images/Luke Skywalker.png",
      enemyAttackBack: 5
    },
    "Darth Sidious": {
      name: "Darth Sidious",
      health: 150,
      attack: 8,
      imageUrl: "assets/images/Darth Sidious.png",
      enemyAttackBack: 20
    },
    "Darth Maul": {
      name: "Darth Maul",
      health: 180,
      attack: 7,
      imageUrl: "assets/images/Darth Maul.png",
      enemyAttackBack: 25
    }
  };

  // Creating a variable that will be populated when the user selects a character/player
  var attacker;
  // Creating a variable that will populated with all the characters the user did not select
  var combatants = [];
  // Creating a variable that will be populated when the user chooses an opponent/enemy
  var defender;
  // This variable will keep track of turns (and calculating a player's damages) during the course of the game
  var turnCounter = 1;
  // Creating a variable that will track the number of defeated opponents/enemies
  var killCount = 0;
  // ===================================================================



  // Declaring our FUNCTIONS needed for the game
  // ==================================================================

  // Declaring Function #1 which will render a character/player's card to the page
  // The card inlcudes the following:
  // - character rendered
  // - the area they are rendered to
  // - and their status 
  // (All of this is determined by the arguments passed into the function)
  var renderCharacter = function (character, renderArea) {

    // This below block of code will build the character card, and will renders all of the card information to the page

    // Creating a variable for a div for the character's card
    var charDiv = $("<div class='character' data-name='" + character.name + "'>");
    // Creating a variable for a div for the character's/player's name
    var charName = $("<div class='character-name'>").text(character.name);
    // Creating a variable for the character's/ player's image
    var charImage = $("<img alt='image' height= '55' width='55' class='character-image'>").attr("src", character.imageUrl);
    // Creating a div for the character's/player's health points
    var charHealth = $("<div class='character-health'>").text(character.health);

    //Append the character's/player's name to the div created to hold the character's/player's card
    charDiv.append(charName);
    //Append the character's/player's image to the div created to hold the character's/player's card
    charDiv.append(charImage);
    //Append the character's/player's health points to the div created to hold the character's/player's card
    charDiv.append(charHealth);
    //Append the div created to hold the character's/player's card (which includes the palyer's name, image and health points) to the renderArea
    $(renderArea).append(charDiv);
  };



  //Declaring Function #2 which will load all the characters into the "character section" div for the user to decide which one to select from at the start of the game
  var initializeGame = function () {
    // Loop through the Characters Object and call the renderCharacter function (Function #1) for each character to render their card
    for (var key in characters) {
      renderCharacter(characters[key], "#selectACharacter");
    }
  };

  //Call the initializeGame function
  initializeGame();



  //Declaring Function #3 which will populate the selected character/player's card or the current defender's card to its designated section or the areaRender chosen (e.g. #yourCharacter or #defender sections)
  var updateCharacter = function (charObj, areaRender) {

    // Empty the area areaRender so that a new object can be re-rendered
    $(areaRender).empty();

    // Populates the selected character/player card to the "Your Character" section
    renderCharacter(charObj, areaRender);
  };



  //Declaring Function #4 which will render the available-to-attack enemies. This should be run once after a character/player card has been selected
  var renderEnemies = function (enemyArr) {
    for (var i = 0; i < enemyArr.length; i++) {
      renderCharacter(enemyArr[i], "#enemiesAvailableToAttack");
    }
  };



  //Declaring Function #5 which will render the game's status messages
  var renderMessage = function (message) {

    // Building the message and appending it to the page
    //Creating a variable and setting it equal to the "game message" div
    var gameMessageSet = $("#gameStatusMessage");
    //Creating a variable which equals a new div created for the message to be displayed 
    var newMessage = $("<div>").text(message);

    //Appending the new div created to display a message to the "game message" div 
    gameMessageSet.append(newMessage);
  };



  //Declaring Function #6 which will render the game's status and reload the page
  var restartGame = function (resultMessage) {
    //Creating a variable that is equal to creating a "Restart" button and a designated onclick function for when the user clicks on the 'Restart' button. which will result in the page being reloaded
    var restart = $("<button class='start'>Restart</button>").click(function () {
     
      location.reload();
    });

    // Creating a div that will display the victory/defeat message
    var gameState = $("<div>").text(resultMessage);

    // Append the restart button and the victory/defeat message to the body of the page
    $("body").append(gameState);
    $("body").append(restart);
  };



  //Declaring Function #7 which will clear the game message section
  var clearMessage = function () {
    var gameMessage = $("#gameStatusMessage");

    gameMessage.text("");
  };



  //Declaring Function #8 to create an on-click event when user selects a character/player card
  $("#selectACharacter").on("click", ".character", function () {

    // Creating a variable that will capture/save the clicked character's/player's card
    var name = $(this).attr("data-name");
    console.log(name);

    // Creating an if-statement to specify the conditions for when a player's has not been chosen
    // If there is no attacker, the clicked "selected character" will become the attacker
    if (!attacker) {
      // Populating the attacker with the selected character's/player's card information
      attacker = characters[name];
      // Looping through the remaining characters and pushing them to the combatants array.
      for (var key in characters) {
        if (key !== name) {
          combatants.push(characters[key]);
        }
      }

      // Hide the 'Select Your Character" div
      $("#selectACharacter").hide();

      // Render the selected character/player to the 'Your Character" div
      updateCharacter(attacker, "#yourCharacter");
      // Render the combatants to the "Enemies Available to Attack" div
      renderEnemies(combatants);
    }
  });



  //Declaring Function #9 to create an on click event for each enemy
  $("#enemiesAvailableToAttack").on("click", ".character", function () {
    // Creating a variable that will capture/save the clicked opponent's name
    var name = $(this).attr("data-name");

    // If there is no defender, the clicked enemy will become the defender
    if ($("#defender").children().length === 0) {
      defender = characters[name];
      updateCharacter(defender, "#defender");

      // remove element as it will now be a new defender
      $(this).remove();
      clearMessage();
    }
  });



  //Declaring Function #10 to run the game logic below, when a user clicks the attack button
  $("#attack-button").on("click", function () {
    // If there is a defender, combat will take place
    if ($("#defender").children().length !== 0) {
      // Creating a message for the character's/player's attack
      var attackMessage = "You attacked " + defender.name + " for " + attacker.attack * turnCounter + " damage";
      // Creating a message for the opponents counter attack
      var counterAttackMessage = defender.name + " attacked you back for " + defender.enemyAttackBack + " damage";
      clearMessage();

      // Defender's health points are reduced by palyer's attack value
      defender.health -= attacker.attack * turnCounter;

      // Declaring an if-statement when the enemy still has health points
      if (defender.health > 0) {
        // Displaying the updated enemy's character card with the new health points
        updateCharacter(defender, "#defender");

        // Render the combat messages
        renderMessage(attackMessage);
        renderMessage(counterAttackMessage);

        // Player's healh points are reduced by the opponent's attack value
        attacker.health -= defender.enemyAttackBack;

        // Displaying the updated player's character card with the new health points
        updateCharacter(attacker, "#yourCharacter");

        // Declaring an if-statement when the player has less than zero health points, the game ends
        // Calling the restartGame function to allow the user to restart the game to play again
        if (attacker.health <= 0) {
          clearMessage();
          restartGame("You have been defeated...GAME OVER!!!");
          $("#attack-button").off("click");
        }
      } else {
        // Declaring an if-statement when the enemy has less than zero health points, in which they are defeated
        // Removing opponent's character card
        $("#defender").empty();

        var gameStateMessage = "You have defeated " + defender.name + ", you can choose to fight another enemy";
        renderMessage(gameStateMessage);

        // Incrementing the number of opponent's the player has defeated
        killCount++;

        // Declaring an if-statement when the player has killed all of the opponents, in which case, the player wins
        // Calling the restartGame function to allow the user to restart the game to play again
        if (killCount >= combatants.length) {
          clearMessage();
          $("#attack-button").off("click");
          restartGame("You Won!!!! GAME OVER!!!");
        }
      }
      // Incrementing turn counter to determine how much damage the player does
      turnCounter++;
    } else {
      // If there is no defender, displaying an error message
      clearMessage();
      renderMessage("No enemy here");
    }
  });
});