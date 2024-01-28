// URL: https://leetcode.com/problems/valid-parentheses/description/

const parens = {
    '(' : ')',
    '{' : '}',
    '[' : ']'
};

function isValid(s) {
    if(s.length === 0) return true;

    const openingBrackets = [];

    for(let idx=0;idx<s.length;idx++) {
        if(parens[s[idx]]) {
            // if char is opening bracket
            openingBrackets.push(s[idx]);
        } else {
            const leftBracket = openingBrackets.pop();
            const correctBracket = parens[leftBracket];

            if(s[idx] !== correctBracket) return false;
        }
    }

    return openingBrackets.length === 0;
}