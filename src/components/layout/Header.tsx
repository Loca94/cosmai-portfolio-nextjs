import Link from 'next/link';
import Container from '@/components/layout/Container';
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
              href="/Sara_Cosmai_Resume.pdf"
              className="p-1.5 text-sm font-semibold text-slate-400 transition hover:text-slate-200 focus:text-slate-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HoverUnderline>Resume</HoverUnderline>
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
