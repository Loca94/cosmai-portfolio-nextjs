'use client';

import { cn } from '@/lib/utils';
import { useLayoutEffect, useRef, useState } from 'react';

export interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultActiveId?: string;
  className?: string;
  preserveHeight?: boolean; // ✅ new optional prop
}

export default function Tabs({
  tabs,
  defaultActiveId,
  className,
  preserveHeight = false,
}: TabsProps) {
  const [activeId, setActiveId] = useState(defaultActiveId || tabs[0].id);
  const [fixedHeight, setFixedHeight] = useState<number | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Measure the height of the tab content
  useLayoutEffect(() => {
    if (!preserveHeight) return;

    const el = contentRef.current;
    if (el) {
      const height = el.offsetHeight;
      // Only set the height if we don't have one yet or if it's larger (to handle responsive changes)
      if (fixedHeight == null || height > fixedHeight) {
        setFixedHeight(height);
      }
    }
  }, [activeId, preserveHeight]);

  return (
    <div className={cn('block', className)}>
      {/* Tab headers */}
      <div className="border-b border-slate-700">
        <nav
          className="-mb-px flex space-x-8 overflow-x-auto"
          aria-label="Tabs"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveId(tab.id)}
              className={cn(
                tab.id === activeId
                  ? 'border-slate-300 text-slate-300'
                  : 'border-transparent text-slate-500 hover:border-slate-500 hover:text-slate-100',
                'cursor-pointer border-b-2 px-1 py-4 text-sm whitespace-nowrap transition-colors duration-300 sm:text-base',
              )}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab content */}
      <div
        className="mt-6"
        style={
          preserveHeight && fixedHeight
            ? { height: fixedHeight, overflow: 'hidden' }
            : {}
        }
      >
        <div ref={contentRef}>
          {tabs.map(
            (tab) =>
              tab.id === activeId && <div key={tab.id}>{tab.content}</div>,
          )}
        </div>
      </div>
    </div>
  );
}
