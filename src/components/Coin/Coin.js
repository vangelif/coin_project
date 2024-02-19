import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosArrowDropupCircle, IoIosArrowDropdownCircle } from 'react-icons/io';
import { fetchCoinData, showCoins } from '../../redux/coinsSlice';
import btcIcon from '../../assets/btc.png';
import ethIcon from '../../assets/eth.png';
import xrpIcon from '../../assets/xrp.png';
import ltcIcon from '../../assets/ltc.png';
import bchIcon from '../../assets/bch.png';
import './Coin.css';
import midImg from '../../assets/mobile/mid.png';

const getIcon = (symbol) => {
  switch (symbol) {
    case 'BTC':
      return btcIcon;
    case 'ETH':
      return ethIcon;
    case 'XRP':
      return xrpIcon;
    case 'LTC':
      return ltcIcon;
    case 'BCH':
      return bchIcon;
    default:
      return '';
  }
};

const Coin = () => {
  const dispatch = useDispatch();
  const coins = useSelector(showCoins);
  const loading = useSelector((state) => state.coins.loading);
  const error = useSelector((state) => state.coins.error);

  useEffect(() => {
    dispatch(fetchCoinData());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (

    <div className="coins">
      <div className="coins__background mobile" style={{ backgroundImage: `url(${midImg})` }} />
      {coins.filter((coin) => ['BTC', 'ETH', 'XRP', 'LTC', 'BCH'].includes(coin.symbol)).map((coin, index) => (
        <section className="coins__card">
          <div key={index} className="coins__item">
            <div className="coins__item_top">
              <img src={getIcon(coin.symbol)} alt={`${coin.symbol} icon`} className="icon-image" />
              <div className="coins__item_top_symbol">{coin.symbol}</div>
              <div className="coins__item_top_name">{coin.name}</div>
            </div>
            <hr />

            <div className="coins__item_price">
              $
              {parseFloat(coin.price_usd).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 4 })}
            </div>

            <div
              style={{ color: coin.percent_change_24h < 0 ? '#FFA3A6' : '#B1FFC2', fontSize: '12.20px' }}
              path-color={coin.percent_change_24h < 0 ? 'negative' : 'positive'}
            >
              {coin.percent_change_24h < 0 ? (
                <IoIosArrowDropdownCircle style={{ width: '11px', height: '8px' }} />
              ) : (
                <IoIosArrowDropupCircle style={{ width: '11px', height: '8px' }} />
              )}
              {coin.percent_change_24h}
              %
            </div>
          </div>

        </section>
      ))}
    </div>

  );
};

export default Coin;
