import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const sortByItems = ['activity', 'name', 'popular'];

export const sortDirectionByItems = ['desc', 'asc'];

export interface IItem {
  count: number;
  name: string;
  [key: string]: unknown;
}

interface DataState {
  loading: boolean;
  data: IItem[];
  error: string | undefined;
  currentPage: number;
  itemsPerPage: number;
  sortBy: string;
  sortDirection: string;
}

const initialState: DataState = {
  loading: false,
  data: [],
  error: undefined,
  currentPage: 1,
  itemsPerPage: 10,
  sortBy: sortByItems[0],
  sortDirection: sortDirectionByItems[0],
};

export const fetchData = createAsyncThunk(
  'data/fetchData',
  async (apiUrl: string) => {
    try {
      const response = await axios.get(apiUrl);
      return response.data.items;
    } catch (error) {
      throw new Error('Failed to fetch data');
    }
  },
);

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    changeCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    changeItemsPerPage: (state, action) => {
      state.itemsPerPage = action.payload;
    },
    changeSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    changeSortDirection: (state, action) => {
      state.sortDirection = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = '';
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default dataSlice.reducer;
export const {
  changeCurrentPage,
  changeItemsPerPage,
  changeSortBy,
  changeSortDirection,
} = dataSlice.actions;
