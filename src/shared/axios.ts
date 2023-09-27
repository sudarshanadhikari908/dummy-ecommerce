import config from "@shared/config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const { baseURL } = config.gateway;
const axiosInstance = axios.create({
  baseURL: `${baseURL}`,
});

axiosInstance.interceptors.response.use(
  (response) => {
    // If the response status code is 401, redirect to the login page
    if (response.status === 401) {
      const navigate = useNavigate();
      localStorage.removeItem("token");
      navigate("/auth/login");
    }
    return response;
  },
  (error) => {
    // Handle other errors here
    return Promise.reject(error);
  },
);

export default axiosInstance;
