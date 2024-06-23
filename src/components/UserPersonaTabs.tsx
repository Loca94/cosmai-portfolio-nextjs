'use client';

import { UserPersona } from '@/lib/types';
import { cn } from '@/lib/utils';
import { UserPersonaCard } from './CaseStudyComponents';
import { useState } from 'react';

export default function UserPersonaTabs({
  userPersonas,
}: {
  userPersonas: UserPersona[];
}) {
  const [activeIndex, setActiveIndex] = useState(userPersonas[0].fullName);

  return (
    <div className="block">
      <div className="border-b border-slate-700">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {userPersonas.map((userPersona, idx) => (
            <button
              key={userPersona.fullName}
              onClick={() => setActiveIndex(userPersona.fullName)}
              className={cn(
                userPersona.fullName === activeIndex
                  ? 'border-slate-300 text-slate-300'
                  : 'border-transparent text-slate-500 hover:border-slate-500 hover:text-slate-100',
                'whitespace-nowrap border-b-2 px-1 py-4 text-sm sm:text-base',
              )}
            >
              User {idx + 1}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-6">
        {userPersonas.map((userPersona) =>
          userPersona.fullName === activeIndex ? (
            <UserPersonaCard
              key={userPersona.fullName}
              userPersona={userPersona}
            />
          ) : null,
        )}
      </div>
    </div>
  );
}
