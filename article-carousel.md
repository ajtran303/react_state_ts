# Article Carousel Example

A carousel is a common interface for a series of web content, like images or articles. It displays one piece of content at a time, and a user can click to navigate to the previous or the next piece of content.

We will implement an article carousel that keeps track of state (the current article displayed) and that handles click events to change the state.

Add code to `ArticleCarousel.tsx` to complete the following requirements: 

- The article carousel displays one article at a time
- Clicking the "Next Article" button displays the next article
- Clicking the "Previous Article" button displays the previous article

For reference, here is what that component looks like:

```js
const article1 = // JSX
const article2 = // JSX
const article3 = // JSX

function ArticleCarousel() {
  return (
    <section className="article-carousel">
      <h2>Article Carousel Example</h2>

      <button>Previous Article</button>
      <button>Next Article</button>

      {article1}
      {article2}
      {article3}
    </section>
  )
}

export default ArticleCarousel

```

## Thinking about the solution

***There is more than one solution to achieve these requirements. I will show you one way to get you started. I encourage you to experiment with other approaches to this problem!***

In the previous example, we used state to store a number that could be incremented and decremented. Using a number as state in the `ArticleCarousel` could work here as well. Imagine if we put all of the articles into an array. A number could be an index of the array to access one article at a time. The "next" and "previous" buttons can handle click events that call a function to increment or decrement this "index" value, similar to the `Counter` component. Thus, when the index value changes, so does the article being displayed.

## Create an array of articles

For this solution to work, we will need to add an array of articles:

```js
// the beginning

const articles = [article1, article2, article3]

function ArticleCarousel() {
// the rest
```

So now, when we want to access a certain article, we can use indexing: `articles[0]`, `articles[1]`, and `articles[2]`. The value of the index can be represented by state that changes depending on which buttons the user clicks on.

## Import the useState hook

```js
// At the top of the file
import { useState } from 'react'
```

## Call the useState function

Recall that the `useState` hook is a function! It takes an argument that represents the initial state. This initial state can be as simple as a primitive value (strings, numbers, null) or a more complex object (array, object, array of objects).

Recall that the `useState` function returns an array of 2 items. The first item is the *current state*. It is the same data type that as the argument that is passed into the `useState` function. The second item is a *setter function*. It takes an argument of the *new state*. When the setter function is called, the state will be updated to the new state.

Let's see it in code:

```js
// the beginning

function ArticleCarousel() {
  const [index, setIndex] = useState<number>(0);

  return (

// the rest
```

Let's zoom in and break down the line of code:

```js
const [index, setIndex] = useState<number>(0);
```

On the left side of the equals sign, we use array destructuring to declare and assign two variables on the same line: `index` and `setIndex`. (The convention for these variable names is to use a descriptive name for the state being represented, and then prepending `set` to that name for the setter function.)

On the right side of the equals sign, we use `0` as the initial value of the state, to represent the "first" index position that will be used with the `articles` array. Note that we add type annotation to the function - this signals to other developers and the TypeScript compiler what data type we expect - a number. Adding a type annotation to the `useState` hook is a good practice because it adds more context on what type and "shape" we expect state to be.

## Add event handler functions that call the state setter function

React has a collection of *event props* that are similar to HTML *event attributes*. The difference is that the React props are camelCased, eg. we use the `onClick` prop on an element instead of the `onclick` HTML attribute.

Event handling in React is more streamlined compared to handling HTML events with vanilla JavaScript. You don't need to attach an event listener to an HTML element. Instead, you just pass an event handler function to the event prop:

```js
<button onClick={handlePreviousArticleClick}>Previous Article</button>
```

***NOTE:*** A big "gotcha" is that the function is passed without being called! That is to say, we don't add parentheses to the end of function, we just pass the name of the function. 

The naming convention of the event handler function is: it starts with the word `handle` and then it describes the event. If you have only one `onClick` event to handle, the function name could be as simple as `handleClick`. Since we have two `onClick` events, we can use `handlePreviousArticleClick` to be specific.

Note that I am passing in a function that I have not defined yet. That is okay. It's writing code in the paradigm of "declarative programming". We write **what** we want to happen instead of **how** it is supposed to happen. Don't worry, we will write the implementation now:

```js
function handlePreviousArticleClick(): void {
  const previousIndex = index - 1;
  setIndex(previousIndex);

  // setIndex(index - 1); is also okay
}
```

This function signature has a return type annotation of `void`, meaning that we don't care about the return value of the function. It is a sign to developers that the function is meant to have some side effects, and that the return value is not important.

Another way to add event handler functions is by using an anonymous function. 

```js
<button onClick={() => setIndex(index + 1)}>Next Article</button>
```

One benefit to this approach is that it keeps the code concise and easy to understand. The tradeoff is that this is only the case when the event handler function only has to trigger **one** side effect. Using a named function is more appropriate when you want to trigger a series of side effects.

Consider this hypothetical example:

```js
<Form onSubmit={handleSubmit} />
```

The `handleSubmit` function might pre-process form data, make an API call, and *then* call the `setWhateverState` function. That's three whole things!

## Use the state variable

Now we can use the state variable, `index` to choose which article to render. Your `ArticleCarousel` component might look like this if you have been following along: 

```js
import { useState } from 'react'

// the articles

const articles = [article1, article2, article3];

function ArticleCarousel() {
  const [index, setIndex] = useState<number>(0);

  function handlePreviousArticleClick(): void {
    const previousIndex = index - 1; 
    setIndex(previousIndex);
  }

  return (
    <section className="article-carousel">
      <h2>Article Carousel Example</h2>

      <button onClick={handlePreviousArticleClick}>Previous Article</button>
      <button onClick={() => setIndex(index + 1)}>Next Article</button>

      {article1}
      {article2}
      {article3}

    </section>
  )
}
```

Let's replace the series of curly brace expressions with a new one:

```js
{articles[index]}
```

Let's take this implementation for a spin!

In your terminal, run `npm run dev` and use the `o` keyboard shortcut to launch the app in your browser.

Click on the "Next Article" and "Previous Article" buttons. Do the articles change as expected? If they do, good job!

***Note:*** When the state variable is updated, it triggers a re-render to display the changes in the UI!

## Bonus

There is a "bug" in this implementation! Clicking "too much" of one button will cause the articles to disappear. You can "reset" the state of the app by refreshing the page.

What is causing this unexpected behavior? How might you squash this bug?

There is one approach you might take in the first [independent challenge](/lesson-plan.md#independent-challenges) of the lesson plan. If you want a hint, go there and see the next requirements.

Otherwise, feel free to implement your own solution!