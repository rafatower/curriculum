# CSS selectors

In CSS, selectors are used to target the HTML elements on our web pages that we want to style. There are a wide variety of CSS selectors available, allowing for fine grained precision when selecting elements to style. It could target tags by its name, id, class, attributes...etc.

## Selectors

### Tag selectors

This type of selector is the simplest one. Will match the name of the HTML with the name of the selector

```html
<p>What color do you like?</p>
<div>I like blue.</div>
<p>I prefer BLACK!</p>
```

```css
/* All p elements look red */
p {
  color: red;
}

/* All div elements look blue */
div {
  color: blue;
}
```

### Class selectors

As you probably remember, a class is an attribute that we can set in an HTML element.
To target a class, the selector should have a `.` before the name of the class. It is up to you to choose a name for the class, but remember, it should be a string of a single word (it can have `-` or `_`).

**Important** Multiple elements in a document can have the same class value, and a single element can have multiple class names separated by white space.

```html
<ul>
  <li class="first done">Create an HTML document</li>
  <li class="second done">Create a CSS style sheet</li>
  <li class="third">Link them all together</li>
</ul>
```

```css
/* The element with the class "first" is bolded */
.first {
  font-weight: bold;
}

/* All the elements with the class "done" are strikethrough */
.done {
  text-decoration: line-through;
}
```

### ID selectors

An ID is an attribute that we can set in an HTML element. Any element can have a unique ID name set with the id attribute. It is up to you to choose an ID name.
To target an ID we should ise a hash symbol (#), followed by the ID name of a given element.

**Warning** IDs are unique, if you duplicate an ID in HTML or CSS, results are unpredictable.

```html
<p id="polite"> — "Good morning."</p>
<p id="rude"> — "Go away!"</p>
```

```css
#polite {
  font-family: cursive;
}

#rude {
  font-family: monospace;
  text-transform: uppercase;
}
```

### Attribute selector

As you probably remember, an HTML element can have attributes.
Attribute selectors are a special kind of selector that will match elements based on their attributes and attribute values.

```html
<ul>
  <li data-quantity="1kg" data-vegetable>Tomatoes</li>
  <li data-quantity="3" data-vegetable>Onions</li>
  <li data-quantity="3" data-vegetable>Garlic</li>
</ul>
```

```css
/* All elements with the attribute "data-quantity"
   are given green text */
[data-quantity] {
  color: green;
}

/* All elements with the attribute "data-quantity"
   with the exact value "liquid" are given a golden
   background color */
[data-quantity="3"] {
  background-color: goldenrod;
}
```

### Pseudo-class selector

A CSS pseudo-class is a keyword added to the end of a selector, preceded by a colon (:), which is used to specify that you want to style the selected element but only when it is in a certain state.

For example, you might want to style a link element only when it is being hovered over by the mouse pointer

```css
.first {
  font-weight: bold;
}

.first:hover {
  font-weight: bold;
}
```

There are many pseudo-classes, some of the most important are:

- [:empty](https://developer.mozilla.org/en-US/docs/Web/CSS/:empty)
- [:not](https://developer.mozilla.org/en-US/docs/Web/CSS/:not)
- [:active](https://developer.mozilla.org/en-US/docs/Web/CSS/:active)
- [:hover](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover)
- [:disabled](https://developer.mozilla.org/en-US/docs/Web/CSS/:disabled)
- [:checked](https://developer.mozilla.org/en-US/docs/Web/CSS/:checked)
- [:first-child](https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child)
- [:last-child](https://developer.mozilla.org/en-US/docs/Web/CSS/:last-child)
- [:nth-child](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child)

## Combinating selectors

Selectors are useful, but are much more powerful when you combine them.

### Multiple selector combination

If the same property is being applied to many selector, we can combine them using the comma (,). Same properties will apply to all the selectors.

```css
h1, h2, h3 {
  background: black;
  color: white
}
```

### Descendant combination

Will apply to element matching `.child` that is a descendant of an element matching `.parent` no matter how deep is nested.

```css
.parent .child {
  background: black;
  color: white
}
```

```html
<section class="parent">
  <ul>
    <li>Element</li>
    <li class="child">Element</li>
    <li>Element</li>
  </ul>
</section>
```

### Universal selector

**Warning** Use with caution, this can make your website slow

This selector will apply to everything.

```css
* {
  background: black;
  color: white
}
```

**Note** There are many more selectors! Check all of them here: https://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048

## Hands on

Learn to use CSS selectors:

  1. Copy the content of the file `selectors.html`
  2. Link an external stylesheet named `selectors.css`

    - Give the `<body>` element a background of `#bdc3c7`
    - Give the `<h1>` element a color of `#9b59b6`
    - Make all `<h2>` elements orange
    - Make all `<li>` elements blue
    - Change the background on every paragraph to be yellow
    - Give everything with the class `'hello'` a white background
    - Give the element with id `'special'` a 2px solid blue border
    - Make only inputs with type 'text' have a gray background
    - Make all the `<p>` that are nested inside of `<div>` 25px font
    - Make all "checked" checkboxes have a left margin of 50px

## Hands on: advanced

You may need to research some other selectors and properties
Based on this HTML:

```html
<ul>
  <li><a href="#">Colombia</a></li>
  <li><a href="#">Venezuela</a></li>
  <li><a href="#">Uruguay</a></li>
  <li><a href="#">Argentina</a></li>
  <li><a href="#">España</a></li>
  <li><a href="#">Paraguay</a></li>
  <li><a href="#">Ecuador</a></li>
</ul>
```

And this incomplete CSS (note the `____` selector)

```css
ul {
  padding: 0;
}

li {
  padding: 3px;
  margin-bottom: 5px;
  list-style-type: none;
}

a {
  text-decoration: none;
  color: black;
}

____{
  text-decoration: underline;
  color: red;
}

____ {
  background-color: #ccc;
}

____ {
  background-color: #eee;
}
```

1. Change `____` and write the required selector to create a zebra-stripped list
1. Change the style on the links to display an underline on hover.