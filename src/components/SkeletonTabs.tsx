import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/Card';
import { Skeleton } from '@/components/ui/Skeleton';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs';
import SkeletonButton from '@/components/SkeletonButton';
import { ProfileIcon, SearchIcon } from '@/components/Icons';
import { SkeletonSelect } from '@/components/SkeletonSelect';

function EditProfileSkeletonCard() {
  return (
    <Card className="rounded border border-slate-200 bg-slate-950">
      <CardHeader>
        <CardTitle asChild>
          <Skeleton className="w-28" color="primary" />
        </CardTitle>
        <CardDescription asChild>
          <Skeleton className="h-3 w-1/2" />
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="grid gap-4">
          <div className="grid gap-2">
            {/* Label */}
            <Skeleton className="w-20" color="primary" />
            <SkeletonButton asInput>
              <Skeleton className="w-1/4" />
            </SkeletonButton>
          </div>
          <div className="grid gap-2">
            {/* Label */}
            <Skeleton className="w-24" color="primary" />
            <SkeletonButton asInput>
              <Skeleton className="w-1/4" />
            </SkeletonButton>
          </div>
          {/* Last Button */}
          <SkeletonButton className="border-slate-200 hover:border-slate-200 hover:bg-slate-900">
            <Skeleton className="w-1/4" color="primary" />
          </SkeletonButton>
        </div>
      </CardContent>
    </Card>
  );
}

function EditTeamSkeletonCard() {
  return (
    <Card className="rounded border border-slate-200 bg-slate-950">
      <CardHeader>
        <CardTitle asChild>
          <Skeleton className="w-36" color="primary" />
        </CardTitle>
        <CardDescription asChild>
          <Skeleton className="h-3 w-3/4" />
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="grid gap-6">
          {Array.from({ length: 3 }, (_, index) => (
            <div
              key={`SkeletonTeamMembersOption-${index}`}
              className="flex items-center justify-between space-x-4"
            >
              <div className="flex items-center space-x-4">
                <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-slate-200">
                  <ProfileIcon className="h-4 w-4" />
                </span>
                <div className="space-y-2">
                  <Skeleton className="w-20" color="primary" />
                  <Skeleton className="w-28" />
                </div>
              </div>
              <div className="w-36">
                <SkeletonSelect optionsWidth={['w-20', 'w-16', 'w-20']} />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function SkeletonTabs() {
  return (
    <div className="max-h-[328px] min-h-[328px]">
      <Tabs className="w-full" defaultValue="edit-profile">
        <TabsList className="grid h-[50px] w-full grid-cols-2 bg-slate-950 p-0.5 [&>*]:h-11">
          <TabsTrigger
            value="edit-profile"
            className="rounded-l-sm border-slate-700 bg-slate-950 data-[state=active]:border data-[state=active]:border-slate-300"
          >
            <Skeleton className="w-36" />
          </TabsTrigger>
          <TabsTrigger
            value="edit-team"
            className="rounded-r-sm border-slate-700 bg-slate-950 data-[state=active]:border data-[state=active]:border-slate-300"
          >
            <Skeleton className="w-36" />
          </TabsTrigger>
        </TabsList>
        <TabsContent value="edit-profile" className="mt-4">
          <EditProfileSkeletonCard />
        </TabsContent>
        <TabsContent value="edit-team" className="mt-4">
          <EditTeamSkeletonCard />
        </TabsContent>
      </Tabs>
    </div>
  );
}
