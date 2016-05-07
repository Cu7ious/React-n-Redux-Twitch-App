import { changeTab } from '../actions';

const initialState = {
  tab: 0
};

export default function mainReducer (state, action) {

  if (typeof state === 'undefined') {
    return initialState;
  }

  switch (action.type) {
    case 'CHANGE_TAB':
      state.tab = action.index;
      break;
  }

  return state;

}
