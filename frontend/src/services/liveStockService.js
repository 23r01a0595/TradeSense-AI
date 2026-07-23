import axios from "axios";

const API = "http://localhost:8080/api/live";

export const getLivePrice = async (symbol) => {

    const response = await axios.get(`${API}/${symbol}`);

    return response.data;

};