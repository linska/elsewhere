import { InputHTMLAttributes } from 'react';

export interface CheckboxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type'
> {
  label?: string;
  indeterminate?: boolean;
}
