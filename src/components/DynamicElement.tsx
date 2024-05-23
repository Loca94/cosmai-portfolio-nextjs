export function DynamicElement({ tag = 'div', children, ...props }: { tag?: string, children: React.ReactNode } & any}) {
  return React.createElement(tag, props, children);
};
