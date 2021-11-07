import React, { useContext } from 'react';

import cn from 'classnames';
import styles from './Menu.module.css';
import { format } from 'date-fns';
import { MenuItem } from '../../interfaces/menu.interface';
import { AppContext } from '../../context/app.context';

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);

  return (
    <ul>
      {menu.map((menuElement: MenuItem) => (
        <li key={menuElement._id.secondCategory}>{menuElement._id.secondCategory}</li>
      ))}
    </ul>
  );
};
