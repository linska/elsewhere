import TextField from '@/shared/components/TextField';
import styles from './auth.module.scss';
import Button from '@/shared/components/Button';

export default function RegisterForm() {
  return (
    <form className={styles.form}>
      <h2 className={styles.title}>Sing Up</h2>
      <TextField label="Email" type="email" />
      <TextField label="Password" type="password" />
      <TextField label="Repeat password" type="password" />
      <div className={styles.sideActions}></div>
      <Button text="Sing Up" />
      <div className={styles.footer}>
        <span>{'Already have an account?'}</span>
        <Button text={'Log In'} variant="ghost" href="/login" />
      </div>
    </form>
  );
}
