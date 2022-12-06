import { useState } from "react";
import { Todo } from "../pages";

export const useTodosControll = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { name: "ごんざぶろう", done: false },
    { name: "cat", done: true },
    { name: "ごんざぶろう2", done: false },
    { name: "cat2", done: true },
  ]);

  const addTodo = (text: string) => {
    if (text && todos.every((v) => v.name !== text)) {
      setTodos([...todos, { name: text, done: false }]);
    }
  };

  const deleteTodo = (todo: Todo) => {
    setTodos(todos.filter((v) => v.name !== todo.name));
  };

  const checkTodo = (name: String) => {
    setTodos(
      todos.map((v) => {
        if (v.name === name) {
          return { name: v.name, done: !v.done };
        } else {
          return v;
        }
      })
    );
  };

  return { todos, addTodo, deleteTodo, checkTodo };
};
