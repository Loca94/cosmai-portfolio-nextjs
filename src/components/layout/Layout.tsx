import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex w-full flex-col transition-colors">
      <Header />
      <main className="flex-auto">{children}</main>
      <Footer />
    </div>
  );
}
