import React, { Component, PropTypes } from 'react';

class User extends Component {

  render() {
    return (
      <div className="col-md-2">
        <div className="card">

          <div className="card-height-indicator"></div>

          <div className="card-content">

            <div className="card-image bg-info">
              <h3 className="text-center">{this.props.user.email}</h3>
            </div>

            <div className="card-body">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>

            <footer className="card-footer">
            </footer>

          </div>

        </div>
      </div>
    );
  }
}

User.propTypes = {
  user: PropTypes.object.isRequired
};

export default User;
