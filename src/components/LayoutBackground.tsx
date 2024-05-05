'use client';

import { usePathname } from 'next/navigation';

// This component is in a separate file in order to use the 'use client' paradigm.
export default function LayoutBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  let isProjectPage = usePathname().includes('/work/');

  return (
    <main
      className={`flex-auto ${isProjectPage ? 'bg-slate-100' : 'bg-slate-950'} transition-colors`}
    >
      {children}
    </main>
  );
}
