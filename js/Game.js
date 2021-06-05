
class Game
{
    
    constructor()
    {


    }
    
    getState()
    {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
        //global variable declared in the application for capturing the value of 
        //gamestate here in the application, declared in the sketch.js
            gameState = data.val();
        })
      
    }

    //updating the current state of the game in the database from the application
    update(state)
    {
        database.ref('/').update({
            //in the database the gamestate is updated by the state
            'gameState' : state
        });
    }

    async start()
    {
        //criteria to start the game
        if(gameState === 0)
        {
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount
            }
      
            form = new Form();
            form.display();
            

        }
    }

    play()
    {

        form.hide();
        textSize(30);
        text("Game Start ", 120, 100);
        //since the getPlayerInfo is a static function hence calling with class name
        Player.getPlayerInfo();

        //checking the condition for allPlayers (details of all 4 player )
        if(allPlayers !== undefined)
        {
            //displaying the name: riya dis:20 at the y position of the canvas
            var display_position = 130;
            //equivalent to for(var plr=0; plr <4; plr++)
            for(var plr in allPlayers)
            {
                if(plr === "player" + player.index)
                
                    fill("red");
                

                else
                    fill("black");
                
                //the next player name and distance will be show after 130 + 20 = 150 y position
                display_position+=20;
                textSize(15);
                text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120, display_position);
            }

        }

        if(keyIsDown(UP_ARROW) && player.index !== null)
        {
            player.distance +=50;
            player.update();
        }
    }

    


}