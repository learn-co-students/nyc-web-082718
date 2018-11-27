import { UPDATE_MONSTERS } from './types';

export function updateMonsters(monsters) {
  return {
    type: UPDATE_MONSTERS,
    payload: monsters
  }
}

// the problem will appear with the async part
// we want to fully abstract out the fetch into an action creator
// such that we can return the resulting object to be dispatched
// just like a normal action creator

// why didn't the make thunk part of redux
// because there are more than one way to handle it
// it's because i believe it was designed before sagas came into existance
// promise was before thunk, but thunk was more popular than promise
// sagas => this reuqires good knowledge of generators
// if you know await/async <=  this is built on generators + promises :(
export function fetchMonsters() {
  return (dispatch) => {
    console.log('thunk will run this function');

    dispatch({ type: 'FETCHING_MONSTERS' })

    fetch('http://localhost:4000/monsters')
    .then(r=>r.json())
    .then(monsters=> {
      // this is usually the first idea
      console.log('ohhhh finishered!');
      dispatch(updateMonsters(monsters))
      dispatch({ type: 'FETCHED_MONSTERS' })
    })
  }

}
