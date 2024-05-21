import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';
import { Button } from './ui/Button';
import { Skeleton } from '@/components/ui/Skeleton';
import { ProfileIcon } from '@/components/Icons';

export default function ProfileDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="w-9 min-w-9 overflow-hidden rounded-full"
        >
          <ProfileIcon className="size-5 text-slate-700" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>
          <Skeleton className="h-4 w-20" color="primary" />
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Skeleton className="h-4 w-12" />
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Skeleton className="h-4 w-16" />
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Skeleton className="h-4 w-24" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
