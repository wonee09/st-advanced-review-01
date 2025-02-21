import { useSelector } from "react-redux";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

export default function Main() {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <>
      <h1>회원제 투두리스트</h1>
      <button>로그아웃</button>
      <TodoForm />
      <TodoList isDone={false} todos={todos} />
      <TodoList isDone={true} todos={todos} />
    </>
  );
}
