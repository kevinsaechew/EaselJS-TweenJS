var listOfCircles = []; // List that stores Circle objects

function init() { // initial function that is called when the body is loaded
    var stage = new createjs.Stage("demoCanvas"); // creates the stage/canvas
    var circleA = new createjs.Shape();           // creates a reference to the first circle
    background = new createjs.Shape();
    stage.addChild(background);
    background.x = background.y = 0;
    circleA.graphics.beginFill("DeepSkyBlue").drawCircle(0,0,50); // Fil
    circleA.x = 100;
    circleA.y = 100;
    circleA.shadow = new createjs.Shadow("#000000", 4, 4, 5);
    listOfCircles.push(circleA); // Adds the first circle to the list
    stage.addChild(circleA);

    var numCircles = 1; // variable to count the number of circles
    
    createjs.Ticker.setFPS(60); // Sets FPS
    createjs.Ticker.addEventListener("tick", stage);

  //  window.addEventListener("click", grow); Enlarges first circle
  document.getElementById("add-button").addEventListener("click", addCircle);

    // function to make a circle increase in size
    function grow(event) {
        circleA.graphics.beginFill("DeepSkyBlue").drawCircle(0,0,100);
        stage.update();
    }

    // Function that creates a new circle of random color and location
    function addCircle(event) {
        var newCircle = new circle();

        for (let circle of listOfCircles) {

            createjs.Tween.get(circle, { loop: true })
            .to({ x: circle.x + 300 }, 1000, createjs.Ease.getPowInOut(4))
            .to({ alpha: 0, y: circle.y + 75 }, 500, createjs.Ease.getPowInOut(2))
            .to({ alpha: 0, y: circle.y + 125 }, 100)
            .to({ alpha: 1, y: circle.y + 100 }, 500, createjs.Ease.getPowInOut(2))
            .to({ x: circle.x }, 800, createjs.Ease.getPowInOut(2))
            .to({y: circle.y}, 200);
        
            }
        stage.update();
        numCircles++;
        document.getElementById("circle-count").innerHTML = "Total Number of Circles: " + numCircles;

    }

    // circle class with a constructor that generates a random color
    class circle {
        constructor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                if (i == 0 || i == 2 || i == 4) {
                    color += letters[(Math.floor(Math.random() * 13)+3)];
                    continue;
                }
            color += letters[Math.floor(Math.random() * 16)];
            }
            var circle = new createjs.Shape();
            circle.graphics.beginFill(color).drawCircle(0,0,50);
            circle.x = Math.floor(Math.random() * 800);
            circle.y = Math.floor(Math.random() * 600);
            circle.shadow = new createjs.Shadow("#000000", 4, 4, 5);
            listOfCircles.push(circle);
            stage.addChild(circle);

        }
        
}
}