
import './App.css'
// for css
import Alert from './components/Alert'
import Contact from './components/Contact'
import CustomBtn from './components/CustomBtn'
// namelist for key and index value
import NameList from './components/NameList'
import NewsLetter from './components/NewsLetter'
import ProductList from './components/ProductList'
import UserInfo from './components/UserInfo'

function App() {
 

  return (
    <div>
      <Contact/>
      <NewsLetter/>
      <CustomBtn text= "Like"/>
      <CustomBtn text= "Bookmark"/>
      <Alert type="success">alert the msg</Alert>
      <Alert type="error">alert the msg</Alert>
      <NameList/>
      <ProductList/>
      <UserInfo name="Bilal" isOnline={true} isOffline= {true}/>
      <UserInfo name="Abbas" isOnline={false} isOffline={false}/>
    </div>
  )
}

export default App
