// URL: https://leetcode.com/problems/valid-palindrome-ii/

function validPalindromeNaive(s) {
    for(let idx=0;idx<s.length;idx++) {
        let str = s.slice(0, idx) + s.slice(idx + 1);

        if(isPalindrome(str)) return true;
    }

    return false;
}

function validPalindromeTwoPointer(s) {
    let left=0,right = s.length - 1;

    while(left < right) {
        if(s[left] !== s[right]) {
            return isPalindrome(s.slice(left, right)) || isPalindrome(s.slice(left + 1, right + 1));
        }
        left++;
        right--;
    }

    return true;
}

function validPalindromeTwoPointerOptimized(s) {
    let left=0,right = s.length - 1;

    while(left < right) {
        if(s[left] !== s[right]) {
            return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
        }
        left++;
        right--;
    }

    return true;
}

function isPalindrome(s, left, right) {
    // 1) Check all pass cases, like "", "a"
    if(s.length === 0 || s.length === 1) return true;

    // 2) Remove all white space and comma(,) and convert them to lowercase
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // 4) Run while left pointer is less than right pointer
    while(left < right) {
        // 5) If any character does not match, return false
        if(s[left] !== s[right]) return false;

        // 6) Else decrease right and increase left pointer
        left++;
        right--;
    }

    // 7) If all condition for not matching chars failed, return true

    return true;
}