import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import User from './user';

class Users extends Component {

  componentWillMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div>
        {
          _.map(this.props.users, function(user) {
            return <User key={user.id} user={user} />
          })
        }
      </div>
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
