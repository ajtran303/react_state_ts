# React State with Typescript

Tutorial for stateful React with Typescript. With two activities to create stateful components that handle click events.

We will build a counter that can count up and down, and an article carousel that can display different content when the user clicks on "next" or "previous."

## Learning Objectives

- Decide when and where to use state in a component
- Handle click events
- Use and update state

## Local Install

### Prerequisites

You must have `node` installed, the recommended version is 14.18+. Check your node version with:

```bash
$ node -v
```

### Local Installation

Fork and clone this repo: ([Fork Link](https://github.com/ajtran303/react_state_ts/fork)).

```bash
$ cd react_state_ts
```

Install the project dependencies

```bash
$ npm install
```

## Local development

Start the development server

```bash
$ npm run dev
```

The console will be "parked" while running the server. The webapp will now be served at on [localhost at port 5173](http://localhost:5173/).

There are some helpful keyboard commands to know when focused in the terminal during this time. You will see them in the console output:

```
  VITE v4.3.9  ready in 1248 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help

  Shortcuts
  press r to restart the server
  press u to show server url
  press o to open in browser
  press c to clear console
  press q to quit
```

The commands I find most helpful are `o` to open the app in the browser and `q` to stop the server.

While running the server, you can make code changes and they will be reflected in the browser in real time!

## Directory and File Structure

### index.html

In the root directory there is `index.html`. This is the "shell" of the app. Look at the body:

```html
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>
```

There is a `div` element with id `root`, and then a `script` tag pointing to a module in the `src/` folder.

### src/main.tsx

Let's look at `src/main.tsx`:

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

This file is our JavaScript's "main" entry point into the html. It creates a `ReactDOM` root with the html element with the id `root` (the div mentioned earlier), and renders an `App` componenent inside of it.

Notice that the app is nested in a helper component called `StrictMode`. If you have not used this before, just know that it helps developers debug React components. Read more about Strict Mode on the [React docs](https://react.dev/reference/react/StrictMode).

### src/index.css

Before we move on to the JavaScript that we will be playing with, look at `src/index.css`. In this project, we will be using the [alternative box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model#the_alternative_css_box_model) of CSS. Read the comment for a quick explanation, and read the documentation linked for more information. This is going to be the *only* stylesheet file. For this lesson, we will style our components when needed by writing the CSS in the component itself.

### src/App.tsc

The `App` component is the first component we will be working with. It is responsible for being the "container" of all the contents we want to render in the browser. Note the two components, `Counter` and `ArticleCarousel`. We will be using these components to learn about handling click events to manage state.
