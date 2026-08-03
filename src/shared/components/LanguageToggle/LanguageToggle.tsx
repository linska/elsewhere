import styles from './LanguageToggle.module.scss';
import clsx from 'clsx';

type Language = 'en' | 'ua';

const languages: Array<{
  value: Language;
  shortLabel: string;
  label: string;
}> = [
  { value: 'en', shortLabel: 'EN', label: 'English' },
  { value: 'ua', shortLabel: 'UA', label: 'Українська' },
];

interface Props {
  variant?: 'compact' | 'full';
}

export default function LanguageToggle({ variant = 'compact' }: Props) {
  return (
    <div className={styles.toggle} role="group" aria-label="Select language">
      {languages.map((language) => {
        const isActive = 'en' === language.value;

        return (
          <button
            key={language.value}
            type="button"
            className={clsx(styles.item, {
              [styles.active]: isActive,
            })}
            aria-pressed={isActive}
          >
            {variant === 'full' ? language.label : language.shortLabel}
          </button>
        );
      })}
    </div>
  );
}
