import { DashboardHeader } from '@/shared/components/Header/DashboardHeader';
import { PublicHeader } from '@/shared/components/Header/PublicHeader';

interface Props {
  type: 'public' | 'dashboard';
}

export default function Header({ type }: Props) {
  if (type === 'dashboard') {
    return <DashboardHeader />;
  }
  return <PublicHeader />;
}
