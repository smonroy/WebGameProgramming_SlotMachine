var scenes;
(function (scenes) {
    class Play extends objects.Scene {
        constructor() {
            super();
            this.Start();
        }
        Start() {
            this.Reset();
            this.Main();
        }
        ;
        Update() {
        }
        ;
        Destroy() {
            this.removeAllChildren();
        }
        ;
        Reset() {
            this._playerMoney = 500;
            this._jackpot = 5000;
            this._playerBet = 0;
        }
        ;
        Main() {
            this._reel1 = new objects.Reel(162, 171);
            this.addChild(this._reel1);
            this._reel2 = new objects.Reel(276, 171);
            this.addChild(this._reel2);
            this._reel3 = new objects.Reel(391, 171);
            this.addChild(this._reel3);
            this._label_Money = new objects.Label(this._playerMoney.toString(), "30px", "Consolas", "#000000", 225, 311, true);
            this.addChild(this._label_Money);
            this._label_Bet = new objects.Label(this._playerBet.toString(), "30px", "Consolas", "#000000", 325, 311, true);
            this.addChild(this._label_Bet);
            this._label_Jackpot = new objects.Label(this._jackpot.toString(), "30px", "Consolas", "#000000", 400, 311, true);
            this.addChild(this._label_Jackpot);
            this._mask = new objects.Mask();
            this.addChild(this._mask);
            this._button_0 = new objects.Button("button0off", 170, 419, true);
            this.addChild(this._button_0);
            this._button_1 = new objects.Button("button1on", 230, 419, true);
            this.addChild(this._button_1);
            this._button_5 = new objects.Button("button5on", 290, 419, true);
            this.addChild(this._button_5);
            this._button_10 = new objects.Button("button10off", 350, 419, true);
            this.addChild(this._button_10);
        }
        ;
    }
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map