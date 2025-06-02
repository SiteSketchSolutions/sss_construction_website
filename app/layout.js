import './globals.css';
import { Poppins, Playfair_Display } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins'
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  variable: '--font-playfair'
});

export const metadata = {
  title: 'SiteSketchSolutions - Excellence in Construction Since 2015',
  description: 'SiteSketchSolutions delivers exceptional construction services and innovative solutions, blending traditional craftsmanship with modern technology.',
  keywords: 'construction, building, architecture, craftsmanship, quality construction, innovative building solutions',
  openGraph: {
    title: 'SiteSketchSolutions - Excellence in Construction Since 2015',
    description: 'Where traditional craftsmanship meets innovative technology to create timeless architectural masterpieces',
    url: 'https://www.sssconstructioncompany.com',
    siteName: 'SiteSketchSolutions',
    images: [
      {
        url: 'https://www.sssconstructioncompany.com/assets/logo-white.png',
        width: 1200,
        height: 630,
        alt: 'SiteSketchSolutions Construction',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${playfair.variable} font-sans`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
