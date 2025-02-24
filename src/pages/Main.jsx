import { useDispatch, useSelector } from "react-redux";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { logout } from "../redux/slices/authSlice";

export default function Main() {
  const aa = useSelector((state) => state.auth);
  const isLogin = useSelector((state) => state.auth.isLogin);
  const user = useSelector((state) => state.auth.user);

  console.log("aa => ", aa);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  console.log("전역상태로 평가되는 user 객체 ====> ", user);

  return (
    <>
      <h1>회원제 투두리스트</h1>
      {isLogin && <button onClick={handleLogout}>로그아웃</button>}

      <TodoForm />
      <TodoList isDone={false} />
      <TodoList isDone={true} />
    </>
  );
}
