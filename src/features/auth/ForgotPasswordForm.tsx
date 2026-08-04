import TextField from '@/shared/components/TextField';
import styles from './auth.module.scss';
import Button from '@/shared/components/Button';

export default function ForgotPasswordForm() {
  return (
    <form className={styles.form}>
      <h2 className={styles.title}>Restore password</h2>
      <TextField label="Email" type="email" />
      <div className={styles.sideActions}></div>
      <Button text="Restore password" />
      <div className={styles.footer}>
        <span>{"Don't have an account yet?"}</span>
        <Button text={'Sign up'} variant="ghost" href="/register" />
      </div>
    </form>
  );
}
