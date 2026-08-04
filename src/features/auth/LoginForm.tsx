import TextField from '@/shared/components/TextField';
import styles from './auth.module.scss';
import Button from '@/shared/components/Button';
import { Checkbox } from '@/shared/components/Checkbox';

export default function LoginForm() {
  return (
    <form className={styles.form}>
      <h2 className={styles.title}>Log In</h2>
      <TextField label="Email" type="email" />
      <TextField label="Password" type="password" />
      <div className={styles.sideActions}>
        <Checkbox label="Remember me" />
        <Button
          text="Forgot password"
          size="small"
          variant="ghost"
          color="secondary"
          href="/forgot-password"
        />
      </div>
      <Button text="Log In" />
      <div className={styles.footer}>
        <span>{"Don't have an account yet?"}</span>
        <Button text={'Sign up'} variant="ghost" href="/register" />
      </div>
    </form>
  );
}
