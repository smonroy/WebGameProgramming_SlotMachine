module scenes {
    export class Play extends objects.Scene{
        // private variables

        private _mask:objects.Mask;
        private _reel1:objects.Reel;
        private _reel2:objects.Reel;
        private _reel3:objects.Reel;

        private _playerMoney:number;
        private _playerBet:number;
        private _jackpot:number;
        private _winningMoney:number;

        private _label_Money:objects.Label;
        private _label_Bet:objects.Label;
        private _label_Winning:objects.Label;
        private _label_Jackpot:objects.Label;
        
        private _button_0:objects.Button;
        private _button_1:objects.Button;
        private _button_5:objects.Button;
        private _button_10:objects.Button;
        private _button_spin:objects.Button;
        private _button_reset:objects.Button;
        private _button_exit:objects.Button;
        
        // contructors
        constructor() {
            super();

            this.Start();
        }

        // private methods
        private _addBet(bet:number):void {
            if(this._playerMoney >= this._playerBet + bet) {
                this._playerBet += bet;
                this._refreshLabelsButtons();
            }
        }

        private _addPlayerMoney(cant:number):void {
            this._playerMoney += cant;
            this._refreshLabelsButtons();
            if(this._playerMoney <= 0) {
                managers.Game.currentState = config.Scene.OVER;
            }
        }

        private _resetBet():void {
            if(this._playerBet > 0){
                this._playerBet = 0;
                this._refreshLabelsButtons();
            }
        }

        private _refreshLabelsButtons() {
            this._label_Bet.SetText(this._playerBet.toString());
            this._label_Money.SetText(this._playerMoney.toString());
            this._label_Winning.SetText((this._winningMoney > 0 ? "+":"") + this._winningMoney.toString());
            this._button_0.SetEnable(this._playerBet > 0);
            this._button_1.SetEnable(this._playerMoney >= this._playerBet + 1);
            this._button_5.SetEnable(this._playerMoney >= this._playerBet + 5);
            this._button_10.SetEnable(this._playerMoney >= this._playerBet + 10);
            this._button_spin.SetEnable(this._playerBet > 0);
        }

        private _spin():void {
            this._reel1.Spin();
            this._reel2.Spin();
            this._reel3.Spin();
            this._winningMoney = this._getWinningMoney();
            this._addPlayerMoney(this._winningMoney);
            if(this._playerMoney < this._playerBet) {
                this._playerBet = this._playerMoney;
            }
            this._refreshLabelsButtons();
        }

        private _getWinningMoney():number {
            let symbols:number[] = [0,0,0,0,0,0,0,0];
            let winning:number = -this._playerBet;
            symbols[this._reel1.symbol]++;
            symbols[this._reel2.symbol]++;
            symbols[this._reel3.symbol]++;
            if(symbols[config.SYMBOLS.blank_0] == 0) {
                if(symbols[config.SYMBOLS.grape_1] == 3) {
                    winning = this._playerBet * 10;
                } else if(symbols[config.SYMBOLS.banana_2] == 3) {
                    winning = this._playerBet * 20;
                } else if(symbols[config.SYMBOLS.orange_3] == 3) {
                    winning = this._playerBet * 30;
                } else if(symbols[config.SYMBOLS.cherry_4] == 3) {
                    winning = this._playerBet * 40;
                } else if(symbols[config.SYMBOLS.bar_5] == 3) {
                    winning = this._playerBet * 50;
                } else if(symbols[config.SYMBOLS.bell_6] == 3) {
                    winning = this._playerBet * 75;
                } else if(symbols[config.SYMBOLS.seven_7] == 3) {
                    winning = this._playerBet * 100;
                } else if(symbols[config.SYMBOLS.grape_1] == 2) {
                    winning = this._playerBet * 2;
                } else if(symbols[config.SYMBOLS.banana_2] == 2) {
                    winning = this._playerBet * 2;
                } else if(symbols[config.SYMBOLS.orange_3] == 2) {
                    winning = this._playerBet * 3;
                } else if(symbols[config.SYMBOLS.cherry_4] == 2) {
                    winning = this._playerBet * 4;
                } else if(symbols[config.SYMBOLS.bar_5] == 2) {
                    winning = this._playerBet * 5;
                } else if(symbols[config.SYMBOLS.bell_6] == 2) {
                    winning = this._playerBet * 10;
                } else if(symbols[config.SYMBOLS.seven_7] == 2) {
                    winning = this._playerBet * 20;
                } else if(symbols[config.SYMBOLS.seven_7] == 1) {
                    winning = this._playerBet * 5;
                } else {
                    winning = this._playerBet * 1;
                }
            }
            return winning;
        }

        // public methods
        public Start():void {
            this.Main();
            this.Reset();
        };

        public Update():void {
        };

        public Destroy():void {
            this.removeAllChildren();
        };

        public Reset():void {
            this._playerMoney = 500;
            this._jackpot = 5000;
            this._playerBet = 0;
            this._winningMoney = 0;
            this._refreshLabelsButtons();
        };

        public Main():void {
            // reels objects
            this._reel1 = new objects.Reel(162, 171);
            this.addChild(this._reel1);
            this._reel2 = new objects.Reel(276, 171);
            this.addChild(this._reel2);
            this._reel3 = new objects.Reel(391, 171);
            this.addChild(this._reel3);
            
            // labels object
            this._label_Money = new objects.Label("", "28px", "Consolas", "#000000", 225, 311, true);
            this.addChild(this._label_Money); 
            this._label_Bet = new objects.Label("", "28px", "Consolas", "#000000", 325, 311, true);
            this.addChild(this._label_Bet); 
            this._label_Winning = new objects.Label("", "28px", "Consolas", "#000000", 400, 311, true);
            this.addChild(this._label_Winning); 

            // slot machine skin
            this._mask = new objects.Mask();
            this.addChild(this._mask);

            // buttons
            this._button_0 = new objects.Button("button0", 170, 419, true);
            this._button_0.on("click", ()=>{ this._resetBet(); });
            this.addChild(this._button_0);

            this._button_1 = new objects.Button("button1", 230, 419, true);
            this._button_1.on("click", ()=>{ this._addBet(1); });
            this.addChild(this._button_1);
            
            this._button_5 = new objects.Button("button5", 290, 419, true);
            this._button_5.on("click", ()=>{ this._addBet(5); });
            this.addChild(this._button_5);
            
            this._button_10 = new objects.Button("button10", 350, 419, true);
            this._button_10.on("click", ()=>{ this._addBet(10); });
            this.addChild(this._button_10);

            this._button_spin = new objects.Button("buttonSpin", 484, 419, true);
            this._button_spin.on("click", ()=>{ this._spin(); });
            this.addChild(this._button_spin);

            this._button_reset = new objects.Button("buttonReset", 498, 83, true);
            this._button_reset.on("click", ()=>{ this.Reset(); });
            this.addChild(this._button_reset);

            this._button_exit = new objects.Button("buttonExit", 153, 83, true);
            this._button_exit.on("click", ()=>{ managers.Game.currentState = config.Scene.START; });
            this.addChild(this._button_exit);
       };
    }
}