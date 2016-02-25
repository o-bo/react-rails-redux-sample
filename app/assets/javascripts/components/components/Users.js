import React, { Component, PropTypes } from 'react';

class Users extends Component {

  componentWillMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <p>
      </p>
    );
  }
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
  fetchUsers: PropTypes.func.isRequired
};

Users.defaultProps = {
  users: [],
};

export default Users;
