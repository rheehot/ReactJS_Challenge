import axios from "axios";

const api = axios.create({
    baseURL: "https://api.coinpaprika.com/v1/"
});

export const pricesApi = {
    getPrices: () => api.get("tickers")
};

export const exchangesApi = {
    getExchanges: () => api.get("exchanges")
};

export const coinsApi = {
    getCoins: () => api.get("coins")
};
