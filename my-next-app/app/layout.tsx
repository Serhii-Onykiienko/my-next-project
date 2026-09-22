import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header/Header';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';
import { Roboto } from 'next/font/google';
import AuthProvider from '@/components/AuthProvider/AuthProvider';

// app/layout.tsx

const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NoteHub',
  description: 'Created by GoIT',
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <TanStackProvider>
          <AuthProvider>
            <Header />
            <main>
              {children}
              {modal}
            </main>
            <footer>
              <p>
                Created <time dateTime="2025">2025</time>
              </p>
            </footer>
          </AuthProvider>
        </TanStackProvider>
      </body>
    </html>
  );
}
