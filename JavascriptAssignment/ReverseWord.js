function reverseWord(word) {
    let reversedWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
    return reversedWord;
  }
  
  function reverseWordsInSentence(sentence) {
    let words = [];
    let word = '';
    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] !== ' ') {
        word += sentence[i];
      } else {
        words.push(reverseWord(word));
        word = '';
      }
    }
    // Reverse the last word and add it to the array
    words.push(reverseWord(word));
  
    // Join the reversed words back into a sentence
    let reversedSentence = words.join(' ');
  
    return reversedSentence;
  }
  
  const inputSentence = prompt("Enter a sentence:"); // Prompt the user for input
  const reversedSentence = reverseWordsInSentence(inputSentence);
  console.log("Reversed sentence:", reversedSentence);
  