import { ReactNode } from 'react';

export interface ButtonProps {
  type: 'primary' | 'ghost';
  children: ReactNode;
}
