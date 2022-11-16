import axios from "axios";
import { MOCK_INFO } from "data/mock_info";
import { saveUser } from "utils/SessionHelper";
const BACKEND_BASE_URL = "http://localhost:5000";
export const loadStashes = async (userID: string) => {
  return [];
};

export const loadWallets = (userID: number) => {
  return MOCK_INFO.MOCK_WALLETS;
};

export const login = async (username: String, password: string) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Credentials": true,
  };

  const res = await axios.post(
    `${BACKEND_BASE_URL}/login`,
    {
      username: username,
      password: password,
    }
    // { headers: headers }
    // { withCredentials: true }
  );
  saveUser(res.data.user.access_token);
  return res.data;
};

export const signup = async (username: String, password: string) => {
  const res = await axios.post(`${BACKEND_BASE_URL}/signup`, {
    username: username,
    password: password,
  });
  // console.log("REQUEST Result", res);
  saveUser(res.data.user);
  return res.data;
};
