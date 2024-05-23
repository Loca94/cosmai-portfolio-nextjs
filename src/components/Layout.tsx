import Header from '@/components/Header';
import Footer from '@/components/Footer';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex w-full flex-col transition-colors">
      <Header />
      <main className="flex-auto">{children}</main>
      <Footer />
    </div>
  );
}
