import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import createAppStore from './createAppStore';
import initialState from './initialState';

const store = createAppStore(initialState);

ReactDOM.render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
  </div>
, document.getElementById('root'));
registerServiceWorker();
