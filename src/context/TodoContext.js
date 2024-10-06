import { useContext, createContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Study Context",
      complete: false,
    },
  ],
  addTodos: (todo) => {},
  updateTodos: (id, todo) => {},
  deleteTodos: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
