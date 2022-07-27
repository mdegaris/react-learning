import type { RootState } from '../store';
import { createSlice } from '@reduxjs/toolkit';
import { ServiceList } from '../../types';
import { fetchServiceList } from './actions';

type InitialStateType = {
  isLoading: boolean;
  serviceList: ServiceList;
};

const initialState: InitialStateType = {
  isLoading: false,
  serviceList: [],
};

export const serivceListSlice = createSlice({
  name: 'serviceList',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchServiceList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchServiceList.rejected, (state) => {
        state.isLoading = false;
        throw new Error('ServiceList Load ERROR!!');
      })
      .addCase(fetchServiceList.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.serviceList = payload;
      });
  },
});
