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
            if (this._playerMoney >= this._playerBet + bet) {
                this._playerBet += bet;
                this._refreshLabelsButtons();
            }
        }
        _addPlayerMoney(cant) {
            this._playerMoney += cant;
            this._refreshLabelsButtons();
            if (this._playerMoney <= 0) {
                managers.Game.currentState = config.Scene.OVER;
            }
        }
        _resetBet() {
            if (this._playerBet > 0) {
                this._playerBet = 0;
                this._refreshLabelsButtons();
            }
        }
        _refreshLabelsButtons() {
            this._label_Bet.SetText(this._playerBet.toString());
            this._label_Money.SetText(this._playerMoney.toString());
            this._label_Winning.SetText((this._winningMoney > 0 ? "+" : "") + this._winningMoney.toString());
            this._label_Winning.color = this._winningMoney < 0 ? "#FF0000" : "#00FF00";
            this._label_Jackpot.SetText("Jackpot: " + this._jackpot.toString());
            this._button_0.SetEnable(this._playerBet > 0);
            this._button_1.SetEnable(this._playerMoney >= this._playerBet + 1);
            this._button_5.SetEnable(this._playerMoney >= this._playerBet + 5);
            this._button_10.SetEnable(this._playerMoney >= this._playerBet + 10);
            this._button_spin.SetEnable(this._playerBet > 0);
        }
        _spin() {
            if (this._playerBet > 0) {
                this._reel1.Spin();
                this._reel2.Spin();
                this._reel3.Spin();
                this._winningMoney = this._getWinningMoney() + this._getJackpotMoney();
                this._addPlayerMoney(this._winningMoney);
                if (this._playerMoney < this._playerBet) {
                    this._playerBet = this._playerMoney;
                }
                this._refreshLabelsButtons();
            }
        }
        _getJackpotMoney() {
            let rnd1 = Math.floor((Math.random() * 51) + 1);
            let rnd2 = Math.floor((Math.random() * 51) + 1);
            if (rnd1 == rnd2) {
                let jackpotMoney = this._jackpot;
                this._jackpot = 1000;
                return jackpotMoney;
            }
            else {
                return 0;
            }
        }
        _getWinningMoney() {
            let symbols = [0, 0, 0, 0, 0, 0, 0, 0];
            let winning = -this._playerBet;
            symbols[this._reel1.symbol]++;
            symbols[this._reel2.symbol]++;
            symbols[this._reel3.symbol]++;
            if (symbols[config.SYMBOLS.blank_0] == 0) {
                if (symbols[config.SYMBOLS.grape_1] == 3) {
                    winning = this._playerBet * 10;
                }
                else if (symbols[config.SYMBOLS.banana_2] == 3) {
                    winning = this._playerBet * 20;
                }
                else if (symbols[config.SYMBOLS.orange_3] == 3) {
                    winning = this._playerBet * 30;
                }
                else if (symbols[config.SYMBOLS.cherry_4] == 3) {
                    winning = this._playerBet * 40;
                }
                else if (symbols[config.SYMBOLS.bar_5] == 3) {
                    winning = this._playerBet * 50;
                }
                else if (symbols[config.SYMBOLS.bell_6] == 3) {
                    winning = this._playerBet * 75;
                }
                else if (symbols[config.SYMBOLS.seven_7] == 3) {
                    winning = this._playerBet * 100;
                }
                else if (symbols[config.SYMBOLS.grape_1] == 2) {
                    winning = this._playerBet * 2;
                }
                else if (symbols[config.SYMBOLS.banana_2] == 2) {
                    winning = this._playerBet * 2;
                }
                else if (symbols[config.SYMBOLS.orange_3] == 2) {
                    winning = this._playerBet * 3;
                }
                else if (symbols[config.SYMBOLS.cherry_4] == 2) {
                    winning = this._playerBet * 4;
                }
                else if (symbols[config.SYMBOLS.bar_5] == 2) {
                    winning = this._playerBet * 5;
                }
                else if (symbols[config.SYMBOLS.bell_6] == 2) {
                    winning = this._playerBet * 10;
                }
                else if (symbols[config.SYMBOLS.seven_7] == 2) {
                    winning = this._playerBet * 20;
                }
                else if (symbols[config.SYMBOLS.seven_7] == 1) {
                    winning = this._playerBet * 5;
                }
                else {
                    winning = this._playerBet * 1;
                }
            }
            return winning;
        }
        // public methods
        Start() {
            this.Main();
            this.Reset();
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
            this._winningMoney = 0;
            this._reel1.Reset();
            this._reel2.Reset();
            this._reel3.Reset();
            this._refreshLabelsButtons();
        }
        ;
        Main() {
            // background
            this._background = new objects.BackgroundPlay();
            this.addChild(this._background);
            // reels objects
            this._reel1 = new objects.Reel(162, 171);
            this.addChild(this._reel1);
            this._reel2 = new objects.Reel(276, 171);
            this.addChild(this._reel2);
            this._reel3 = new objects.Reel(391, 171);
            this.addChild(this._reel3);
            // labels object
            this._label_Money = new objects.Label("", "28px", "Consolas", "#00FF00", 225, 311, true);
            this.addChild(this._label_Money);
            this._label_Bet = new objects.Label("", "28px", "Consolas", "#FFFF00", 325, 311, true);
            this.addChild(this._label_Bet);
            this._label_Winning = new objects.Label("", "28px", "Consolas", "#FF0000", 400, 311, true);
            this.addChild(this._label_Winning);
            this._label_Jackpot = new objects.Label("", "28px", "Consolas", "#FFFF00", 325, 91, true);
            this.addChild(this._label_Jackpot);
            // slot machine skin
            this._mask = new objects.Mask();
            this.addChild(this._mask);
            // buttons
            this._button_0 = new objects.Button("button0", 170, 419, true);
            this._button_0.on("click", () => { this._resetBet(); });
            this.addChild(this._button_0);
            this._button_1 = new objects.Button("button1", 230, 419, true);
            this._button_1.on("click", () => { this._addBet(1); });
            this.addChild(this._button_1);
            this._button_5 = new objects.Button("button5", 290, 419, true);
            this._button_5.on("click", () => { this._addBet(5); });
            this.addChild(this._button_5);
            this._button_10 = new objects.Button("button10", 350, 419, true);
            this._button_10.on("click", () => { this._addBet(10); });
            this.addChild(this._button_10);
            this._button_spin = new objects.Button("buttonSpin", 484, 419, true);
            this._button_spin.on("click", () => { this._spin(); });
            this.addChild(this._button_spin);
            this._button_reset = new objects.Button("buttonReset", 498, 83, true);
            this._button_reset.on("click", () => { this.Reset(); });
            this.addChild(this._button_reset);
            this._button_exit = new objects.Button("buttonExit", 153, 83, true);
            this._button_exit.on("click", () => { managers.Game.currentState = config.Scene.START; });
            this.addChild(this._button_exit);
        }
        ;
    }
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map