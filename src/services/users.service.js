import axios from "axios";

const usersApi = axios.create({
  baseURL: "https://63e7d624cbdc5658737e62f9.mockapi.io/users",
});

export const getUsers = async (params = {}) => {
  const { data } = await usersApi.get("", {
    params: { ...params },
  });

  return data;
};
