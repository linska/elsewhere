import type { Metadata } from 'next';
import FileUpload from '@/features/file-upload';

export const metadata: Metadata = {
  title: 'Send files elsewhere',
  description: 'Upload and share your files securely.',
};

export default function HomePage() {
  return <FileUpload />;
}
