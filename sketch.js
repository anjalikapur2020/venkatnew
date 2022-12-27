var waitimg, playimg, nextbutton, playbutton, nextbutton1, aboutimg, startimg
var gameState = "wait"
var level1img, level1, level2, level3, level4, level5, level6
var boatpart1, boatpart2, boatpart3, boatpart4, boatpart5, boatpart6
var q1a1Group, q1a2Group, q1a3Group, q1a4Group


function preload() {
    waitimg = loadImage("assets/wait.gif")
    aboutimg = loadImage("assets/brainFactsscreen.gif")
    startimg = loadImage("assets/getSetGo.gif")
    level1img = loadImage("/assets/level1bg.jpg")
    level1instructions = loadImage("/assets/sink.gif")
    level1bg = loadImage("assets/beach1.gif")
    boatimg = loadImage("assets/boat/boat.png")
    winbg = loadImage("assets/winimg.gif")

    boatpart1img = loadImage("assets/boat/part1.png")
    boatpart2img = loadImage("assets/boat/part2.png")
    boatpart3img = loadImage("assets/boat/part3.png")
    boatpart4img = loadImage("assets/boat/part4.png")
    boatpart5img = loadImage("assets/boat/part5.png")
    boatpart6img = loadImage("assets/boat/part6.png")
    boatpart7img = loadImage("assets/boat/part7.png")

    // options question1
    q1a1img = loadImage("assets/answers/donaldTrump.jpg")
    q1a2img = loadImage("assets/answers/kamalaHarris.jpg")
    q1a3img = loadImage("assets/answers/mikePence.jpg")
    q1a4img = loadImage("assets/answers/JoeBiden.jpg")


    // options question2
    q2a1img = loadImage("assets/answers/restaurantmanager.jpg")
    q2a2img = loadImage("assets/answers/pizzaDeliverGuy.jpg")
    q2a3img = loadImage("assets/answers/dentist.jpg")
    q2a4img = loadImage("assets/answers/chef.jpg")

    // options question3
    q3a1img = loadImage("assets/answers/jkRowling.jpg")
    q3a2img = loadImage("assets/answers/jrrTolkien.jpg")
    q3a3img = loadImage("assets/answers/dentist.jpg")
    q3a4img = loadImage("assets/answers/masashiKishimoto.jpg")


    // options question4
    q4a1img = loadImage("assets/answers/billGates.jpg")
    q4a2img = loadImage("assets/answers/jeffBezos.jpg")
    q4a3img = loadImage("assets/answers/markZuckerberg.jpg")
    q4a4img = loadImage("assets/answers/elonMusk.jpg")


    // options question5
    q5a1img = loadImage("assets/answers/dentist.jpg")
    q5a2img = loadImage("assets/answers/plumber.jpg")
    q5a3img = loadImage("assets/answers/boxer.jpg")
    q5a4img = loadImage("assets/answers/civilEngineer.jpg")



    level2bg = loadImage("assets/beach1.gif")

    playerimg = loadImage("assets/player.gif")

    // got part images
    gotboatpart1 = loadImage("assets/boat/gotpart1.png")
    gotboatpart2 = loadImage("assets/boat/gotpart2.png")
    gotboatpart3 = loadImage("assets/boat/gotpart3.png")
    gotboatpart4 = loadImage("assets/boat/gotpart4.png")
    gotboatpart5 = loadImage("assets/boat/gotpart5.png")


    // load sound
    bgsound = loadSound("assets/Sounds/BackgroundMusic.mp3")
    bgsound.setVolume(0.1)

    correctanswer = loadSound("assets/Sounds/Correctanswersound.mp3")
    correctanswer.setVolume(0.1)

    wronganswersound = loadSound("assets/Sounds/Wronganswersound.mp3")
    wronganswersound.setVolume(0.1)


   winsound = loadSound("assets/Sounds/winclap1.mp3")
   winsound.setVolume(0.1)
    


}


