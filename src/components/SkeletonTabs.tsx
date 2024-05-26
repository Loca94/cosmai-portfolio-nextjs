import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/Card';
import { Skeleton } from '@/components/ui/Skeleton';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs';
import SkeletonInput from '@/components/SkeletonInput';

function EditProfileSkeletonCard() {
  return (
    <Card className="rounded border border-slate-700 bg-slate-950">
      <CardHeader>
        <CardTitle tag={'div'}>
          <Skeleton className="h-4 w-28" color="primary" />
        </CardTitle>
        <CardDescription tag={'div'}>
          <Skeleton className="h-3 w-1/2" />
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="grid gap-6">
          <div className="grid gap-3">
            {/* Label */}
            <Skeleton className="h-4 w-20" />
            <SkeletonInput />
          </div>
          <div className="grid gap-3">
            {/* Label */}
            <Skeleton className="h-4 w-24" />
            <SkeletonInput />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function EditTeamSkeletonCard() {
  return <div className="text-slate-200">Qui mettere la seconda card</div>;
}

export function SkeletonTabs() {
  return (
    <div className="max-h-[310px] min-h-[310px]">
      <Tabs className="w-full" defaultValue="edit-profile">
        <TabsList className="grid h-[50px] w-full grid-cols-2 [&>*]:h-11">
          <TabsTrigger
            value="edit-profile"
            className="rounded-l border-slate-700"
          >
            <Skeleton className="h-4 w-36" />
          </TabsTrigger>
          <TabsTrigger value="edit-team" className="rounded-r border-slate-700">
            <Skeleton className="h-4 w-36" />
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
