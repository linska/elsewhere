'use client';

import { CheckboxProps } from '@/shared/components/Checkbox/types';
import { useEffect, useRef } from 'react';
import styles from './Checkbox.module.scss';
import Icon from '@/shared/components/Icon';

function Checkbox({ label, indeterminate = false, ...props }: CheckboxProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <label className={styles.checkbox}>
      <input
        ref={inputRef}
        className={styles.input}
        type="checkbox"
        {...props}
      />

      <span className={styles.icon} aria-hidden="true">
        <Icon name="checkbox-off" className={styles.off} />
        <Icon name="checkbox-on" className={styles.on} />
        <Icon name="checkbox-intermediate" className={styles.intermediate} />
      </span>

      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
}

export { Checkbox };
