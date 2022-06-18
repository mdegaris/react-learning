import { createSlice } from '@reduxjs/toolkit';

const emptyState = {
  deadlineItems: [],
};

const buildDeadlines = (rounds) => {
  if (!!rounds === false) {
    return [];
  }

  const updatedDeadlines = [];
  for (let round of rounds) {
    for (let service of round.services) {
      const deadline = {
        studyId: round.studyId,
        round: round.round,
        service: service.serviceName,
        date: service.deadlineDate,
      };

      updatedDeadlines.push(deadline);
    }
  }

  updatedDeadlines.sort(
    (d1, d2) =>
      new Date(d1.date.replace(/-/g, ' ')) -
      new Date(d2.date.replace(/-/g, ' '))
  );
  return updatedDeadlines;
};

const deadlinesSlice = createSlice({
  name: 'deadlines',
  initialState: emptyState,
  reducers: {
    updateDeadlines(state, action) {
      console.log('Update deadlines...');
      state.deadlineItems = buildDeadlines(action.payload);
    },
  },
});

export const deadlinesActions = deadlinesSlice.actions;
export default deadlinesSlice;
