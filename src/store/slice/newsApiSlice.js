import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Replace this with an environment variable in a real project
const API_KEY = '1855d4182fce58b8c3528da4a615314a';

// Fetch news with a query parameter
export const fetchNews = createAsyncThunk('news/fetchNews', async ({ query, country }) => {
  try {
   
        const url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(query)}&lang=en&country=${country}&max=10&apikey=${API_KEY}`;
        const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    return response.json();
  } catch (error) {
    // Throwing the error so that it can be caught by the `rejected` case
    throw new Error(error.message);
  }
});

const newsApiSlice = createSlice({
  name: 'news',
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
    errorMessage: '', // Added to store error messages
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = ''; // Reset error message on new request
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.error.message; // Store the error message
        console.error('Error:', action.error.message);
      });
  },
});

export default newsApiSlice.reducer;

