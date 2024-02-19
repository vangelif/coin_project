import dollarIcon from '../../../assets/capabilities/dollar-icon.png';
import techIcon from '../../../assets/capabilities/tech-icon.png';
import fastIcon from '../../../assets/capabilities/fast-execusion-icon.png';
import priceIcon from '../../../assets/capabilities/competitive-pricing-icon.png';
import './Cards.css';

const Cards = () => (
  <article className="cards-container">
    <div className="cards__item item_1">
      <section className="cards__card">
        <div className="cards__cardtop">
          <h4>Superior Trade Execution</h4>
          <hr className="cards__line" />
        </div>
        <img src={fastIcon} alt="Superior Trade Execution" />
      </section>
      <p>
        <span>99%</span>
        {' '}
        of trades are executed in
        <span>less than a second</span>
        , with no requotes or rejections.
      </p>
    </div>

    <div className="cards__item item_2">
      <section className="cards__card">
        <div className="cards__cardtop">
          <h4>
            Competitive
            <br />
            {' '}
            Pricing
          </h4>
          <hr className="cards__line" />
        </div>
        <img src={priceIcon} alt="Percentage" />
      </section>
      <p>
        We offer some of the
        {' '}
        <span>lowest spreads</span>
        {' '}
        and we don&apos;t charge commissions.
      </p>
    </div>

    <div className="cards__item item_3">
      <section className="cards__card">
        <div className="cards__cardtop">
          <h4>Advanced Technology</h4>
          <hr className="cards__line" />
        </div>
        <img src={techIcon} alt="Percentage" />
      </section>
      <p>
        Trade on
        {' '}
        <span>MT4</span>
        {' '}
        or
        <span>MT5</span>
        , with expert tools, accross desktop, web and mobile.
      </p>
    </div>

    <div className="cards__item item_4">
      <section className="cards__card">
        <div className="cards__cardtop">
          <h4>Start with $5</h4>
          <hr className="cards__line" />
        </div>
        <img src={dollarIcon} alt="Percentage" />
      </section>
      <p>
        Start trading your preferred instruments with as little as a
        <span> $5 minimum deposit</span>
        .
      </p>
    </div>

  </article>
);

export default Cards;
