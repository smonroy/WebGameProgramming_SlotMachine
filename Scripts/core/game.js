// IIFE - Immediately Invoked Function Expression
(function () {
    // game variables
    let canvas;
    let stage;
    let assetManager;
    let currentScene;
    let currentState;
    let assetManifest = [
        { id: "startButton", src: "./Assets/Images/startButton.png" },
        { id: "mask", src: "./Assets/Images/mask.png" },
        { id: "ocean", src: "./Assets/Images/ocean.gif" },
        { id: "engineSound", src: "./Assets/audio/engine.ogg" },
        { id: "thunderSound", src: "./Assets/audio/thunder.ogg" },
        { id: "yaySound", src: "./Assets/audio/yay.ogg" },
        { id: "seven", src: "./Assets/Images/seven.png" },
        { id: "bar", src: "./Assets/Images/bar.png" },
        { id: "bell", src: "./Assets/Images/bell.png" },
        { id: "cherry", src: "./Assets/Images/cherry.png" },
        { id: "orange", src: "./Assets/Images/orange.png" },
        { id: "banana", src: "./Assets/Images/banana.png" },
        { id: "grape", src: "./Assets/Images/grape.png" },
        { id: "blank", src: "./Assets/Images/blank.png" },
        { id: "button0on", src: "./Assets/Images/button0on.png" },
        { id: "button1on", src: "./Assets/Images/button1on.png" },
        { id: "button5on", src: "./Assets/Images/button5on.png" },
        { id: "button10on", src: "./Assets/Images/button10on.png" },
        { id: "buttonSpin", src: "./Assets/Images/buttonSpin.png" },
        { id: "button0off", src: "./Assets/Images/button0off.png" },
        { id: "button1off", src: "./Assets/Images/button1off.png" },
        { id: "button5off", src: "./Assets/Images/button5off.png" },
        { id: "button10off", src: "./Assets/Images/button10off.png" },
    ];
    function Init() {
        assetManager = new createjs.LoadQueue();
        managers.Game.assetMnager = assetManager;
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start);
    }
    function Start() {
        console.log(`%c Game Somewhat 3 Started`, "color:blue; font-size: 20px;");
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
        }
        stage.addChild(currentScene);
    }
    window.addEventListener("load", Init);
})();
//# sourceMappingURL=game.js.map