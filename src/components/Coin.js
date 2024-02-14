import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoinData, showCoins } from '../redux/coinsSlice';
import btcIcon from '../assets/btc.png';
import ethIcon from '../assets/eth.png';
import xrpIcon from '../assets/xrp.png';
import ltcIcon from '../assets/ltc.png';
import bchIcon from '../assets/bch.png';

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
  const loading = useSelector(state => state.coins.loading);
  const error = useSelector(state => state.coins.error);

  useEffect(() => {
    dispatch(fetchCoinData());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>coin component</h2>
      <button>TEST BUTTON</button>
      <table>
        <thead>
            <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price (USD)</th>
            <th>Price Change (24h)</th>
            </tr>
        </thead>
            <tbody>
                {coins.filter(coin => ['BTC', 'ETH', 'XRP', 'LTC', 'BCH'].includes(coin.symbol)).map((coin, index) => (
                <tr key={index}>
                    <td>{coin.name}</td>
                    <td>{coin.symbol}</td>
                    <td>${coin.price_usd}</td>
                    <td style={{ color: coin.percent_change_24h < 0 ? '#FFA3A6' : '#B1FFC2' }}>{coin.percent_change_24h}%</td>
                    <td><img src={getIcon(coin.symbol)} alt={`${coin.symbol} icon`} className="icon-image" /></td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
};

export default Coin;
