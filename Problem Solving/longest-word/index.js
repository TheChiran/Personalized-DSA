function LongestWord(sen) {
  let longestWord = "";
  let longestWordChars = "";
  for (const char of sen) {
    if (char !== " ") {
      longestWordChars += char;
    } else {
      //   console.log("longest word chars: ", longestWordChars);
      if (longestWord.length < longestWordChars.length) {
        // console.log("longest word: ", longestWord);
        longestWord = longestWordChars;
        longestWordChars = "";
      }
    }
  }

  return longestWord;
}

console.log(LongestWord("fun&!! time"));
