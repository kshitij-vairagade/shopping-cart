import './App.css';
import { Provider } from 'react-redux';
import Title from './comps/Title';

function App() {
  return (
    <Provider store={store}>
      <Title/>
      <Shops/>
    </Provider>
  );
}

export default App;
