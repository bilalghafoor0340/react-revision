import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ApiCalling from '../../Crypto-Convertor/src/Pages/ApiCalling'

function App() {
 const API =     "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"

 
  const [price , setPrice] = useState("")
  const [loading, setLoading] = useState(false)

  const fetchBitcoin = async () => {
     setLoading(true)
      try{
        const response = await axios.get(API)
        console.log(response.data);
        setPrice(response.data[0].current_price)
        
      }
      catch(err){
        console.log(err);
        
      }
      finally {
        setLoading(false)
      } 
  }

  return (
    <>
      <button onClick={fetchBitcoin}>
        SGet Bitcoin Price
      </button>
      {loading && <p>Loading...</p>}

      {price && <p>Bitcoin Price: ${price}</p>}
    </>
  )
}

 

export default App
