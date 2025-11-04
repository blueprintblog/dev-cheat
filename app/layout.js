import Header from '@/components/layout/Header';
import { jetbrainsMono, firaCode, nunitoSans } from './fonts/fonts';
import './globals.css';
import Footer from '@/components/layout/Footer';
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: 'Dev Cheat',
  description: 'Sua referência completa para dominar o terminal Linux',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.variable} ${nunitoSans.variable} ${jetbrainsMono.variable}  antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="container flex-1 pt-30">{children}</main>
          <Footer />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
