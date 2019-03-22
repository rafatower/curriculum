# Introduction to HTML

HTML defines the content of every web page on the Internet. By using HTML, you define the structure of your website and tell the browser how to build the website. Creating an HTML document with properly marked up content is the first step of developing a web page.

HTML stands for **HyperText Markup Language** and it is used to add and structure information 
we want in our webpage. It includes tags, attributes and flags that help structure content.

Creating a website with only HTML will not look good, because the styles are defined with CSS. It will not be very interactive, because advanced interaction is defined with javascript. HTML defines the structure.

When a web page is loaded, the browser creates a [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) (Document Object Model). This only means that the browser creates its own image of how our page looks like based on how we structure HTML. The browser will transform your HTML to its own language, so its important how we write our HTML so the browser can understand it.

## Basic HTML structure


This is the basic structure of an HTML page

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Your HTML page</title>
    </head>
    <body>
        <h1>Welcome to HTML!</h1>
    </body>
</html>
``` 

Let's read it:

1. First, we need to tell browsers that this is an HTML5 web page with the <!DOCTYPE html> line.
1. Then, our entire web page needs to be wrapped in <html> tags. Ensure that the tag is opened (`<html>`) and closed (`</html>)`. Everything inside this tags will be our HTML page.
1. Then, the HTML is divided in two tags: `head` and `body`
    1. `Head`: A web page’s head contains all of its metadata, like the page title, any CSS stylesheets, and other things that are required to render the page but you don’t necessarily want the user to see.
    1. The bulk of our HTML markup will live in the <body> element, which represents the visible content of the page.

## HTML elements
Every piece of website content is 'wrapped' in an HTML element. An HTML element is usually composed of two tags, an opening tag and a closing tag (though we will see there are exceptions). Content, such as text or other HTML elements, will be displayed within these tags. Tags have associated behaviours of the elements. Attributes can modify default behaviour of the element, or add extra information.

This is how a tag looks like. There is no `name` tag, this is just an example:

```html
 <name attribute="value">Content</name>
 ```

 This is a _paragraph_ tag with an attribute and a value, for instance. We will see more tags later:

 ```html
 <p lang="es">Párrafo</p>
 ```

### Nested tags
Tags can be nested inside of other tags. To maintain readable code, the parent tags (the outer most ones) should each be on a new line with the nested element indented. Example:

```html
<div>
  <h1>Title</h1>
  <p>Text</p>
</div>
```

Don't worry about the tags, we will learn tags in the next class

## Comments
Comments are parts of our HTML that will not be visible to the user. It is used to write messages for the programmer of the website. A comment looks like this

```html
    <!-- This won't be visible but will be in our code -->
```

## Hands on!
Create a new file `index.html` and add the previous HTML. Play with it: add tahs, add comments and open it in your browser to see how it looks. 

Is your first website!
