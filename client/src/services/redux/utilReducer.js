import produce from 'immer';
/* eslint-disable */ 
//Less boilerplate code more action and reductions
export default function createReducer(handlers, initialState = {}) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      let update = produce(state, (draft) => {
        const handler = handlers[action.type];
        return handler(draft, action);
      });
      return update;
    } else {
      return state;
    }
  };
}
