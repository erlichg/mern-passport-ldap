import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import Navigation from '../Navigation/Navigation';
import logoUrl from './xtremio.png';
import logoUrl2x from './xtremioX2.png';
import PropTypes from 'prop-types';

// Import Style
import styles from './Header.css';

export function Header(props, context) {
  return (
    <div className={styles.header}>
      <div className={styles.root}>
        <div className={styles.container}>
          {props.isLoggedIn ? <Navigation /> : null}
          <Link
            onClick={e => {
              if (!props.isLoggedIn) {
                e.preventDefault();
              }
            }} className={styles.brand} to="/"
          >
            <img
              src={logoUrl}
              srcSet={`${logoUrl2x} 2x`}
              width="38"
              height="38"
              alt="XtremIO"
              className={styles.brandImg}
            />
            <span className={styles.brandTxt}>XtremIO</span>
          </Link>
          <div className={styles.banner}>
            <h1 className={styles.bannerTitle}>Support roster</h1>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <h1 className={styles['site-title']}>
          <Link
            onClick={e => {
              if (!props.isLoggedIn) {
                e.preventDefault();
              }
            }} to="/"
          ><FormattedMessage id="siteTitle" /></Link>
        </h1>
        {
          context.router.isActive('/', true)
            ? <a className={styles['add-post-button']} href="#" onClick={props.toggleAddPost}><FormattedMessage id="addPost" /></a>
            : null
        }
      </div>
    </div>
  );
}

Header.contextTypes = {
  router: React.PropTypes.object,
};

Header.propTypes = {
  toggleAddPost: PropTypes.func.isRequired,
  switchLanguage: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

export default Header;
