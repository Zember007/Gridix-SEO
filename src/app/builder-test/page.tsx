// app/builder-test/page.tsx
'use client';

import '@/lib/builder';
import '@/builder/components';
import { BuilderComponent } from '@builder.io/react';

export default function BuilderTestPage() {
  return <BuilderComponent model="page" />;
}
