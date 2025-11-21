function VerticalLine() {
  return (
    <svg width="1" height="100%" className="text-subtle-stroke">
      <line
        x1="0.5"
        y1="0"
        x2="0.5"
        y2="100%"
        stroke="currentColor"
        strokeDasharray="4 6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HorizontalLine() {
  return (
    <svg width="100%" height="1" className="text-subtle-stroke">
      <line
        x1="0"
        y1="0.5"
        x2="100%"
        y2="0.5"
        stroke="currentColor"
        strokeDasharray="4 6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function VerticalGridLines({ count }: { count: number }) {
  return (
    <div className="absolute inset-x-[0.5px] inset-y-0 flex justify-evenly">
      {Array.from({ length: count }).map((_, i) => (
        <VerticalLine key={i} />
      ))}
    </div>
  );
}

function HorizontalGridLines({ count }: { count: number }) {
  return (
    <div className="absolute inset-x-0 inset-y-[0.5px] flex flex-col justify-evenly">
      {Array.from({ length: count }).map((_, i) => (
        <HorizontalLine key={i} />
      ))}
    </div>
  );
}

export { VerticalGridLines, HorizontalGridLines };
