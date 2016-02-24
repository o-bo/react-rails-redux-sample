import React, { Component, PropTypes } from 'react';

class Users extends Component {
  render() {
    return (
      <p>
      </p>
    );
  }
}

Users.propTypes = {
  users: PropTypes.array.isRequired
};

Users.defaultProps = {
  users: [],
};

export default Users;
