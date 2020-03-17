// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

export const Constants = {
    SUGGESTION_LIST_MAXHEIGHT: 292,

    // KeyCodes
    //  key[0]: used for KeyboardEvent.key
    //  key[1]: used for KeyboardEvent.keyCode
    //  key[2]: used for KeyboardEvent.code

    //  KeyboardEvent.code is used as primary check to support multiple keyborad layouts
    //  support of KeyboardEvent.code is just in chrome and firefox so using key and keyCode for better browser support

    KeyCodes: {
        BACKSPACE: ['Backspace', 8],
        TAB: ['Tab', 9],
        ENTER: ['Enter', 13],
        SHIFT: ['Shift', 16],
        CTRL: ['Control', 17],
        ALT: ['Alt', 18],
        CAPS_LOCK: ['CapsLock', 20],
        ESCAPE: ['Escape', 27],
        SPACE: [' ', 32],
        PAGE_UP: ['PageUp', 33],
        PAGE_DOWN: ['PageDown', 34],
        END: ['End', 35],
        HOME: ['Home', 36],
        LEFT: ['ArrowLeft', 37],
        UP: ['ArrowUp', 38],
        RIGHT: ['ArrowRight', 39],
        DOWN: ['ArrowDown', 40],
        INSERT: ['Insert', 45],
        DELETE: ['Delete', 46],
        ZERO: ['0', 48],
        ONE: ['1', 49],
        TWO: ['2', 50],
        THREE: ['3', 51],
        FOUR: ['4', 52],
        FIVE: ['5', 53],
        SIX: ['6', 54],
        SEVEN: ['7', 55],
        EIGHT: ['8', 56],
        NINE: ['9', 57],
        A: ['a', 65],
        B: ['b', 66],
        C: ['c', 67],
        D: ['d', 68],
        E: ['e', 69],
        F: ['f', 70],
        G: ['g', 71],
        H: ['h', 72],
        I: ['i', 73],
        J: ['j', 74],
        K: ['k', 75],
        L: ['l', 76],
        M: ['m', 77],
        N: ['n', 78],
        O: ['o', 79],
        P: ['p', 80],
        Q: ['q', 81],
        R: ['r', 82],
        S: ['s', 83],
        T: ['t', 84],
        U: ['u', 85],
        V: ['v', 86],
        W: ['w', 87],
        X: ['x', 88],
        Y: ['y', 89],
        Z: ['z', 90],
        CMD: ['Meta', 91],
        MENU: ['ContextMenu', 93],
        NUMPAD_0: ['0', 96],
        NUMPAD_1: ['1', 97],
        NUMPAD_2: ['2', 98],
        NUMPAD_3: ['3', 99],
        NUMPAD_4: ['4', 100],
        NUMPAD_5: ['5', 101],
        NUMPAD_6: ['6', 102],
        NUMPAD_7: ['7', 103],
        NUMPAD_8: ['8', 104],
        NUMPAD_9: ['9', 105],
        MULTIPLY: ['*', 106],
        ADD: ['+', 107],
        SUBTRACT: ['-', 109],
        DECIMAL: ['.', 110],
        DIVIDE: ['/', 111],
        F1: ['F1', 112],
        F2: ['F2', 113],
        F3: ['F3', 114],
        F4: ['F4', 115],
        F5: ['F5', 116],
        F6: ['F6', 117],
        F7: ['F7', 118],
        F8: ['F8', 119],
        F9: ['F9', 120],
        F10: ['F10', 121],
        F11: ['F11', 122],
        F12: ['F12', 123],
        NUM_LOCK: ['NumLock', 144],
        SEMICOLON: [';', 186],
        EQUAL: ['=', 187],
        COMMA: [',', 188],
        DASH: ['-', 189],
        PERIOD: ['.', 190],
        FORWARD_SLASH: ['/', 191],
        TILDE: ['~', 192], // coudnt find the key or even get code from browser - no reference in code as of now
        OPEN_BRACKET: ['[', 219],
        BACK_SLASH: ['\\', 220],
        CLOSE_BRACKET: [']', 221],
        COMPOSING: ['Composing', 229],
    },
};

export default Constants;
