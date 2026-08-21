
import { useState , useEffect} from 'react';
import './App.css'
import FetchApi from "./services/cryptoApi"
import CryptoCard from './components/CryptoCard';

function App() {
  // cryptoData → What data did we receive?
const [cryptoData, setCryptoData] = useState([]);

// isLoading → Is the API request still happening?
const [isLoading, setIsLoading] = useState(true)
// Why true?
// Because when the application first loads, we haven't received the API response yet.
// Once the data is received, we no longer need loading state:

const [error, setError] = useState(null);


useEffect(() => {
  const getCryptoData = async () => {
    try{
      const data = await FetchApi();
      setCryptoData(data)
      setIsLoading(false)
    }
    catch(err){
      setError("⚠️ Failed to fetch cryptocurrency data.")
      setIsLoading(false)
      console.log(err);
      
    }
  }
  getCryptoData()
}, [])

  return (
    <div>
    {/* in this handle the three state  */}
     {isLoading ? <p>Loading state ......</p> :
      error ? <p>{error}</p> : cryptoData.map((data) => (
        <CryptoCard key={data.id} crypto={data}/>
      ))
     }
     
    </div>
  )

}

export default App
