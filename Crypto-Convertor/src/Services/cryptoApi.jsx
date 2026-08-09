import axios from "axios";


const api = axios.create({
    baseURL: "https://api.coingecko.com"
})

// create a function in w/c used this instand(api) and call get method th propt the data 

export const getApiService = () => {
    return api.get("/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
};