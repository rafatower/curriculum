# Introduction to CSS

CSS means `Cascading Style Sheets`. With CSS we give styles to our webpage. As you remember, with HTML we create the structure of our website. Now, with CSS we will focus on how the structure 'looks'. For instance, you could alter the font, colour, size and spacing of your content, split it into multiple columns, or add animations and other decorative features.

Imagine a building construction process:
    - as we saw in the previous chapter, HTML would represent the foundation and skeleton of the buiding (the structure)
    - Now, CSS will represent how it looks: is it make of glass? is it painted in green? How big are the windows? Where will be the door? how will it be distributed?
    - In the next chapter, Javascript would be the mechanical and electrical installation (the interaction)

## Basic CSS styling


This is how CSS looks like. Don't worry if you don't understand this yet.

```css
h1 {
  color: blue;
  background-color: yellow;
  border: 1px solid black;
}

p {
  color: red;
}
```

Let's read it:

1. First, we have two selectors (`h1` and `p`). Each one will affect all `h1` and `p` tags in our page.
1. The first one will look for all `h1` tags and will apply the properties between the brackets to those tags.

    1. The first one sets the text color to blue.
    1. The second sets the background color to yellow.
    1. The third one puts a border around the header that is 1 pixel wide, solid (not dotted, or dashed, etc.), and colored black.

What will the second selector do?
Try it in your browser and see what happens. Change it and play with it.

## CSS selector

Every selector of css is composed of a selector and its attributes. There are multiple selector types and hundreds of attributes, but most of the time it will follow the same structure.
This is how a CSS selector looks like:

![CSS Sintax](/curriculum/02-css/assets/css-sintax.png "CSS Sintax")

For instance

```css
p {
  color: red;
}
 ```

 This is a selector for all _paragraph_ tags in a page. It will set the text color in red.

```css
.atchung {
  background: red;
  color: white;
}
 ```

This is a selector for all html elements with an attribute class with the value _atchung_. Remember classes in HTML? This CSS selector will set all HTML tags background with this attribute to red and its text color to white. We will see this deeply later.

Important: If a property is unknown or if a value is not valid for a given property, the declaration is deemed invalid and is wholly ignored by the browser's CSS engine.

## Adding an stylesheet

There are three different ways to apply CSS to an HTML document that you'll commonly come across, some more useful than others.

### External stylesheet

An external stylesheet is when you have your CSS written in a separate file with a `.css` extension, and you reference it from an HTML <link> element in your `<head>` tag.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>My CSS experiment</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>This is my first CSS example</p>
  </body>
</html>
```

Add an external CSS file to your page.

### Internal CSS

**Warning: this method is not recommended**
An internal stylesheet is where you don't have an external CSS file, but instead place your CSS inside a `<style>` element, contained inside the HTML `<head>`.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My CSS experiment</title>
    <style>
      h1 {
        color: blue;
        background-color: yellow;
        border: 1px solid black;
      }

      p {
        color: red;
      }
    </style>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>This is my first CSS example</p>
  </body>
</html>
```

### Inline styles

**Warning: this method is not recommended**
Inline styles are CSS declarations that affect one element only, contained within a style attribute

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My CSS experiment</title>
  </head>
  <body>
    <h1 style="color: blue;background-color: yellow;border: 1px solid black;">Hello World!</h1>
    <p style="color:red;">This is my first CSS example</p>
  </body>
</html>
```

Please don't do this, unless you really have to!

## Comments

Comments are parts of our CSS that will not affect the HTML. It is used to write messages for the programmer of the website. A comment looks like this

```css
    /* This is a CSS comment */
```

## Hands on

Create a new file `style.css` in a folder named styles next to your `index.html` and link the external CSS and the HTML. Add some styles to your HTML by creating selectors and properties. Just for fun, see what you can do. If you don't know CSS attributes, search online.

Style your website!!
