import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Import Style
import styles from './LoginPage.css';

export function LoginPage(props) {
  return (
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
  );
}

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {};
}

LoginPage.propTypes = {};

export default connect(mapStateToProps)(LoginPage);
