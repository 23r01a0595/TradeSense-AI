import axios from "axios";

const API = "http://localhost:8080/api/ai";

export const getAIRecommendation = async (stock) => {

    const response = await axios.post(`${API}/recommend`, {
        companyName: stock.companyName,
        sector: stock.sector,
        currentPrice: stock.currentPrice
    });

    return response.data;
};