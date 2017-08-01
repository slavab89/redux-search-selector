import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSearchAction } from 'redux-search';
import { randomizeNumber, getFiltered, getAllSelector } from './resource';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  };

  forceUpdateHandler(){
    this.props.randomizeNumber();
  };

  render() {
    const { randomNumber, filtered, onSearch } = this.props;
    return (
      <div className="App">
        <div className="header">Testing redux-search</div>
        <div>
          <button onClick={this.forceUpdateHandler}>RandomizeNumber</button>
          <span className="randomNumber">{randomNumber}</span>
        </div>
        <div>
          <input className="searchBox" placeholder="Search..." onChange={event => onSearch(event.target.value)} />
        </div>
        <br />
        {filtered.map(entry =>
          <div key={entry.id}>{entry.name}</div>
        )}
      </div>
    );
  }
}

export default connect(state => {
  console.log('CONNECT called');
  return {
    randomNumber: state.randomNumber,
    filtered: getFiltered(state),
    all: getAllSelector(state)
  }
}, {
  randomizeNumber,
  onSearch: createSearchAction('mapping')
})(App);
