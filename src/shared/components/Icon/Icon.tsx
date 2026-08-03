import { IconProps } from '@/shared/components/Icon/types';
import { icons } from '@/shared/components/Icon/icons';

export default function Icon({ name, size = 24, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {icons[name]}
    </svg>
  );
}
