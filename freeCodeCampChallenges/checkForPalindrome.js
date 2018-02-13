function palindrome(str) {
    return str.replace(/[\W_]/g, '').toLowerCase() ===
        str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
}

console.log(palindrome("eye")); // returns true
console.log(palindrome("eyea")); // returns false
console.log(palindrome("@(@(#E ye")); // returns true

