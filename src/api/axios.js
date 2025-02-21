import axios from "axios";

const authApi = axios.create({
  baseURL: "https://www.nbcamp-react-auth.link",
});

const jsonApi = axios.create({
  baseURL: "http://localhost:5000",
});

export { authApi, jsonApi };
