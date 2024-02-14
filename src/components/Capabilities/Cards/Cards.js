import dollarIcon from '../../../assets/capabilities/dollar-icon.png';
import techIcon from '../../../assets/capabilities/tech-icon.png';
import fastIcon from '../../../assets/capabilities/fast-execusion-icon.png'
import priceIcon from '../../../assets/capabilities/competitive-pricing-icon.png';
import './Cards.css';


const Cards = () => {
    return (
    <article class="cards-container">
        <div class="cards__item">
            <section class="cards__card">
                <h4>Superior Trade Execution</h4>                
                <img src={fastIcon} alt="Superior Trade Execution" />
            </section>
                <hr />
                <p>
                    <span>99%</span> of trades are executed in <span>less than a second</span>, with no requotes or rejections.
                </p>
        </div>

        <div class="cards__item">
            <section class="cards__card">
                <h4>Competitive<br /> Pricing</h4>                
                <img src={priceIcon} alt="Percentage" />
            </section>
                <hr />
                <p>
                    We offer some of the <span>lowest spreads</span> and we don't charge commissions.
                </p>
        </div>

        <div class="cards__item">
            <section class="cards__card">
                <h4>Advanced Technology</h4>                
                <img src={techIcon} alt="Percentage" />
            </section>
                <hr />
                <p>
                    Trade on <span>MT4</span> or <span>MT5</span>, with expert tools, accross desktop, web and mobile.
                </p>
        </div>

        <div class="cards__item">
            <section class="cards__card">
                <h4>Start with $5</h4>                
                <img src={dollarIcon} alt="Percentage" />
            </section>
                <hr />
                <p>
                    Start trading your preferred instruments with as little as a<span> $5 minimum deposit</span>.
                </p>
        </div>

        
        
        </article>
)}

    export default Cards;