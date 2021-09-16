import cn from 'classnames';
import React from 'react';

import { TagProps } from './Tag.props';

import styles from './Tag.module.css';

export const Tag = ({
  size = 'medium',
  color,
  className,
  href,
  children,
  ...props
}: TagProps): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.small]: size === 'small',
        [styles.medium]: size === 'medium',
        [styles.ghost]: color === 'ghost',
        [styles.red]: color === 'red',
        [styles.gray]: color === 'gray',
        [styles.green]: color === 'green',
        [styles.primary]: color === 'primary',
      })}
      {...props}
    >
      {href ? (
        <a target="_blank" href={href}>
          {children}
        </a>
      ) : (
        <>{children}</>
      )}
    </div>
  );
};
