export function HoverUnderline({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`hover-underline ${className}`}>
      {children}
      <style jsx>{`
        .hover-underline {
          position: relative;
        }
        .hover-underline::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 2px;
          background-color: currentColor;
          transform: scaleX(0);
          transform-origin: 0 50%;
          transition: transform 0.2s;
        }
        .hover-underline:hover::after {
          transform: scaleX(1);
        }
      `}</style>
    </span>
  );
}
