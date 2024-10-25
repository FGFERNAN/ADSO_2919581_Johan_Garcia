"use strict";
function countWordOcurrences(text, word) {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    return (text.match(regex) || []).length;
}
const text = "TypeScript is great. TypeScript is fun.";
console.log(countWordOcurrences(text, 'TypeScript'));
//# sourceMappingURL=ejercicio9.js.map