import React from 'react';
import AuthShell from '@/app/(public)/components/AuthShell';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AuthShell>{children}</AuthShell>;
}
