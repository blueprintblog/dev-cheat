import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { firaCode, jetbrainsMono, nunitoSans } from './fonts/fonts';
import './globals.css';
import BackToTop from '@/components/common/BackToTop';
import Script from 'next/script';

export const metadata = {
  title: 'Dev Cheat',
  description: 'Sua referência completa para dominar o terminal Linux',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5126726057730110"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {process.env.NODE_ENV === 'production' && (
          <script type="text/javascript">
            {`(function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "u0lnepd7yz");`}
          </script>
        )}
      </head>
      <body
        className={`${firaCode.variable} ${nunitoSans.variable} ${jetbrainsMono.variable}  antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="container flex-1 pt-30">{children}</main>
          <Footer />
          <BackToTop />
          {process.env.NODE_ENV === 'production' && <Analytics />}
          {process.env.NODE_ENV === 'production' && <SpeedInsights />}
        </div>
      </body>
    </html>
  );
}
