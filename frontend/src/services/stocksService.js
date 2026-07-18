import api from "./api";

export const getStocks = async () => {
  const token = localStorage.getItem("token");

  const response = await api.get("/stocks", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};