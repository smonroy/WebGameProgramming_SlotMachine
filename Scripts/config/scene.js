var config;
(function (config) {
    let Scene;
    (function (Scene) {
        Scene[Scene["START"] = 0] = "START";
        Scene[Scene["PLAY"] = 1] = "PLAY";
        Scene[Scene["OVER"] = 2] = "OVER";
        Scene[Scene["SCENE_COUNT"] = 3] = "SCENE_COUNT";
    })(Scene = config.Scene || (config.Scene = {}));
    config.SCREEN_WIDTH = 640;
    config.SCREEN_HEIGHT = 480;
})(config || (config = {}));
//# sourceMappingURL=scene.js.map