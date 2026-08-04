'use client';

import clsx from 'clsx';

import Button from '@/shared/components/Button';

import styles from './Aside.module.scss';
import Logo from '@/shared/components/Logo';
import LanguageToggle from '@/shared/components/LanguageToggle';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function PublicAside({ isOpen, onClose }: Props) {
  return (
    <>
      <div
        className={clsx(styles.overlay, {
          [styles.visible]: isOpen,
        })}
        onClick={onClose}
      />

      <aside
        className={clsx(styles.aside, {
          [styles.open]: isOpen,
        })}
      >
        <div className={styles.header}>
          <Logo />
          <Button icon="close" color="secondary" onClick={onClose} />
        </div>

        <nav className={styles.actions}>
          <div className={clsx(styles.actionItem, styles.borderBottom)}>
            <Button
              text="Upload files"
              prependIcon="upload"
              variant="outlined"
              fullWidth
            />
          </div>
          <div className={clsx(styles.actionItem, styles.borderTop)}>
            <LanguageToggle variant="full" />
          </div>

          <div
            className={clsx(
              styles.actionItem,
              styles.borderBottom,
              styles.borderTop,
            )}
          >
            <Button
              text="Log In"
              color="secondary"
              fullWidth
              href="/login"
              onClick={onClose}
            />
            <Button
              text="Sign Up"
              color="secondary"
              variant="outlined"
              fullWidth
              href="/register"
              onClick={onClose}
            />
          </div>
        </nav>
      </aside>
    </>
  );
}
