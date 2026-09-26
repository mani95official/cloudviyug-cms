import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/ui/CustomCursor';
import ScrollToTop from '@/components/ui/ScrollToTop';

export const metadata = {
  title: 'CloudViyug – AI Agency & Advanced Technology Solutions',
  description: 'Transform your enterprise with the power of modern Artificial Intelligence, Custom ML Models, LLMs, Computer Vision, and Intelligent Cloud Automation with CloudViyug.',
  keywords: 'CloudViyug, AI Agency, Artificial Intelligence, Machine Learning, Next.js, Bootstrap 5, AI Solutions, Enterprise AI',
  icons: {
    icon: '/images/favicon.png',
    apple: '/images/favicon.png'
  },
  openGraph: {
    title: 'CloudViyug – AI Agency & Advanced Technology Solutions',
    description: 'Transform your business with cutting-edge artificial intelligence, intelligent workflows, and neural cloud systems.',
    url: 'https://cloudviyug.com',
    siteName: 'CloudViyug',
    locale: 'en_US',
    type: 'website'
  }
};

import SmoothScrollProvider from '@/components/ui/SmoothScrollProvider';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <SmoothScrollProvider>
          <CustomCursor />
          <Header />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
