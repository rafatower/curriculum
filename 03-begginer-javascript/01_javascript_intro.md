# Intro to JS

## What is computer programming?

Computer programming is a way of giving computers instructions about what they should do next. 
These instructions are known as code, and computer programmers write code to solve problems or perform a task.

The end goal is to create something that could mean anything: from a web page, or a piece of software, or even just a pretty picture. That’s why computer programming is often described as a mix between art and science; it’s technical and analytical, yet creative at the same time.

This video explain pretty well the concept of programming:
[![What is Programming?](http://img.youtube.com/vi/FCMxA3m_Imc/0.jpg)](http://www.youtube.com/watch?v=FCMxA3m_Imc "What is Programming?")
[What is Programming?](https://www.youtube.com/watch?v=FCMxA3m_Imc)

## What is javascript?

JavaScript is a scripting or programming language that allows you to implement complex things on web pages.
If a website does content update, displays interactive maps, animated 2D/3D, advanced interactions you can bet that JavaScript is probably involved.

- HTML is the markup language that we use to structure and give meaning to our web content, for example defining paragraphs, headings, and data tables, or embedding images and videos in the page.

- CSS is a language of style rules that we use to apply styling to our HTML content, for example setting background colors and fonts, and laying out our content in multiple columns.

- JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.

### What can I do with Javascript?

This is how Javascript looks like:

```html
<div class="vegetable">I love potato</div>
```

```js
// Save in a constant the an HTML element with the class 'vegetable'
const vegetable = document.querySelector('.vegetable');

// If a user clicks on the HTML element vegetable, we will execute the funcion 'updateVegetableName' 
vegetable.addEventListener('click', updateVegetableName);

// The function launches a prompt to ask for a new vegetable name and updates the content of the HTML element with a new text
function updateVegetableName() {
  let vegetableName = prompt('Enter a new vegeatble');
  vegetable.textContent = `I love ${vegetableName}`;
}
```

Don't worry if you don't understand this code yet. The most important part is that you understand that using Javascript we can select HTML elements using selectors as we do in CSS and update them.

The core JavaScript language consists of some common programming features that allow you to do things like:

- Store useful values inside variables. In the above example for instance, we ask for a new name to be entered then store that name in a variable called `vegetableName`.
    
- Operations on pieces of text (known as `strings` in programming). In the above example we take the string `I love` and join it to the `vegetableName` variable to create the complete text label, e.g. 'I love oranges".
    
- Running code in response to certain events occurring on a web page. We used a `click` event in our example above to detect when the button is clicked and then run the code that updates the text label.

We can do a lot more using Javascript than just updating the DOM and the CSS, we can also use browser geolocation, develop 2D and 3D graphics using WebGL, display video and audio, or connect to external websites or apps and get information using public APIs as retrieving information from twitter or github.

### JavaScript running order

javascript code is executed from top to bottom, in reading order. This is a very common error — you need to be careful that the objects referenced in your code exist before you try to do stuff to them.


## Interpreted versus compiled code

You might hear the terms interpreted and compiled in the context of programming. In interpreted languages, the code is run from top to bottom and the result of running the code is immediately returned. You don't have to transform the code into a different form before the browser runs it.

Compiled languages on the other hand are transformed (compiled) into another form before they are run by the computer. For example, C/C++ are compiled into assembly language that is then run by the computer.

JavaScript is an interpreted programming language.

## Server-side versus client-side code

You might also hear the terms server-side and client-side code, especially in the context of web development.

Client-side code is code that is run on the user's computer when a web page is viewed, the page's client-side code is downloaded, then run and displayed by the browser. In this module we are explicitly talking about client-side JavaScript.

Server-side code on the other hand is run on the server, then its results are downloaded and displayed in the browser. 
Examples of popular server-side web languages include PHP, Python, Ruby, ASP.NET and... JavaScript! JavaScript can also be used as a server-side language, for example in the popular Node.js environment.

# Developer Tools

## What are browser developer tools?

Every modern web browser includes a powerful suite of developer tools. These tools do a range of things, from inspecting currently-loaded HTML, CSS and JavaScript to showing which assets the page has requested and how long they took to load. 

![devTool](./assets/DevTools.jpg)

## The JavaScript console

The JavaScript console is an incredibly useful tool for debugging JavaScript that isn't working as expected. 
It allows you to run lines of JavaScript against the page currently loaded in the browser, and reports the errors encountered as the browser tries to execute your code.
To access the console in any browser
 
![console](./assets/DevTool-Console.jpg)

Now try entering the following incorrect versions of the code and see what you get.

![error-console](./assets/DevTool-ErrorConsole.jpg)

You'll start to see the kind of errors that the browser returns. Often these errors are fairly cryptic, but it should be pretty simple to figure these problems out!


## How do you add JavaScript to your page?

### Internal JavaScript
Open the file in your web browser and in your text editor. You'll see that the HTML creates a simple web.
Next, go to your text editor and add the following in your head — just before your closing </head> tag: 

```html
<script>
    //Print message in console
    console.log("First way | Internal JavaScript");
</script>
```

### External JavaScript

1. First, create a new file in the same directory as your sample HTML file. 
Call it script.js make sure it has that .js filename extension,
as that's how it is recognized as JavaScript.

2. Replace your current `<script>` element with the following:

```html
<script src="script.js" defer></script>
```


3. Inside script.js, add the following script: 
```javascript
    //Print message in console
    console.log("Second way | External JavaScript");
```

## Comments in Javascript

As with HTML and CSS, it is possible to write comments into your JavaScript code that will be ignored by the browser, and exist simply to provide instructions to your fellow developers 

A single line comment is written after a double forward slash (//), e.g. 

```javascript
// I am a comment
```

A multi-line comment is written between the strings /* and */, e.g. 

```javascript
/*
  I am a
  multi line
  comment
*/

```