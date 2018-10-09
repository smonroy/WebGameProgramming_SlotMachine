module objects {
    export class Reel extends objects.GameObject {
        // private
        private SYMBOL_NAMES:string[] = [
            "blank", 
            "grape", 
            "banana", 
            "orange",
            "cherry",
            "bar",
            "bell", 
            "seven"
        ]

        private SYMBOL_TIMES:number[] = [
            27, // blank
            10, // grape
            9, // banana 
            8, // orange
            5, // cherry
            3, // bar
            2, // bell
            1, // seven
        ]

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
            this.SYMBOL_TIMES.forEach(element => {
                this._totalSymbols += element;
            });
        }

        // public methods
        public Spin():void{
            let rnd = Math.floor((Math.random() * 65) + 1);
            for (let index = 0; index < this.SYMBOL_TIMES.length; index++) {
                if(rnd <= this.SYMBOL_TIMES[index]) {
                    this.symbol = index;
                    this.image = managers.Game.assetMnager.getResult(this.SYMBOL_NAMES[index]) as HTMLCanvasElement;
                    console.log(this.SYMBOL_NAMES[index]);
                    return;
                } else {
                    rnd -= this.SYMBOL_TIMES[index];
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