# Functions

Functions are separable, reusable pieces of code.

To declare (create) a function, you can give it a name, then include all the code for the function inside curly brackets {}

```javascript
    function parrotFacts() {
      console.log('Some parrot species can live for over 80 years');
      console.log('Kakapos are a critically endangered flightless parrot');
    }
```

Using **Functions**
To invoke (use) a function, you type its name, followed by parenthesis ()
```javascript
     parrotFacts();
     // show 'Some parrot species can live for over 80 years'
     // and 'Kakapos are a critically endangered flightless parrot'
```

### Arguments
Functions can accept input values, called arguments

```javascript
    function callKitten(kittenName){
      console.log('Come here, ' + kittenName + '!');
    }

    callKitten('Fluffy'); // outputs 'Come here, Fluffy!'

    function addNumbers(a, b){
      console.log(a + b);
    }

    addNumbers(5, 7);  // outputs 12
    addNumbers(9, 12); // outputs 21
```

Arguments
You can also pass variables into functions. These variables do not need to have the same name as the function arguments.

```javascript
function addOne(num){
  var newNumber = num + 1;
  console.log('You now have ' + newNumber);
}

// Declare variables
var numberOfKittens = 5;
var numberOfPuppies = 4;

// Use them in functions
addOne(numberOfKittens);
addOne(numberOfPuppies);
```

### Returning Values
You can have a function give you back a value, to use later.

```javascript
function square(num) {
  return num * num;
}

console.log(square(4));       // outputs '16'

var squareOfFive = square(5); // squareOfFive equals '25'
```


## Variable Scope
The scope of a variable determines where it's value is accessible throughout your program.

### Global Scope
A variable declared outside of a function has a global scope and can be accessed anywhere, even inside of functions.
```javascript
var awesomeGroup = 'Girl Develop It'; // Global scope

function whatIsAwesome() {
  console.log(awesomeGroup + ' is pretty awesome.'); // Will work
}

whatIsAwesome();
```

### Local Scope
A variable declared inside a function has a local scope and can only be accessed within that function.
```javascript
function whatIsAwesome() {
  var awesomeGroup = 'Girl Develop It';              // Local scope
  console.log(awesomeGroup + ' is pretty awesome.'); // Will work
}

whatIsAwesome();

console.log(awesomeGroup + ' is pretty awesome.'); // Won't work
```
