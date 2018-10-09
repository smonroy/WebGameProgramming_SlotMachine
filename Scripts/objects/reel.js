var objects;
(function (objects) {
    class Reel extends objects.GameObject {
        // private
        // public
        // contructor
        constructor(x, y) {
            super("bar");
            this.x = x;
            this.y = y;
            this.Start();
        }
        // private methods
        // public methods
        Reset() {
        }
        Start() {
            this.Reset();
        }
        Update() {
        }
        Destroy() {
        }
    }
    objects.Reel = Reel;
})(objects || (objects = {}));
//# sourceMappingURL=reel.js.map