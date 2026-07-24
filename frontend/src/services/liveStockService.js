import axios from "axios";

const API = "http://https://tradesense-ai-backend-t1on.onrender.com/api/live";

export const getLivePrice = async (symbol) => {

    const response = await axios.get(`${API}/${symbol}`);

    return response.data;

};