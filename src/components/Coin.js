import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoinData, showCoins } from '../redux/coinsSlice';

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
      <h2>Coin Data</h2>
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
          {coins.map((coin, index) => (
            <tr key={index}>
              <td>{coin.name}</td>
              <td>{coin.symbol}</td>
              <td>${coin.price_usd}</td>
              <td>{coin.percent_change_24h}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Coin;
