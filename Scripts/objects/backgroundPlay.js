var objects;
(function (objects) {
    class BackgroundPlay extends objects.GameObject {
        // private
        // public
        // contructor
        constructor() {
            super("backgroundPlay");
            this.Start();
        }
        // private methods
        // public methods
        Reset() {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this.y = config.SCREEN_HEIGHT / 2;
            this.x = config.SCREEN_WIDTH / 2;
        }
        Start() {
            this.Reset();
        }
        Update() {
        }
        Destroy() {
        }
    }
    objects.BackgroundPlay = BackgroundPlay;
})(objects || (objects = {}));
//# sourceMappingURL=backgroundPlay.js.map