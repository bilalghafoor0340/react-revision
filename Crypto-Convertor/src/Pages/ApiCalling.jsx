import React, { useEffect, useState } from "react";
import axios from "axios";
import { getApiService } from "../Services/cryptoApi";

const ApiCalling = () => {

    const [data, setData] = useState([])
  const API =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

  const getApiData = async () => {
    try {
      const res = await getApiService();
      console.log(res.data);
    //   console.log(res.data.current_price
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return <div>API Calling...</div>;
};

export default ApiCalling;