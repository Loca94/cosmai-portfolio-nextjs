'use client';

import { useEffect, useState } from 'react';
import { BadgeList, BadgeListItem } from '@/components/ui/Badge';

export function AnimatedBadgeList({ badges }: { badges: string[] }) {
  const [activeBadgeIndex, setActiveBadgeIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the active badge index
      setActiveBadgeIndex((prevIndex) => (prevIndex + 1) % badges.length);
    }, 1500); // Change the duration as needed

    // Cleanup function to clear the interval
    return () => clearInterval(interval);
  }, [badges.length]);

  return (
    <BadgeList>
      {badges.map((text: string, index: number) => (
        <BadgeListItem
          key={index}
          variant={index === activeBadgeIndex ? 'default' : 'disabled'}
          size="sm"
        >
          {text}
        </BadgeListItem>
      ))}
    </BadgeList>
  );
}
