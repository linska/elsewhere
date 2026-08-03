import Button from '@/shared/components/Button';
import styles from './SelectedFiles.module.scss';

interface Props {
  files: File[];
  onReset: () => void;
}

export default function SelectedFiles({ files, onReset }: Props) {
  const totalSize = files.reduce((sum, file) => sum + file.size, 0);

  return (
    <section className={styles.files}>
      <h2>Files are ready</h2>

      <p>
        {files.length} {files.length === 1 ? 'file' : 'files'}
        {' · '}
        {totalSize}
      </p>

      <ul className={styles.list}>
        {files.map((file) => (
          <li
            key={`${file.name}-${file.size}-${file.lastModified}`}
            className={styles.item}
          >
            <span>{file.name}</span>
            <span>{file.size}</span>
          </li>
        ))}
      </ul>

      <Button variant="outlined" text="Choose other files" onClick={onReset} />
    </section>
  );
}
