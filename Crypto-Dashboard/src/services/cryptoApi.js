import axios from "axios"


const API_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"


const FetchApi = async () => {
    // const [cryptoData, setCryptoData] = useState([]);
    const response = await axios.get(API_URL)

    console.log(response.data);
    return response.data
}


export default FetchApi