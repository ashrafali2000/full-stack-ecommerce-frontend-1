import axios from "axios";
  const axiosLib = axios.create({
    baseURL:"http://localhost:8000/"
})
export default axiosLib;