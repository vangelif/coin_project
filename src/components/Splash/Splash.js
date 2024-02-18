// import React from 'react';
import './Splash.css';

const Spash = () => {
    return (
        <div class="splash">
            <h2 class="splash__title">TRADE WITH</h2>
            <p class="splash__info1">
                <span>Zero Swaps</span> on All XM Ultra Low Accounts for more than 25 instruments!
            </p>
            <p class="splash__info2">
                Enjoy spread <span>as low as 0.6 pips and leverage up to 1000:1</span> on instruments like <span>EURUSD, USDJPY, EURJPY, GBPUSD,</span> and <span>Gold</span>.
            </p>
            <span class="splash__button">
                <button>OPEN ACCOUNT</button>
            </span>
            <span class="splash__note">
                New to trading? Try a <a href="#">Demo account.</a>
            </span>
            <footer class="splash__footer">
                Terms and Conditions apply<span style={{ color: 'red' }}>*</span>. To read the full T&Cs, <a href="#" style={{ color: 'red', textDecoration: 'none' }}>click here</a>.
            </footer>
        </div>
    );
}

export default Spash;