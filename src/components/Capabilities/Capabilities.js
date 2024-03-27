import './Capabilities.css';
import Cards from './Cards/Cards';
import bottomImg from '../../assets/mobile/bottom.png';

const Capabilities = () => (
  <div style={{ backgroundImage: `url(${bottomImg})` }} className="capabilities">
    <h2 className="capabilities__title">
      Why
      <span>TRADE </span>
      <br />
      with VV?
    </h2>
    <hr />
    <p className="capabilities__info">
      We have been providing traders around the world with the same
      {' '}
      <span>premium experience</span>
      {' '}
      for over a decade. As an
      <span>industry-leader</span>
      , we know what the modern trader needs to be
      <span>successful</span>
      {' '}
      in the markets.
    </p>
    <Cards />
  </div>
);

export default Capabilities;
