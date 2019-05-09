# CSS responsive

It is fairly common to create a Web site or app that changes its user interface depending on the browser or device accessing the site to provide an optimized experience.

Developers usually create a single version of the website which doesn't care about what browser or platform is accessing the site, but instead uses feature tests to find out what code features the browser supports or what the values of certain browser features are, and then adjusts the code appropriately.

## Fluid Grids

First approach to start is with fluid measurements for our application layout (using flexible units (rem, percentages) instead of absolute(px)). This has a lot of advantages in that the layout will adapt to different viewport dimensions.

**Exercise** Build an example of a fluid layout

## Media queries

Fluid grids are a great start, but you'll notice that at certain points (known as breakpoints) the layout starts to break down. At these points you'll want to change the layout to rectify the layout problem, and this can be done using media queries.

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