import React from 'react';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

import '@/shared/styles/index.scss';

const geologica = localFont({
  src: '../assets/fonts/Geologica/Geologica-VariableFont_CRSV,SHRP,slnt,wght.ttf',
  variable: '--font-geologica',
  display: 'swap',
  weight: '100 900',
  style: 'normal',
});

export const metadata: Metadata = {
  title: 'elsewhere',
  description: 'Secure file transfer application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geologica.variable}>
      <body>{children}</body>
    </html>
  );
}
