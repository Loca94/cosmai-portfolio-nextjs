import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@/components/ui/MenuBar';
import { Skeleton } from '@/components/ui/Skeleton';

export function MenuBarSkeleton() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger className="group">
          <Skeleton className="w-16 group-data-[state=closed]:bg-slate-700 group-data-[state=open]:bg-slate-200" />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Skeleton className="w-14" />{' '}
          </MenubarItem>
          <MenubarItem>
            <Skeleton className="w-24" />
          </MenubarItem>
          <MenubarItem disabled>
            <Skeleton className="w-44" />
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>
              <Skeleton className="w-20" />
            </MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>
                <Skeleton className="w-20" />
              </MenubarItem>
              <MenubarItem>
                <Skeleton className="w-20" />
              </MenubarItem>
              <MenubarItem>
                <Skeleton className="w-16" />
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            <Skeleton className="w-14" />
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="group">
          <Skeleton className="w-16 group-data-[state=closed]:bg-slate-700 group-data-[state=open]:bg-slate-200" />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem>
            <Skeleton className="w-56" />
          </MenubarCheckboxItem>
          <MenubarCheckboxItem checked>
            <Skeleton className="w-52" />
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem inset>
            <Skeleton className="w-16" />
          </MenubarItem>
          <MenubarItem disabled inset>
            <Skeleton className="w-24" />
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>
            <Skeleton className="w-32" />
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>
            <Skeleton className="w-20" />
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
