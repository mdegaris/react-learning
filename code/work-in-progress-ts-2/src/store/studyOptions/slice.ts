import type { RootState } from '../store';
import { createSlice } from '@reduxjs/toolkit';
import { fetchAllStudyOptions } from './actions';
import { AllStudiesOption, OptionsAndGroupsType } from '../../types';

const allOption: AllStudiesOption = {
  label: 'All Studies',
  value: 'All Studies',
};

const initialState = {
  isLoading: false,
  studyOptions: [] as OptionsAndGroupsType,
};

const studyOptionsSlice = createSlice({
  name: 'studyOptions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllStudyOptions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllStudyOptions.rejected, (state) => {
        state.isLoading = false;
        throw new Error('Study Load ERROR!!');
      })
      .addCase(fetchAllStudyOptions.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.studyOptions = [
          allOption,
          {
            label: 'Study Manager',
            options: payload.studyManagerOptions,
          },
          {
            label: 'Study ID',
            options: payload.studyIdOptions,
          },
        ];
      });
  },
});

export const studyManagerActions = studyOptionsSlice.actions;
export default studyOptionsSlice;
