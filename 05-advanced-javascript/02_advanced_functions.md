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
mathematics.

In JavaScript, functions are first-class citizens, that is, they can
be passed as arguments to other functions, and be returned from
functions. Thus, in the same way than a variable can have a number or
a string as a value, it can also have a function, and we can
manipulate them in similar ways. This feature gives us a very powerful
tool to write good, readable code.

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

### Arrow functions

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
function multiply(a, b = 3) {
    return a * b;
}

multiply(5, 2); // returns 10

multiply(5); // returns 15
```

Actually, all arguments are always given a default value, which is
`undefined`, unless a different default value is given in the
definition of the function. This is useful when we want to create functions that
In particular, this means that a function can always be called

### Variadic functions

We can define a function to take an arbitrary number of arguments, and
access all of them by using the rest parameter syntax.

For example:

```js
function sum(...args) {
    let x = 0;

    for (let i = 0; i < args.length; i++)
        x += args[i];

    return x;
}

sum(1, 2); // returns 3
sum(1, 2, 3); // returns 6
```

A function's last parameter can be prefixed with `...` and it will
make the remaining given arguments to be placed in an array.

```js
function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

// Outputs:
// a, one
// b, two
// manyMoreArgs, [three, four, five, six]
```

Another way is to use the reserved keyword `arguments`. This keyword
will have a list of the values of all the arguments:

```js
function sum() {
    let x = 0;

    for (let i = 0; i < arguments.length; i++)
        x += arguments[i];

    return x;
}
```

## Recursive functions

Functions can call themselves as part of their computation. For
example, the following function computes the value of the factorial of
a number (`n! = n * (n - 1) * (n - 2) * ... * 1`):

```js
function factorial(n) {
    if (n === 0)
        return 1;

    return n * factorial(n - 1);
}

factorial(3); // returns 6
```

This function uses the fact that `factorial(n) = n * factorial(n -
1)`. It works because at some point we will reach the call to
`factorial(0)`, which is 1, and from there the rest of the values can
be computed.

Recursive calls can be very useful, especially when we have processes
that traverse certain data structures such as *trees*.

## Closures

A function can capture its non-local variables by reference.

```js
function counter() {
    let count = 0;

    return () => {
        count += 1;
        return count;
    };
}

let closure = counter();

closure(); // returns 1
closure(); // returns 2
closure(); // returns 3
```

In this example, the function `counter` takes no arguments and returns
a function (we can do that, since functions are first-class citizens
in JavaScript!). The returned function, when called without arguments,
will increase the value of `count`, which is not visible from outside
the function, but has been "captured" by the function and can use
it. The `count` variable is not free anymore, and we have formed what
we call a *closure*.
