# HTML structure and basic tags

Let's review the basic HTML structure again

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

We are going to review a lot of tags, so try to create these tags on your HTML file along:

## `<html>` tag
This tag open and closes our HTML document. Every code should go nested in this tag.

### Head tag

## `<head>` tag
This tags gives the browser information that is not visible to te user.

### `<title>` tag
This tag is nested inside the `head` tag. Its function is to tell the browser the title of our website

### `<meta>` tags
This tag is nested inside the `head` tag. its function is to give information to the browser about our website (author, description, robots, language, etc.)

There are many more tags available inside the `head` tag. You can check a lot of the available tags in the `head` here: https://gethead.info/

## HTML Landmarks
HTML landmarks are tags in your page to define areas like the main content or a navigation region. It defines semantically the website and also helps users using assitive technologies to navigate comfortably through the website. 

Landmarks define the outer structure of our website, defining the areas of the page based on its responsibility

### `<main>` tag
The HTML `<main>` element represents the dominant content of the `<body>` of a document. The main content area consists of content that is directly related to or expands upon the central topic of a document, or the central functionality of an application.

### `<header>` tag
The HTML `<header>` element represents introductory content, typically a group of introductory or navigational aids. It may contain some heading elements but also a logo, a search form, an author name, and other elements.

### `<nav>` tag
The HTML `<nav>` element represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and indexes.

### `<section>` tag
The HTML `<section>` element represents a standalone section — which doesn't have a more specific semantic element to represent it — contained within an HTML document.

### `<article>` tag
The HTML `<article>` element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., in syndication). Examples include: a forum post, a magazine or newspaper article, or a blog entry.

### `<aside>` tag
The HTML `<aside>` element represents a portion of a document whose content is only indirectly related to the document's main content.

### `<footer>` tag
The HTML `<footer>` element represents a footer for its nearest `<section>`. A footer typically contains information about the author of the section, copyright data or links to related documents

## HTML tags
One of HTML's main jobs is to give text structure and meaning (also known as semantics) so that a browser can display it correctly. This article explains the way HTML can be used to structure a page of text by adding headings and paragraphs, emphasizing words, creating lists, and more.

### Heading `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`
Structured content makes the reading experience easier and more enjoyable.
There are six heading elements — `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, and `<h6>`. Each element represents a different level of content in the document; `<h1>` represents the main heading, `<h2>` represents subheadings, `<h3>` represents sub-subheadings, and so on.

Preferably you should just use a single `<h1>` per page — this is the top level heading, and all others sit below this in the hierarchy.

Headings should be displayed in correct order in a hierarchy. Don't use `h3` before an `h2` 

### Paragraph `<p>`
In HTML, each paragraph has to be wrapped in a `<p>` element.

### Unordered lists `<ul>` and Ordered lists `<ol>`
Unordered lists are used to mark up lists of items for which the order of the items doesn't matter.

Ordered lists are lists in which the order of the items does matter.

Each bullet point in a list should be a list item `<li>`

```html
<ul>
  <li>milk</li>
  <li>eggs</li>
  <li>bread</li>
  <li>hummus</li>
</ul>
```

Lists can be nested

```html
<ol>
  <li>Remove the skin from the garlic, and chop coarsely.</li>
  <li>Remove all the seeds and stalk from the pepper, and chop coarsely.</li>
  <li>Add all the ingredients into a food processor.</li>
  <li>Process all the ingredients into a paste.
    <ul>
      <li>If you want a coarse "chunky" hummus, process it for a short time.</li>
      <li>If you want a smooth hummus, process it for a longer time.</li>
    </ul>
  </li>
</ol>
```

### Strong importance `<strong>`
In HTML we use the <strong> (strong importance) element to mark up important words that need to be stressed out.

```html
<p>This liquid is <strong>highly toxic</strong>.</p>
```

## Nested Elements
Tags can be nested inside of other tags. To maintain readable code, the parent tags (the outer most ones) should each be on a new line with the nested element indented.

```html
<section>
  <h1>Title</h1>
  <p>Text</p>
</section>
```

## HTML validation
HTML can be validated to ensure that we are writing 100% valid HTML. HTML is standarized by the W3C and has an available validator at [W3C - Markup Validation Service](https://validator.w3.org)


## Hands on!
Using the html structure, some of the landmarks, and the html elements learned, create a text-only page with your curriculum Vitar. Remember to be exhaustive describing every part of your CV!

Remember it should include an introduction, skills, experience, strong importance text, some info about your hobbies...etx.

Ensure that your code is validated though the W3C.





