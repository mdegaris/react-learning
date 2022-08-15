import type { RootState } from '../store';
import { createSlice } from '@reduxjs/toolkit';
import { ServiceItem,} from '../../types';
import { fetchServiceList } from './actions';
import hash from 'object-hash';

type InitialStateType = {
  isLoading: boolean;
  serviceList: ServiceItem[];
};

const initialState: InitialStateType = {
  isLoading: false,
  serviceList: [],
};

export const serivceListSlice = createSlice({
  name: 'serviceList',
  initialState,
  reducers: {},
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

        console.log("payload: " + hash(payload));
        console.log("serviceList: " + hash(state.serviceList));

        if (hash(state.serviceList) !== hash(payload)) { 
          state.serviceList = payload;
        }
      });
  },
});
