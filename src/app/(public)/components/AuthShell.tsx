import React from 'react';
import styles from './AuthShell.module.scss';
import clsx from 'clsx';

export default function AuthShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.container}>
      <div className={clsx('card', styles.form)}>{children}</div>
    </div>
  );
}
