import { createSlice } from '@reduxjs/toolkit';

// const buildUpDeadlinesList = (rounds) => {
//   if (!!rounds === false) {
//     return [];
//   }

//   const upDeadlinesList = rounds.map((r) =>
//     r.services.map((s) => {
//       return {
//         studyId: r.studyId,
//         round: r.round,
//         serviceName: s.serviceName,
//         deadline: s.deadlineDate,
//       };
//     })
//   );

//   return upDeadlinesList.flat(Infinity);
// };

// return {
//   studyId: r.studyId,
//   round: r.round,
//   serviceName: s.serviceName,
//   deadline: s.deadlineDate,
// };

const defaultState = {
  upcomingDeadlines: [],
  isLoading: false,
};

const deadlinesTable = [
  {
    heading: 'Study ID',
    values: [],
    renderFunc: () => {},
  },
  {
    heading: 'Round',
    values: [],
    renderFunc: () => {},
  },
  {
    heading: 'Service Name',
    values: [],
    renderFunc: () => {},
  },
  {
    heading: 'Deadline Date',
    values: [],
    renderFunc: () => {},
  },
];

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: defaultState,
  reducers: {
    replaceDeadlineTable(state, action) {
      state.upcomingDeadlines = buildUpDeadlinesList(action.payload.rounds);
    },
  },
});

export const dashboardActions = dashboardSlice.actions;

export default dashboardSlice;
