import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
import styles from './Login.css';

class Login extends Component {
  render() {
    return (
      <h1>hello world</h1>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

Login.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
