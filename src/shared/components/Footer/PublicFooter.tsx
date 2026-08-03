import styles from './Footer.module.scss';
import clsx from 'clsx';
import Button from '@/shared/components/Button';

interface Props {
  className?: string;
}

function PublicFooter({ className }: Props) {
  return (
    <footer className={clsx(styles.footer, className)}>
      <Button
        text="Privacy policy"
        variant="ghost"
        color="secondary"
        size="small"
      />
      <Button
        text="Terms and conditions"
        variant="ghost"
        color="secondary"
        size="small"
      />
    </footer>
  );
}

export { PublicFooter };
