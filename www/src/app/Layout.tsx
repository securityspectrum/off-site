import Footer from '@/components/Footer';
import '../../styles/globals.css';
import Navigation from '../components/Navigation';
import { metadata } from './Metadata';
import Head from 'next/head';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Head>
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" />
      </Head>
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      {/* Optionally, include a footer here */}
    </div>
  );
}
