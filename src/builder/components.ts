

// builder/components.ts
import { Builder } from '@builder.io/react';
import { HeroSection } from '@/components/landing/hero-section';

Builder.registerComponent(HeroSection, {
  name: 'HeroSection',
  inputs: [
    { name: 'title', type: 'string' },
    { name: 'description', type: 'string' },
  ],
});