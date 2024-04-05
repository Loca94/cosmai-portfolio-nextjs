'use client';

import * as React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { DayPicker } from 'react-day-picker';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/Button';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        'w-fit rounded-[3px] border border-slate-700 p-2',
        className,
      )}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-sm font-medium',
        nav: 'space-x-1 flex items-center',
        nav_button: cn(
          buttonVariants({ variant: 'empty' }),
          'h-6 w-6 bg-transparent p-0 opacity-50 hover:opacity-100',
        ),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex',
        head_cell: 'rounded-md w-8 font-normal text-[0.8rem] text-slate-400',
        row: 'flex w-full mt-2',
        cell: cn(
          'relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected])]:bg-slate-800 [&:has([aria-selected].day-outside)]:bg-slate-800/50',
          props.mode === 'range'
            ? '[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md'
            : '[&:has([aria-selected])]:rounded-md',
        ),
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-8 w-8 p-0 font-normal aria-selected:opacity-100',
        ),
        day_range_start: 'day-range-start',
        day_range_end: 'day-range-end',
        day_selected:
          'bg-slate-50 text-slate-900 hover:bg-slate-50 hover:text-slate-900 focus:bg-slate-50 focus:text-slate-900',
        day_today: 'bg-slate-800 text-slate-50',
        day_outside:
          'day-outside opacity-50 aria-selected:opacity-30 text-slate-400 aria-selected:bg-slate-800/50 aria-selected:text-slate-400',
        day_disabled: 'opacity-50 text-slate-400',
        day_range_middle:
          'aria-selected:bg-slate-800 aria-selected:text-slate-50',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeftIcon className="h-5 w-5" />,
        IconRight: ({ ...props }) => <ChevronRightIcon className="h-5 w-5" />,
        DayContent: ({ ...props }) => (
          <div className="h-2.5 w-2.5 rounded-full bg-slate-700"></div>
        ),
        Head: TableHeader,
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };

function TableHeader(): JSX.Element {
  const daysOfWeek: string[] = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return (
    <thead>
      <tr className="flex">
        {daysOfWeek.map((day) => (
          <TableHeaderCell key={day} day={day} />
        ))}
      </tr>
    </thead>
  );
}

function TableHeaderCell({ day }: { day: string }): JSX.Element {
  return (
    <th
      scope="col"
      className="flex w-8 items-center justify-center rounded-md p-1"
      aria-label={day}
    >
      <div className="h-3 w-3 rounded-[1px] bg-slate-700 md:h-5 md:w-5" />
    </th>
  );
}
