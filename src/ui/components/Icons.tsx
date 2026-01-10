import React from 'react';

type IconProps = { className?: string; title?: string };

function Base({ className, title, children }: React.PropsWithChildren<IconProps>) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

export function IconSpark({ className, title = 'AI' }: IconProps) {
  return (
    <Base className={className} title={title}>
      <path d="M12 2l1.3 4.2L18 8l-4.7 1.8L12 14l-1.3-4.2L6 8l4.7-1.8L12 2z" />
      <path d="M4 14l.8 2.5L8 18l-3.2 1.5L4 22l-.8-2.5L0 18l3.2-1.5L4 14z" />
    </Base>
  );
}

export function IconShield({ className, title = 'Security' }: IconProps) {
  return (
    <Base className={className} title={title}>
      <path d="M12 2l8 4v6c0 6-4 10-8 10S4 18 4 12V6l8-4z" />
      <path d="M9 12l2 2 4-5" />
    </Base>
  );
}

export function IconMedal({ className, title = 'Quality' }: IconProps) {
  return (
    <Base className={className} title={title}>
      <circle cx="12" cy="10" r="4" />
      <path d="M8 14l-2 8 6-3 6 3-2-8" />
    </Base>
  );
}

export function IconUsers({ className, title = 'Team' }: IconProps) {
  return (
    <Base className={className} title={title}>
      <path d="M16 11a4 4 0 1 0-8 0" />
      <path d="M3 22c1.5-4 5-6 9-6s7.5 2 9 6" />
      <path d="M12 12v0" />
    </Base>
  );
}

export function IconChevron({ className, title = 'Chevron' }: IconProps) {
  return (
    <Base className={className} title={title}>
      <path d="M9 18l6-6-6-6" />
    </Base>
  );
}

export function IconExternal({ className, title = 'External link' }: IconProps) {
  return (
    <Base className={className} title={title}>
      <path d="M14 3h7v7" />
      <path d="M10 14L21 3" />
      <path d="M21 14v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
    </Base>
  );
}
