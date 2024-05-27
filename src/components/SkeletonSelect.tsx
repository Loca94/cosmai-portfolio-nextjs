import * as React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/Select';
import { Skeleton } from '@/components/ui/Skeleton';

export function SkeletonSelect({ optionsWidth }: { optionsWidth: string[] }) {
  return (
    <Select>
      <SelectTrigger className="w-full text-slate-700">
        <Skeleton className="w-full max-w-20" color="primary" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {optionsWidth.map((width, index) => (
            <SelectItem key={index} value={width}>
              <Skeleton className={width} />
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
