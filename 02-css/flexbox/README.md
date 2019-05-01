## introduction

During this session we will see
- Some new units of measurement:%, vh and vw.
- The properties min-width, max-width, min-height and max-height.
- How to distribute the elements on a page using Flexbox.

## Absolute units
- **Absolute units**, whose size does not vary. A pixel is always a pixel. Let's see some more units.

## Units relative to the viewport

The viewport is the visible area in a web. It measures 100vw wide and 100vh high always, on the small screen of a mobile phone or on the big screen of a laptop.

The units vw and vh allow us to adjust width and height relative to the viewport.
```css
.wrapper {
    height: 100vh;
}
```

## Unit of percentage

The **%** unit allows us to adjust sizes to be a percentage of the size of your parent tag.

```css
    .hero {
        height: 33.3%;
    }
```


## Minimum and maximum sizes

With max-width, min-width, max-height and min-height we can control the size of the elements so they are fluid and behave as we want in different sizes of browser windows.
```css
.box {
    width: 100%;
    max-width: 400px;
    min-width: 300px;
}
```

## Flexbox

According to the MDN, the property Flexible Box, or flexbox, of CSS3 is a design mode that allows you to place the elements of a page so that they behave in a predictable manner when the design of the page must accommodate different screen sizes and different devices. .
Until Flexbox appeared the only way to distribute elements horizontally (for example: a horizontal menu, or a main and a secondary block) was calculating the space that each block should occupy and controlling much that no element went out of plan.
With flexbox we can have a flexible block that fits naturally within parameters that we indicate.
We are going to follow this guide and to propose some exercises for each property. Read this complete [flexbox guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) to perform the exercises.

## What is it for
Flexbox is an essential tool in the current layout and allows us to have HTML elements that fit the different screens of different devices.

## In which cases is it used

Well there are very obvious cases, such as making a fixed foot when there is little content, or a side panel with a fixed part and a flexible part. But there are also other simpler ones such as a horizontal menu, a list of social network icons or a news where we want the image to sometimes go up or behind the text. Basically we can use it in any structure that is distributed in vertical or horizontal and on which we want to control the spacing, order or alignment.

references: [adalab-flexbox](https://books.adalab.es/materiales-front-end-e/sprint-1.-hola-mundo/1_4_posicionamiento_con_flexbox)
