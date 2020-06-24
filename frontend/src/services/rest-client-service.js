import axios from "axios";

const API_BASE_URL = "http://localhost:3333"

export const projectRestClient = () => {
    const accessToken = localStorage.getItem("user-tkn");

    const instance = axios.create({
        baseURL: API_BASE_URL,
        headers: {
            authorization: `Bearer ${accessToken}`
        }
    });

    return instance;
}

export const restClient = () => {
    const instance = axios.create();
    return instance;
}