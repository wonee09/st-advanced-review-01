import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: !!localStorage.getItem("accessToken"),
};

const authSlice = createSlice({
  name: "auth", // 이 모듈의 이름
  initialState, // 이 모듈의 초기상태 값
  reducers: {
    login: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
      localStorage.clear();
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고

export const { login, logout } = authSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default authSlice.reducer;
