module scenes {
    export class Over extends objects.Scene{

        private _lostLabel:objects.Label;
        private _background:objects.BackgroundLost;
        private _startButton:objects.Button;

        constructor() {
            super();

            this.Start();
        }

        public Start():void {
            this._background = new objects.BackgroundLost();
            this._lostLabel = new objects.Label("You lost all your money", "60px", "Consolas", "#FFFFFF", 320, 240, true);
            this._startButton = new objects.Button("startButton", 320, 360, true);
            this.Main();
        };

        public Update():void {
            this._background.Update();
        };

        public Destroy():void {
            this.removeAllChildren();
        };

        public Reset():void {

        };

        public Main():void {
            this.addChild(this._background);
    
            this.addChild(this._lostLabel);
    
            this.addChild(this._startButton);

            this._startButton.on("click", ()=>{
                managers.Game.currentState = config.Scene.PLAY;
            });
        };
    }
}