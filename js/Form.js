class Form{

    constructor()
    {
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement('h2');
    }

    hide()
    {
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

    display()
    {
        var title= createElement('h2');
        //set the content
        title.html("Car Racing Game");
        title.position(130,0);

        //is used to create an input element in the DOM for accepting text input. 
       
       

        this.input.position(130, 160);
        this.button.position(250, 200);

        //arrow function allows the function to bind the properties of the class.
        this.button.mousePressed(()=>{


            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello " + player.name);
            this.greeting.position(130, 160);

        });
        
        
    }

}