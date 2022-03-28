import axios from "axios";

export const proWorkingApi = axios.create({
    baseURL: "https://proworking-fake-api.herokuapp.com/",
});

export const chatApi = axios.create({
    baseURL: "https://api.chatengine.io",
});
