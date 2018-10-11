var objects;
(function (objects) {
    class BackgroundOver extends objects.GameObject {
        // public
        // contructor
        constructor() {
            super("backgroundOver");
            this.Start();
        }
        // private methods
        _rotate() {
            this.rotation += this._rotationSpeed;
        }
        // public methods
        Reset() {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this.scaleX = 1.3;
            this.scaleY = 1.3;
            this.y = config.SCREEN_HEIGHT / 2;
            this.x = config.SCREEN_WIDTH / 2;
            this._rotationSpeed = -2;
        }
        Start() {
            this.Reset();
        }
        Update() {
            this._rotate();
        }
        Destroy() {
        }
    }
    objects.BackgroundOver = BackgroundOver;
})(objects || (objects = {}));
//# sourceMappingURL=backgroundOver.js.map