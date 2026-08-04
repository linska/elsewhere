'use client';

import React, { forwardRef, useId } from 'react';
import clsx from 'clsx';

import Icon from '@/shared/components/Icon';

import { TextFieldProps } from './types';
import styles from './TextField.module.scss';

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      id,
      label,
      variant = 'outlined',
      size = 'large',
      helperText,
      error,
      prependIcon,
      appendIcon,
      appendElement,
      className,
      disabled,
      required,
      ...inputProps
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;

    const message = error ?? helperText;
    const messageId = message ? `${inputId}-message` : undefined;

    return (
      <div
        className={clsx(
          styles.field,
          styles[variant],
          styles[size],
          {
            [styles.error]: Boolean(error),
            [styles.disabled]: disabled,
          },
          className,
        )}
      >
        {label && (
          <label className={styles.label} htmlFor={inputId}>
            {label}
            {required && <span aria-hidden="true"> *</span>}
          </label>
        )}

        <div className={styles.control}>
          {prependIcon && (
            <Icon
              name={prependIcon}
              className={styles.prependIcon}
              aria-hidden="true"
            />
          )}

          <input
            {...inputProps}
            ref={ref}
            id={inputId}
            className={styles.input}
            disabled={disabled}
            required={required}
            aria-invalid={Boolean(error)}
            aria-describedby={messageId}
          />

          {appendElement ??
            (appendIcon && (
              <Icon
                name={appendIcon}
                className={styles.appendIcon}
                aria-hidden="true"
              />
            ))}
        </div>

        {message && (
          <div
            id={messageId}
            className={styles.message}
            role={error ? 'alert' : undefined}
          >
            <Icon name="info" aria-hidden="true" />
            <span>{message}</span>
          </div>
        )}
      </div>
    );
  },
);

TextField.displayName = 'TextField';

export default TextField;
