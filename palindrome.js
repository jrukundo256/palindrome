/*
Write a function named firstPalindrome which takes a parameter:
words. Given an array of strings words, return the first palindromic
string in the array. If there is no such string, return an empty string "".
A string is palindromic if it reads the same forward and backward.
*/

words = ["abc", "car", "ada", "cool", "racecar"]

// Approach 1: Using normal for loop
const firstPalindrome = (words) => {
    let palindrome = "";

    for (let i = 0; i < words.length; i++) {
        const reverse = reverseString(words[i]);
        if (words[i] === reverse) {
            palindrome = words[i];
            break;
        }
    }

    return palindrome;
}

const reverseString = str => str.split("").reverse().join("");

// Approach 2: Using forEach()
// const firstPalindrome = (words) => {
//     let palindrome = "";
//     let palindromeCount = 0;

//     words.forEach((word) => {
//         if (palindromeCount < 1) {
//             const reverse = reverseString(word);
//             if (word === reverse) {
//                 palindrome = word;
//                 palindromeCount++;
//             }
//         }
//     });

//     return palindrome;
// }


console.log(firstPalindrome(words));