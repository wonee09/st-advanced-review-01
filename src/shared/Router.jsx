import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Login from "../pages/Login";
import Main from "../pages/Main";
import { useSelector } from "react-redux";

const PublicRoute = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  return <>{isLogin ? <Navigate to="/" /> : <Outlet />}</>;
};

// 로그인이 되어있어야만 접근할 수 있는 페이지
const PrivateRoute = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  return <>{isLogin ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
