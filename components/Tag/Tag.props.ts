import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  href?: string;
  size?: 'small' | 'medium';
  color?: 'ghost' | 'red' | 'gray' | 'green' | 'primary';
  children: ReactNode;
}
