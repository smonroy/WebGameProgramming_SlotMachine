module objects {
    export class BackgroundPlay extends objects.GameObject {
        // private

        // public

        // contructor

        constructor() {
            super("backgroundPlay");

            this.Start();
        }

        // private methods

        // public methods
        public Reset():void {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this.y = config.SCREEN_HEIGHT / 2;
            this.x = config.SCREEN_WIDTH / 2;
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