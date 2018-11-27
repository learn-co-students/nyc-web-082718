const initialState = {};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'EXAMPLE':
      return { ...state }
    default:
      return state;
  }
}
