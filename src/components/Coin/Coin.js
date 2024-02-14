import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoinData, showCoins } from '../../redux/coinsSlice';
import btcIcon from '../../assets/btc.png';
import ethIcon from '../../assets/eth.png';
import xrpIcon from '../../assets/xrp.png';
import ltcIcon from '../../assets/ltc.png';
import bchIcon from '../../assets/bch.png';
import { IoIosArrowDropupCircle } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import './Coin.css';


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

    <div class="coins">
      {coins.filter(coin => ['BTC', 'ETH', 'XRP', 'LTC', 'BCH'].includes(coin.symbol)).map((coin, index) => (
        <section class="coins__card">
                        <div key={index} class="coins__item">
                          <div class="coins__item_top"> 
                            <img src={getIcon(coin.symbol)} alt={`${coin.symbol} icon`} className="icon-image" />
                            <div class="coins__item_top_symbol">{coin.symbol}</div>
                            <div class="coins__item_top_name">{coin.name}</div>
                          </div>
                            <hr />
                            
                            <div class="coins_item_price">${parseFloat(coin.price_usd).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 4 })}</div>

                            <div style={{ color: coin.percent_change_24h < 0 ? '#FFA3A6' : '#B1FFC2' }}>
                            <IoIosArrowDropupCircle style={{ color: coin.percent_change_24h < 0 ? '#FFA3A6' : '#B1FFC2' }} />
                              {coin.percent_change_24h}%
                              </div>
                        </div>
          </section>
       ))}
    </div>
   
  );
};

export default Coin;


// 
// <IoIosArrowDropdownCircle />  <IoIosArrowDropupCircle />                             <div style={{ color: coin.percent_change_24h < 0 ? '#FFA3A6' : '#B1FFC2' }}>                          {coin.percent_change_24h}%
//                               </div> please put the two arrows in the condition to render as well