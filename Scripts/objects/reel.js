var objects;
(function (objects) {
    class Reel extends objects.GameObject {
        // contructor
        constructor(x, y) {
            super("blank");
            this.x = x;
            this.y = y;
            this.symbol = 0;
            this.countSymbols();
            this.Start();
        }
        // private methods
        countSymbols() {
            this._totalSymbols = 0;
            config.SYMBOL_TIMES.forEach(element => {
                this._totalSymbols += element;
            });
        }
        // public methods
        Spin() {
            let rnd = Math.floor((Math.random() * 65) + 1);
            for (let index = 0; index < config.SYMBOL_TIMES.length; index++) {
                if (rnd <= config.SYMBOL_TIMES[index]) {
                    this.symbol = index;
                    this.image = managers.Game.assetMnager.getResult(config.SYMBOL_NAMES[index]);
                    console.log(config.SYMBOL_NAMES[index]);
                    return;
                }
                else {
                    rnd -= config.SYMBOL_TIMES[index];
                }
            }
        }
        Reset() {
            this.image = managers.Game.assetMnager.getResult("blank");
        }
        Start() {
            this.Reset();
        }
        Update() {
        }
        Destroy() {
        }
    }
    objects.Reel = Reel;
})(objects || (objects = {}));
//# sourceMappingURL=reel.js.map