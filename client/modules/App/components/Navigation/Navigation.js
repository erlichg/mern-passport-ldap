/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { Link } from 'react-router';
import s from './Navigation.css';

export function Navigation(props, context) {
  return (
    <div className={s.root} role="navigation">
      <Link className={s.link} to="/users">
        Users
      </Link>
      <span className={s.spacer}> | </span>
      <a className={s.link} href="/logout">
        Log out
      </a>
    </div>
  );
}

export default Navigation;
