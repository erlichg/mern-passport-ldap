import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

// Import Style
import styles from './LoginPage.css';
import { getErrors } from '../../../App/AppReducer';

export function LoginPage(props) {
  return (
    <div>
      {props.errors
        ? props.errors.map(e => (
            <Alert bsStyle="warning">
              <strong>Error!</strong> {e.message}
            </Alert>
          ))
        : null}
      <div className={styles['Login-root']}>
        <div className={styles['Login-container']}>
          <h1>Log In</h1>
          <p className={styles['Login-lead']}>Log in with your CORP username</p>
          <form method="post">
            <div className={styles['Login-formGroup']}>
              <label className="Login-label-Mf2-c" htmlFor="username">
                CORP Username:
                <input
                  type="text"
                  className={styles['Login-input']}
                  id="username"
                  name="username"
                  autoFocus=""
                />
              </label>
            </div>
            <div className={styles['Login-formGroup']}>
              <label className="Login-label-Mf2-c" htmlFor="password">
                Password:<input
                  type="password"
                  className={styles['Login-input']}
                  id="password"
                  name="password"
                />
              </label>
            </div>
            <div className={styles['Login-formGroup']}>
              <button className={styles['Login-button']} type="submit">
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    errors: getErrors(state),
  };
}

LoginPage.propTypes = {
  errors: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(LoginPage);
