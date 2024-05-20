import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stéphen Chevalier - Web Developer',
  description: 'Portfolio de Stéphen Chevalier, Développeur Web',
};

export default function RootLayout({ children }) {
  return (
      <html lang="fr">
      <body>{children}</body>
      </html>
  );
}
