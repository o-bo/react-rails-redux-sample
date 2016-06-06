import React, { Component } from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import CounterApp from '../../Counter/containers/CounterApp';
import configureStore from '../../store/configureStore';
import {setCounter} from '../../Counter/actions/counter'

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
