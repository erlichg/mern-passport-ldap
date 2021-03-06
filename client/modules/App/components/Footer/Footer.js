import React from 'react';

// Import Style
import styles from './Footer.css';

// Import Images
import bg from '../../header-bk.png';

export function Footer() {
  return (
    <div
      style={{ background: `#FFF url(${bg}) center` }}
      className={styles.footer}
    >
      <p>
        &copy; 2018 &middot; Guy Erlich &middot; XtremIO an EMC-DELL company
      </p>
    </div>
  );
}

export default Footer;
