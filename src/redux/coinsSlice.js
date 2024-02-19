// Import necessary libraries and configure slice
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_API = 'https://api.coinlore.net/api/tickers';
// const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';

export const fetchCoinData = createAsyncThunk(
  'coins/fetchCoinData',
  async () => {
    try {
      // const response = await fetch(PROXY_URL + BASE_API);
      const response = await fetch(BASE_API);

      if (!response.ok) {
        throw new Error('Cannot fetch data');
      }
      const data = await response.json();
      return data.data; 
    } catch (error) {
      throw new Error(error.message);
    }
  }
);
// console.log(fetchCoinData);
const coinsSlice = createSlice({
  name: 'coins',
  initialState: {
    coins: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoinData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCoinData.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.coins = action.payload;
        console.log(action.payload);
      })
      .addCase(fetchCoinData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { actions } = coinsSlice;
export const showCoins = (state) => state.coins.coins;
export default coinsSlice.reducer;
