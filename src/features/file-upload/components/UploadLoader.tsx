import Button from '@/shared/components/Button';
import Icon from '@/shared/components/Icon';
import styles from './UploadLoader.module.scss';

interface Props {
  files: File[];
  onCancel: () => void;
}

export default function UploadLoader({ files, onCancel }: Props) {
  const totalSize = files.reduce((sum, file) => sum + file.size, 0);

  return (
    <section className={styles.loader}>
      <Icon name="upload" />

      <h2>Preparing your files</h2>

      <p className={styles.summary}>
        {files.length} {files.length === 1 ? 'file' : 'files'}
        {' · '}
        {formatFileSize(totalSize)}
      </p>

      <div
        className={styles.progress}
        role="progressbar"
        aria-label="Preparing files"
      >
        <span className={styles.progressBar} />
      </div>

      <p className={styles.description}>This will only take a moment</p>

      <Button variant="ghost" color="danger" text="Cancel" onClick={onCancel} />
    </section>
  );
}

function formatFileSize(bytes: number) {
  if (bytes === 0) {
    return '0 B';
  }

  const units = ['B', 'KB', 'MB', 'GB'];
  const unitIndex = Math.min(
    Math.floor(Math.log(bytes) / Math.log(1024)),
    units.length - 1,
  );

  const value = bytes / 1024 ** unitIndex;

  return `${value.toFixed(unitIndex === 0 ? 0 : 1)} ${units[unitIndex]}`;
}
