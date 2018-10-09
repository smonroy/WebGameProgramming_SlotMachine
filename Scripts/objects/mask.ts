module objects {
    export class Mask extends objects.GameObject {
        // private

        // public

        // contructor

        constructor() {
            super("mask");

            this.Start();
        }

        // private methods


        // public methods
        public Reset():void {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this.x = config.SCREEN_WIDTH / 2;
            this.y = config.SCREEN_HEIGHT / 2;
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