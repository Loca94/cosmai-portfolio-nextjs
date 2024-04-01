import { Slider } from '@/components/ui/Slider';
import { Calendar } from '@/components/ui/Calendar';

export default function HeroComponents({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Slider defaultValue={[50]} max={100} step={0.1} />;
      <div className="grid grid-cols-2">
        <Calendar className="text-slate-200" />
      </div>
    </div>
  );
}
