import api from "./api";

export const buyStock = async (purchaseData) => {

    const response = await api.post("/portfolio/buy", purchaseData);

    return response.data;
};

export const getPortfolio = async (userId) => {

    const response = await api.get(`/portfolio/${userId}`);

    return response.data;
};

export const sellStock = async (sellData) => {

    const response = await api.post("/portfolio/sell", sellData);

    return response.data;
};