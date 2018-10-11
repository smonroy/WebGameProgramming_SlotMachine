module objects {
    export class BackgroundOver extends objects.GameObject {
        // private
        private _rotationSpeed:number;

        // public

        // contructor

        constructor() {
            super("backgroundOver");

            this.Start();
        }

        // private methods

        private _rotate():void {
            this.rotation += this._rotationSpeed
        }

        // public methods
        public Reset():void {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this.scaleX = 1.3;
            this.scaleY = 1.3;
            this.y = config.SCREEN_HEIGHT / 2;
            this.x = config.SCREEN_WIDTH / 2;
            this._rotationSpeed = -2;
        }

        public Start():void {
            this.Reset();
        }

        public Update():void {
            this._rotate();
        }

        public Destroy():void {
            
        }
    }
}