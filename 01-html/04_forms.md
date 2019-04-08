# Forms
We've covered basic HTML elements and attributes. We already know how to create static semantic HTML websites, display information, link pages..etc. Now, we will add a very important part of HTML: forms. 

**Forms are essential to interact and gather data from the user**, and its very important to use semantically correct forms. The data gathered in a form is usually sent to a server, but nowadays it can be used in javascript to create interaction.

A form is made of multiple HTML elements: labels, text inputs, checkboxes, radio buttons, buttons...etc.

> Warning: there is a lot of confussion on how to use forms, so be very careful when using information from other sources.

## Hands on!

Draw a form with the information we would like to gather:
  
![A form drawing](https://i1.wp.com/wp.laravel-news.com/wp-content/uploads/2016/03/form-drawing.jpg?resize=525%2C586)

## The `form` element

The HTML `<form>` element represents a document section that contains interactive controls for submitting information.

```html
<form action="url" method="post">
  <!-- More tags here -->
</form>
```

A form should contain two attributes:

- **action**: The location where the information will be submitted.
- **method**: The HTTP method to send the data, it can be GET or POST (for now, lets keep it simple, just use POST) 

Some tags have specific attributes that should only be used in that tag.

## The `input` element

The HTML `<input>` element is used to create input widget forms in order to accept data from the user; a wide variety of types of input data and control widgets are available.

```html
<form action="url" method="post">
  <input type="text" name="user_name">
</form>
```

An input element should have two attributes:

- **type**: This is the most important attribute. It defines the behaviour of the input and will change how it works in differente devices.
  - **type="email"** will improve the user experience in devices to add an email
  - **type="password"** will hide the user input
  - **type="url"** will improve the user experience in devices to add an url
  - **type="number"** will improve the user experience in devices to add  number
  - **type="color"** will display a color selector
- **name**: The input's name, to identify the input in the data submitted with the form's data.
- **value**: The default value in the input
- **placeholder**: A hint of the expected value.

## The `label` element

A `label` element associates a form element with its caption, not only visually, but also programmatically.

To associate the `<label>` with an `<input>` element:

- You cane give the `<input>` an id attribute. The `<label>` then needs a `for` attribute whose value is the same as the input's id.
- You can nest the `<input>` directly inside the `<label>`, in which case the for and id attributes are not needed because the association is implicit

Examples:

```html
<form action="url" method="post">
  <div>
    <label for="name">Name:</label>
    <input type="text" id="name" name="user_name">
  </div>
</form>
```

or

```html
<form action="url" method="post">
  <div>
    <label for="name">
      Name:
      <input type="text" id="name" name="user_name">
    </label>
  </div>
</form>
```

The `<div>` elements are there to conveniently structure our code and improve legibility when we have multiple fields.

### Multiple `labels` with the same `for`

It's better not to use multiple `<label>` elements with the same `for` because it can cause problems with assistive technologies. In this case, it is recommended to use the parent `label` with nested inputs.

## The `textarea` element

The HTML `<textarea>` element represents a multi-line text input, useful when you want to allow users to enter a sizeable amount of text, for example a comment on a review or feedback form.

```html
<form action="url" method="post">
  <div>
    <label for="story">Tell us your story:</label>
    <textarea id="story" name="story">
      It was a dark and stormy night...
    </textarea>
  </div>
</form>
```

Be careful, the `<input>` tag is a self-closed tag, while `<textarea>` is a open tag. Inside a `<textarea>`, you can add the default text.

## The `select` and `option` elements

The HTML `<select>` element represents a control that provides a menu of options. A `select` is composed of multiple `options`

```html
<form action="url" method="post">
  <div>
    <label for="fav-animal">Choose your favourite animal:</label>
    <select id="fav-animal" name="fav-animal">
      <option>Diplodocus</option>
      <option selected>Jellyfish</option>
      <option>Cockroach</option>
    </select>
  </div>
</form>
```

If an `option` has the selected attribute, will be the default selected value for the `select`

## The `button` element

The HTML `<button>` element represents a clickable button.

```html
<form action="url" method="post">
  <div>
    <button type="submit">Send your message</button>
  </div>
</form>
```

A `<button>` element should have one attribute:

- **type**: The type of the button:
  - **submit**: The button submits the form data to the server. This is the default if the attribute is not specified
  - **button**: The button has no default behavior. It usually will be triggered with javascript events.

## Hands on!

Remember that we are still using HTML, so use the full potential of HTML: sections, lists, strong..etc.

### Basic exercise: contact form
Create a contact form in your website. Ask the user for: name, email, date of birth and comments.


### Advanced exercise: payment form

Create a payment form. It should ask the user for: name,email, password, card type, card number and expiration date.

## Resources

- [The HTML `form` element in MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
- [The HTML `input` element in MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
- [The HTML `label` element in MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)
- [The HTML `button` element in MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)