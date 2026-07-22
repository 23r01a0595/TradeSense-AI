import api from "./api";

export const getWatchlist = async (userId) => {
    const response = await api.get(`/watchlist/${userId}`);
    return response.data;
};

export const addToWatchlist = async (data) => {
    const response = await api.post("/watchlist", data);
    return response.data;
};

export const removeFromWatchlist = async (userId, stockId) => {
    await api.delete(`/watchlist/${userId}/${stockId}`);
};