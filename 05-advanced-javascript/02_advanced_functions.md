# Functions in depth

A good programming language is more that just a means for instructing
a computer to perform tasks. It also help us think about the
processes, by providing a way to combine simple ideas to form more
complex ones.

Abstractions allow to write bigger pieces of code in terms of simpler
elements. This is similar to a natural language, when we define new
terms so we can refer to them later without giving all the details
again. JavaScript has two means of by which compound elements can be
named and manipulated as units: functions and objects.

Functions are descriptions of the rules for manipulating data. They
create abstractions around procedures, that is, a series of steps that
we want to make on some given elements to produce a result. They take
arguments and return a value, in a way similar to the functions in
mathematics (such as the `sin` function).

## Syntax

Let's see again an example of a function:

```js
function average(x, y) {
    let sum = x + y;
    return sum / 2;
}
```

The reserved word `function` says that what comes next is the name of
a function (`average` in this case). Then come the **arguments**
(sometimes also called **parameters**) of the function (`x` and `y`),
and finally the **body**, which is enclosed in brackets. The
**result** will be the value that appears after `return`.

A function is called by writing the name of the function and then
passing it some parameters in parenthesis. For example:

```js
let x = 8, y = 10;

let z = average(x, y);

console.log(`The average of ${x} and ${y} is ${z}.`);
```

### Arrow functions.

A function can also be defined in a different way. Instead of using
the word `function`, we can simply put a "fat arrow" `=>` that goes
from the arguments to the value of the function.

```js
const average = (x, y) => {
    let sum = x + y;
    return sum / 2;
};
```

If there is only one argument to the function, the parenthesis can be
omitted:

```js
const double = x => {
    return 2 * x;
};
```

Also, instead of writing a block of code, we put a single **expression**
which will be the returned value. So, the above code is equivalent to:

```js
const double = x => 2 * x;
```

This notation is particularly useful when we want to pass a small
function to other functions, such as `map`, `filter` and `reduce` that
we saw previously.

## Scope

The variables defined inside the functions exist only within its body,
as it is delimited by the block:

```js
let x = 3;
function f() {
    let x = 4; // different x!
    console.log(x); // outputs 4
}
console.log(x); // outputs 3
```

They are called *local variables* because they reference values only
inside the block in which they are declared. If there is already a
variable with the same name, they *override* it within the scope where
they are declared.

## Default values

An argument can be given a default value, which will be used only if
we call the function without passing that argument.

For example:

```js
function multiply(a, b = 1) {
    return a * b;
}

console.log(multiply(5, 2)); // outputs 10

console.log(multiply(5)); // outputs 5
```

Actually, all arguments are always given a default value, which is
`undefined`, unless a different default value is given in the
definition of the function. This is useful when we want to create functions that
In particular, this means that a function can always be called

### Variadic functions

We can define a function to take an arbitrary number of arguments, and
access all of them by using the reserved keyword `arguments`. This
keyword will have a list of the values of all the arguments.

Let's see how we can use it:

```js
function sum() {
    let x = 0;

    for (let i = 0; i < arguments.length; ++i)
        x += arguments[i];

    return x;
}

sum(1, 2); // returns 3
sum(1, 2, 3); // returns 6
```

## Recursive functions

Functions can call themselves as part of their computation. For
example, the following function computes the value of the factorial of
a number (`n! = n * (n - 1) * (n - 2) * ... * 1`):

```js
function factorial(n) {
    if (n === 0)
        return 1;

    return factorial(n - 1);
}

factorial(3); // returns 6
```

This function uses the fact that `factorial(n) = n * factorial(n -
1)`. It works because at some point we will reach the call to
`factorial(0)`, which is 1, and from there the rest of the values can
be computed.

Recursive calls can be very useful, especially when we have processes
that traverse certain data structures called *trees*.

## Closures

A function can capture its non-local variables by reference.

```js
function counter() {
    let count = 0;

    return function() {
        return ++count;
    };
}

let closure = counter();
closure(); // returns 1
closure(); // returns 2
closure(); // returns 3
```
