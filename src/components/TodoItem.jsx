import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "../contansts/queryKeys.js";
import { deleteTodo, updateIsDone } from "../services/index.js";
import { useSelector } from "react-redux";
export default function TodoItem({ todo }) {
  const queryClient = useQueryClient();

  const user = useSelector((state) => state.auth.user);

  const updateIsDoneMutation = useMutation({
    mutationFn: updateIsDone,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.TODOS],
      });
    },
  });

  const deleteTodoMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.TODOS],
      });
    },
  });
  return (
    <li
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        border: "1px solid black",
        width: "500px",
        height: "150px",
      }}
    >
      <section>
        <p>제목: {todo.title}</p>
        <p>내용: {todo.contents}</p>
      </section>
      {user.userId === todo.writerId && (
        <section>
          <button onClick={() => updateIsDoneMutation.mutate(todo)}>
            {todo.isDone ? "취소" : "완료"}
          </button>
          <button onClick={() => deleteTodoMutation.mutate(todo.id)}>
            삭제
          </button>
        </section>
      )}
    </li>
  );
}
