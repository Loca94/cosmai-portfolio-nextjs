'use client';

import Container from '@/components/Container';
import Link from 'next/link';
import { HoverUnderline } from './animations/HoverUnderline';

export default function Header() {
  return (
    <header className="relative z-50">
      <Container className="py-6">
        <div className="flex gap-4">
          <div className="flex flex-1">
            <Link href="/" className="p-1.5 text-base font-bold text-slate-200">
              Sara Cosmai
            </Link>
          </div>
          <div className="flex flex-1 justify-end gap-3">
            <Link
              href="/about"
              className="p-1.5 text-sm font-semibold text-slate-300 transition hover:text-slate-50 focus:text-slate-50"
            >
              <HoverUnderline>About</HoverUnderline>
            </Link>
            <a
              href="https://www.saracosmai.com/cv-sara-cosmai.pdf"
              target="_blank"
              className="p-1.5 text-sm font-semibold text-slate-300 transition hover:text-slate-50 focus:text-slate-50"
            >
              <HoverUnderline>Resume</HoverUnderline>
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
