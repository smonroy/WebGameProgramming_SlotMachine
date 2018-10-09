var objects;
(function (objects) {
    class Reel extends objects.GameObject {
        // contructor
        constructor(x, y) {
            super("blank");
            // private
            this.SYMBOL_NAMES = [
                "blank",
                "grape",
                "banana",
                "orange",
                "cherry",
                "bar",
                "bell",
                "seven"
            ];
            this.SYMBOL_TIMES = [
                27,
                10,
                9,
                8,
                5,
                3,
                2,
                1,
            ];
            this.x = x;
            this.y = y;
            this.symbol = 0;
            this.countSymbols();
            this.Start();
        }
        // private methods
        countSymbols() {
            this._totalSymbols = 0;
            this.SYMBOL_TIMES.forEach(element => {
                this._totalSymbols += element;
            });
        }
        // public methods
        Spin() {
            let rnd = Math.floor((Math.random() * 65) + 1);
            for (let index = 0; index < this.SYMBOL_TIMES.length; index++) {
                if (rnd <= this.SYMBOL_TIMES[index]) {
                    this.symbol = index;
                    this.image = managers.Game.assetMnager.getResult(this.SYMBOL_NAMES[index]);
                    console.log(this.SYMBOL_NAMES[index]);
                    return;
                }
                else {
                    rnd -= this.SYMBOL_TIMES[index];
                }
            }
        }
        Reset() {
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