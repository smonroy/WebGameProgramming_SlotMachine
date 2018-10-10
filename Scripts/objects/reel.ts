module objects {
    export class Reel extends objects.GameObject {
        

        private _totalSymbols:number;
        
        // public
        public symbol:number;

        // contructor

        constructor(x:number, y:number) {
            super("blank");
            this.x = x;
            this.y = y;
            this.symbol = 0;
            this.countSymbols();
            this.Start();
        }

        // private methods
        private countSymbols():void {
            this._totalSymbols = 0;
            config.SYMBOL_TIMES.forEach(element => {
                this._totalSymbols += element;
            });
        }

        // public methods
        public Spin():void{
            let rnd = Math.floor((Math.random() * 65) + 1);
            for (let index = 0; index < config.SYMBOL_TIMES.length; index++) {
                if(rnd <= config.SYMBOL_TIMES[index]) {
                    this.symbol = index;
                    this.image = managers.Game.assetMnager.getResult(config.SYMBOL_NAMES[index]) as HTMLCanvasElement;
                    console.log(config.SYMBOL_NAMES[index]);
                    return;
                } else {
                    rnd -= config.SYMBOL_TIMES[index];
                }
            }
        }

        public Reset():void {
        }

        public Start():void {
            this.Reset();
        }

        public Update():void {

        }

        public Destroy():void {
            
        }
    }
}