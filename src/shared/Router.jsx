import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Main from "../pages/Main";

const PublicRoute = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
const PrivateRoute = () => {
  return (
    <>
      <Outlet />
    </>
  );
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
