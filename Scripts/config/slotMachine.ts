module config {
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