function setup() {
    createCanvas(windowWidth - 15, windowHeight - 25)
    w = windowWidth
    h = windowHeight
    console.log(w, h)

    nextbutton = createImg("assets/arrow.gif")
    nextbutton.position(width - 100, height - 30)
    nextbutton.size(100, 50)

    nextbutton1 = createImg("assets/arrow.gif")
    nextbutton1.position(width - 100, height - 30)
    nextbutton1.size(100, 50)
    nextbutton1.hide()

    nextbutton2 = createImg("assets/arrow.gif")
    nextbutton2.position(width - 100, height - 30)
    nextbutton2.size(100, 50)
    nextbutton2.hide()

    nextbutton3 = createImg("assets/arrow.gif")
    nextbutton3.position(width - 100, height - 30)
    nextbutton3.size(100, 50)
    nextbutton3.hide()


    boatpart2 = createSprite(width / 1.85 + 200, 50, 50, 50)
    boatpart2.addImage(boatpart2img)
    boatpart2.scale = .35
    boatpart2.visible = false





    boatpart4 = createSprite(width / 1.85 + 300, 50, 50, 50)
    boatpart4.addImage(boatpart4img)
    boatpart4.scale = .35
    boatpart4.visible = false


    boatpart5 = createSprite(width / 1.85 + 350, 50, 50, 50)
    boatpart5.addImage(boatpart5img)
    boatpart5.scale = .35
    boatpart5.visible = false


    boatpart6 = createSprite(width / 1.85 + 450, 50, 50, 50)
    boatpart6.addImage(boatpart6img)
    boatpart6.scale = .35
    boatpart6.visible = false


    boatpart7 = createSprite(width / 1.85 + 600, 50, 50, 50)
    boatpart7.addImage(boatpart7img)
    boatpart7.scale = .35
    boatpart7.visible = false

    // wrong answer
    wronganswer = createImg("assets/wronganswer.gif")
    wronganswer.position(width / 4, height / 4)
    wronganswer.size(500, 500)
    wronganswer.hide()

    // buttons of parts pop up
    part1button = createImg("/assets/boat/part2collected.gif")
    part1button.position(width / 4, height / 4)
    part1button.size(500, 500)
    part1button.hide()

    part2button = createImg("/assets/boat/part4collected.gif")
    part2button.position(width / 4, height / 4)
    part2button.size(500, 500)
    part2button.hide()


    part3button = createImg("/assets/boat/part5collected.gif")
    part3button.position(width / 4, height / 4)
    part3button.size(500, 500)
    part3button.hide()


    part4button = createImg("/assets/boat/part6collected.gif")
    part4button.position(width / 4, height / 4)
    part4button.size(500, 500)
    part4button.hide()


    part5button = createImg("/assets/boat/part7collected.gif")
    part5button.position(width / 4, height / 4)
    part5button.size(500, 500)
    part5button.hide()

    // questions buttons
    question1 = createImg("assets/answers/question1.gif")
    question1.position(width / 4, height / 4)
    question1.size(500, 500)
    question1.hide()


    question2 = createImg("assets/answers/question2.gif")
    question2.position(width / 4, height / 4)
    question2.size(500, 500)
    question2.hide()


    question3 = createImg("assets/answers/question3.gif")
    question3.position(width / 4, height / 4)
    question3.size(500, 500)
    question3.hide()


    question4 = createImg("assets/answers/question4.gif")
    question4.position(width / 4, height / 4)
    question4.size(500, 500)
    question4.hide()



    question5 = createImg("assets/answers/question5.gif")
    question5.position(width / 4, height / 4)
    question5.size(500, 500)
    question5.hide()



    // answers and part collected
    // part1

    collect1 = createImg("assets/boat/part2collected.gif")
    collect1.position(width / 4, height / 4)
    collect1.size(500, 500)
    collect1.hide()



    q1a1Group = new Group
    q1a2Group = new Group
    q1a3Group = new Group
    q1a4Group = new Group


    q2a1Group = new Group
    q2a2Group = new Group
    q2a3Group = new Group
    q2a4Group = new Group

    q3a1Group = new Group
    q3a2Group = new Group
    q3a3Group = new Group
    q3a4Group = new Group

    q4a1Group = new Group
    q4a2Group = new Group
    q4a3Group = new Group
    q4a4Group = new Group

    q5a1Group = new Group
    q5a2Group = new Group
    q5a3Group = new Group
    q5a4Group = new Group



    // player
    player = createSprite(100, height - 100)
    player.addImage(playerimg)
    player.scale = 0.4
    player.visible = false


    // boat sprite
    boat = createSprite(50, height - 100)
    boat.addImage(boatimg)
    boat.visible = false



    // play background music

    bgsound.play()

}


