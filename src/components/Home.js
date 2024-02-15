import React from 'react';
import Coin from './Coin/Coin';
import Splash from './Splash/Splash';
import Capabilities from './Capabilities/Capabilities';
import Register from './Register/Register';


const Home = () => {
    return (
    <main>
        <article>
            <header>
                <Splash />
            </header>
            <section>
                <Coin />
                <Capabilities />
                <Register />
            </section>    
            <footer>
                <h2>form component</h2>
            </footer>
        </article>
    </main>
    );
    }

export default Home;    