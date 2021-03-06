# Intro to JS

## Variables

A variable is a container for a value, like a number we might use in a sum, or a string that we might use as part of a sentence.

Example:

```javascript
const kingGrandson = 'Felipe Juan Froilán de Todos los Santos de Marichalar y Borbón'; //String
const kingGrandsonAge = 20; //Number
const hasTitle = true; //Boolean
const titleName = 'Caballero Divisero Hijodalgo del Ilustre Solar de Tejada'; //String

console.log(kingGrandson + 'has ' + kingGrandsonAge + 'years');
console.log(kingGrandson + 'has a title of' + titleName);
```

### Declaring variables

#### let
`var` and `let` mean subtly different things, both having to do with [scope](https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var-to-declare-a-variable). A good rule of thumb is to use `let` unless you are working with an older version of the JavaScript interpreter.

```javascript
let FIVE = 5;
FIVE = 6;
console.log(FIVE); // 6
```

For now, we will use `let` for declaring a variable unless the variable is immutable.

#### const

You can declare a constant with the `const` operator. Constants are like variables declared with `let`, but cannot change their value through reassignment.

```javascript
const FIVE = 5;
FIVE = 6;  // TypeError: Assignment to constant variable.
```

**Note** that each line of JavaScript code ends with the `;`. This is optional for the code to work (sometimes, and the rules are inconsistent) but **not** optional when taking into consideration style guidelines.

### Undefined and value

Once you've declared a variable, you can initialize it with a value.

```javascript
const FIVE = 5;
console.log(FIVE); // 5
```

Otherwise, the variable does not exist and we cannot use it

```javascript
console.log(FIVE); //ReferenceError: FIVE is not defined.
```

We can also declare an empty variable

```javascript
const FIVE;
console.log(FIVE); //undefined
```

### Variable Naming

A safe convention to stick to is so-called "lower camel case", where you stick together multiple words, using lower case for the whole first word and then capitalize subsequent words. We've been using this for our variable names in the article so far.

Variables are case sensitive — so `myage` is a different variable to `myAge`.

Constants can be written in all uppercase

```javascript
const KINGNAME = 'Felipe Juan Froilán';
let kingAge = 20;
let kingStudies = 'ADE';
```

## Conditionals

Conditional statements allow us to represent decision making in JavaScript, from the choice that must be made (e.g. "one cookie or two"), to the resulting outcome of those choices.

The most common type of conditional statement is the `if...else`:

```javascript
const isKing = false;

if (isKing === true) {
  // code to run if condition is true
  console.log('¡Viva el rey!');
} else {
  // run some other code instead
  console.log('¡A la horca con él!');
}
```

Si hay más de una opción:

```javascript
const isKing = 'Felipe';

if (isKing === 'JuanCar') {
  console.log('¡Este es el rey anterior!');
} else if (isKing === 'Felipe') {
  console.log('¡Este es el rey de ahora!');
} else {
  console.log('¡Viva la república!');
}
```

### Operators

- `===` means equal
- `!==` means not equal
- `<` or `>` test if one value is less than or greater than another.
- `<=` or `>=` test if one value is less than or  or equal to, greater than  or equal to.


### Multiple conditionals

You can have more than one condition

```javascript
const isKing = true;
const kingAge = 86;

if (isKing && kingAge > 46) {
  console.log('¡El rey viejo!');
} else {
  // run some other code instead
  console.log('¡El rey de ahora!');
}
```

- `&&` means AND
- `||` means OR

## Arrays

Arrays are lists of values tha can be stored in variables and dealt with in much the same way as any other type of value, the difference being that we can access each value inside the list individually, and do super useful and efficient things with the list, like loop through it and do the same thing to every value. 

imagina we want to save a list of every item a consumer bought and print them out in an invoice. For example, if we didn't have arrays, we'd have to store every item in a separate variable and print each item separately. If we had 10 items to add to the invoice it would already be annoying, but what about 100 items, or 1000? We'll return to this example later on in the article.


```javascript
const product1 = 'Toilet paper';
const product2 = 'Scissors';
const product3 = 'Tomatos';
const product4 = 'Towels';
const product5 = 'Shoes';

// And so os with every product
// Instead

const productList = ['Toilet paper', 'Scissors', 'Tomatos', 'Towels', 'Shoes'];
```

An array can sabe multiple values:

```javascript
var random = ['tree', 795, [0, 1, 2]];
```

### Accessing arrays

You can then access individual items in the array using bracket notation.

```javascript
const productList = ['Toilet paper', 'Scissors', 'Tomatos', 'Towels', 'Shoes'];

console.log(productList[0]); // 'Toilet paper'
```

### Looping arrays

If we would like to loop an array to display all the values in it, we should use a loop.

```javascript
const productList = ['Toilet paper', 'Scissors', 'Tomatos', 'Towels', 'Shoes'];

productList.forEach((product, index) => {
    console.log(index, product); // index
});
```

## Functions

A function is a code snippet that can be called by other code or by itself, or a variable that refers to the function. 

Imagine a machine, each time you push a button it does something. You don't need to know how it works, the machine just get some material, transforms it, and returns something modified. If you open it, you can understand how it transforms it.

```javascript
function random() {
  return Math.floor(Math.random());
};

//or

const random = () => {
   return Math.floor(Math.random());
};
```

Sometimes, you can add something to the machine and it converts it and returns something else:

```javascript
function add(number1, number2) {
  return number + number;
}

// or

const add = (number1, number2) => {
   return number + number;
};
```

To activate it, you should **push the button**

```javascript
random();
add(2, 3);
```

## Hands on!

### Exercise 1 - The Lifetime Supply Calculator

How many potatoes will a person eat until the end of his life? Discover yourself!

 1. Store the persons current age into a variable.
 1. Store an stimated maximum age into a variable.
 1. Store an estimated amount per week (as a number).
 1. Calculate how many weeks will happen until the end of this person life.
 1. Calculate how many potatoes would eat total for the rest of his life.
 1. Output the result to the screen by console like so: "NAME has NN years and will eat NN potatoes until age of X".

### Exercise 2 - True or false

Using promp, variables and **conditionals**, ask questions to the users and display the result on the console.

  1. Ask: "Tomatos are fruits, not vegetables: true or false". If that answer is "true" you show "correct", otherwise show "incorrect".
  1. Ask: "You should drink 8 glasses of water: true or false". If that answer is "false" you show "correct", otherwise show "incorrect".
  1. Ask: "Fishes have only three seconds of memory: true or false". If that answer is "false" you show "correct", otherwise show "incorrect".
  1. Ask: "The Great Wall of China is the only man made structure visible from space
The Great Wall of China: true or false". If that answer is "true" you show "correct", otherwise show "incorrect".

Create more true or false questions.

#### Bonus points

1. Create a variable `points` and initialize it to zero.
2. If the answer is correct, add 10 points to the `points` variable.
3. If the answer is incorrect, remove 5 points to the `points` variable.
4. Display how many points the user has on the console.

### Exercise 3 - A dinner

Imagine you are a famous singer in a band and you want to invite other musicians to a dinner.

Write an array of every musician and its band in a format `musician:band` and using only one console log, display the list of assistants in the console.


