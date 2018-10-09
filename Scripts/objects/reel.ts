module objects {
    export class Reel extends objects.GameObject {
        // private

        // public

        // contructor

        constructor(x:number, y:number) {
            super("bar");
            this.x = x;
            this.y = y;
            this.Start();
        }

        // private methods

        // public methods
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