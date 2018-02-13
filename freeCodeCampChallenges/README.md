# Free Code Camp Challenges

## A series of progressively challenging javascript algorithms found on [free code camp](https://www.freecodecamp.org/challenges/get-set-for-our-algorithm-challenges)

### Algorithms

#### Reverse A String

Problem: Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.
Solution: Use the split, reverse and join string methods.

#### Factorialize A Number

Problem: Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!
For example: 5! = 1* 2 * 3 * 4 * 5 = 120
Solution: Use recursion to multiply num by facotorialize(num -1).

#### Return A Palindrome

Problem: Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.
We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
Solution: Use regex to replace special chars, toLowerCase to remove capital chars, then compare input to reverse version of input.