import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';
import { IconName } from '@/shared/components/Icon/types';
import Icon from '@/shared/components/Icon';
import Link from 'next/link';

interface Props {
  variant?: 'solid' | 'outlined' | 'tonal' | 'ghost';
  icon?: IconName;
  text?: string;
  ariaLabel?: string;
  color?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'large';
  prependIcon?: IconName;
  appendIcon?: IconName;
  disabled?: boolean;
  onClick?: () => void;
  fullWidth?: boolean;
  href?: string;
}

export default function Button({
  variant = 'solid',
  icon,
  text,
  ariaLabel,
  color = 'primary',
  size = 'large',
  prependIcon,
  appendIcon,
  disabled,
  onClick,
  fullWidth,
  href,
}: Props) {
  const className = clsx(styles.button, {
    [styles.icon]: icon,
    [styles.primary]: color === 'primary',
    [styles.secondary]: color === 'secondary',
    [styles.danger]: color === 'danger',
    [styles.small]: size === 'small',
    [styles.large]: size === 'large',
    [styles.solid]: variant === 'solid',
    [styles.outlined]: variant === 'outlined',
    [styles.tonal]: variant === 'tonal',
    [styles.ghost]: variant === 'ghost',
    [styles.fullWidth]: fullWidth,
  });

  const content = (
    <>
      {icon ? (
        <Icon name={icon} size={size === 'large' ? 24 : 16} />
      ) : (
        <>
          {prependIcon && <Icon name={prependIcon} />}
          {text}
          {appendIcon && <Icon name={appendIcon} />}
        </>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={className}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        <div className={styles.content}>{content}</div>
      </Link>
    );
  }

  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <div className={styles.content}>{content}</div>
    </button>
  );
}
