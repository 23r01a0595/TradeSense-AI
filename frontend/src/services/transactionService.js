import axios from "axios";

const API = "http://localhost:8080/api/transactions";

export const getTransactions = async (userId) => {

    const response = await axios.get(`${API}/${userId}`);

    return response.data;

};