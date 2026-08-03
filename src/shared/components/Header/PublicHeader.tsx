'use client';

import clsx from 'clsx';
import Link from 'next/link';

import Button from '@/shared/components/Button';
import LanguageToggle from '@/shared/components/LanguageToggle';
import Logo from '@/shared/components/Logo';

import styles from './Header.module.scss';
import { useState } from 'react';
import PublicAside from '@/shared/components/Header/PublicAside';

interface Props {
  className?: string;
}

function PublicHeader({ className }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className={clsx(styles.header, 'public', className)}>
        <div className={styles.brand}>
          <div className={styles.mobile}>
            <Button
              icon="menu"
              text="Menu"
              color="secondary"
              onClick={() => setIsMenuOpen(true)}
            />
          </div>

          <Link href="/" aria-label="Go to homepage">
            <Logo />
          </Link>
        </div>

        <div className={clsx(styles.actions, styles.mobile)}>
          <Button text="Log In" color="secondary" size="small" />
        </div>
        <div className={clsx(styles.actions, styles.desktop)}>
          <LanguageToggle />
          <Button
            text="Log In"
            variant="ghost"
            color="secondary"
            size="small"
          />
          <Button text="Sign Up" color="secondary" size="small" />
        </div>
      </header>
      <PublicAside isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}

export { PublicHeader };
