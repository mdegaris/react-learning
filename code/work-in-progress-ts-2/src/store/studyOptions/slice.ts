import type { RootState } from '../store';
import { createSlice } from '@reduxjs/toolkit';
import { fetchAllStudyOptions } from './actions';
import { AllStudiesOption, OptionsAndGroupsType } from '../../types';

const allOption: AllStudiesOption = {
  label: 'All Studies',
  value: 'All Studies',
};

const initialState = {
  loading: false,
  studyOptions: [] as OptionsAndGroupsType,
};

const studyOptionsSlice = createSlice({
  name: 'studyOptions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllStudyOptions.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllStudyOptions.rejected, (state) => {
        state.loading = false;
        throw new Error('Study Load ERROR!!');
      })
      .addCase(fetchAllStudyOptions.fulfilled, (state, { payload }) => {
        state.loading = false;
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
