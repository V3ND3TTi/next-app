import { ThemeProvider } from '@/components/theme/theme-provider';
import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header';

export const metadata: Metadata = {
  title: 'Ticket Bounty',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang='en'>
      <body>
        <ThemeProvider>
          <Header />
          <main
            className='
              min-h-screen flex-1
              overflow-y-auto overflow-x-hidden
              py-24 px-8
              bg-secondary/20
              flex flex-col
            '
          >
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
