import axios from "axios";

const API = "http://https://tradesense-ai-backend-t1on.onrender.com/api/transactions";

export const getTransactions = async (userId) => {

    const response = await axios.get(`${API}/${userId}`);

    return response.data;

};