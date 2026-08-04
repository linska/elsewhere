'use client';

import { ChangeEvent, DragEvent, KeyboardEvent, useRef, useState } from 'react';
import clsx from 'clsx';
import Icon from '@/shared/components/Icon';
import styles from './UploadDropzone.module.scss';

interface Props {
  onFilesSelect: (files: File[]) => void;
}

export default function UploadDropzone({ onFilesSelect }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const selectFiles = (fileList: FileList | null) => {
    const files = Array.from(fileList ?? []);

    if (files.length === 0) {
      return;
    }

    onFilesSelect(files);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    selectFiles(event.target.files);

    event.target.value = '';
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    setIsDragging(false);
    selectFiles(event.dataTransfer.files);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Enter' && event.key !== ' ') {
      return;
    }

    event.preventDefault();
    inputRef.current?.click();
  };

  return (
    <div className={styles.center}>
      <h1 className={styles.title}>
        Send files <span>elsewhere</span>
      </h1>
      <h3 className={styles.subtitle}>Set the rules. Change them anytime.</h3>
      <div
        className={clsx(styles.dropzone, 'card', {
          [styles.dragging]: isDragging,
        })}
        role="button"
        tabIndex={0}
        onClick={() => inputRef.current?.click()}
        onKeyDown={handleKeyDown}
        onDragEnter={() => setIsDragging(true)}
        onDragOver={(event) => event.preventDefault()}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
      >
        <input
          ref={inputRef}
          className={styles.input}
          type="file"
          multiple
          onChange={handleChange}
        />

        <span className={styles.icon}>
          <Icon name="upload" size={64} />
        </span>

        <p className={styles.content}>
          <span>
            {isDragging ? 'Drop files here' : 'Drop files or folders here'}
          </span>

          <span className={styles.action}>or click to upload</span>
        </p>
      </div>
      <p>No account required. No file size limits.</p>
    </div>
  );
}
