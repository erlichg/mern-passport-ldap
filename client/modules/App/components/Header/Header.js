import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import { Navigation } from '../Navigation/Navigation';
import logoUrl from './xtremio.png';
import logoUrl2x from './xtremioX2.png';

// Import Style
import styles from './Header.css';

export function Header(props, context) {
  const isMain = context.router.isActive('/', true);
  return (
    <div className={styles.header}>
      <div className={styles.root}>
        <div className={styles.container}>
          {isMain ? <Navigation /> : null}
          <Link
            onClick={e => {
              if (!isMain) {
                e.preventDefault();
              }
            }}
            className={styles.brand}
            to="/"
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
        {isMain ? (
          <button
            className={styles['add-post-button']}
            href="#"
            onClick={props.toggleAddPost}
          >
            Add post
          </button>
        ) : null}
      </div>
    </div>
  );
}

Header.contextTypes = {
  router: PropTypes.object,
};

Header.propTypes = {
  toggleAddPost: PropTypes.func.isRequired,
};

export default Header;
