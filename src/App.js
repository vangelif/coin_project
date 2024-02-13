import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Coin from './components/Coin';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>XM</h1>
        <Coin />
      </div>
    </Provider>
  );
}

export default App;
