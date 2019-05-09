# CSS transitions and animations

It is common when developing a website to add some interactive information using transitions or animations to improve the user experience and display some beuatiful interactions.

Developers use two different techniches depending on what type of animation do they need: CSS transitions and CSS animations. While CSS transitions are somehow animations, these are much simpler tha the latter. Animations can be very advanced.

## Transitions

CSS Transitions is a module of CSS that lets you create gradual transitions between the values of specific CSS properties. The behavior of these transitions can be controlled by specifying their timing function, duration, and other attributes.

> For example, if you change the color of an element from white to black, usually the change is instantaneous. With CSS transitions enabled, changes occur at time intervals that follow an acceleration curve, all of which can be customized.

CSS transitions let you decide which properties to animate (by listing them explicitly), when the animation will start (by setting a delay), how long the transition will last (by setting a duration), and how the transition will run (by defining a timing function, e.g. linearly or quick at the beginning, slow at the end).

```css
[selector] {
  transition: <property> <duration> <timing-function> <delay>;
}
```

### transition-property

The transition-property sets the CSS properties to which a transition effect should be applied.

```css
[selector] {
  transition-property: margin-right, color;
}
```

```css
[selector] {
  transition-property: all;
}
```

### transition-duration

The transition-duration CSS property sets the length of time a transition animation should take to complete. By default, the value is 0s, meaning that no animation will occur.

The transition value usually is set in milliseconds `ms` or `s`

```css
[selector] {
  transition-property: margin-right, color;
  transition-duration: 500ms;
}
```

### transition-timing-function

The transition-timing-function CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.

This, in essence, lets you establish an acceleration curve so that the speed of the transition can vary over its duration.

```css
[selector] {
  transition-timing-function: ease-in;
}
```

Posible values are:

- transition-timing-function: ease;
- transition-timing-function: ease-in;
- transition-timing-function: ease-out;
- transition-timing-function: ease-in-out;
- transition-timing-function: linear;
- transition-timing-function: step-start;
- transition-timing-function: step-end;

### transition-delay

The transition-delay property specifies the duration to wait before starting a property's transition effect when its value changes.

```css
[selector] {
  transition-property: color;
  transition-delay: 250ms;
}
```

## Animations

CSS Animations is a module of CSS that lets you animate the values of CSS properties over time, using keyframes. The behavior of these keyframe animations can be controlled by specifying their timing function, duration, their number of repetitions, and other attributes.

Animations consist of two components, a style describing the CSS animation and a set of keyframes that indicate the start and end states of the animation’s style, as well as possible intermediate waypoints.

### Animation property

The animation property is the shorthand for multiple animation values

```css
[selector] {
  /* @keyframes duration | timing-function | delay | name */
  animation: 3s linear 1s slidein;
}
```

#### animation-name

The animation-name CSS property sets one or more animations to apply to an element. The name has to be the same of the `@keyframes`

```css
[selector] {
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

#### animation-duration

The animation-duration CSS property sets the length of time that an animation takes to complete one cycle.

```css
[selector] {
  animation-name: slidein;
  animation-duration: 3s;
}
```

#### animation-timing-function

The animation-timing-function CSS property sets how an animation progresses through the duration of each cycle.

```css
[selector] {
  animation-name: slidein;
  animation-timing-function: ease-in-out;
}
```

#### animation-delay

The animation-delay CSS property sets when an animation starts. 

```css
[selector] {
  animation-name: slidein;
  animation-delay: 2s;
}
```

#### animation-iteration-count

Configures the number of times the animation should repeat; you can specify infinite to repeat the animation indefinitely.

```css
[selector] {
  animation-name: slidein;
  animation-iteration-count: inifinite;
}
```

#### animation-direction

The animation-direction CSS property sets whether an animation should play forwards, backwards, or alternating back and forth.

```css
[selector] {
  animation-name: slidein;
  animation-direction: alternate;
}
```

### Keyframes

Once you’ve configured the animation, you need to define the appearance of the animation. This is done by establishing two or more keyframes using the `@keyframes` at-rule. Each keyframe describes how the animated element should render at a given time during the animation sequence.

Using keyframes you can define the beggining and the end of the animation plus all the intermediate steps. Remember that the `@keyframes` name should match the animation name property.

These are similar to CSS transitions written in both valid formats

```css
@keyframes slidein {
  0% {
    margin-left: 100%;
    width: 300%;
  }

  100% {
    margin-left: 0%;
    width: 100%;
  }
}
```

```css
@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

#### Multiple keyframes

So imagine your animation has multiple steps.

```css
@keyframes identifier {
  0% {
    top: 0;
    left: 0;
  }
  30% {
    top: 50px;
  }
  68%, 72% {
    left: 50px;
  }
  100% {
    top: 100px;
    left: 100%;
  }
}
```

In this case there are some properties that are not set in every step. That is correct, the property will interpolate until the next step where is set or finish if no more interpolations are available.