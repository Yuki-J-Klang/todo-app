import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { isTemplateSpan } from "typescript";
import styles from "../styles/Home.module.css";

//typescript 型宣言
type Todo = {
  name: string;
  done: boolean;
};

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([
    { name: "ごんざぶろう", done: false },
    { name: "cat", done: true },
  ]);
  const [todoText, setTodoText] = useState("");

  const addTodo = () => {
    if (todoText && todos.every((v) => v.name !== todoText)) {
      setTodos([...todos, { name: todoText, done: false }]);
    }
  };

  const deleteTodo = (todo: Todo) => {
    setTodos(todos.filter((v) => v.name !== todo.name));
  };

  return (
    <div>
      <input
        className="outline"
        value={todoText}
        onChange={(event) => setTodoText(event.target.value)}
      ></input>
      {/* <div>{todoText}</div> */}
      <button onClick={addTodo}>追加</button>
      {todos.map((todo) => (
        <div className="text-center">
          <div>
            <p className="inline-block">{todo.name}：</p>
            <p className="inline-block">{String(todo.done)}</p>

            <button onClick={() => deleteTodo(todo)}>削除</button>
          </div>
        </div>
      ))}
    </div>
  );
}
