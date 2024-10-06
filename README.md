# Todo List Project 📝

I recently completed a **Todo List Application** using **Context API** and **Local Storage** in React! 🚀 This project helped me understand the use of global state management with the **Context API** and how to persist data across browser sessions with **Local Storage**. Below are some key details and features of the project:

## Features
- **Add Todos**: Users can add new tasks to the list.
- **Edit Todos**: The tasks can be edited in real-time.
- **Complete/Uncomplete Todos**: Users can mark tasks as complete or incomplete.
- **Delete Todos**: Tasks can be removed from the list.
- **Persistent Storage**: The tasks are stored in **Local Storage**, allowing users to retain their todos even after a page refresh or closing the browser.

## Technologies Used
- **React**: For building the UI and components.
- **Context API**: To manage the state of the todos globally without prop drilling.
- **Local Storage**: To store the todos persistently.
- **Tailwind CSS**: For clean, responsive, and modern UI styling.

## Learnings & Reflections
- **Context API**: Using the **Context API** allowed me to manage the state of the todos easily across components without needing to pass props down multiple layers.
- **Local Storage**: Implementing local storage was a great way to ensure that the data persists across sessions, making the app more user-friendly.
- **Component Reusability**: The project helped me practice creating reusable components in React, such as the `TodoForm` and `TodoItem` components.

### Screenshots
*Include some screenshots of your project here*

## Code Snippets
Here is a snippet of how I managed global state using Context API:

```javascript
// context.js
import { useContext, createContext } from "react";

export const TodoContext = createContext({
  todos: [],
  addTodos: (todo) => {},
  updateTodos: (id, todo) => {},
  deleteTodos: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
