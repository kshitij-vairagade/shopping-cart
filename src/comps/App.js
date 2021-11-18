import "react-datepicker/dist/react-datepicker.css";
import './App.css';
import "./grid.css"
import { Provider } from 'react-redux';
import Title from './title/Title';
import Shops from './shopslist';
import { getList } from"../operations";
import store from '../store';

if(localStorage.shopList){
  store.dispatch(getList(JSON.parse()));
}

function App() {
  return (
    <Provider store={store}>
      <Title/>
      <Shops/>
    </Provider>
  );
}

export default App;