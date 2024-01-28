// URL: https://leetcode.com/problems/valid-palindrome/

function isPalindrome(s) {
    // 1) Check all pass cases, like "", "a"
    if(s.length === 0 || s.length === 1) return true;

    // 2) Remove all white space and comma(,) and convert them to lowercase
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // 3) Set two variables left(0) and right(len - 1)
    let left = 0, right = s.length-1;

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

console.log('Is palindrome: ', isPalindrome("aba"));