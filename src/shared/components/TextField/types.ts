import { InputHTMLAttributes, ReactNode } from 'react';
import { IconName } from '@/shared/components/Icon/types';

export interface TextFieldProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size'
> {
  label?: string;
  variant?: 'outlined' | 'underlined';
  size?: 'large' | 'small';

  helperText?: string;
  error?: string;

  prependIcon?: IconName;
  appendIcon?: IconName;

  appendElement?: ReactNode;
}
