import React from 'react';
import Coin from './Coin';
import Splash from './Splash/Splash';

const Home = () => {
    return (
    <main>
        <article>
            <header>
                <Splash />
            </header>
            <section>
                <Coin />
            </section>
            <section>
                <h2>capabilities component</h2>    
            </section>
            <section>
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