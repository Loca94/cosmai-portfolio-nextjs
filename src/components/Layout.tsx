'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { usePathname } from 'next/navigation';

export function Layout({ children }: { children: React.ReactNode }) {
  let isProjectPage = usePathname().includes('/work/');

  return (
    <>
      <div className="relative flex w-full flex-col transition-colors">
        <Header />
        <main
          className={`flex-auto ${isProjectPage ? 'bg-slate-100' : 'bg-slate-950'} transition-colors`}
        >
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
