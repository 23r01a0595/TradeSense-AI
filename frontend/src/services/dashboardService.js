import api from "./api";

export const getDashboard = async (userId) => {
  const token = localStorage.getItem("token");

  const response = await api.get(`/dashboard?userId=${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};