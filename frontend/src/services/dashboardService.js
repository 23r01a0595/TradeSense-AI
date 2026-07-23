import api from "./api";

export const getDashboard = async (userId) => {

    const token = localStorage.getItem("token");

    const response = await api.get(
        `/dashboard-analytics/${userId}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return response.data;

};