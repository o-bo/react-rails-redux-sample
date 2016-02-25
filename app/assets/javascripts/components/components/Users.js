import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import User from './User';
import UserForm from './UserForm';

class Users extends Component {

  componentWillMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-10">
            <div className="row">
              {
                _.map(this.props.users, function(user) {
                  return <User key={user.id} user={user} />
                })
              }
            </div>
          </div>
          <div className="col-md-2">
            <UserForm onPost={this.props.postUser} />
          </div>
        </div>
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
