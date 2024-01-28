// URL: https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/

function minRemoveToMakeValid(s) {
    if(s.length === 0) return s;

    const stringArray = s.split(""); // O (N) T, O(N) S
    const removeBracketIndices = [];

    for(let idx=0;idx<s.length;idx++) {
        if(s[idx] === '(' || s[idx] === ')') {
            if(s[idx] === ')') {
                if(removeBracketIndices.length === 0){
                    stringArray[idx] = "";
                }else {
                    removeBracketIndices.pop();
                }
            }else {
                removeBracketIndices.push(idx);
            }
        }
    }

    if(removeBracketIndices.length !== 0) {
        for(const idx of removeBracketIndices) {
            stringArray[idx]="";
        }
    }

    return stringArray.join('');
}

// Test input 1: lee(t(c)o)de)
const input1 = "lee(t(c)o)de)";
// Output: "lee(t(c)o)de"

// Test input 2: Input: s = "a)b(c)d"
// Output: "ab(c)d"
const input2 = "a)b(c)d";

// Test Input3: s = "))(("
// Output: ""
const input3 = "))((";
console.log(minRemoveToMakeValid(input3));