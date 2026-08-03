import { DashboardFooter } from '@/shared/components/Footer/DashboardFooter';
import { PublicFooter } from '@/shared/components/Footer/PublicFooter';

interface Props {
  type: 'public' | 'dashboard';
}

export default function Footer({ type }: Props) {
  if (type === 'dashboard') {
    return <DashboardFooter />;
  }

  return <PublicFooter />;
}
