var scenes;
(function (scenes) {
    class Over extends objects.Scene {
        constructor() {
            super();
            this.Start();
        }
        Start() {
            this._background = new objects.BackgroundLost();
            this._lostLabel = new objects.Label("You lost all your money", "60px", "Consolas", "#FFFFFF", 320, 240, true);
            this._startButton = new objects.Button("startButton", 320, 360, true);
            this.Main();
        }
        ;
        Update() {
            this._background.Update();
        }
        ;
        Destroy() {
            this.removeAllChildren();
        }
        ;
        Reset() {
        }
        ;
        Main() {
            this.addChild(this._background);
            this.addChild(this._lostLabel);
            this.addChild(this._startButton);
            this._startButton.on("click", () => {
                managers.Game.currentState = config.Scene.PLAY;
            });
        }
        ;
    }
    scenes.Over = Over;
})(scenes || (scenes = {}));
//# sourceMappingURL=over.js.map