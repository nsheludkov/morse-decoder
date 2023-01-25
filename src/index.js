const { subset } = require("semver");

const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decodeFromBinaryToMorse(expr) {
    expr = ''+expr;
    let exprstr = '';
    for (let ind = 0; ind < expr.length; ind = ind+2) {   
        if (expr.slice(ind,ind+2) == '**') {
            return ' ';
        }
         if (expr.slice(ind,ind+2) == 10) {
            exprstr = exprstr+'.';
         }
         if (expr.slice(ind,ind+2) == 11){
            exprstr = exprstr+'-';    
         }    
    }
    return MORSE_TABLE[exprstr];
}

function decode(expr) {
    let exprstr = '';
    let letter = '';
    for (let index = 0; index < expr.length; index = index+10) {
        letter = decodeFromBinaryToMorse(expr.slice(index,index+10));
        exprstr = exprstr + letter;  
    }

    return exprstr;
}

module.exports = {
    decode
}