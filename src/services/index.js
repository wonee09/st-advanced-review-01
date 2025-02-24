import { jsonApi } from "../api/axios";

export const getTodos = async function () {
  try {
    const response = await jsonApi.get("/todos");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addTodo = async function (todo) {
  try {
    const response = await jsonApi.post("/todos", todo);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateIsDone = async function (todo) {
  try {
    const response = await jsonApi.patch(`/todos/${todo.id}`, {
      isDone: !todo.isDone,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = async function (todoId) {
  try {
    const response = await jsonApi.delete(`/todos/${todoId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
