import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { serivceListSlice } from './serviceList/slice';
import studyOptionsSlice from './studyOptions/slice';
import workFilterSlice from './workFilter/slice';

export const store = configureStore({
  reducer: {
    allStudyOptions: studyOptionsSlice.reducer,
    serviceList: serivceListSlice.reducer,
    workFilter: workFilterSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
