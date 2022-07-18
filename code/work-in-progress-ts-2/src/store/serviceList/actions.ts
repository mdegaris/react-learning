import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/firebase/serverAPI';
import { MonthAbbreviation, Year } from '../../types';

export interface PayloadArg {
  month: MonthAbbreviation;
  year: Year;
}

export const fetchServiceList = createAsyncThunk(
  'services/fetchServiceList',
  async (filter: PayloadArg) => {
    return await api.fetchServiceData(filter.month, filter.year);
  }
);
