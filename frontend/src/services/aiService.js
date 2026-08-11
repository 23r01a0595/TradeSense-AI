import axios from "axios";

const API =
  "https://tradesense-ai-backend-t1on.onrender.com/api/ai";
export const getAIRecommendation = async (stock) => {

    const response = await axios.post(`${API}/recommend`, {
        companyName: stock.companyName,
        sector: stock.sector,
        currentPrice: stock.currentPrice
    });

    return response.data;
};