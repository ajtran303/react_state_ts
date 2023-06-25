# Lesson Plan

State and Click Events in React with TypeScript

Prequisites: You can create a basic React component (with Typescript).

Duration: 15-20 minutes

## Introduction

### Level Set / Review

- What is a component in React?
- What are props in React?
- What is your familiarity with state in general programming? When have you used state before?
- What is your familiarity with event attributes in HTML? Have you used JavaScript to handle HTML events before?

## Part 1: Counter Component

### Requirements

- Clicking a button increases the number displayed
- Clicking another button decreases the number displayed

### Implementing State in the Counter Component

- Demonstrate how to import the useState hook and declare a state variable to store the counter value.
- Modify the JSX code to display the current value from the state variable.
- Explain how the useState hook allows updating the state using the provided function.

### Handling Click Events in the Counter Component

- Discuss the importance of click event handling to enable interactivity in components.
- Show how to add an event handler function to the button using the onClick attribute.
- Inside the event handler, demonstrate how to update the state to increment the counter value.
- Explain that this triggers a re-render, reflecting the updated value in the UI.

## Part 2: Article Carousel Component

### Requirements

- THe article carousel displays one article at a time
- Clicking the next button displays the next article
- The next button is not visible when there is no "next article"
- Clicking the previous article displays the next article
- The previous button is not visible when there is no "previous article"

### Implementing the Article Carousel

- Introduce the second part of the lesson, focusing on creating an article carousel with state and event handling.
- Identify the "Article Carousel" section in the code and explain its purpose.
- Discuss the need for state to track the currently displayed article.

### Handling Click Events in the Article Carousel

- Show how to add event handler functions to the "Previous Article" and "Next Article" buttons using the onClick attribute.
- Inside the event handlers, demonstrate how to update the state to navigate through the articles.
- Explain that the state update triggers a re-render, displaying the corresponding article in the UI.

## Conclusion

- Recap the main points covered in the lesson, highlighting the use of state and click event handling in React with TypeScript.
- Emphasize that the lesson covered a simplified counter component and article carousel but can be expanded for more complex scenarios.
- Encourage students to explore and modify the code further, experimenting with additional stateful components and event handling.

## Checks For Understanding

1. What is state in React? How would you define it?
1. How is state different from props in React?
1. What is the purpose of managing state in a component?
1. What are some scenarios where you think state management would be useful in a React application?
1. Can you explain the useState hook's purpose and how it is used?
1. What are some ways you can update the state in a React component when handling a click event?
1. How do state updates affect the rendering of a React component?
1. Can you describe a scenario where you might use click event handling and state together in a React component?

## Additional Resources

- [Responding to Events (Official React documentation)](https://react.dev/learn/responding-to-events)
- [List of HTML Event Attributes (W3 Schools)](https://www.w3schools.com/tags/ref_eventattributes.asp)
- [List of React Event handlers (Official React documentation)](https://react.dev/reference/react-dom/components/common#react-event-object)
  - Scroll down to see the various React events that correspond to their HTML counterparts (eg. React's "onClick" vs. HTML's "onclick"), and examples of how handlers are attached as anonymous functions
