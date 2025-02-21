import { useState } from "react";
import styled from "styled-components";
import useForm from "../hooks/useForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { login } from "../redux/slices/authSlice";
import { authApi } from "../api/axios";

export default function Login() {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  // 폼 상태 관리
  // formState: 폼 상태
  // onChangeHandler: 폼 상태 변경 핸들러
  // resetForm: 폼 상태 초기화 핸들러
  const { formState, onChangeHandler, resetForm } = useForm({
    id: "",
    password: "",
    nickname: "",
  });
  const { id, password, nickname } = formState;

  console.log("formState => ", formState);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (isLoginMode) {
      // 로그인 처리
      // const { data } = await axios.post(
      const { data } = await authApi.post("/login", {
        id: formState.id,
        password: formState.password,
      });

      console.log("response => ", data.accessToken);

      alert("로그인이 완료되었습니다.");
      localStorage.setItem("accessToken", data.accessToken);
      // dispatch(login());
      navigate("/");
    } else {
      // 회원가입 처리
      await axios.post("https://www.nbcamp-react-auth.link/register", {
        id: formState.id,
        password: formState.password,
        nickname: formState.nickname,
      });

      alert("회원가입이 완료되었습니다.");
      setIsLoginMode(true);
      resetForm();
    }
  };

  return (
    <Container>
      <Form onSubmit={onSubmitHandler}>
        <Title>{isLoginMode ? "로그인" : "회원가입"}</Title>
        <Input
          name="id"
          value={id}
          onChange={onChangeHandler}
          placeholder="아이디 (4~10글자)"
          minLength={4}
          maxLength={10}
        />
        <Input
          name="password"
          type="password"
          value={password}
          onChange={onChangeHandler}
          placeholder="비밀번호 (4~15글자)"
          minLength={4}
          maxLength={15}
        />
        {!isLoginMode && (
          <Input
            name="nickname"
            value={nickname}
            onChange={onChangeHandler}
            placeholder="닉네임 (1~10글자)"
            minLength={1}
            maxLength={10}
          />
        )}
        <button>{isLoginMode ? "로그인" : "회원가입"}</button>
        <ToggleText>
          <span onClick={() => setIsLoginMode((prev) => !prev)}>
            {isLoginMode ? "회원가입으로" : "로그인으로"}
          </span>
        </ToggleText>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  background-color: white;
  width: 500px;
  border-radius: 12px;
  padding: 12px;
  font-size: 16px;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 24px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid gray;
  width: 100%;
  display: block;
  margin-bottom: 16px;
  padding: 12px 0;
  outline: none;
`;

const ToggleText = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 24px;
  & span {
    color: lightgray;
    user-select: none;
    cursor: pointer;
    &:hover {
      color: black;
    }
  }
`;
