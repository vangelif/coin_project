import React from 'react';
import Coin from './Coin';
import Splash from './Splash/Splash';
import Capabilities from './Capabilities/Capabilities';

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
                <h2>register component</h2>
            </section>    
            <footer>
                <h2>form component</h2>
            </footer>
        </article>
    </main>
    );
    }

export default Home;    