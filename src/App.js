import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Layout from './components/Layout';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Layout />
      </div>
    </Provider>
  );
}

export default App;
