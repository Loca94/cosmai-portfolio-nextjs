export default function CaseStudyLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-orange-accent hover:underline"
    >
      {children}
    </a>
  );
}
