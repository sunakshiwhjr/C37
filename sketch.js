var canvas,database;

//For the application we need to capture the data
//to capture the data in the application so that we can transfer it into the db.
var gameState = 0;
var playerCount = 0;
var allPlayers;
var distance = 0;


//variables for the object
var game, player, form;

function setup()
{

    canvas = createCanvas(400, 400);
    database = firebase.database();
    console.log(database);

    //creating the object out of the class
    game = new Game();
    game.getState();
    game.start();
   // player = Player();
    //form = Form();

    
    //gamestate
    //start the game.
    

}

function draw()
{

    if(playerCount === 4)
    {
        game.update(1);
    }

    if(gameState === 1)
    {   
        //clear all the html data from the canvas
        clear();
        game.play();
    }
}   