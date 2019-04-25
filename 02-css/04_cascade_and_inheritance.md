# CSS cascade and inheritance

## Source order
As mentioned above, if multiple competing selectors have the same importance and specificity, the third factor that comes into play to help decide which rule wins is source order — later rules will win over earlier rules.

```css
p {
  color: blue;
}

/* This rule will win over the first one */
p {
  color: red;
}
```

## Specificity
Specificity is basically a measure of how specific a selector is — how many elements it could match. As shown in the example seen above, element selectors have low specificity. Class selectors have a higher specificity, so will win against element selectors. ID selectors have an even higher specificity, so will win against class selectors. 

## !important
In CSS, there is a special piece of syntax you can use to make sure that a certain declaration will always win over all others: !important.

```css
.box {
  background-color: gray;
  border: none !important;
}
```

# Inheritance

## Mixing selectors
When several CSS rules match the same element, they are all applied to that element. Only after that are any conflicting properties evaluated to see which individual styles will win over others.

```css
p {
  color: blue;
}

p {
  margin: 2px;
}
/* Result will be the sum of both selectors  */
```

## Removing inheritance

### `initial` property
Sets the property value applied to a selected element to be the same as the value set for that element in the browser's default style sheet. If no value is set by the browser's default style sheet and the property is naturally inherited, then the property value is set to inherit instead.

```css
a {
  color: initial;
}
```