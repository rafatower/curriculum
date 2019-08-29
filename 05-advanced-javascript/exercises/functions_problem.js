/**
 * Define a function "f" that receives a number and returns that
 * number multiplied by 2.
 *
 * E.g: f(4) -> 8
 */

function f(n) {
  // ...
}

/**
 * Define a function "g" that receives a number and returns that
 * number plus 3.
 *
 * E.g: g(7) -> 10
 */

function g(n) {
  // ...
}

/**
 * Define a function "h" that receives a number and returns that
 * number multiplied by 2 and then plus 3, reusing f and g functions.
 *
 * E.g: h(10) -> 23
 */

function h(n) {
  // ...
}

/**
 * Define a function "i" that receives a number and returns that
 * number plus 3, then multiplied by 2, reusing f and g functions.
 *
 * E.g: i(10) -> 26
 */
function i(n) {
  // ...
}

/**
 * Pro exercise: higher order functions
 *
 * Define a function "compose" that receives two
 * functions and a number as arguments and applies the composition of
 * the functions to the number
 *
 * E.g: compose(f, g, 10) -> 26
 * E.g: compose(g, f, 10) -> 23
 */

function compose(f, g, n) {
  // ...
}


// Tests (as in the examples)
console.log(f(4));
console.log(g(7));
console.log(h(10));
console.log(i(10));
console.log(compose(f, g, 10));
console.log(compose(g, f, 10));
