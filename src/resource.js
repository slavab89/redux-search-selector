import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import { reducer as searchReducer, getSearchSelectors } from 'redux-search';
import { values, map } from 'lodash';

const RANDOMIZE = 'RANDOMIZE';

const mapping = (state = {}) => state;
const randomNumber = (state = 0, action) => {
  switch (action.type) {
    case RANDOMIZE:
      return Math.random();
    default:
      return state;
  }
};

const getMapping = state => state.mapping;

const { result } = getSearchSelectors({
  resourceName: 'mapping',
  resourceSelector: (resourceName, state) => {
    return getMapping(state);
  }
});

export const getFiltered = createSelector(
  [getMapping, result],
  (entries, searchIds) => {
    console.log('SEARCH selector called', searchIds.length);
    const searchResults = searchIds.map(id => entries[id]);
    return searchResults;
  }
)

export const getAllSelector = createSelector(
  getMapping,
  (entries) => {
    console.log('ALL selector called');
    const all = [];
    for (let key in entries) {
      if (entries.hasOwnProperty(key)) {
        all.push(entries[key]);
      }
    }
    return all;
  }
)


export function randomizeNumber() {
  return { type: RANDOMIZE };
}

export const rootReducer = combineReducers({ mapping, randomNumber, search: searchReducer });