function draw() {

    if (!bgsound.isPlaying()) {
        bgsound.play()
    }

    if (gameState == "wait") {
        background(waitimg)
        nextbutton2.hide()
        nextbutton1.hide()
        nextbutton3.hide()


    }

    nextbutton.mousePressed(() => {
        gameState = "about"
    })

    nextbutton1.mousePressed(() => {
        gameState = "start"
    })


    nextbutton2.mousePressed(() => {
        gameState = "playinstructions"
    })


    nextbutton3.mousePressed(() => {
        gameState = "play"
    })

    if (gameState === "about") {
        background(aboutimg)
        nextbutton.hide()
        nextbutton1.show()
        nextbutton2.hide()
        nextbutton3.hide()
    }

    if (gameState === "start") {
        background(startimg)
        nextbutton.hide()
        nextbutton1.hide()
        nextbutton2.show()
        nextbutton3.hide()

    }
    if (gameState === "playinstructions") {
        background(level1instructions)
        nextbutton.hide()
        nextbutton1.hide()
        nextbutton2.hide()
        nextbutton3.show()

    }




    if (gameState === "play") {
        background(level1bg)

        nextbutton.hide()
        nextbutton1.hide()
        nextbutton2.hide()
        nextbutton3.hide()

        boatpart2.visible = true
        boatpart4.visible = true
        boatpart5.visible = true
        boatpart6.visible = true
        boatpart7.visible = true

        question1.show()
        player.visible = true



        question1.mousePressed(() => {
            // collect1.show()


            gameState = "question1options"

            question1.hide()

        })
    }

    if (gameState == "question1options") {

        answer1()

        if (keyDown("Left_Arrow")) {
            player.x -= 6
        }

        if (keyDown("Right_Arrow")) {
            player.x += 6
        }

        if (player.x < 0) {
            player.x = width - 100
        }

        if (player.x > width) {
            player.x = 100
        }

        if (player.isTouching(q1a4Group)) {
            part1button.show()
            q1a1Group.destroyEach()
            q1a2Group.destroyEach()
            q1a3Group.destroyEach()
            q1a4Group.destroyEach()
            correctanswer.play()


        }

        if (player.isTouching(q1a1Group) || player.isTouching(q1a2Group) || player.isTouching(q1a3Group)) {
            wronganswersound.play()
            q1a1Group.destroyEach()
            q1a2Group.destroyEach()
            q1a3Group.destroyEach()
            q1a4Group.destroyEach()

            gameState = "gameover"
        }



        part1button.mousePressed(() => {
            gameState = "Askquestion2"
        })


    }

    if (gameState == "question2options") {

        answer2()

        if (keyDown("Left_Arrow")) {
            player.x -= 6
        }

        if (keyDown("Right_Arrow")) {
            player.x += 6
        }
        if (player.x < 0) {
            player.x = width - 100
        }

        if (player.x > width) {
            player.x = 100
        }


        if (player.isTouching(q2a4Group)) {
            part2button.show()
            q2a1Group.destroyEach()
            q2a2Group.destroyEach()
            q2a3Group.destroyEach()
            q2a4Group.destroyEach()
            correctanswer.play()


        }

        if (player.isTouching(q2a1Group) || player.isTouching(q2a2Group) || player.isTouching(q2a3Group)) {
            wronganswersound.play()

            q2a1Group.destroyEach()
            q2a2Group.destroyEach()
            q2a3Group.destroyEach()
            q2a4Group.destroyEach()

            gameState = "gameover"
        }

        part2button.mousePressed(() => {
            gameState = "Askquestion3"
        })


    }


    if (gameState == "question3options") {

        answer3()

        if (keyDown("Left_Arrow")) {
            player.x -= 6
        }

        if (keyDown("Right_Arrow")) {
            player.x += 6
        }

        if (player.x < 0) {
            player.x = width - 100
        }

        if (player.x > width) {
            player.x = 100
        }

        if (player.isTouching(q3a4Group)) {
            part3button.show()
            q3a1Group.destroyEach()
            q3a2Group.destroyEach()
            q3a3Group.destroyEach()
            q3a4Group.destroyEach()
            correctanswer.play()


        }

        if (player.isTouching(q3a1Group) || player.isTouching(q3a2Group) || player.isTouching(q3a3Group)) {
            wronganswersound.play()

            q3a1Group.destroyEach()
            q3a2Group.destroyEach()
            q3a3Group.destroyEach()
            q3a4Group.destroyEach()

            gameState = "gameover"
        }

        part3button.mousePressed(() => {
            gameState = "Askquestion4"
        })


    }

    if (gameState == "question4options") {

        answer4()

        if (keyDown("Left_Arrow")) {
            player.x -= 6
        }

        if (keyDown("Right_Arrow")) {
            player.x += 6
        }
        if (player.x < 0) {
            player.x = width - 100
        }

        if (player.x > width) {
            player.x = 100
        }


        if (player.isTouching(q4a4Group)) {
            part4button.show()
            q4a1Group.destroyEach()
            q4a2Group.destroyEach()
            q4a3Group.destroyEach()
            q4a4Group.destroyEach()
            correctanswer.play()


        }

        if (player.isTouching(q4a1Group) || player.isTouching(q4a2Group) || player.isTouching(q4a3Group)) {
            wronganswersound.play()

            q4a1Group.destroyEach()
            q4a2Group.destroyEach()
            q4a3Group.destroyEach()
            q4a4Group.destroyEach()

            gameState = "gameover"
        }

        part4button.mousePressed(() => {
            gameState = "Askquestion5"
        })


    }


    if (gameState == "question5options") {

        answer5()

        if (keyDown("Left_Arrow")) {
            player.x -= 6
        }

        if (keyDown("Right_Arrow")) {
            player.x += 6
        }
        if (player.x < 0) {
            player.x = width - 100
        }


        if (player.x > width) {
            player.x = 100
        }


        if (player.isTouching(q5a4Group)) {
            part5button.show()
            q5a1Group.destroyEach()
            q5a2Group.destroyEach()
            q5a3Group.destroyEach()
            q5a4Group.destroyEach()
            correctanswer.play()


        }

        if (player.isTouching(q5a1Group) || player.isTouching(q5a2Group) || player.isTouching(q5a3Group)) {
            wronganswersound.play()

            q5a1Group.destroyEach()
            q5a2Group.destroyEach()
            q5a3Group.destroyEach()
            q5a4Group.destroyEach()
            gameState = "gameover"
        }

        part5button.mousePressed(() => {
            gameState = "won"
        })


    }


    if (gameState === "Askquestion2") {
        // background(0)
        background(level1bg)
        question2.show()
        part1button.hide()
        boatpart2.addImage(gotboatpart1)

        q1a1Group.destroyEach()
        q1a2Group.destroyEach()
        q1a3Group.destroyEach()
        q1a4Group.destroyEach()


        if (keyDown("Left_Arrow")) {
            player.x -= 6
        }

        if (keyDown("Right_Arrow")) {
            player.x += 6
        }


        question2.mousePressed(() => {
            // collect1.show()


            gameState = "question2options"

            question2.hide()

        })

    }


    if (gameState === "Askquestion3") {
        // background(0)
        background(level1bg)
        question3.show()
        part2button.hide()
        boatpart4.addImage(gotboatpart2)

        q2a1Group.destroyEach()
        q2a2Group.destroyEach()
        q2a3Group.destroyEach()
        q2a4Group.destroyEach()


        if (keyDown("Left_Arrow")) {
            player.x -= 6
        }

        if (keyDown("Right_Arrow")) {
            player.x += 6
        }


        question3.mousePressed(() => {
            // collect1.show()


            gameState = "question3options"

            question3.hide()

        })

    }



    if (gameState === "Askquestion4") {
        // background(0)
        background(level1bg)
        question4.show()
        part3button.hide()
        boatpart5.addImage(gotboatpart3)

        q3a1Group.destroyEach()
        q3a2Group.destroyEach()
        q3a3Group.destroyEach()
        q3a4Group.destroyEach()


        if (keyDown("Left_Arrow")) {
            player.x -= 6
        }

        if (keyDown("Right_Arrow")) {
            player.x += 6
        }


        question4.mousePressed(() => {
            // collect1.show()


            gameState = "question4options"

            question4.hide()

        })

    }



    if (gameState === "Askquestion5") {
        // background(0)
        background(level1bg)
        question5.show()
        part4button.hide()
        boatpart6.addImage(gotboatpart4)

        q4a1Group.destroyEach()
        q4a2Group.destroyEach()
        q4a3Group.destroyEach()
        q4a4Group.destroyEach()


        if (keyDown("Left_Arrow")) {
            player.x -= 6
        }

        if (keyDown("Right_Arrow")) {
            player.x += 6
        }


        question5.mousePressed(() => {
            // collect1.show()


            gameState = "question5options"

            question5.hide()

        })

    }

    if (gameState === "won") {
        background(winbg)
        part5button.hide()
        // boat = createSprite(50, height / 2)
        // boat.addImage(boatimg)
        boat.visible = true
        boat.velocityX = 4
        boatpart7.addImage(gotboatpart5)

        q5a1Group.destroyEach()
        q5a2Group.destroyEach()
        q5a3Group.destroyEach()
        q5a4Group.destroyEach()

        player.destroy()

        bgsound.stop()

        if(!winsound.isPlaying()){
            winsound.play()
        }

        swal(
            {

                title: `You Won!!!`,
                text: "CONGRATUALTIONS .. You created your boat to ESCAPE... ",
                imageUrl: "assets/correctanswer.gif",
                imageSize: "250x250",
                confirmButtonText: "Restart",
                confirmButtonColor: "purple"
            },
            function (isConfirm) {
                if (isConfirm) {
                    location.reload();
                }
            }
        )

    }


    if (gameState === "gameover") { gameOver() }

    drawSprites()

}

