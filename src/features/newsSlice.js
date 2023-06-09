import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  newsItems: [],
  feedItems : [],
  isLoading: true,
  error : null,
  mail : "",
  modalStatus : false
};

const apiKey = import.meta.env.VITE_API_KEY;

const url = `https://newsapi.org/v2/everything?q=tech&apiKey=bc2bba82e57c409b8a007d14ac9d68fa`;

export const getNewsData = createAsyncThunk('cart/getNewsItems', async (_, thunkAPI) => {
  try {
    const response = await axios(url);
    return response.data.articles
  } catch (error) {
    console.log(error)
    return thunkAPI.rejectWithValue("No response");
  }
});


const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers : {
    filterNews : (state, action) => {
      if(action.payload !== "All"){
        state.feedItems = state.newsItems.filter(item => {
          return item.source.name === action.payload
        })
      }else{
        state.feedItems = state.newsItems
      }
    },
    handleSubscribe : (state, action) => {
      state.mail = action.payload
    },
    openModal : (state) => {
      state.modalStatus = true
    },
    closeModal : (state) => {
      state.modalStatus = false
    }
  },
  extraReducers : {
    [getNewsData.pending]:(state) => {
      state.isLoading = true;
    },
    [getNewsData.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.error = null;
      state.newsItems = action.payload;
      state.feedItems = action.payload;
    },
    [getNewsData.rejected]: (state,action) => {
      // console.log(action)
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// console.log(newsSlice);
export const { filterNews, handleSubscribe, openModal, closeModal } = newsSlice.actions

export default newsSlice.reducer;