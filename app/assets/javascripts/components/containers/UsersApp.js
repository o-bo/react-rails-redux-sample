import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Users from '../components/Users';
import * as UsersActions from '../actions/users';

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UsersActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
