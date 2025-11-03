import Image from 'next/image';
import { UserPersona } from '@/lib/types';
import { Badge } from '@/components/ui/Badge';
import { FadeInStagger, FadeIn } from '@/components/animations/FadeIn';
import { Card, CardContent, CardDescription } from '@/components/ui/Card';
import {
  BulletList,
  BulletListItem,
} from '@/components/case-study/content/BulletList';

export default function UserPersonaCard({
  userPersona,
}: {
  userPersona: UserPersona;
}) {
  return (
    <FadeInStagger>
      <div className="grid gap-4 md:grid-cols-2">
        <FadeIn className="h-full">
          <Card className="h-full">
            <CardContent className="flex h-full items-center pt-4">
              <div className="flex flex-col justify-center space-y-4">
                {/* User Persona */}
                <div className="flex">
                  <Image
                    src={userPersona.avatarSrc}
                    alt="User Persona Matteo"
                    className="h-32 w-32"
                  />
                  <div className="flex flex-col items-center justify-center p-4">
                    <h3 className="mb-2 text-2xl font-bold">User Persona</h3>
                    <div className="flex items-center space-x-2">
                      <Badge variant="darker" className="text-slate-400">
                        Name
                      </Badge>
                      <CardDescription>{userPersona.fullName}</CardDescription>
                    </div>
                  </div>
                </div>

                {/* User Persona Background */}
                <div className="flex h-full">
                  <div className="space-y-4">
                    <Badge variant="darker" className="text-slate-400">
                      Background
                    </Badge>
                    <CardDescription>{userPersona.background}</CardDescription>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeIn>
        <div className="flex flex-col space-y-4">
          {/* User Persona Goals */}
          <FadeIn className="h-full">
            <Card className="h-full">
              <CardContent className="pt-4 text-slate-400">
                <div className="flex flex-col space-y-4">
                  <Badge variant="darker" className="w-fit text-slate-400">
                    Goals
                  </Badge>
                  <BulletList className="text-sm">
                    {userPersona.goals.map((item) => (
                      <BulletListItem key={item}>{item}</BulletListItem>
                    ))}
                  </BulletList>
                </div>
              </CardContent>
            </Card>
          </FadeIn>

          {/* User Persona Frustrations */}
          <FadeIn className="h-full">
            <Card className="h-full">
              <CardContent className="pt-4 text-slate-400">
                <div className="flex flex-col space-y-4">
                  <Badge variant="darker" className="w-fit text-slate-400">
                    Frustrations
                  </Badge>
                  <ul className="list-disc space-y-2 *:ml-4">
                    {userPersona.frustrations.map((item) => (
                      <li key={item}>
                        <CardDescription>{item}</CardDescription>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </FadeInStagger>
  );
}
