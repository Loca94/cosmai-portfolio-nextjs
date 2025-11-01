export default function BoldText({ children }: { children: React.ReactNode }) {
  return <strong className="font-medium text-slate-200">{children}</strong>;
}
