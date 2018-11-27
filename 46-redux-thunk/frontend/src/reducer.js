import { EXAMPLE, UPDATE_MONSTERS, FETCHING_MONSTERS, FETCHED_MONSTERS } from './types';

const initialState = {
  monsters: null,
  attacks: null, // did we use this? possibly? no.
  teams: null,
  assignments: [],
};

// state, action => the new state
// PURE FUNCTION
export default function reducer(state = initialState, action) {
  switch(action.type) {
    case EXAMPLE:
      return { ...state }
    case FETCHING_MONSTERS:
      return { ...state }
    case FETCHED_MONSTERS:
      return { ...state }
    case UPDATE_MONSTERS:
      console.log('got here');
      return { ...state, monsters: action.payload }
    // case RESET:
    default:
      return state;
  }
}
