# HTML advanced elements and properties
We've already learned som of the most important HTML tags. Let's see some more HTML, review how to use them and lear how to use properties.

## HTML attributes
An attribute extends a tag, changing its behavior or providing metadata. An attribute always has the form name=value (the attribute's identifier followed by its associated value).

```html
<main id="page-site">
    <h1 class="title">Page title</h1>
</main>
```

Some common HTML attributes are:

- **id**: Defines a unique identifier (ID) which must be unique in the whole document.
- **class**: A space-separated list of the classes of the element. Classes allows CSS and JavaScript to select.
- **hidden**: An attribute indicates that the element is not yet, or is no longer, relevant.
- **title**: Contains a text representing advisory information related to the element it belongs to.

Some tags have specific attributes that should only be used in that tag.

## Hyperlinks
A basic link is created by wrapping the text (or other content, see Block level links) you want to turn into a link inside an `<a>` element, and giving it an href attribute (also known as a Hypertext Reference , or target) that will contain the web address you want the link to point to.

```html
<a href="https://madridforrefugees.org/en/the-organisation/mfr-coding/">MFR Coding website</a>.
```

**Absolute and relative paths** Hyperlink tags can link to both parts of your own page, or to external pages.

- `href="https://madridforrefugees.org/en/the-organisation/mfr-coding/"` links to an external website.
- `href="#mfr-coding"` links to a part of your website with an attribute id with a value of `mfr-coding`
- `href="mailto:email@example.com"` will try to open your default email software to send an email to this email address.

Read more information about [Hyperlinks at MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)

## Images `<img>`
The HTML <img> element embeds an image into the document. Formats could be _jpg_, _gif_, _png_ or _svg_.

```html
<img src="https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif" alt="Animated image of a cat coding">
```

An `<img>` tag should include two attributes:

- **src**: The image URL. This attribute is mandatory.
- **alt**: This attribute defines a description of the image.

Read more information about [Images at MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)

## Description list `<dd>` and description term `<dt>`
The purpose of these lists is to mark up a set of items and their associated descriptions, such as terms and definitions, or questions and answers. 

```html
<dl>
  <dt>soliloquy</dt>
  <dd>In drama, where a character speaks to themselves, representing their inner thoughts or feelings and in the process relaying them to the audience (but not to other characters.)</dd>
  <dt>monologue</dt>
  <dd>In drama, where a character speaks their thoughts out loud to share them with the audience and any other characters present.</dd>
  <dt>aside</dt>
  <dd>In drama, where a character shares a comment only with the audience for humorous or dramatic effect. This is usually a feeling, thought, or piece of additional background information.</dd>
</dl>
```

## Blockquotes
This is an element that is used for quoting content from somewhere else.

**Block quotations**
```html
<blockquote cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote">
  <p>The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or <em>HTML Block
  Quotation Element</em>) indicates that the enclosed text is an extended quotation.</p>
</blockquote>
```

**Inline quotations**
```html
<p>The quote element is <q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q">intended
for short quotations that don't require paragraph breaks.</q></p>
```

## Non semantic html tags
Sometimes you'll come across a situation where you can't find an ideal semantic element to group some items together or wrap some content. Sometimes you might want to just group a set of elements together to affect them all as a single entity with some CSS or JavaScript. 

### Inline non-semantic tag `<span>`
The HTML `<span>` element is a generic inline container for phrasing content, which does not inherently represent anything.

### Block non-semantic tag `<div>`
The HTML Content Division element `<div>` is the generic container for flow content. It has no effect on the content or layout until styled using CSS. As a "pure" container, the <div> element does not inherently represent anything.

## Hands on!
Add a navigation area into your website. Link to other websites, to other parts of your site or to other pages in your website. You can also divide your website in different files and link them.

Use the tags you learned in this class to add some images, quotes, descriptions...etc.

## Advanced exercise

Create a skeleton of different webpages: 
    1. A newsletter.
    2. A shopping page.
    3. A blog.  
