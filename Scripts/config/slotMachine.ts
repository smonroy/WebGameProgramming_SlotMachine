/**
 * Author name: Sergio Monroy Escalnte
 * Student number: 300930580
 * Creation Date: Oct 09, 2018
 * Description: Reel configuration arrays. The three arrays/enum shuld have the same number of elements and in the same order.
 * Revision History: https://github.com/smonroy/WebGameProgramming_SlotMachine
 */
module config {
    /**
     * enum with all the possible symbols in the reels
     *
     * @export
     * @enum {number}
     */
    export enum SYMBOLS {
        blank_0, 
        grape_1, 
        banana_2, 
        orange_3,
        cherry_4,
        bar_5,
        bell_6, 
        seven_7
    } 

    /**
     * All the symbols names. This names are used to make reference to the sprite file in the assets.
     */
    export const SYMBOL_NAMES:string[] = [
        "blank", 
        "grape", 
        "banana", 
        "orange",
        "cherry",
        "bar",
        "bell", 
        "seven"
    ]

    /**
     * This is the number of occurencies of each symbol. 
     * This number determine the probability of get each symbol in a single spin of the reel.
     */
    export const SYMBOL_TIMES:number[] = [
        27, // blank
        10, // grape
        9, // banana 
        8, // orange
        5, // cherry
        3, // bar
        2, // bell
        1, // seven
    ]
}