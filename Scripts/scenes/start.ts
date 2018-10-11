module scenes {
    export class Start extends objects.Scene{

        private _welcomeLabel:objects.Label;
        private _backgound:objects.BackgroundStart;
        private _startButton:objects.Button;

        constructor() {
            super();

            this.Start();
        }

        public Start():void {
            this._backgound = new objects.BackgroundStart();
            this._welcomeLabel = new objects.Label("Slot Machine", "60px", "Consolas", "#000000", 320, 240, true);
            this._startButton = new objects.Button("startButton", 320, 360, true);
            this.Main();
        };

        public Update():void {
            this._backgound.Update();
        };

        public Destroy():void {
            this.removeAllChildren();
        };

        public Reset():void {

        };

        public Main():void {
            this.addChild(this._backgound);
    
            this.addChild(this._welcomeLabel);
    
            this.addChild(this._startButton);

            this._startButton.on("click", ()=>{
                managers.Game.currentState = config.Scene.PLAY;
            });
        };
    }
}