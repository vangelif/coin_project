import React from 'react';
import Coin from './Coin/Coin';
import Splash from './Splash/Splash';
import Capabilities from './Capabilities/Capabilities';
import Register from './Register/Register';
import Form from './Form/Form';
// import './Home.css';

import backgroundImg from '../assets/mobile/back.png';

const Home = () => (
  <main style={{ backgroundImage: `url(${backgroundImg})` }}>
    {/* <article> */}
    <header>
      <Splash />
    </header>
    <section>
      <Coin />
      <Capabilities />
      <Register />
    </section>
    <footer>
      <Form />
    </footer>
    {/* </article> */}
  </main>
);

export default Home;
