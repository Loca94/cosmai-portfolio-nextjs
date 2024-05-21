import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@/components/ui/MenuBar';
import { Skeleton } from '@/components/ui/Skeleton';

export function SkeletonMenuBar() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <Skeleton className="h-4 w-16" color="primary" />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Skeleton className="h-4 w-14" />{' '}
          </MenubarItem>
          <MenubarItem>
            <Skeleton className="h-4 w-24" />
          </MenubarItem>
          <MenubarItem disabled>
            <Skeleton className="h-4 w-44" />
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>
              <Skeleton className="h-4 w-20" />
            </MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>
                <Skeleton className="h-4 w-20" />
              </MenubarItem>
              <MenubarItem>
                <Skeleton className="h-4 w-20" />
              </MenubarItem>
              <MenubarItem>
                <Skeleton className="h-4 w-16" />
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            <Skeleton className="h-4 w-14" />
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <Skeleton className="h-4 w-16" color="primary" />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem>
            <Skeleton className="h-4 w-56" />
          </MenubarCheckboxItem>
          <MenubarCheckboxItem checked>
            <Skeleton className="h-4 w-52" />
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem inset>
            <Skeleton className="h-4 w-16" />
          </MenubarItem>
          <MenubarItem disabled inset>
            <Skeleton className="h-4 w-24" />
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>
            <Skeleton className="h-4 w-32" />
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>
            <Skeleton className="h-4 w-20" />
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
