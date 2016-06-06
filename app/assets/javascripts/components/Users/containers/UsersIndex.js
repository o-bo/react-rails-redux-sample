import React, { Component } from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import UsersApp from './UsersApp';
import configureStore from '../../store/configureStore';

const store = configureStore();

class UsersIndex extends Component {

  render() {
    return (
      <Provider store={store}>
        <UsersApp />
      </Provider>
    );
  }
}

UsersIndex.propTypes = {
  users : React.PropTypes.array.isRequired,
};

UsersIndex.defaultProps = {
  users: [],
};

export default UsersIndex;