function answer1() {
    background(level2bg)
    question1.hide()
    // background(level2bg)
    if (frameCount % 60 == 0) {

        // random x n y of ans
        x1 = Math.round(random(width - 15, 15))
        y1 = Math.round(random(height - 45, 15))

        x2 = Math.round(random(width - 15, 15))
        y2 = Math.round(random(height - 45, 15))

        x3 = Math.round(random(width - 15, 15))
        y3 = Math.round(random(height - 45, 15))

        x4 = Math.round(random(width - 15, 15))
        y4 = Math.round(random(height - 45, 15))

        q1a1 = createSprite(x1, 0, 50, 50)
        q1a1.addImage(q1a1img)
        q1a1.scale = .35
        // q1a1.visible=false

        q1a2 = createSprite(x2, 0, 50, 50)
        q1a2.addImage(q1a2img)
        q1a2.scale = .35
        // q1a2.visible=false

        q1a3 = createSprite(x3, 0, 50, 50)
        q1a3.addImage(q1a3img)
        q1a3.scale = .35
        // q1a3.visible=false

        q1a4 = createSprite(x4, 0, 50, 50)
        q1a4.addImage(q1a4img)
        q1a4.scale = .35
        // q1a4.visible=false

        // q1a1.velocityX = 4
        q1a1.velocityY = 4
        q1a1.visible = true

        // q1a2.velocityX = 4
        q1a2.velocityY = 4
        q1a2.visible = true

        // q1a3.velocityX = 4
        q1a3.velocityY = 4
        q1a3.visible = true

        // q1a4.velocityX = 4
        q1a4.velocityY = 4
        q1a4.visible = true



        q1a1Group.add(q1a1)
        q1a2Group.add(q1a2)
        q1a3Group.add(q1a3)
        q1a4Group.add(q1a4)

    }





}


