import objHash from 'object-hash';
import { createSlice } from '@reduxjs/toolkit';
import {
  Round,
  RoundJSON,
  RoundList,
  UpdateRoundsAction,
  CacheState,
} from '../../types';

const wipRoundsSlice = createSlice({
  name: 'studyRounds',
  initialState: initialState,
  reducers: {},
});

export const wipRoundsActions = wipRoundsSlice.actions;

export default wipRoundsSlice;
