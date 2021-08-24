// Game States
// "WIN" - player robot has defeated all enemy-robots
//      * Fight all enemy robots
//      * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

//Players stats
const playerName = window.prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;

// Enemies
let enemyName = "Roborto";
let enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
let enemyHealth = 50;
let enemyAttack = 12;

//logs robots name in console
console.log("our Robot's name is " + playerName, "Their health is " + playerHealth, "Their attack is " + playerAttack);

const fight = function(enemyName) {

    while (playerHealth > 0 && enemyHealth > 0){

        // Asks player if they want to fight
        let promptFight = window.prompt("would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // if the player picks 'skip' confirm and stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {

            //confirm if player wants to skip
            let confirmSkip = window.confirm("are you sure you'd like to quit?");

            //if yes, leave fight
            if(confirmSkip) {
                window.alert(playerName + " has chosen to skip the fight!");

                //Subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }
            
        // Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value of 'enemyHealth' 
        enemyHealth = enemyHealth - playerAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log(
            playerName + " Attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
    

        // Check Enemies health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " Has Died");

            //Rewards player
            playerMoney = playerMoney + 20;

            break;
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value of 'PlayerHealth'
        playerHealth = playerHealth - enemyAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log(
            enemyName + " Attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // Check Players health
        if (playerHealth <= 0) {
            window.alert(playerName + " Has Died");
            break;
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
}

for(var i = 0; i < enemyNames.length; i++) {
    
    if (playerHealth > 0){
        window.alert("Welcome to Robot Gladiators! Round " + (i +1));

        //pick new enemy to fight  
        let pickedEnemyName = enemyNames[i];

        // resets enemyHealth
        enemyHealth = 50;

        fight(pickedEnemyName);
    }else {
        window.alert("You have lost your robot in batte!  Game over!");
        break;
    }
}

