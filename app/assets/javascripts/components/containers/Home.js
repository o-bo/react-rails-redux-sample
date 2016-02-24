import React, { Component } from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import CounterApp from './CounterApp';
import configureStore from '../store/configureStore';
import {setCounter} from '../actions/counter'

const store = configureStore();

export default class Home extends Component {

  componentWillMount() {
    store.dispatch(setCounter(this.props.counter));
  }

  render() {
    return (
      <Provider store={store}>
        <CounterApp />
      </Provider>
    );
  }
}

Home.propTypes = {
  counter : React.PropTypes.number.isRequired,
};

Home.defaultProps = {
  counter: 1,
};