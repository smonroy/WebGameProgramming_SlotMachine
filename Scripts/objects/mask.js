var objects;
(function (objects) {
    class Mask extends objects.GameObject {
        // private
        // public
        // contructor
        constructor() {
            super("mask");
            this.Start();
        }
        // private methods
        // public methods
        Reset() {
            this.regX = this.HalfWidth;
            this.regY = this.HalfHeight;
            this.x = config.SCREEN_WIDTH / 2;
            this.y = config.SCREEN_HEIGHT / 2;
        }
        Start() {
            this.Reset();
        }
        Update() {
        }
        Destroy() {
        }
    }
    objects.Mask = Mask;
})(objects || (objects = {}));
//# sourceMappingURL=mask.js.map