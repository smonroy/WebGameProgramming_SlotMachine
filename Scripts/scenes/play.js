var scenes;
(function (scenes) {
    class Play extends objects.Scene {
        // contructors
        constructor() {
            super();
            this.Start();
        }
        // private methods
        _addBet(bet) {
            if (this._playerMoney >= bet) {
                this._playerBet += bet;
                this._playerMoney -= bet;
                this._refreshLabels();
                this._refreshButtons();
            }
        }
        _resetBet() {
            if (this._playerBet > 0) {
                this._playerMoney += this._playerBet;
                this._playerBet = 0;
                this._refreshLabels();
                this._refreshButtons();
            }
        }
        _refreshLabels() {
            this._label_Bet.SetText(this._playerBet.toString());
            this._label_Money.SetText(this._playerMoney.toString());
        }
        _refreshButtons() {
            this._button_0on.visible = this._playerBet > 0;
            this._button_1on.visible = this._playerMoney >= 1;
            this._button_5on.visible = this._playerMoney >= 5;
            this._button_10on.visible = this._playerMoney >= 10;
        }
        _spin() {
            this._reel1.Spin();
            this._reel2.Spin();
            this._reel3.Spin();
        }
        // public methods
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
            // reels objects
            this._reel1 = new objects.Reel(162, 171);
            this.addChild(this._reel1);
            this._reel2 = new objects.Reel(276, 171);
            this.addChild(this._reel2);
            this._reel3 = new objects.Reel(391, 171);
            this.addChild(this._reel3);
            // labels object
            this._label_Money = new objects.Label(this._playerMoney.toString(), "28px", "Consolas", "#000000", 225, 311, true);
            this.addChild(this._label_Money);
            this._label_Bet = new objects.Label(this._playerBet.toString(), "28px", "Consolas", "#000000", 325, 311, true);
            this.addChild(this._label_Bet);
            this._label_Jackpot = new objects.Label(this._jackpot.toString(), "28px", "Consolas", "#000000", 400, 311, true);
            this.addChild(this._label_Jackpot);
            // slot machine skin
            this._mask = new objects.Mask();
            this.addChild(this._mask);
            // off buttons
            this._button_0off = new objects.Button("button0off", 170, 419, true);
            this.addChild(this._button_0off);
            this._button_1off = new objects.Button("button1off", 230, 419, true);
            this.addChild(this._button_1off);
            this._button_5off = new objects.Button("button5off", 290, 419, true);
            this.addChild(this._button_5off);
            this._button_10off = new objects.Button("button10off", 350, 419, true);
            this.addChild(this._button_10off);
            // on buttons
            this._button_0on = new objects.Button("button0on", 170, 419, true);
            this._button_0on.on("click", () => { this._resetBet(); });
            this._button_0on.visible = false;
            this.addChild(this._button_0on);
            this._button_1on = new objects.Button("button1on", 230, 419, true);
            this._button_1on.on("click", () => { this._addBet(1); });
            this.addChild(this._button_1on);
            this._button_5on = new objects.Button("button5on", 290, 419, true);
            this._button_5on.on("click", () => { this._addBet(5); });
            this.addChild(this._button_5on);
            this._button_10on = new objects.Button("button10on", 350, 419, true);
            this._button_10on.on("click", () => { this._addBet(10); });
            this.addChild(this._button_10on);
            this._button_spin = new objects.Button("buttonSpin", 484, 419, true);
            this._button_spin.on("click", () => { this._spin(); });
            this.addChild(this._button_spin);
        }
        ;
    }
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map