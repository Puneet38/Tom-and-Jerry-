let rat, cat, catImg, bckg, bckgImg;
let ratOver, catOver, ratMov, catMov;

function preload() {
    ratImg = loadImage("jerryTwo.png")
    bckgImg = loadImage("garden.png")
    catImg = loadAnimation("tomOne.png");
    catMov = loadAnimation("tomTwo.png", "tomThree.png")
    ratMov = loadAnimation("jerryTwo.png", "jerryThree.png");
    catOver = loadAnimation("tomFour.png")
    ratOver = loadAnimation("jerryFour.png")
}

function setup() {
    createCanvas(800, 660);
    cat = createSprite(620, 490, 50, 100);
    cat.addAnimation("cat", catImg);
    cat.addAnimation("running", catMov)
    cat.addAnimation("over", catOver)
    cat.scale = 0.15
    cat.shapeColor = "green";
    rat = createSprite(100, 490, 100, 50);
    rat.shapeColor = "blue";
    rat.addImage(ratImg)
    rat.addAnimation("running", ratMov)
    rat.addAnimation("over2", ratOver)
    rat.scale = 0.1
    bckg = createSprite(400, 270, 800, 400)
    bckg.addImage(bckgImg)
    bckg.scale = 1
    bckg.depth = cat.depth - 1
}

function draw() {
    background(0);

    if (cat.x - rat.x < (cat.width - rat.width) / 2) {
        rat.changeAnimation("over2", ratOver)
        cat.changeAnimation("over", catOver)
        cat.velocityX = 0;
    }

    keyPressed();
    drawSprites();
}

function keyPressed() {

    if (keyDown(LEFT_ARROW)) {
        cat.velocityX = -5
        cat.changeAnimation("running", catMov)
        rat.changeAnimation("running", ratMov)
    }
}
