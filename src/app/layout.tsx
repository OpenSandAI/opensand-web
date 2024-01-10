import type { Metadata } from 'next';
import Layout from '@/components/Layout';
import './globals.css';

export const metadata: Metadata = {
  title: 'OpenSand',
  description: 'AI and BlockChain, boost creativity ...',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Layout>
        <main>{children}</main>
      </Layout>
    </html>
  );
}
