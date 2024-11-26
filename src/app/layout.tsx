
import { Metadata } from 'next'
import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mobile Store',
  description: 'Mobile Store - Venda e Compra de celulares',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col justify-between">

        <Header />

        <main className="flex-grow flex justify-center items-center p-8">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}
