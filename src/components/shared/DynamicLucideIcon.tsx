// src/components/shared/DynamicLucideIcon.tsx
'use client';

import type { LucideProps } from 'lucide-react';
import * as icons from 'lucide-react';

// Create a map of icon names to components
// Ensure all keys are valid Lucide icon names as exported
const iconMap: Record<string, icons.LucideIcon> = {
  Cpu: icons.Cpu,
  Lightbulb: icons.Lightbulb,
  Rocket: icons.Rocket,
  Laptop: icons.Laptop,
  Factory: icons.Factory,
  GitMerge: icons.GitMerge,
  Cloud: icons.Cloud,
  Layers: icons.Layers,
  Settings: icons.Settings,
  Shield: icons.Shield,
  BarChart: icons.BarChart,
  Users: icons.Users,
  Zap: icons.Zap,
  Palette: icons.Palette,
  Code: icons.Code,
  Combine: icons.Combine,
  Briefcase: icons.Briefcase,
  Database: icons.Database,
  HelpCircle: icons.HelpCircle, // Default/fallback icon
  // Add any other icons you might use by their exact export name from lucide-react
};

export type IconName = keyof typeof iconMap;

interface DynamicLucideIconProps extends LucideProps {
  iconName: IconName | string; // Allow string for flexibility, but IconName for type safety
}

const DynamicLucideIcon = ({ iconName, ...props }: DynamicLucideIconProps) => {
  const IconComponent = iconMap[iconName as IconName];

  if (!IconComponent) {
    console.warn(`Icon "${iconName}" not found in iconMap. Falling back to HelpCircle.`);
    return <icons.HelpCircle {...props} />;
  }
  return <IconComponent {...props} />;
};

export default DynamicLucideIcon;
