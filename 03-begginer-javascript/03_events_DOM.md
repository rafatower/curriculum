#  Events and the DOM

## The DOM
The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects.

The DOM is an object-oriented representation of the web page, which can be modified with a scripting language such as JavaScript.

When you create a script–whether it's inline in a `<script>` element or included in the web page by means of a script loading instruction–you can immediately begin using the API for the document or window elements to manipulate the document itself or to get at the children of that document, which are the various elements in the web page.

```javascript
let paragraphs = document.getElementsByTagName("P");
```
### Dom Interfaces
The following is a brief list of common APIs in web and XML page scripting using the DOM.

### Document.getElementById(id)
The Document method getElementById() returns an Element object representing the element whose id property matches the specified string.

```javascript
const element = document.getElementById('unique-element');
```

### Document.getElementsByTagName(tagname)
The Element.getElementsByTagName() method returns a live HTMLCollection of elements with the given tag name. 

```javascript
const element = document.getElementsByTagName('main');
```

###  EventTarget.addEventListener()

The EventTarget method `addEventListener()` sets up a function that will be called whenever the specified event is delivered to the target.

```javascript
const el = document.getElementById("outside");
el.addEventListener("click", getOutside, false);
```

### Element.innerHTML

The Element property `innerHTML` gets or sets the HTML or XML markup contained within the element.

```javascript
const name = "John";
const el = document.getElementById("outside");
el.innerHTML = name; // harmless in this case
```

### Document.createElement()
In an HTML document, the document.createElement() method creates the HTML element specified by tagName

```javascript
const newDiv = document.createElement("div"); 
```

### Node.appendChild()

The Node.appendChild() method adds a node to the end of the list of children of a specified parent node. 

```javascript
const el = document.getElementById("outside");
const newDiv = document.createElement("div"); 
el.appendChild(newDiv);
```

## Event listeners

There are 3 ways to register event handlers for a DOM element.

###  EventTarget.addEventListener()

The EventTarget method `addEventListener()` sets up a function that will be called whenever the specified event is delivered to the target.

```javascript
myButton.addEventListener('click', greet, false);

function greet(event){
    console.log('greet:', arguments);
    alert('hello world');     
}
```

This is the method you should use in modern web pages.

### Avoid: HTML attribute `onclick`

Do not do this

```javascript
<button onclick="alert('Hello world!')">
```

### Avoid: Element property `onclick`

Do not do this

```javascript
myButton.onclick = function(event){alert('Hello world');};
```

## Event Interface

WIP

### currentTarget()

### preventDefault()

### stopPropagation()