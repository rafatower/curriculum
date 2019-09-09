# Vue.js

When we write JavaScript, some of the code will deal with the
essentials of our application (the *logic*), and some other with the
way the user interacts with the webpage (the *interface*). The second
part normally requires quite a lot of code, which is not that
essential in some sense, and it is also difficult to write well and
make a beautiful, consistent interaction with the user. To help with
that, people have developed several *frameworks*.

[Vue](https://vuejs.org/) is a framework for building user
interfaces. It is one of the main three ones in use today (the other
ones being [React](https://reactjs.org/) and
[Angular](https://angular.io/)). It is also the newest of the three
and probably the easiest one. We will use it in our course.

## How to use it

To use Vue we can add the following to our HTML:

```js
<!-- development version, includes helpful console warnings -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

or:

```js
<!-- production version, optimized for size and speed -->
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```
