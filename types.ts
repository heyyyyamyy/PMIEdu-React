export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  count: string;
  label: string;
}

export enum ButtonVariant {
  PRIMARY = 'PRIMARY',
  OUTLINE = 'OUTLINE',
  GHOST = 'GHOST'
}