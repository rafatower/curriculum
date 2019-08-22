# Objects in depth

## Destructuring

See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

```js
a = [1, 2];
b = [...a, 3];
```

### Assignment

```js
[a, b] = [10, 20];

console.log(a);  // 10
console.log(b);  // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);  // [30, 40, 50]
```
