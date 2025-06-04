
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageWrapper from '@/components/shared/PageWrapper';
import { ThemeProvider } from '@/components/theme/ThemeProvider';

export const metadata: Metadata = {
  title: 'Product Pavilion (Manufacturing Bay)',
  description: 'A premium interface to showcase our AI Powered Manufacturing Products',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground min-h-screen flex flex-col">
        <ThemeProvider
          defaultTheme="dark"
          storageKey="productverse-theme"
        >
          <Header />
          <PageWrapper>
            <main className="flex-grow py-8">
              {children}
            </main>
          </PageWrapper>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
