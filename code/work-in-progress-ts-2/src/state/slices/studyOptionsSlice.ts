import type { RootState } from '../store';
import { createSlice } from '@reduxjs/toolkit';
import { fetchAllStudyData } from '../actions/studyOptionsActions';
import { StudyIdOptionType, StudyManagerOptionType } from '../../types';

const initialState = {
  loading: false,
  studyOptions: {
    studyManager: [] as StudyManagerOptionType[],
    studyId: [] as StudyIdOptionType[],
  },
};

export const studyOptionsSlice = createSlice({
  name: 'studyOptions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllStudyData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllStudyData.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchAllStudyData.fulfilled, (state, { payload }) => {
        console.log('payload');
        console.log(payload);

        state.loading = false;
        state.studyOptions.studyManager = payload.studyManagerOptions;
        state.studyOptions.studyId = payload.studyIdOptions;
      });
  },
});

export const studyManagerActions = studyOptionsSlice.actions;
export default studyOptionsSlice;
