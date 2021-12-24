import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import {Header} from './components';
import {Home, Cart} from './Pages/';


function App() {
  const [pizzas, setPizzas] = useState([])

  useEffect (() => {
    axios.get('http://localhost:3000/db.json').then ((resp) => {
      setPizzas(resp.data.pizzas)
    })
  }, [])

  return (
    <div className="App">
      <div className="wrapper">
        <Header/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home pizzas = {pizzas} exact/>} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