function answer2() {
    background(level2bg)

    question2.hide()
    // background(level2bg)
    if (frameCount % 60 == 0) {

        // random x n y of ans
        x1 = Math.round(random(width - 15, 15))
        y1 = Math.round(random(height - 45, 15))

        x2 = Math.round(random(width - 15, 15))
        y2 = Math.round(random(height - 45, 15))

        x3 = Math.round(random(width - 15, 15))
        y3 = Math.round(random(height - 45, 15))

        x4 = Math.round(random(width - 15, 15))
        y4 = Math.round(random(height - 45, 15))

        q2a1 = createSprite(x1, 0, 50, 50)
        q2a1.addImage(q2a1img)
        q2a1.scale = .35
        // q1a1.visible=false

        q2a2 = createSprite(x2, 0, 50, 50)
        q2a2.addImage(q2a2img)
        q2a2.scale = .35
        // q1a2.visible=false

        q2a3 = createSprite(x3, 0, 50, 50)
        q2a3.addImage(q2a3img)
        q2a3.scale = .35
        // q1a3.visible=false

        q2a4 = createSprite(x4, 0, 50, 50)
        q2a4.addImage(q2a4img)
        q2a4.scale = .35
        // q1a4.visible=false

        // q1a1.velocityX = 4
        q2a1.velocityY = 4
        q2a1.visible = true

        // q1a2.velocityX = 4
        q2a2.velocityY = 4
        q2a2.visible = true

        // q1a3.velocityX = 4
        q2a3.velocityY = 4
        q2a3.visible = true

        // q1a4.velocityX = 4
        q2a4.velocityY = 4
        q2a4.visible = true



        q2a1Group.add(q2a1)
        q2a2Group.add(q2a2)
        q2a3Group.add(q2a3)
        q2a4Group.add(q2a4)

    }





}


