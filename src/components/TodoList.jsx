import TodoItem from "./TodoItem";
import { useTodos } from "../hooks/queries";

export default function TodoList({ isDone }) {
  const {
    data: todoList,
    isPending: isTodoListPending,
    isError: isTodoListError,
  } = useTodos();

  if (isTodoListPending) {
    return <div>Loading...</div>;
  }

  if (isTodoListError) {
    return <div>Error...</div>;
  }

  return (
    <section>
      <h2>{isDone ? "Done..." : "Working..."}</h2>
      <ul>
        {todoList
          .filter((todo) => todo.isDone === isDone)
          .map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        ``
      </ul>
    </section>
  );
}
