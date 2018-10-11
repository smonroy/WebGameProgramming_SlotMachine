/**
 * Author name: Sergio Monroy Escalnte
 * Student number: 300930580
 * Creation Date: Oct 09, 2018
 * Description: Reel configuration arrays. The three arrays/enum shuld have the same number of elements and in the same order.
 * Revision History: https://github.com/smonroy/WebGameProgramming_SlotMachine
 */
var config;
(function (config) {
    /**
     * enum with all the possible symbols in the reels
     *
     * @export
     * @enum {number}
     */
    let SYMBOLS;
    (function (SYMBOLS) {
        SYMBOLS[SYMBOLS["blank_0"] = 0] = "blank_0";
        SYMBOLS[SYMBOLS["grape_1"] = 1] = "grape_1";
        SYMBOLS[SYMBOLS["banana_2"] = 2] = "banana_2";
        SYMBOLS[SYMBOLS["orange_3"] = 3] = "orange_3";
        SYMBOLS[SYMBOLS["cherry_4"] = 4] = "cherry_4";
        SYMBOLS[SYMBOLS["bar_5"] = 5] = "bar_5";
        SYMBOLS[SYMBOLS["bell_6"] = 6] = "bell_6";
        SYMBOLS[SYMBOLS["seven_7"] = 7] = "seven_7";
    })(SYMBOLS = config.SYMBOLS || (config.SYMBOLS = {}));
    /**
     * All the symbols names. This names are used to make reference to the sprite file in the assets.
     */
    config.SYMBOL_NAMES = [
        "blank",
        "grape",
        "banana",
        "orange",
        "cherry",
        "bar",
        "bell",
        "seven"
    ];
    /**
     * This is the number of occurencies of each symbol.
     * This number determine the probability of get each symbol in a single spin of the reel.
     */
    config.SYMBOL_TIMES = [
        27,
        10,
        9,
        8,
        5,
        3,
        2,
        1,
    ];
})(config || (config = {}));
//# sourceMappingURL=slotMachine.js.map