function answer3() {
    background(level2bg)

    question3.hide()
    // background(level2bg)
    if (frameCount % 60 == 0) {

        // random x n y of ans
        x1 = Math.round(random(width - 15, 15))
        y1 = Math.round(random(height - 45, 15))

        x2 = Math.round(random(width - 15, 15))
        y2 = Math.round(random(height - 45, 15))

        x3 = Math.round(random(width - 15, 15))
        y3 = Math.round(random(height - 45, 15))

        x4 = Math.round(random(width - 15, 15))
        y4 = Math.round(random(height - 45, 15))

        q3a1 = createSprite(x1, 0, 50, 50)
        q3a1.addImage(q3a1img)
        q3a1.scale = .35
        // q1a1.visible=false

        q3a2 = createSprite(x2, 0, 50, 50)
        q3a2.addImage(q3a2img)
        q3a2.scale = .35
        // q1a2.visible=false

        q3a3 = createSprite(x3, 0, 50, 50)
        q3a3.addImage(q3a3img)
        q3a3.scale = .35
        // q1a3.visible=false

        q3a4 = createSprite(x4, 0, 50, 50)
        q3a4.addImage(q3a4img)
        q3a4.scale = .35
        // q1a4.visible=false

        // q1a1.velocityX = 4
        q3a1.velocityY = 4
        q3a1.visible = true

        // q1a2.velocityX = 4
        q3a2.velocityY = 4
        q3a2.visible = true

        // q1a3.velocityX = 4
        q3a3.velocityY = 4
        q3a3.visible = true

        // q1a4.velocityX = 4
        q3a4.velocityY = 4
        q3a4.visible = true



        q3a1Group.add(q3a1)
        q3a2Group.add(q3a2)
        q3a3Group.add(q3a3)
        q3a4Group.add(q3a4)

    }

}


