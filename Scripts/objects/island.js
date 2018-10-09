var objects;
(function (objects) {
    class Island extends objects.GameObject {
        // public
        // contructor
        constructor() {
            super("island");
            this.Start();
        }
        // private methods
        _checkBounds() {
            if (this.y > 480 + this.Height) {
                this.Reset();
            }
        }
        _move() {
            this.y += this._verticalSpeed;
        }
        // public methods
        Reset() {
            this._verticalSpeed = 5;
            this.y = -this.Height;
            this.x = Math.floor((Math.random() * (640 - this.Width)) + this.HalfWidth);
        }
        Start() {
            this.Reset();
        }
        Update() {
            this._move();
            this._checkBounds();
        }
        Destroy() {
        }
    }
    objects.Island = Island;
})(objects || (objects = {}));
//# sourceMappingURL=island.js.map