import React from 'react';
import Header from '@/shared/components/Header';
import Footer from '@/shared/components/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header type="public" />
      <div className="container">{children}</div>
      <Footer type="public" />
    </>
  );
}
