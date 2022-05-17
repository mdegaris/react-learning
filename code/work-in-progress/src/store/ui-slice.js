import { createSlice } from '@reduxjs/toolkit';

const defaultState = {
  isLoading: false,
  notification: null,
};

const uiSlice = createSlice({
  name: 'UI Slice',
  initialState: defaultState,
  reducers: {},
});
