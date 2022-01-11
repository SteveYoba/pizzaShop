import axios from 'axios';
import { useEffect} from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import {Header} from './components';
import {Home, Cart} from './Pages';
import { setPizzas } from './redux/actions/pizzas';

function App(props) {

  useEffect (() => {
    axios.get('http://localhost:3000/db.json').then ((resp) => {
      props.setPizzas(resp.data.pizzas)
    })
  })

  return (
    <div className="App">
      <div className="wrapper">
        <Header/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home pizzas = {props.items} exact/>} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    items:state.pizzas.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzas(items))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
