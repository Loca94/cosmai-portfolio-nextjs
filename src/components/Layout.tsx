import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LayoutBackground from './LayoutBackground';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="relative flex w-full flex-col transition-colors">
        <Header />
        <LayoutBackground>{children}</LayoutBackground>
        <Footer />
      </div>
    </>
  );
}
