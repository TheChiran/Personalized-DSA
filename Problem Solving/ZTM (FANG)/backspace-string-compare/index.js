// URL: https://leetcode.com/problems/backspace-string-compare/

function removeBackspaceFromString(string) {
    const stringArray = [];

    for(const char of string) {
        if(char !== '#') {
            stringArray.push(char);
        }else {
            stringArray.pop();
        }
    }

    return stringArray;
}

function compareBackspaceString(string1, string2) {
    const finalString = removeBackspaceFromString(string1);
    const finalString2 = removeBackspaceFromString(string2);

    if(finalString.length !== finalString2.length) return false;

    for(let idx=0;idx<finalString.length;idx++) {
        if(finalString[idx] !== finalString2[idx]) return false;
    }

    return true;
}

function compareBackspaceStringOptimalSolution(S, T) {
    let [p1, p2] = [S.length-1, T.length-1];
    let [sSkipCount, tSkipCount] = [0,0];

    while(p1 >= 0 || p2 >=0) {
        if(S[p1]==='#') {
            sSkipCount++;
            p1--;
        } else if(sSkipCount > 0 && p1 >=0) {
            sSkipCount--;
            p1--;
        } else if(T[p2] === '#') {
            tSkipCount++;
            p2--;
        } else if(tSkipCount > 0 && p2 >=0) {
            tSkipCount--;
            p2--;
        } else if(S[p1] !== T[p2]) {
            return false;
        } else {
            p1--;
            p2--;
        }
    }

    return true;
}

const string1 = "abc#d";
const string2 = "abzz##d";

console.log('Result: ', compareBackspaceStringOptimalSolution(string1, string2));