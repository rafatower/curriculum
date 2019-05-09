# CSS responsive

It is fairly common to create a Web site or app that changes its user interface depending on the browser or device accessing the site to provide an optimized experience.

Developers usually create a single version of the website which doesn't care about what browser or platform is accessing the site, but instead uses feature tests to find out what code features the browser supports or what the values of certain browser features are, and then adjusts the code appropriately.

## Fluid Grids

First approach to start is with fluid measurements for our application layout (using flexible units (rem, percentages) instead of absolute(px)). This has a lot of advantages in that the layout will adapt to different viewport dimensions.

**Exercise** Build an example of a fluid layout

## Mobile first

At implementation stage, we present the mobile layout and functionality as the default configuration provided, before additional information is loaded on top of that, whenever appropriate. This means that mobiles (often the target devices with the least available member, bandwidth or processing power available) can be given an experience suitable for them as quickly as possible, and as free as possible of extraneous information. 

This methodology of building a version for the relatively lower browser is called **progressive enhancement**

**Mobile first**, as the name suggests, means that we start the product design from the mobile end which has more restrictions, then expand its features to create a tablet or desktop version.

## DevTools responsive mode

With Responsive Design Mode enabled, the content area for web pages is set to the screen size for the particular device. Initially, it's set to 320 x 480 pixels.

The most obvious factor here is screen size, but there are other factors as well, including the pixel density of the display and whether it supports touch. Responsive Design Mode gives you a simple way to simulate these factors, to test how your website will look and behave on different devices.

Open your developer tools and find the `responsive mode`. It could be displayed a simple icon looking like a mobile phone.


## Media queries

Fluid grids are a great start, but you'll notice that at certain points (known as breakpoints) the layout starts to break down. At these points you'll want to change the layout to rectify the layout problem, and this can be done using media queries.

**Media queries** let you adapt your site or app depending on the presence or value of various device characteristics and parameters.

```css
.box {
    width: 75%;
}

@media all and (max-width: 1024px) {
  .box {
      width: 50%;
  }
}
```

### Media features

Media features describe specific characteristics of the user agent, output device, or environment. When selecting our media query we can target the device based on multipe parameters

- Width of the viewport (`width`, `max-width` or `min-width`) *Most used query*
- Height of the viewport (`height`, `max-height` or `min-height`)
- Aspect ratio of the viewport (`aspect-ratio: 4/3`)
- Orientation of the device (`portrait` or `landscape`)
- And [many more features](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#Media_features)

### Media operators

The logical operators `not`, `and`, and `only` can be used to compose a complex media query. You will probably use the `and` operator.

```css
@media (min-width: 30em) and (orientation: landscape) {
  .box {
      width: 50%;
  }
}
```