/**
 * Author name: Sergio Monroy Escalnte
 * Student number: 300930580
 * Creation Date: Oct 09, 2018
 * Description: Web slot machine game
 * Revision History: https://github.com/smonroy/WebGameProgramming_SlotMachine
 */
// IIFE - Immediately Invoked Function Expression
(function () {
    // game variables
    let canvas;
    let stage;
    let assetManager;
    let currentScene;
    let currentState;
    let assetManifest = [
        { id: "backgroundStart", src: "./Assets/Images/backgroundStart.jpg" },
        { id: "backgroundPlay", src: "./Assets/Images/backgroundPlay.jpg" },
        { id: "backgroundOver", src: "./Assets/Images/backgroundOver.jpg" },
        { id: "startButton", src: "./Assets/Images/startButton.png" },
        { id: "mask", src: "./Assets/Images/mask.png" },
        { id: "ocean", src: "./Assets/Images/ocean.gif" },
        { id: "betSound", src: "./Assets/audio/bet.mp3" },
        { id: "spinSound", src: "./Assets/audio/spin.mp3" },
        { id: "winSound", src: "./Assets/audio/win.mp3" },
        { id: "jackpotSound", src: "./Assets/audio/jackpot.mp3" },
        { id: "seven", src: "./Assets/Images/seven.png" },
        { id: "bar", src: "./Assets/Images/bar.png" },
        { id: "bell", src: "./Assets/Images/bell.png" },
        { id: "cherry", src: "./Assets/Images/cherry.png" },
        { id: "orange", src: "./Assets/Images/orange.png" },
        { id: "banana", src: "./Assets/Images/banana.png" },
        { id: "grape", src: "./Assets/Images/grape.png" },
        { id: "blank", src: "./Assets/Images/blank.png" },
        { id: "button0", src: "./Assets/Images/button0.png" },
        { id: "button1", src: "./Assets/Images/button1.png" },
        { id: "button5", src: "./Assets/Images/button5.png" },
        { id: "button10", src: "./Assets/Images/button10.png" },
        { id: "buttonSpin", src: "./Assets/Images/buttonSpin.png" },
        { id: "buttonReset", src: "./Assets/Images/buttonReset.png" },
        { id: "buttonExit", src: "./Assets/Images/buttonExit.png" },
    ];
    function Init() {
        assetManager = new createjs.LoadQueue();
        managers.Game.assetMnager = assetManager;
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start);
    }
    function Start() {
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        managers.Game.stage = stage;
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60; // game will run at 60fps
        createjs.Ticker.on("tick", Update);
        currentState = config.Scene.START;
        managers.Game.currentState = currentState;
        Main();
    }
    // this is the game loop
    function Update() {
        currentScene.Update();
        if (currentState != managers.Game.currentState) {
            currentState = managers.Game.currentState;
            Main();
        }
        stage.update();
    }
    function Main() {
        if (currentScene) {
            currentScene.Destroy();
            stage.removeAllChildren();
        }
        switch (currentState) {
            case config.Scene.START:
                currentScene = new scenes.Start();
                break;
            case config.Scene.PLAY:
                currentScene = new scenes.Play();
                break;
            case config.Scene.OVER:
                currentScene = new scenes.Over();
                break;
        }
        stage.addChild(currentScene);
    }
    window.addEventListener("load", Init);
})();
//# sourceMappingURL=game.js.map