import TodoItem from "./TodoItem";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../contansts/queryKeys";
import { getTodos } from "../services";

export default function TodoList({ isDone }) {
  const {
    data: todoList,
    isPending: isTodoListPending,
    isError: isTodoListError,
  } = useQuery({
    queryKey: [QUERY_KEYS.TODOS],
    queryFn: getTodos,
  });

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
      </ul>
    </section>
  );
}
