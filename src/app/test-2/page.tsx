'use client';

import Container from '@/components/layout/Container';
import { mobileGridLayout, desktopGridLayout } from './gridLayouts';
import DraggableGrid from './DraggableGrid';

export default function Test2Page() {
  return (
    <Container>
      <DraggableGrid layout={desktopGridLayout} className="hidden lg:block" />
      <DraggableGrid layout={mobileGridLayout} className="lg:hidden" />
    </Container>
  );
}
