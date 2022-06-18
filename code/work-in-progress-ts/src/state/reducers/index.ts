import { combineReducers } from '@reduxjs/toolkit';
import { updateRoundsList } from './cache-reducer';

const WIPReducers = combineReducers({
  wip: updateRoundsList,
});
