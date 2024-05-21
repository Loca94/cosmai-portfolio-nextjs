import * as React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from '@/components/ui/Select';
import { Skeleton } from '@/components/ui/Skeleton';
import { ChevronRightIcon } from './Icons';

export function SkeletonSelect() {
  return (
    <Select>
      <SelectTrigger className="w-full text-slate-700">
        <Skeleton className="h-4 w-20" color="primary" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="apple">
            <Skeleton className="h-4 w-20" />
          </SelectItem>
          <SelectItem value="banana">
            <Skeleton className="h-4 w-32" />
          </SelectItem>
          <SelectItem value="blueberry">
            <Skeleton className="h-4 w-16" />
          </SelectItem>
          <SelectItem value="grapes">
            <Skeleton className="h-4 w-14" />
          </SelectItem>
          <SelectItem value="pineapple">
            <Skeleton className="h-4 w-24" />
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
