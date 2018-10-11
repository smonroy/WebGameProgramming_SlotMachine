/**
 * Author name: Sergio Monroy Escalnte
 * Student number: 300930580
 * Creation Date: Oct 09, 2018
 * Description: Reel component for the slot machine.
 * Revision History: https://github.com/smonroy/WebGameProgramming_SlotMachine
 */
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
        /**
         * Count all the symbols that there are in the configuration file.
         * This number is used for calculate the random number of the reel.
         *
         * @private
         * @memberof Reel
         */
        private countSymbols():void {
            this._totalSymbols = 0;
            config.SYMBOL_TIMES.forEach(element => {
                this._totalSymbols += element;
            });
        }

        // public methods
        /**
         * Get and display a random symbol for this reel.
         *
         * @returns {void}
         * @memberof Reel
         */
        public Spin():void{
            let rnd = Math.floor((Math.random() * 65) + 1);
            for (let index = 0; index < config.SYMBOL_TIMES.length; index++) {
                if(rnd <= config.SYMBOL_TIMES[index]) {
                    this.symbol = index;
                    this.image = managers.Game.assetMnager.getResult(config.SYMBOL_NAMES[index]) as HTMLCanvasElement;
                    return;
                } else {
                    rnd -= config.SYMBOL_TIMES[index];
                }
            }
        }

        public Reset():void {
            this.image = managers.Game.assetMnager.getResult("blank") as HTMLCanvasElement;
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