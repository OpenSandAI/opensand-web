import type { Metadata } from 'next';
import Layout from '@/components/Layout';
import './globals.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

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
