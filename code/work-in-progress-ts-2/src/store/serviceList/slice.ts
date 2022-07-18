import type { RootState } from '../store';
import { createSlice } from '@reduxjs/toolkit';
import { ServiceList } from '../../types';
import { fetchServiceList } from './actions';

type InitialStateType = {
  loading: boolean;
  serviceList: ServiceList;
};

const initialState: InitialStateType = {
  loading: false,
  serviceList: [],
};

export const serivceListSlice = createSlice({
  name: 'serviceList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchServiceList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchServiceList.rejected, (state) => {
        state.loading = false;
        throw new Error('ServiceList Load ERROR!!');
      })
      .addCase(fetchServiceList.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.serviceList = payload;
      });
  },
});
