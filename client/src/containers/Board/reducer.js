import { /*NEW_LOC, DEFAULT_LOC,*/ JOBS_SUCCESS, JOBS_FAIL } from './actions';



// export function locationsReducer(state = 'chicken', { type, payload }) {
//   switch (type) {
//     case DEFAULT_LOC:
//       return {
//         ...state,
//         items: [...payload.items]
//       }
//     case NEW_LOC:
//       return {
//         ...state,
//         items: [...payload.items],
//         selected: payload.selected
//       }
//     default:
//       return state;
//   };
// };

export function grabJobsReducer(state = '', { type, payload }) {
  switch (type) {
    case JOBS_SUCCESS:
      return {
        ...state,
        jobs: [...payload]
      }
    case JOBS_FAIL:
      return {
        ...state,
        jobs: [...payload]
      }
    default:
      return state;
  }
};