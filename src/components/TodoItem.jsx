// import { useDispatch } from "react-redux";
// import { deleteTodo, updateIsDone } from "../redux/slices/todoSlice.js";
import { jsonApi } from "../api/axios.js";

export default function TodoItem({ todo }) {
  const onUpdateIsDone = async (a, todoId) => {
    await jsonApi.patch(`/todos/${todoId}`, {
      isDone: !a.isDone,
    });
    // dispatch(updateIsDone(todoId));
  };

  const onDeleteTodo = async (todoId) => {
    await jsonApi.delete(`/todos/${todoId}`);
    // dispatch(deleteTodo(todoId));
  };

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
      <section>
        <button onClick={() => onUpdateIsDone(todo, todo.id)}>
          {todo.isDone ? "취소" : "완료"}
        </button>
        <button onClick={() => onDeleteTodo(todo.id)}>삭제</button>
      </section>
    </li>
  );
}
