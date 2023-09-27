import axiosInstance from "@shared/axios";
import { AxiosResponse } from "axios";
import { toast } from "react-toastify";

type ILogin = {
  username: string;
  password: string;
};

export const loginUser = async (userInfo: ILogin) => {
  try {
    const response: AxiosResponse<any> = await axiosInstance.post(
      `auth/login`,
      userInfo,
    );
    if (response.status === 200) {
      toast.success("Successfully Logged in.");
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.id);
      return [response, null];
    }
    toast.error(response.data.message);
    return [null, null];
  } catch (err: any) {
    toast.error(err?.response?.data?.message);
    return [null, err];
  }
};
