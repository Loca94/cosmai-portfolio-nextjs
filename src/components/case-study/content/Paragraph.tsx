export default function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-sm leading-relaxed text-slate-400 sm:text-base">
      {children}
    </p>
  );
}
