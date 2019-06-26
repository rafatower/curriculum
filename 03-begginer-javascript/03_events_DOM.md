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
const myButton = document.querySelector('#my-button');

myButton.addEventListener('click', greet);

const greet = (event) => {
    console.log('greet');
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
Event handlers may be attached to DOM elements (as a `button`), the document, the Window...etc.

When an event occurs as we have seen before, a new `Event` object is created through the event listeners.

Let's check how the Event Object looks like:

```javascript
const myButton = document.querySelector('#my-button');

myButton.addEventListener('click', print);

const print = (event) => {
    console.log('print:', event);
    alert('hello world');     
}
```
The Event interface is used to provide contextual information about an event to the handler processing the event. 

![./assets/event.png](Event Object example)

### event.target
The target property of the Event interface is a reference to the object that dispatched the event.

For instance, this is a good example of use case. We want to know which element has been clicked to append a class and change the style

```javascript
// Create an unordered list
const ul = document.createElement('ul');
document.body.appendChild(ul);

// Create two list items and append it to the list
const li1 = document.createElement('li');
const li2 = document.createElement('li');
li1.textContent = 'Example1'
li2.textContent = 'Example2'
ul.appendChild(li1);
ul.appendChild(li2);

// Set a function that adds a class to highlight the item
const highlight = (event) => {
    console.log(event.target);
    event.target.classList.add('highlight');
}

// Attach the listener to the list
// It will fire when each <li> is clicked
const listItem = document.querySelector('ul');
listItem.addEventListener('click', highlight);
```

```css
.hightlight {
    color: red;
}
```

![Simple event target on Codepen](https://codepen.io/Xaviju/pen/ydzvEd)

### event.currentTarget
Similar to the previous one, except that in this case the event log will display the element that creates the event listener instead of the clicked element.

Using `currentTarget`, the log would be the `ul` instead of the `li`.

Try updating the value on the previous example and see what happens

### preventDefault()
This method tells the browser that if the event does not get explicitly handled, its default action should not be taken as it normally would be.

For instance, if we add an event listener to a click on an checkbox in a form and we set the `preventDefault` the expected behaviour on a checkbox (being clicked) won't happen

Examepl: [Blocking default click handling](https://codepen.io/Xaviju/pen/MMEVya?&editable=true)

## AddEventListener
`addEventListener()` sets up a function that will be called whenever the specified event is delivered to the target.

This functions receives at least parameters:

- **Type** The event type: click, focus, blur, submit, keydown...(*)
- **listener** The function that will receive the event object.

```javascript
myButton.addEventListener(type, listener);
```

(*) [Event reference](https://developer.mozilla.org/en-US/docs/Web/Events)


## Hands on


Crea un juego para que un usuario tenga que adivinar un número entre cero y 100:
 
    - El usuario tiene que introducir un número a través de un input y enviarlo a través de un botón. 
    - Tenemos que avisarle cada vez que pulse el botón de enviar de si el número es correcto y si no, comprobar si se ha pasado por arriba o por abajo y avisarle.
    - Si sobrepasa los 10 intentos le avisamos que ha perdido e iniciamos el juego otra vez


 Cómo hacerlo:

    1. Crea el HTML necesario: input, botón, número de vidas...etc.
    2. Crea los estilos básicos para que se vea bien
    3. Crea una variable que te de un número al azar entre cero y 100
    3. Crea una variable que registre los intentos que ha hecho el usuario. Al principio vale cero
    3. Registra el click en el botón
    4. Crea una función que compruebe si el número que ha introducido el usuario es igual al númbero al azar. 
        4.1 Si es igual: felicita al usuario visualmente y reinicia el contador de intentos a cero y crea otro número al azar 
        4.2 Si es mayor: Avisa al usuario que se ha pasado, restale una vida y continúa.
        4.3 Si es menor: Avisa al usuario que se ha ido por arriba, restale una vida y continúa.
    5. Si el usuario llega a 10 intentos, avísale que ha perdido y reinicia todos los valores.