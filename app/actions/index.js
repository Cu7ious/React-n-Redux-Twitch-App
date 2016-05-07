import { CHANGE_TAB } from './actionTypes';

export function changeTab(index) {
  return {
    type: CHANGE_TAB,
    index
  }
}

window.changeTab = changeTab;
