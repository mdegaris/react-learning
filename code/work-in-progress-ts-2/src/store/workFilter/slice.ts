import dateFormat from 'dateformat';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MonthAbbreviation, Study, StudyManager, Year } from '../../types';

type FilterState = {
  month: MonthAbbreviation;
  year: Year;
  study?: Study;
  studyManager?: StudyManager;
};

const initialState: FilterState = {
  month: dateFormat(new Date(), 'mmm') as MonthAbbreviation,
  year: dateFormat(new Date(), 'yyyy').toString() as Year,
};

export const workFilterSlice = createSlice({
  name: 'workFilter',
  initialState,
  reducers: {
    replaceMonth(state, action: PayloadAction<MonthAbbreviation>) {
      state.month = action.payload;
    },
    replaceYear(state, action: PayloadAction<Year>) {
      state.year = action.payload;
    },
  },
});

export const workFilterActions = workFilterSlice.actions;
export default workFilterSlice;
