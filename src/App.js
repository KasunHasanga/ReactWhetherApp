import { useState } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home'


function App() {
 
  const [contryArray, setcontryArray] = useState([]);
  return (
    <div >
    <Header contryArray={contryArray} setcontryArray={setcontryArray}/>
    <Home contryArray={contryArray} setcontryArray={setcontryArray}/>
    <Footer/>
    </div>
  );
}

export default App;
