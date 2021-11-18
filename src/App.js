import './App.css';
import { Provider } from 'react-redux';
import Title from './comps/title/Title';
import Shops from './comps/shopslist';
import { getList } from"./operations";
import shop from './shop';

if(localStorage.shopList){
  shop.dispatch(getList(JSON.parse()));
}

function App() {
  return (
    <Provider shop={shop}>
      <Title/>
      <Shops/>
    </Provider>
  );
}

export default App;
