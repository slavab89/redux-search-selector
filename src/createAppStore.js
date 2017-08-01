import { applyMiddleware, compose, createStore } from 'redux';
import { reducer as searchReducer, reduxSearch } from 'redux-search';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { rootReducer } from './resource';

export default function createAppStore(initialState) {
  return createStore(rootReducer, initialState, compose(
    applyMiddleware(thunk, createLogger()),
    reduxSearch({
      resourceIndexes: {
        mapping: ['name']
      },
      resourceSelector: (resourceName, state) => {
        console.log('initialSelector')
        return state[resourceName]
      }
    })
  ));
}
