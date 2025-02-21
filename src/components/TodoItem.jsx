// Hint: TodoItem 컴포넌트는 props 를 받습니다.
import { useDispatch } from "react-redux";
import { deleteTodo, updateIsDone } from "../redux/slices/todoSlice.js";
import axios from "axios";

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const onUpdateIsDone = async () => {
    // const response = await axios.put(`http://localhost:4000/todos/${todo.id}`, {
    const response = await axios.patch(
      `http://localhost:4000/todos/${todo.id}`,
      {
        isDone: !todo.isDone,
      }
    );
    console.log("response => ", response);
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
        <button onClick={() => dispatch(updateIsDone(todo.id))}>
          {todo.isDone ? "취소" : "완료"}
        </button>
        <button onClick={() => dispatch(deleteTodo(todo.id))}>삭제</button>
      </section>
    </li>
  );
}
