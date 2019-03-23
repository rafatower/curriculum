# What is Control Flow?

In computer programming, control flow or flow of control is the order function calls, instructions, and statements are executed or evaluated when a program is running.
Many programming languages have what are called control flow statements, which are used to determine what section of code is run in a program at any time.

# Structure of control flow : Conditionals

Boolean data type: Is a data type that has one of two possible values (usually denoted true and false),
which allow different actions by changing control flow depending on whether a programmer-specified Boolean condition evaluates to true or false.

```javascript
let boolean = true;
console.log(boolean); // show true
```

## 1. Structure if.
Possibly the **if** is structure most use in the languages programming.
Use the if to specify a block of JavaScript code to be executed if a condition is true.
The syntax of if is:

```javascript
let condition = true;

if (condition) {
    console.log("this message only show when the condition is true");
}
```

## 2. Equal operator

The **===** operator compare two values, return true if equals, false otherwise.

- Also exists **==** this operator work like **===** but is less strict, in general is recomendado use **===**.

```javascript
console.log("javascript" === "javascript"); // show true
console.log("javascript" === "java"); // show false
```

## 3. if + Equal operator

```javascript
let boolean = true;
if (boolean === true) {
    console.log("boolean is true");
}

var result = 2*3;
if (result === 6) {
    console.log("the value result is six");
}
```

When you combine if + operators you start to create behavior.
For example when check if result is 6 you create one behavior how result of your mathematics operation.

## 4. Structure if...else.

The if executes a block if a specified condition is true. If the condition is false, another block can be executed.

```javascript
let result = 2*4;
let message = "";

if (result === 8) {
    message = "The result is 8"
} else {
    message = "The result NOT is 8"
}

console.log(message);
```

## 5. Nested if...else

Placing If inside another IF is called JavaScript Nested If. The JavaScript Else Statement allows us to print different statements depending upon the expression result (TRUE, FALSE). Sometimes we have to check even further, when the condition is TRUE. In these situation, we can use JavaScript **Nested IF** but be careful while using it.

Example:
```javascript
let time = "morning";

if ( time === "morning" ) {
  console.log("Good morning");
} else {
  if (time === "evening" ) {
    console.log("Good evening");
  } else {
    console.log("Good night");
  }
}
```
## 5.1 Exercise for class
 Write one code with "if", where from one variable "examResult" where:
 
    - if you examResult is 10 you should print in "Outstanding".
    - if you examResult is 9 you should print in "Excellent".
    - if you examResult is 8 you should print in "Notable".
    - if you examResult is 7 you should print in "Great".
    - if you examResult is 6 you should print in "Fine".
    - if you examResult is 5 you should print in "Sufficient".
    - if you examResult is 4 you should print in "Suspended".

 ## 6. Structure switch.
 The **switch** is used to perform different block or cases based on different conditions.

 Syntax:
```javascript
    switch(expression) {
      case x:
        // code block
        break;
      case y:
        // code block
        break;
      default:
        // code block
    }
```

Example:
```javascript
let examenResult = 6;

switch (examenResult) {
    case 4:
        console.log("suspended");
        break;
    case 5:
        console.log("Sufficient");
        break;
    case 6:
            console.log("Fine");
        break;
    case 7:
            console.log("Great");
        break;
    case 8:
            console.log("Notable");
        break;
    case 9:
            console.log("Excellent");
        break;
    case 10:
            console.log("Outstanding");
        break;
    default:
        console.log("this exam result is impossible");
        break;
}
```

## 7. More Operators

This operators **"<", ">", "<=", ">="** are identical to those that define mathematics: greater than (>), less than (<), greater or equal (> =), less or equal (<=). They are normally used to compare numbers.

Example:
```javascript
console.log(3 < 5); // show true
console.log(6 < 5); // show false

console.log(3 > 5); // show false
console.log(6 > 5); // show true

let examResult = 2;
if ( examResult < 5 ) {
    console.log("you are suspended");
}

if ( examResult > 10 ) {
    console.log("this exam result is impossible");
}

let number = 5;
if ( number >= 0 ) {
    console.log("the number is positive");
} else {
    console.log("the number is negative");
}
```

**NOT**. When the value is true become in false and when the value is false become in true."Not" change the boolean value to opposite.
NOT is written "!". if you want the opposite one operator you can do it but need write the operator between parenthesis.

Example:
```javascript
    console.log(!true); //show false
    console.log(!false); //show true
    console.log(!!true); // show true

    console.log(3 < 5); // show true
    console.log(!(3 < 5));  // show false

    console.log(!("javascript" === "javascript")); // show false
```

- **NOT Equal**. "!==" almost is combination **===** with **!** the result is not equal.
    Example:
```javascript
    console.log("javascript" !== "java"); // show true
    console.log(2+2 !== 4); // show false
```

The **AND** operator obtains its result by combining two Boolean values. The operator is indicated by the "&&" symbol and its result is only true if both operands are true,  otherwise, returns false.

Example:
```javascript
console.log(true && true); //show true
console.log(true && false); //show false

let number = 2*2;

if(number === 4 && number === (2+2)){
    console.log("Number is Four");
}
```

The **OR** operator also combines two Boolean values. The operator is indicated by the symbol || and its result is true if one of the two operands is true, otherwise is false.

Example:

```javascript
console.log(true || true); //show true
console.log(true || false); //show true
console.log(false || false); //show false

let examResult = 9;
if (examResult === 9 || examResult === 10) {
    console.log("Outstanding");
}
```

- You can concatenate conditionals.

Example:

```javascript
console.log(!true); //show false
console.log(!true || !false); //show true
console.log((!true || !false) && true); //show true
console.log((!true || !false) && false); //show false
```

##8. Summary

Conditional Structure

| structure | Description                                                                                                         |
|-----------|---------------------------------------------------------------------------------------------------------------------|
| if        | Use the if statement to specify a block of JavaScript code to be executed if a condition is true.                   |
| if...else | The if executes a block if a specified condition is true. If the condition is false, another block can be executed. |
| nested if...else | Placing If inside another IF is called JavaScript Nested If |
| switch    | The switch is used to perform different block or cases based on different conditions                                |


Conditional Operators

| Operator | Name                     | Example                                   |
|----------|--------------------------|-------------------------------------------|
| ===      | Equal                    | console.log(true === true); //show true   |
| !==      | Not                      | console.log(true !== true); //show false  |
| >        | greater than             | console.log(5 > 2); //show true           |
| <        | less than                | console.log(2 < 5); //show true           |
| >=       | greater than or equal to | console.log(7 >= 2); //show true          |
| <=       | less than or equal to    | console.log(2 <= 7); //show true          |
| !        | Not                      | console.log(!true); //show false          |
| &&       | And                      | console.log(true && true); //show true    |
| ||       | Or                       | console.log(false || false); //show false |
