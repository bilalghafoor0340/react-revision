import { useEffect, useState } from 'react'
import axios from "axios"
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [data, setData] = useState([])
    const URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"

    const getData = async () => {
    try{
      const response = await axios.get(URL)
      console.log(response.data);
      // console.log(response.data[0].id);
      // console.log(response.data[0].current_price);
      // console.log(response.data[0].ath_date);
      // console.log(response.data[0].last_updated);
      
      setData(response.data)
      console.log("Updated:", new Date().toLocaleTimeString());
      // console.log(data)
    
    }
    catch(err){
      console.log(err);
      
    }
    
    
    }


    useEffect(() => {
      getData();
      // Call API every 10 seconds
      const interval = setInterval(() => {
       getData();
  }, 10000);
  return () => clearInterval(interval);
    },[])

  return (
    
  <div
    style={{
      width: "90%",
      maxWidth: "1200px",
      margin: "40px auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
    }}
  >
    {data.map((coin) => (
      <div
        key={coin.id}
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          border: "1px solid #ddd",
        }}
      >
        <h2
          style={{
            color: "#2563eb",
            textTransform: "capitalize",
            marginBottom: "10px",
          }}
        >
          {coin.id}
        </h2>

        <h3
          style={{
            color: "#16a34a",
            marginBottom: "10px",
          }}
        >
          ${coin.current_price}
        </h3>

        <p
          style={{
            color: "#666",
            fontSize: "14px",
          }}
        >
          {coin.last_updated}
        </p>
      </div>
    ))}
  </div>
  )
}

export default App
