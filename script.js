// quick fix for Cloud9 warning:
/* global $ */

// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an "ay", or if a word
// begins with a vowel you just add "yay" to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkway.

$(document).ready(function() {

    // This function should return true if the input word starts with a vowel,
    // otherwise it should return false.
    function wordStartsWithVowel(word) {
         var firstLetter = word.charAt(0);
        if ((firstLetter === "a") || (firstLetter === "e")|| (firstLetter === "i")|| 
            (firstLetter === "o")|| (firstLetter === "u")) {
                
            return "true";
        }
        else {
            return "false";
        }

    }

    // Appends "yay" to the end of the word and returns the word.
    function appendYayToWord(word) {
        return word + "yay"; 
    }

    // Moves the first consonant to the end of the word, appends "ay" to the end of the word,
    // and returns the word.
    function convertWordWithConsonant(word) {
        var firstLetterOfWord = word.charAt(0);
        var moveLetter = word.substring(1);

        return moveLetter + firstLetterOfWord + "ay";

    }

    // If the word starts with a vowel, return the result of appendYayToWord.
    // Otherwise, return the result of convertWordWithConsonant.
    function convertWordToPigLatin(word) {
        if (word === wordStartsWithVowel) {
            return appendYayToWord; 
        
        else {
          return convertWordWithConsonant; 
        }
            
    
    }

var testWord3 = "giraffe";
var testResult3 = convertWordToPigLatin(testWord3);
console.log(testResult3);
    // Create a click handler that takes is triggered when the user clicks the translate button.
        // Gets a word from the input box
        // Transforms the word to pig latin
        // Displays the result on the screen in the output element
});
