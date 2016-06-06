import React, { Component, PropTypes } from 'react';

class UserForm extends Component {


  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }


  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }


  handleClick(e) {
    e.preventDefault();
    const params = {
      registration: {...this.state}
    };
    this.props.onPost(params);
  }


  render() {
    return (
      <div className="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title">Add User</h3>
        </div>
        <div className="panel-body">
          <div className="form-group label-floating is-empty">
            <label className="control-label">Email</label>
            <input type="email" className="form-control" id="user-email" name="user[email]" onChange={this.handleEmailChange.bind(this)} />
            <span className="material-input"></span>
          </div>

          <div className="form-group label-floating is-empty">
            <label className="control-label">Password</label>
            <input type="password" className="form-control" id="user-password" name="user[password]" onChange={this.handlePasswordChange.bind(this)} />
            <span className="material-input"></span>
          </div>

          <div className="actions">
          <a href="#" className="btn btn-raised btn-info btn-block" onClick={this.handleClick.bind(this)}>
            Add
            <div className="ripple-container"></div>
          </a>
          </div>
        </div>
      </div>
    );
  }
}

UserForm.propTypes = {
  onPost: PropTypes.func.isRequired
};


export default UserForm;
