import cn from 'classnames';
import React from 'react';

import styles from './Paragraph.module.css';

import { ParagraphProps } from './Paragraph.props';

export const Paragraph = ({
  size = 'medium',
  children,
  className,
  ...props
}: ParagraphProps): JSX.Element => {
  return (
    <p
      className={cn(className, styles.paragraph, {
        [styles.big]: size === 'big',
        [styles.small]: size === 'small',
        [styles.medium]: size === 'medium',
      })}
      {...props}
    >
      {children}
    </p>
  );
};
