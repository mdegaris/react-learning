import type { RootState } from '../store';
import { createSlice } from '@reduxjs/toolkit';
import { fetchAllStudyData } from '../actions/studyOptionsActions';
import { StudyIdOption, StudyManagerOption } from '../../types';

const initialState = {
  loading: false,
  studyOptions: {
    studyManagerOptions: [] as StudyManagerOption[],
    studyIdOptions: [] as StudyIdOption[],
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
        state.loading = false;
        state.studyOptions.studyManagerOptions = payload.studyManagerOptions;
        state.studyOptions.studyIdOptions = payload.studyIdOptions;
      });
  },
});

export const studyManagerActions = studyOptionsSlice.actions;
export default studyOptionsSlice;
