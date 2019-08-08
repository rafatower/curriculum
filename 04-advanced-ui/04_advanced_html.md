# Advanced HTML

## Pug
As well as in CSS we have Sass, for HTML we have **Pug**. 
Clean and organize HTML, that’s what we as Front-end Developers always aim for. Well with Pug, formerly known as “Jade” it’s a high performance and feature-rich templating engine that’s easy to achieve. Simply put, Pug is a clean, white space/indentation sensitive syntax for writing html.

Just like SASS, Pug is a prepocessor and, as such it helps you accomplishing tasks like wrapping away repetitive work by providing features not available in plain HTML. 

This is how Pug looks like

```pug
doctype html  
html(lang='en')  
 head
   title Pug
 body
   h1 Pug Examples
   div.container
     p Cool Pug example!
```

will be compiled to
```html
<!DOCTYPE html>  
<html lang="en">  
 <head>
   <title>Pug</title>
 </head>
 <body>
   <h1>Pug Examples</h1>
   <div class="container">
     <p>Cool Pug example!</p>
   </div>
 </body>
</html>
```

### Text

```pug
     p Cool Pug example!
     p
     | Cool Pug example!
     | This is a long text!
```

### Classes, iDs, attributes

Classes
```pug
     div.class-name text
```
```html
    <div class="class-name">text</div>
```

ID
```pug
     div#id-name text
```
```html
    <div id="class-name">text</div>
```

Attributes
```pug
     img.main-image(src="url/to/image.jpg", alt="Description")
```
```html
    <img src="url/to/image.jpg" alt="Description" />
```

## Pug playground
Pug playground here: https://pug.now.sh/

## Hands on
Convert your code into pug templates and compile them.