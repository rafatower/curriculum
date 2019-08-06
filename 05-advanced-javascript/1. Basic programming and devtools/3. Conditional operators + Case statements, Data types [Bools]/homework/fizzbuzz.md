# FizzBuzz exercise

With this exercise, you'll be practicing both `if...else` and `switch` conditional structures. You'll need to use the usual prompt and alert methods that you've been using in class.

##### Rules

- Prompt the user for a number
- If the number is divisible by 3, you should alert `Fizz!` 
  - (3, 6, 9, 12, etc are divisible by 3)
- If the number is divisible by 5, you should alert `Buzz!`
  - (5, 10, 20, etc are divisible by 5)
- If the number is divisible both by 3 **and** 5, you should alert `FizzBuzz!` 
  - (15, 30, 45, etc are divisible by 5 **and** 3)
- Solve this the exercise both with `if...else` and `switch` conditional structures.

Example:

```javascript
const number = prompt('Enter a number') // User provides 15
// Check if number is divisible by 3, 5 or both
alert('FizzBuzz!')

```


##### Extra Credit:

- Using the same criteria, write a `for` loop that loops through numbers 1 - 100 and
  - If the number is divisible by 3, you should alert `Fizz!`
    - (3, 6, 9, 12 etc are divisible by 3)
  - If the number is divisible by 5, you should alert `Buzz!`
    - (5, 10, 20, etc are divisible by 5)
  - If the number is divisible both by 3 **and** 5, you should alert `FizzBuzz!`
    - (15, 30, 45, etc are divisible by 5 **and** 3)
  - If the number is not divisible by neither 3 nor 5, you should alert `oops!`

```javascript
for (var i = 1; i <= 100; i++) {
  // Do things
}
```
