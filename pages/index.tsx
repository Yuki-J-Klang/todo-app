import { useState } from "react";
import { useTodosControll } from "../hooks/useTodosControll";

//typescript 型宣言
export type Todo = {
  name: string;
  done: boolean;
};

export default function Home() {
  const { todos, addTodo, deleteTodo, checkTodo } = useTodosControll();
  const [todoText, setTodoText] = useState("");

  return (
    <div className="text-center my-12">
      <input
        className="outline"
        value={todoText}
        onChange={(event) => setTodoText(event.target.value)}
      ></input>

      <button
        onClick={() => addTodo(todoText)}
        className="border bg-gray-300 mx-2"
      >
        追加
      </button>
      <div className="border-2 border-black mx-[20vw] max-w-[800px] my-8">
        {/* <div className="border-2 border-black w-[80vw] max-w-[600px] mx-auto my-8"> */}
        {todos.map((todo) => (
          <div className="text-center">
            <div>
              <input
                type="checkbox"
                checked={todo.done}
                onClick={() => checkTodo(todo.name)}
              />
              <p className="inline-block">{todo.name}：</p>
              <p className="inline-block">{String(todo.done)}</p>

              <button onClick={() => deleteTodo(todo)}>削除</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
