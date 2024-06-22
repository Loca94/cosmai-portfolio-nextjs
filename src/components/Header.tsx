import Link from 'next/link';
import Container from '@/components/Container';
import { HoverUnderline } from '@/components/animations/HoverUnderline';

export default function Header() {
  return (
    <header className="relative z-50 bg-slate-950">
      <Container className="py-2 sm:py-4">
        <div className="flex gap-4">
          <div className="flex flex-1">
            <Link href="/" className="p-1.5 text-base font-bold text-slate-200">
              Sara Cosmai
            </Link>
          </div>
          <div className="flex flex-1 justify-end gap-3">
            <Link
              href="/about"
              className="p-1.5 text-sm font-semibold text-slate-400 transition hover:text-slate-200 focus:text-slate-200"
            >
              <HoverUnderline>About</HoverUnderline>
            </Link>
            <a
              href="https://www.saracosmai.com/cv-sara-cosmai.pdf"
              target="_blank"
              className="p-1.5 text-sm font-semibold text-slate-400 transition hover:text-slate-200 focus:text-slate-200"
            >
              <HoverUnderline>Resume</HoverUnderline>
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
