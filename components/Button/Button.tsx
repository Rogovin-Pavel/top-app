import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';

export const Button = ({ type, children }: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(
        styles.button,
        { [styles.primary]: type === 'primary' },
        { [styles.ghost]: type === 'ghost' }
      )}
    >
      {children}
    </button>
  );
};
