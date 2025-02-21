import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import axios from "axios";

export default function TodoList({ isDone }) {
  const [todoList, setTodoList] = useState([]);
  const initData = async () => {
    const response = await axios.get("http://localhost:4000/todos");
    console.log("response => ", response);
    setTodoList(response.data);
  };
  initData();

  return (
    <section>
      <h2>{isDone ? "Done..." : "Working..."}</h2>
      <ul>
        {todoList
          .filter((todo) => todo.isDone === isDone)
          .map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
      </ul>
    </section>
  );
}
