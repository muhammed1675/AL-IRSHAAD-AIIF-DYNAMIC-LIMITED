import type { LucideIcon } from 'lucide-react';

export type ServiceItem = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: LucideIcon;
};

export type GalleryItem = {
  title: string;
  category: string;
  image: string;
  imageAlt: string;
};

export type ProcessStep = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type FieldType = 'text' | 'tel' | 'email' | 'select' | 'date' | 'number' | 'textarea' | 'checkboxes';

export type FormField = {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  placeholder?: string;
  options?: string[];
  full?: boolean;
  autoComplete?: string;
};

export type FormValues = Record<string, string | string[]>;