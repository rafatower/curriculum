# Objects in depth

In the same way that functions abstract processes, objects abstract
data. Objects can contain many values, and they are written as
`property: value` pairs.

Let's see again how to define a simple object:

```js
const p = {
    firstName: 'Ned',
    lastName: 'Stark',
    age: 40,
    isActive: true
};
```

To access a property of an object we can use `p.name` or
`p['firstName']`. We can also loop over the properties with `for (x in
p) { ... }`.

We already saw objects in the course. Now we are going to see some
more advanced material related to them.

## this

Objects can contain any kind of values, and in particular they can
contain functions. The functions defined inside an object are normally
called *object methods*.

Let's try to create a method that returns the full name:

```js
const p = {
    firstName: 'Ned',
    lastName: 'Stark',
    fullName: function() { return this.firstName + ' ' + this.lastName; },
    age: 40,
    isActive: true
};
```

By using `this` we are able to make the function defined inside the
object to refer to other properties of the object.

## Constructor

If we are going to create many objects with a similar structure, we
can define an *object type*. For example, suppose you want to create
an object type for cars. You want this type of object to be called
Car, and you want it to have properties for make, model, and year. To
do this, you would write the following function:

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
```

Notice the use of this to assign values to the object's properties
based on the values passed to the function.

Now you can create an object called mycar as follows:

```js
var mycar = new Car('Eagle', 'Talon TSi', 1993);
```

This statement creates `mycar` and assigns it the specified values for
its properties. Then the value of `mycar.make` is the string
`"Eagle"`, `mycar.year` is the integer 1993, and so on.

You can create any number of Car objects by calls to new. For example,

```js
var kenscar = new Car('Nissan', '300ZX', 1992);
var vpgscar = new Car('Mazda', 'Miata', 1990);
```

(The examples come from this [MDN page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects).

## Spread syntax

We can use the so-called *spread syntax* (`...`) for various purposes.

You can find a detailed reference in
[MDN-Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax),
but we will mention briefly the different uses here.

### Destructuring

For function calls:

```js
myFunction(...iterableObj);
```

For array literals or strings:

```js
[...iterableObj, '4', 'five', 6];
```

For object literals:

```js
let objClone = { ...obj };
```

More details in
[MDN-Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).

### Assignment

```js
[a, b] = [10, 20];

console.log(a);  // 10
console.log(b);  // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);  // [30, 40, 50]
```
