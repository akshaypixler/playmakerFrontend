import axios from "axios";

export const axiosInstance = axios.create({
  baseURL : "http://localhost:3000/api/v1/playmaker",
  timeout : 5000,
  withCredentials : true
}); 