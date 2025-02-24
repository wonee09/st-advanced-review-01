import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTodo } from "../services";
import { QUERY_KEYS } from "../contansts/queryKeys";
import { useSelector } from "react-redux";

export default function TodoForm() {
  const queryClient = useQueryClient();

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const user = useSelector((state) => state.auth.user);
  console.log("user => ", user);

  const addMutation = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.TODOS],
      });
    },
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!title && !contents) {
      alert("내용이나 제목을 입력해주세요.");
    }

    // 실제 DB 입력 처리
    addMutation.mutate({
      title,
      contents,
      writerId: user.userId,
      isDone: false,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <label>제목: </label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>내용: </label>
      <input
        type="text"
        value={contents}
        onChange={(e) => setContents(e.target.value)}
      />
      <button type={"submit"}>추가</button>
    </form>
  );
}