function answer4() {
    background(level2bg)

    question4.hide()
    // background(level2bg)
    if (frameCount % 60 == 0) {

        // random x n y of ans
        x1 = Math.round(random(width - 15, 15))
        y1 = Math.round(random(height - 45, 15))

        x2 = Math.round(random(width - 15, 15))
        y2 = Math.round(random(height - 45, 15))

        x3 = Math.round(random(width - 15, 15))
        y3 = Math.round(random(height - 45, 15))

        x4 = Math.round(random(width - 15, 15))
        y4 = Math.round(random(height - 45, 15))

        q4a1 = createSprite(x1, 0, 50, 50)
        q4a1.addImage(q4a1img)
        q4a1.scale = .35
        // q1a1.visible=false

        q4a2 = createSprite(x2, 0, 50, 50)
        q4a2.addImage(q4a2img)
        q4a2.scale = .35
        // q1a2.visible=false

        q4a3 = createSprite(x3, 0, 50, 50)
        q4a3.addImage(q4a3img)
        q4a3.scale = .35
        // q1a3.visible=false

        q4a4 = createSprite(x4, 0, 50, 50)
        q4a4.addImage(q4a4img)
        q4a4.scale = .35
        // q1a4.visible=false

        // q1a1.velocityX = 4
        q4a1.velocityY = 4
        q4a1.visible = true

        // q1a2.velocityX = 4
        q4a2.velocityY = 4
        q4a2.visible = true

        // q1a3.velocityX = 4
        q4a3.velocityY = 4
        q4a3.visible = true

        // q1a4.velocityX = 4
        q4a4.velocityY = 4
        q4a4.visible = true



        q4a1Group.add(q4a1)
        q4a2Group.add(q4a2)
        q4a3Group.add(q4a3)
        q4a4Group.add(q4a4)

    }

}


function answer5() {
    background(level2bg)

    question5.hide()
    // background(level2bg)
    if (frameCount % 60 == 0) {

        // random x n y of ans
        x1 = Math.round(random(width - 15, 15))
        y1 = Math.round(random(height - 45, 15))

        x2 = Math.round(random(width - 15, 15))
        y2 = Math.round(random(height - 45, 15))

        x3 = Math.round(random(width - 15, 15))
        y3 = Math.round(random(height - 45, 15))

        x4 = Math.round(random(width - 15, 15))
        y4 = Math.round(random(height - 45, 15))

        q5a1 = createSprite(x1, 0, 50, 50)
        q5a1.addImage(q5a1img)
        q5a1.scale = .35
        // q1a1.visible=false

        q5a2 = createSprite(x2, 0, 50, 50)
        q5a2.addImage(q5a2img)
        q5a2.scale = .35
        // q1a2.visible=false

        q5a3 = createSprite(x3, 0, 50, 50)
        q5a3.addImage(q5a3img)
        q5a3.scale = .35
        // q1a3.visible=false

        q5a4 = createSprite(x4, 0, 50, 50)
        q5a4.addImage(q5a4img)
        q5a4.scale = .35
        // q1a4.visible=false

        // q1a1.velocityX = 4
        q5a1.velocityY = 4
        q5a1.visible = true

        // q1a2.velocityX = 4
        q5a2.velocityY = 4
        q5a2.visible = true

        // q1a3.velocityX = 4
        q5a3.velocityY = 4
        q5a3.visible = true

        // q1a4.velocityX = 4
        q5a4.velocityY = 4
        q5a4.visible = true



        q5a1Group.add(q5a1)
        q5a2Group.add(q5a2)
        q5a3Group.add(q5a3)
        q5a4Group.add(q5a4)

    }

}

//gameover function
function gameOver() {
    q1a1Group.destroyEach()
    q1a2Group.destroyEach()
    q1a3Group.destroyEach()
    q1a4Group.destroyEach()

    q2a1Group.destroyEach()
    q2a2Group.destroyEach()
    q2a3Group.destroyEach()
    q2a4Group.destroyEach()

    q3a1Group.destroyEach()
    q3a2Group.destroyEach()
    q3a3Group.destroyEach()
    q3a4Group.destroyEach()

    q4a1Group.destroyEach()
    q4a2Group.destroyEach()
    q4a3Group.destroyEach()
    q4a4Group.destroyEach()

    q5a1Group.destroyEach()
    q5a2Group.destroyEach()
    q5a3Group.destroyEach()
    q5a4Group.destroyEach()

    swal(
        {

            title: `GAME OVER!!!`,
            titleColor: "red",
            text: "OMG you stuck here till eternity... ",
            imageUrl: "assets/wronganswer.gif",
            imageSize: "250x250",
            confirmButtonText: "Restart",
            confirmButtonColor: "green"
        },
        function (isConfirm) {
            if (isConfirm) {
                location.reload();
            }
        }
    )
}